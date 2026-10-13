const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const sampleFiles = [
  'prototype/admin/dashboard.html',
  'prototype/staff/dashboard.html',
  'prototype/parent/dashboard.html',
  'prototype/gate/scan.html',
  'prototype/sysadmin/dashboard.html'
];

sampleFiles.forEach(f => {
  const p = path.join(root, f);
  if (!fs.existsSync(p)) return;
  const content = fs.readFileSync(p, 'utf8');
  const hMatch = content.match(/<header[\s\S]*?<\/header>/i);
  console.log(`\n================== [${f}] ==================`);
  if (hMatch) {
    console.log(hMatch[0].substring(0, 700) + '...');
  } else {
    console.log('NO HEADER MATCH');
  }
});
