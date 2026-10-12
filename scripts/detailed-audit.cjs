const fs = require('fs');
const path = require('path');

console.log('=== DETAILED CODE & DOM AUDIT OF PUBLIC SITE ===');

const homeContent = fs.readFileSync('prototype/public/home.html', 'utf8');

// 1. Check all elements with ID
const ids = new Set();
const duplicateIds = [];
const idMatches = [...homeContent.matchAll(/\bid=["']([^"']+)["']/g)];
idMatches.forEach(m => {
  const id = m[1];
  if (ids.has(id)) {
    duplicateIds.push(id);
  } else {
    ids.add(id);
  }
});
console.log(`Total unique IDs in home.html: ${ids.size}`);
if (duplicateIds.length > 0) {
  console.log('[!] Duplicate IDs found:', duplicateIds);
} else {
  console.log('[OK] No duplicate IDs found in home.html');
}

// 2. Check all anchors with href
const hrefs = [...homeContent.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)];
console.log(`Total links in home.html: ${hrefs.length}`);
const brokenAnchors = [];
hrefs.forEach(m => {
  const href = m[1];
  if (href.startsWith('#')) {
    const target = href.slice(1);
    if (target && !ids.has(target)) {
      brokenAnchors.push(href);
    }
  }
});
if (brokenAnchors.length > 0) {
  console.log('[!] Broken anchor links in home.html:', brokenAnchors);
} else {
  console.log('[OK] All internal anchor links target existing elements in home.html');
}

// 3. Check all buttons for onclick / type / aria-label
const buttons = [...homeContent.matchAll(/<button\b([^>]*)>(.*?)<\/button>/gis)];
console.log(`Total buttons in home.html: ${buttons.length}`);
buttons.forEach((b, i) => {
  const attrs = b[1];
  const body = b[2].replace(/<[^>]+>/g, '').trim();
  const hasOnclick = /onclick=["']([^"']+)["']/i.test(attrs);
  const hasType = /type=["']([^"']+)["']/i.test(attrs);
  const hasAria = /aria-label=["']([^"']+)["']/i.test(attrs) || /title=["']([^"']+)["']/i.test(attrs);
  
  if (!body && !hasAria) {
    console.log(`[!] Button #${i} lacks readable text and aria-label:`, attrs.slice(0, 80));
  }
  if (!hasOnclick && !/submit/i.test(attrs)) {
    // Check if it's inside a form
    console.log(`[?] Button #${i} has no onclick or submit type:`, attrs.slice(0, 80));
  }
});

// 4. Check all inputs in home.html
const inputs = [...homeContent.matchAll(/<input\b([^>]*)>/gi)];
console.log(`Total inputs in home.html: ${inputs.length}`);
inputs.forEach((inp, i) => {
  const attrs = inp[1];
  const hasId = attrs.match(/id=["']([^"']+)["']/i);
  const hasType = attrs.match(/type=["']([^"']+)["']/i);
  const hasPlaceholder = attrs.match(/placeholder=["']([^"']+)["']/i);
  console.log(`  Input #${i}: type=${hasType ? hasType[1] : 'text'}, id=${hasId ? hasId[1] : 'NONE'}, placeholder=${hasPlaceholder ? hasPlaceholder[1] : 'NONE'}`);
});

// 5. Check all scripts inside home.html
const inlineScripts = [...homeContent.matchAll(/<script\b(?![^>]*src=)[^>]*>(.*?)<\/script>/gis)];
console.log(`Total inline script blocks in home.html: ${inlineScripts.length}`);
inlineScripts.forEach((s, idx) => {
  const code = s[1];
  try {
    // Syntax check by wrapping in Function
    new Function(code);
    console.log(`  [OK] Inline script #${idx} syntax valid (${code.length} chars)`);
  } catch (err) {
    console.log(`  [!] Inline script #${idx} syntax error:`, err.message);
  }
});

// 6. Check images and their alt texts
const images = [...homeContent.matchAll(/<img\b([^>]*)>/gi)];
console.log(`Total images in home.html: ${images.length}`);
images.forEach((img, i) => {
  const attrs = img[1];
  const src = (attrs.match(/src=["']([^"']+)["']/i) || [])[1];
  const alt = (attrs.match(/alt=["']([^"']*)["']/i) || [])[1];
  const dataAlt = (attrs.match(/data-alt=["']([^"']*)["']/i) || [])[1];
  if (!alt && !dataAlt) {
    console.log(`  [!] Image #${i} missing alt & data-alt:`, src ? src.slice(0, 60) : 'NO SRC');
  } else if (!alt && dataAlt) {
    console.log(`  [i] Image #${i} has data-alt but missing standard alt:`, src ? src.slice(0, 60) : 'NO SRC');
  }
});
