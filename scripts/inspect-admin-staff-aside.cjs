const fs = require('fs');
const path = require('path');

['admin/dashboard.html', 'staff/dashboard.html'].forEach(f => {
  const c = fs.readFileSync(path.join(__dirname, '..', 'prototype', f), 'utf8');
  const asideMatch = c.match(/<aside[\s\S]*?<\/aside>/i);
  if (asideMatch) {
    const lines = asideMatch[0].split('\n').slice(0, 30).join('\n');
    console.log(`=== ${f} ASIDE TOP ===`);
    console.log(lines);
  }
});
