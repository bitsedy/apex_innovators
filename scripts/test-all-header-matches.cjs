const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pages = [
  'prototype/admin/dashboard.html',
  'prototype/staff/dashboard.html',
  'prototype/parent/dashboard.html',
  'prototype/gate/scan.html',
  'prototype/sysadmin/dashboard.html'
];

pages.forEach(p => {
  const content = fs.readFileSync(path.join(root, p), 'utf8');
  const header = content.match(/<header[\s\S]*?<\/header>/i)[0];
  
  // Find all divs matching the concept
  console.log(`\n--- ${p} ---`);
  // Look at header direct children
  const directChildren = [...header.matchAll(/<header[^>]*>([\s\S]*?)<\/header>/i)][0][1];
  console.log('Header direct length:', directChildren.length);
});
