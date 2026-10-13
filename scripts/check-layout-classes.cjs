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
  const filePath = path.join(__dirname, '..', 'prototype', f);
  const c = fs.readFileSync(filePath, 'utf8');
  console.log('=== ' + f + ' ===');
  const asideMatch = c.match(/<aside[^>]*class="([^"]*)"/i);
  const headerMatch = c.match(/<header[^>]*class="([^"]*)"/i);
  const pl72Match = c.match(/<div[^>]*class="([^"]*pl-72[^"]*)"/i);
  console.log('aside class: ' + (asideMatch ? asideMatch[1] : 'none'));
  console.log('header class: ' + (headerMatch ? headerMatch[1] : 'none'));
  console.log('pl-72 class: ' + (pl72Match ? pl72Match[1] : 'none'));
});
