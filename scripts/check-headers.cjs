const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const sampleFiles = [
  'admin/dashboard.html',
  'staff/dashboard.html',
  'parent/dashboard.html',
  'gate/scan.html',
  'sysadmin/dashboard.html'
];

sampleFiles.forEach(rel => {
  const file = path.join(root, 'prototype', rel);
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const headerMatch = content.match(/<header[\s\S]*?<\/header>/i);
  console.log(`\n=================== [${rel}] ===================`);
  if (headerMatch) {
    console.log(headerMatch[0]);
  } else {
    console.log('NO <header> FOUND');
  }
});
