const fs = require('fs');
const path = require('path');
const portals = ['admin', 'staff', 'parent', 'gate', 'sysadmin'];

let mobilePages = [];

portals.forEach(p => {
  const dir = path.join(__dirname, '..', 'prototype', p);
  const files = fs.readdirSync(dir).filter(f => f.startsWith('mobile-') && f.endsWith('.html'));
  files.forEach(f => {
    const c = fs.readFileSync(path.join(dir, f), 'utf8');
    const hasToggle = c.includes('data-drawer-toggle') || c.includes('portal-drawer-toggle');
    const hasAside = c.includes('<aside');
    mobilePages.push({ path: `${p}/${f}`, hasToggle, hasAside });
  });
});

console.log(`Checked ${mobilePages.length} mobile portal pages:`);
mobilePages.forEach(m => {
  console.log(`  ${m.path} -> toggle: ${m.hasToggle}, aside: ${m.hasAside}`);
});
