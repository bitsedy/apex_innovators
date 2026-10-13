const fs = require('fs');
const path = require('path');
const portals = ['admin', 'staff', 'parent', 'gate', 'sysadmin'];

let missingPl72 = [];
let total = 0;

portals.forEach(p => {
  const dir = path.join(__dirname, '..', 'prototype', p);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && !f.includes('login') && !f.includes('mobile'));
  files.forEach(f => {
    total++;
    const c = fs.readFileSync(path.join(dir, f), 'utf8');
    const plMatch = c.match(/class="[^"]*pl-72[^"]*"/i);
    if (!plMatch) {
      missingPl72.push(`${p}/${f}`);
    }
  });
});

console.log(`Checked ${total} desktop portal pages for pl-72.`);
if (missingPl72.length === 0) {
  console.log('All desktop portal pages have pl-72 wrapper!');
} else {
  console.log('Missing pl-72:');
  missingPl72.forEach(m => console.log('  ' + m));
}
