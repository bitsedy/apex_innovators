const fs = require('fs');
const path = require('path');
const http = require('http');

console.log('====================================================');
console.log('   DEEP INVESTIGATION OF PUBLIC SITE PAGES');
console.log('====================================================\n');

const homePath = 'prototype/public/home.html';
const home = fs.readFileSync(homePath, 'utf8');

// 1. Inspect all images in home.html
console.log('--- 1. IMAGE ATTRIBUTE & ACCESSIBILITY AUDIT ---');
const imgRegex = /<img\b([^>]*)>/gi;
let match;
let imgIndex = 0;
while ((match = imgRegex.exec(home)) !== null) {
  imgIndex++;
  const attrs = match[1];
  const src = (attrs.match(/src=["']([^"']+)["']/i) || [])[1] || 'MISSING';
  const alt = (attrs.match(/\balt=["']([^"']*)["']/i) || [])[1];
  const dataAlt = (attrs.match(/\bdata-alt=["']([^"']*)["']/i) || [])[1];

  console.log(`[Image ${imgIndex}]`);
  console.log(`  src: ${src.slice(0, 70)}...`);
  if (alt === undefined) {
    console.log(`  [BUG] alt is completely missing! (data-alt: ${dataAlt ? dataAlt.slice(0, 50) + '...' : 'none'})`);
  } else if (alt === '') {
    console.log(`  [WARN] alt is empty!`);
  } else {
    console.log(`  alt: "${alt}"`);
  }
}

// 2. Inspect Modals and their event wiring in home.html
console.log('\n--- 2. MODAL CONTROLS & EVENT WIRING ---');
console.log('Has #status-checker-modal:', home.includes('id="status-checker-modal"'));
console.log('Has #tuition-modal:', home.includes('id="tuition-modal"'));

// Check backdrop click handlers
console.log('Status modal has backdrop click-to-close:', /id=["']status-checker-modal["'][^>]*onclick/i.test(home));
console.log('Tuition modal has backdrop click-to-close:', /id=["']tuition-modal["'][^>]*onclick/i.test(home));

// Check Escape key handlers
console.log('Has Escape key listener in home.html scripts:', /e\.key\s*===\s*['"]Escape['"]/i.test(home));

// Check Enter key in status-ref-input
const statusInputMatch = home.match(/<input[^>]+id=["']status-ref-input["'][^>]*>/i);
console.log('Status input tag:', statusInputMatch ? statusInputMatch[0] : 'NOT FOUND');
console.log('Status input has onkeydown / onkeypress / form wrapper:', /onkey|form/i.test(statusInputMatch ? statusInputMatch[0] : ''));

// 3. Inspect Navigation links vs Targets in home.html
console.log('\n--- 3. NAV LINKS VS TARGET SECTIONS ---');
const desktopNavMatch = home.match(/<nav id="desktop-nav"[^>]*>([\s\S]*?)<\/nav>/i);
if (desktopNavMatch) {
  const navContent = desktopNavMatch[1];
  const navLinks = [...navContent.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*data-section=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi)];
  navLinks.forEach(nl => {
    const href = nl[1];
    const section = nl[2];
    const text = nl[3].replace(/<[^>]+>/g, '').trim();
    const targetExists = home.includes(`id="${section}"`);
    console.log(`Nav link "${text}": href="${href}", data-section="${section}", targetExists=${targetExists}`);
  });
}

// 4. Check Mobile Menu Toggle & Accessibility
console.log('\n--- 4. MOBILE MENU ACCESSIBILITY & DRAWER ---');
const mobileBtnMatch = home.match(/<button id="mobile-menu-btn"[^>]*>([\s\S]*?)<\/button>/i);
if (mobileBtnMatch) {
  console.log('Mobile menu button:', mobileBtnMatch[0]);
  console.log('Has aria-expanded:', mobileBtnMatch[0].includes('aria-expanded'));
}

// 5. Check Section ordering vs carepoint-app.js
console.log('\n--- 5. SECTION ORDER IN DOM VS SCROLLSPY ---');
const sectionMatches = [...home.matchAll(/<(?:section|footer)\b[^>]*id=["'](home|academics|admissions|news|gallery|about|contact)["']/gi)];
console.log('DOM Section Order:', sectionMatches.map(m => m[1]));

// 6. Check external links and status modal in apply.html
console.log('\n--- 6. APPLY.HTML & STATUS TRACKER PARITY ---');
const applyPath = 'prototype/public/apply.html';
if (fs.existsSync(applyPath)) {
  const apply = fs.readFileSync(applyPath, 'utf8');
  console.log('apply.html has #status target:', apply.includes('id="status"'));
  console.log('apply.html has #status-checker-modal:', apply.includes('id="status-checker-modal"'));
  console.log('apply.html has openStatusModal:', apply.includes('openStatusModal'));
  const statusLinksInApply = [...apply.matchAll(/href=["']([^"']*status[^"']*)["']/gi)];
  console.log('Links referencing status in apply.html:', statusLinksInApply.map(m => m[1]));
}

// 7. Check mobile-home.html links
console.log('\n--- 7. MOBILE-HOME.HTML AUDIT ---');
const mobHomePath = 'prototype/public/mobile-home.html';
if (fs.existsSync(mobHomePath)) {
  const mobHome = fs.readFileSync(mobHomePath, 'utf8');
  console.log('mobile-home.html has #news target:', mobHome.includes('id="news"'));
  console.log('mobile-home.html has #status target or modal:', mobHome.includes('status-checker-modal') || mobHome.includes('id="status"'));
}
