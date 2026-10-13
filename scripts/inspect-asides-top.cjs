const fs = require('fs');
const path = require('path');

const sampleFiles = [
  'admin/dashboard.html',
  'staff/dashboard.html',
  'parent/dashboard.html',
  'gate/scan.html',
  'sysadmin/dashboard.html'
];

sampleFiles.forEach(f => {
  const c = fs.readFileSync(path.join(__dirname, '..', 'prototype', f), 'utf8');
  const asideMatch = c.match(/<aside[\s\S]*?<\/aside>/i);
  if (asideMatch) {
    const lines = asideMatch[0].split('\n').slice(0, 30).join('\n');
    console.log(`=== ${f} ASIDE TOP ===`);
    console.log(lines);
  }
});
