const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'prototype', 'carepoint-hud.css');
let css = fs.readFileSync(cssPath, 'utf8');

const search = /\/\* Floating Docked Drawer Open Trigger Tab \('>'\s*Icon\) \*\/[\s\S]*?\.carepoint-drawer-open-label\s*\{[^}]*\}/;
if (search.test(css)) {
  css = css.replace(search, `/* Decommissioned floating tabs pill - Single Canonical Controller pattern leaves only 3-bars hamburger in header */
.carepoint-drawer-open-btn {
  display: none !important;
  opacity: 0 !important;
  pointer-events: none !important;
  visibility: hidden !important;
}
.carepoint-drawer-open-icon,
.carepoint-drawer-open-label {
  display: none !important;
}`);
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Successfully replaced floating drawer open button styles in carepoint-hud.css');
} else {
  console.error('Pattern not found');
  process.exit(1);
}
