const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', 'prototype');
const portals = ['admin', 'staff', 'parent', 'gate', 'sysadmin'];

let totalChecked = 0;
let errors = [];

function checkFile(portal, file) {
  const filePath = path.join(root, portal, file);
  if (!fs.existsSync(filePath)) return;
  totalChecked++;
  const html = fs.readFileSync(filePath, 'utf8');
  
  // Extract <header>
  const headerMatch = html.match(/<header[\s\S]*?<\/header>/i);
  if (!headerMatch) {
    if (!file.includes('login') && !file.includes('mobile')) {
      errors.push(`[${portal}/${file}] No <header> tag found`);
    }
    return;
  }
  
  const headerHtml = headerMatch[0];
  
  // Check if header has multiple rows (e.g. status bar / ticker)
  const isMultiRow = (headerHtml.match(/<div[^>]*class="[^"]*h-(?:8|10)[^"]*"/g) || []).length > 0;
  
  // Check if drawer toggle button exists in header
  const hasDrawerToggle = /data-drawer-toggle/i.test(headerHtml);
  if (!hasDrawerToggle && !file.includes('login') && !file.includes('mobile')) {
    errors.push(`[${portal}/${file}] Missing data-drawer-toggle in header`);
  }
}

portals.forEach(portal => {
  const dir = path.join(root, portal);
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
  files.forEach(f => checkFile(portal, f));
});

console.log(`Checked ${totalChecked} portal pages.`);
if (errors.length === 0) {
  console.log('ALL HEADERS VALID & CONSISTENT!');
} else {
  console.log('Found issues:');
  errors.forEach(e => console.log(' - ' + e));
}
