const fs = require('fs');
const path = require('path');
const portals = ['admin', 'staff', 'parent', 'gate', 'sysadmin'];

let missingLeft72 = [];
let total = 0;

portals.forEach(p => {
  const dir = path.join(__dirname, '..', 'prototype', p);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && !f.includes('login') && !f.includes('mobile'));
  files.forEach(f => {
    total++;
    const c = fs.readFileSync(path.join(dir, f), 'utf8');
    const hMatch = c.match(/<header[^>]*class="([^"]*)"/i);
    if (hMatch) {
      const cls = hMatch[1];
      if (!cls.includes('left-72')) {
        missingLeft72.push(`${p}/${f} -> ${cls}`);
      }
    }
  });
});

console.log(`Checked ${total} desktop portal pages.`);
if (missingLeft72.length === 0) {
  console.log('All desktop portal headers have left-72!');
} else {
  console.log('Missing left-72 in header:');
  missingLeft72.forEach(m => console.log('  ' + m));
}
