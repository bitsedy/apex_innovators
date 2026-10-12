const fs = require('fs');

const content = fs.readFileSync('prototype/public/mobile-home.html', 'utf8');
const ids = [...content.matchAll(/id=["']([^"']+)["']/g)].map(m => m[1]);
console.log('mobile-home.html IDs:', ids);
const links = [...content.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);
console.log('mobile-home.html Hrefs:', links);

const brokenAnchors = links.filter(l => l.startsWith('#') && l !== '#' && !ids.includes(l.slice(1)));
console.log('Broken anchors in mobile-home.html:', brokenAnchors);
