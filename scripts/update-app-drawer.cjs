const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, '..', 'prototype', 'carepoint-app.js');
let appJs = fs.readFileSync(appPath, 'utf8');

// Replace outside click handler
appJs = appJs.replace(
  /if \(isOverlayMode && !aside\.contains\(e\.target\) && \(!openBtn \|\| !openBtn\.contains\(e\.target\)\)\) \{/,
  "if (isOverlayMode && !aside.contains(e.target) && !e.target.closest('[data-drawer-toggle], .portal-drawer-toggle, #portal-drawer-toggle')) {"
);

// Remove remaining openBtn lines
appJs = appJs.replace(/\s*let openBtn = null;/g, '');
appJs = appJs.replace(/\s*if \(openBtn\) openBtn\.classList\.add\("hidden"\);/g, '');
appJs = appJs.replace(/\s*if \(openBtn\) openBtn\.classList\.remove\("hidden"\);/g, '');

fs.writeFileSync(appPath, appJs, 'utf8');
console.log('Updated carepoint-app.js successfully');
