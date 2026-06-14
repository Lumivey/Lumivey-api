// api/scraper.js — Lumivey Website Scraper v0.1
// Vercel serverless function (Node.js — CommonJS)
// Geen externe dependencies. Uitsluitend Node.js built-ins + native fetch.
//
// Taak: URL ophalen en omzetten naar bruikbare website-inhoud voor Historische Spiegel.
// Geen AI. Geen analyse. Alleen bewijs verzamelen.
//
// Input:  POST { "url": "https://example.com" }
// Output: JSON-object met url, title, meta, headings, tekst, afbeeldingen, links

'use strict';

// ── Configuratie ──────────────────────────────────────────────────────────────

const FETCH_TIMEOUT_MS    = 8000;   // Vercel functions hebben een beperkte looptijd
const MAX_TEXT_LENGTH     = 5000;   // Zichtbare tekst afkappen voor context-window
const MAX_IMAGES          = 20;     // Maximaal aantal afbeeldingen in output
const MAX_LINKS           = 30;     // Maximaal aantal links in output
const ALLOWED_PROTOCOLS   = ['http:', 'https:'];

// ── HTML-parsers (regex-gebaseerd, geen library) ──────────────────────────────

/**
 * Verwijdert alle HTML-tags uit een string.
 */
function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Haalt de inhoud van een specifiek meta-tag op.
 */
function getMeta(html, name) {
  // Ondersteunt zowel name= als property= (Open Graph)
  const patterns = [
    new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)["']`, 'i'),
    new RegExp(`<meta[^>]+content=["']([^"']*)[^>]+name=["']${name}["']`, 'i'),
    new RegExp(`<meta[^>]+property=["']${name}["'][^>]+content=["']([^"']*)["']`, 'i'),
    new RegExp(`<meta[^>]+content=["']([^"']*)[^>]+property=["']${name}["']`, 'i'),
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return stripTags(match[1]).trim();
  }
  return null;
}

/**
 * Haalt alle headings op (h1-h6) met hun niveau en tekst.
 */
function getHeadings(html) {
  const headings = [];
  const pattern = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
  let match;
  while ((match = pattern.exec(html)) !== null) {
    const text = stripTags(match[2]).trim();
    if (text.length > 0 && text.length < 300) {
      headings.push({ level: match[1].toLowerCase(), text });
    }
  }
  return headings;
}

/**
 * Haalt de paginatitel op.
 */
function getTitle(html) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? stripTags(match[1]).trim() : null;
}

/**
 * Haalt alle afbeeldingen op met src en alt.
 */
function getImages(html, baseUrl) {
  const images = [];
  const pattern = /<img[^>]+>/gi;
  let match;

  while ((match = pattern.exec(html)) !== null) {
    const tag = match[0];

    const srcMatch = tag.match(/src=["']([^"']+)["']/i);
    const altMatch = tag.match(/alt=["']([^"']*)["']/i);

    if (!srcMatch) continue;

    const src = resolveUrl(srcMatch[1], baseUrl);
    const alt = altMatch ? altMatch[1].trim() : '';

    // Sla data-URIs en tracking-pixels over
    if (src && !src.startsWith('data:') && !src.includes('1x1')) {
      images.push({ src, alt });
    }

    if (images.length >= MAX_IMAGES) break;
  }
  return images;
}

/**
 * Haalt alle interne en externe links op.
 */
function getLinks(html, baseUrl) {
  const links  = [];
  const seen   = new Set();
  const pattern = /<a[^>]+href=["']([^"'#][^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match;

  while ((match = pattern.exec(html)) !== null) {
    const href = resolveUrl(match[1].trim(), baseUrl);
    const text = stripTags(match[2]).trim();

    if (!href || seen.has(href)) continue;
    if (!ALLOWED_PROTOCOLS.some(p => href.startsWith(p))) continue;

    seen.add(href);
    links.push({ href, text: text.slice(0, 100) });

    if (links.length >= MAX_LINKS) break;
  }
  return links;
}

/**
 * Haalt zichtbare tekst op — zonder scripts, styles en navigatie-rommel.
 */
function getVisibleText(html) {
  // Verwijder blokken die geen leesbare inhoud bevatten
  let clean = html
    .replace(/<head[\s\S]*?<\/head>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')
    .replace(/<header[\s\S]*?<\/header>/gi, '');

  const text = stripTags(clean);

  // Afkappen op MAX_TEXT_LENGTH tekens, op woordgrens
  if (text.length > MAX_TEXT_LENGTH) {
    const cut = text.lastIndexOf(' ', MAX_TEXT_LENGTH);
    return text.slice(0, cut > 0 ? cut : MAX_TEXT_LENGTH) + '…';
  }
  return text;
}

/**
 * Zet een relatieve URL om naar een absolute URL.
 */
function resolveUrl(href, base) {
  try {
    return new URL(href, base).toString();
  } catch {
    return null;
  }
}

/**
 * Valideert en normaliseert de invoer-URL.
 */
function validateUrl(raw) {
  try {
    const url = new URL(raw);
    if (!ALLOWED_PROTOCOLS.includes(url.protocol)) {
      throw new Error(`Protocol niet toegestaan: ${url.protocol}`);
    }
    return url.toString();
  } catch (err) {
    throw new Error(`Ongeldige URL: ${err.message}`);
  }
}

// ── Handler ───────────────────────────────────────────────────────────────────

module.exports = async function handler(req, res) {

  // CORS
  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Gebruik POST.' });
  }

  // Invoer valideren
  const body = req.body || {};
  if (!body.url || typeof body.url !== 'string') {
    return res.status(400).json({ error: 'Geef een "url" mee in de request body.' });
  }

  let url;
  try {
    url = validateUrl(body.url.trim());
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }

  // Pagina ophalen
  let html;
  try {
    const controller = new AbortController();
    const timeout    = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    const response = await fetch(url, {
      signal:  controller.signal,
      headers: {
        // Identificeer ons als een echte browser zodat robots.txt-achtige
        // blokkades minder snel worden getriggerd.
        'User-Agent': 'Mozilla/5.0 (compatible; Lumivey-Scraper/0.1)',
        'Accept':     'text/html,application/xhtml+xml',
      },
    });

    clearTimeout(timeout);

    if (!response.ok) {
      return res.status(502).json({
        error:  `Website gaf foutcode terug: ${response.status}`,
        status: response.status,
      });
    }

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('html')) {
      return res.status(422).json({
        error: `URL geeft geen HTML terug (content-type: ${contentType}).`,
      });
    }

    html = await response.text();

  } catch (err) {
    if (err.name === 'AbortError') {
      return res.status(504).json({ error: 'Website reageerde niet binnen de tijdslimiet.' });
    }
    return res.status(502).json({ error: `Website kon niet worden opgehaald: ${err.message}` });
  }

  // Bewijs extraheren
  const result = {
    url,
    scraped_at:       new Date().toISOString(),
    title:            getTitle(html),
    meta_description: getMeta(html, 'description'),
    meta_keywords:    getMeta(html, 'keywords'),
    og_title:         getMeta(html, 'og:title'),
    og_description:   getMeta(html, 'og:description'),
    headings:         getHeadings(html),
    visible_text:     getVisibleText(html),
    images:           getImages(html, url),
    links:            getLinks(html, url),
  };

  console.log(
    `[Lumivey Scraper] ${url} — ` +
    `${result.headings.length} headings, ` +
    `${result.images.length} afbeeldingen, ` +
    `${result.links.length} links, ` +
    `${result.visible_text.length} tekens tekst`
  );

  return res.status(200).json(result);
};
