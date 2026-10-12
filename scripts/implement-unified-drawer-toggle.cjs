const fs = require('fs');

console.log('=== IMPLEMENTING UNIFIED DRAWER TOGGLE ARCHITECTURE ===\n');

// 1. Update prototype/carepoint-hud.css
let hudCss = fs.readFileSync('prototype/carepoint-hud.css', 'utf8');

// Replace .carepoint-drawer-open-btn block with total suppression
const openBtnCssTarget = `/* Floating Docked Drawer Open Trigger Tab ('>' Icon) */
.carepoint-drawer-open-btn {`;

if (hudCss.includes(openBtnCssTarget)) {
  // Find where the block ends or replace the entire open-btn rule
  hudCss = hudCss.replace(
    /\/\* Floating Docked Drawer Open Trigger Tab \('>'\sIcon\) \*\/[\s\S]*?\.carepoint-drawer-open-label \{[\s\S]*?\}/,
    `/* Floating Open Tab completely eliminated per user directive; header 3-bars hamburger is the sole controller */
.carepoint-drawer-open-btn,
#carepoint-drawer-open-btn {
  display: none !important;
  opacity: 0 !important;
  pointer-events: none !important;
  visibility: hidden !important;
  position: absolute !important;
  left: -9999px !important;
}`
  );
  console.log('[CSS] Suppressed .carepoint-drawer-open-btn completely.');
}

// Add the single controller rule in @media (min-width: 1025px) if not present
const singleControllerCss = `  /* Single Canonical Controller: When drawer is open on desktop, hide duplicate 3-bars in header */
  body:not(.carepoint-has-overlay-drawer):not(.carepoint-drawer-collapsed) header [data-drawer-toggle],
  body:not(.carepoint-has-overlay-drawer):not(.carepoint-drawer-collapsed) header .portal-drawer-toggle,
  body:not(.carepoint-has-overlay-drawer):not(.carepoint-drawer-collapsed) header #portal-drawer-toggle {
    display: none !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  /* When drawer is collapsed on desktop, show the single 3-bars button in header */
  body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed header [data-drawer-toggle],
  body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed header .portal-drawer-toggle,
  body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed header #portal-drawer-toggle {
    display: inline-flex !important;
    opacity: 1 !important;
    pointer-events: auto !important;
  }`;

if (!hudCss.includes('Single Canonical Controller')) {
  // Insert before /* On desktop docked layouts, completely neutralize the backdrop and blur filter */
  const insertMarker = '/* On desktop docked layouts, completely neutralize the backdrop and blur filter */';
  if (hudCss.includes(insertMarker)) {
    hudCss = hudCss.replace(insertMarker, `${singleControllerCss}\n\n  ${insertMarker}`);
    console.log('[CSS] Added Single Canonical Controller desktop toggle rules.');
  }
}

fs.writeFileSync('prototype/carepoint-hud.css', hudCss, 'utf8');

// 2. Update prototype/carepoint-app.js
let rawAppJs = fs.readFileSync('prototype/carepoint-app.js', 'utf8');
const isCrlf = rawAppJs.includes('\r\n');
let appJs = rawAppJs.replace(/\r\n/g, '\n');

// Eliminate creation of openBtn in carepoint-app.js
const openBtnCreation = `  // 2. Ensure floating '>' Open Tab Button exists
  let openBtn = document.getElementById('carepoint-drawer-open-btn');
  if (!openBtn) {
    openBtn = document.createElement('button');
    openBtn.id = 'carepoint-drawer-open-btn';
    openBtn.className = 'carepoint-drawer-open-btn';
    openBtn.type = 'button';
    openBtn.setAttribute('aria-label', 'Open Navigation Tabs Drawer');
    openBtn.setAttribute('title', 'Open Navigation Drawer');
    openBtn.innerHTML = \`
      <span class="material-symbols-outlined carepoint-drawer-open-icon">chevron_right</span>
      <span class="carepoint-drawer-open-label">Tabs</span>
    \`;
    document.body.appendChild(openBtn);
  }`;

const openBtnReplacement = `  // 2. Remove any obsolete floating open tab button (3-bars hamburger is the single canonical controller)
  const existingOpenBtnNode = document.getElementById('carepoint-drawer-open-btn');
  if (existingOpenBtnNode) existingOpenBtnNode.remove();
  let openBtn = null;`;

if (appJs.includes(openBtnCreation)) {
  appJs = appJs.replace(openBtnCreation, openBtnReplacement);
  console.log('[JS] Removed openBtn creation logic from carepoint-app.js.');
}

// Clean up references to openBtn in openDrawer, closeDrawer, outside clicks, resize
appJs = appJs.replace(/openBtn\.classList\.add\('hidden'\);/g, 'if (openBtn) openBtn.classList.add("hidden");');
appJs = appJs.replace(/openBtn\.classList\.remove\('hidden'\);/g, 'if (openBtn) openBtn.classList.remove("hidden");');
appJs = appJs.replace(/!openBtn\.contains\(e\.target\)/g, '(!openBtn || !openBtn.contains(e.target))');
appJs = appJs.replace(/openBtn\.addEventListener\('click'[\s\S]*?openBtn\.onclick =[\s\S]*?\};\n/g, '');

// In openDrawer and closeDrawer, update aria-expanded on all toggles
if (!appJs.includes("btn.setAttribute('aria-expanded', 'true')")) {
  appJs = appJs.replace(
    "sessionStorage.setItem('carepoint_drawer_collapsed', 'false');",
    `sessionStorage.setItem('carepoint_drawer_collapsed', 'false');
    document.querySelectorAll('[data-drawer-toggle], .portal-drawer-toggle').forEach(btn => {
      btn.setAttribute('aria-expanded', 'true');
    });`
  );
}

if (!appJs.includes("btn.setAttribute('aria-expanded', 'false')")) {
  appJs = appJs.replace(
    "sessionStorage.setItem('carepoint_drawer_collapsed', 'true');",
    `sessionStorage.setItem('carepoint_drawer_collapsed', 'true');
    document.querySelectorAll('[data-drawer-toggle], .portal-drawer-toggle').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });`
  );
}

fs.writeFileSync('prototype/carepoint-app.js', isCrlf ? appJs.replace(/\n/g, '\r\n') : appJs, 'utf8');
console.log('[JS] Updated prototype/carepoint-app.js with clean single-controller logic.');

// 3. Update Staff Portal desktop pages with standard [data-drawer-toggle] in header
const staffDesktopPages = [
  'prototype/staff/dashboard.html',
  'prototype/staff/attendance.html',
  'prototype/staff/gradebook.html',
  'prototype/staff/health.html',
  'prototype/staff/approvals.html',
  'prototype/staff/messages.html',
  'prototype/staff/timetable.html'
];

const staffToggleBtnHtml = `<button type="button" data-drawer-toggle="" class="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors cursor-pointer mr-1 shrink-0" title="Toggle Navigation Sidebar" aria-label="Toggle Navigation Sidebar"><span class="material-symbols-outlined text-[22px]">menu</span></button>`;

staffDesktopPages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('data-drawer-toggle')) {
    const targetHeaderDiv = '<header class="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl z-40 shadow-[0_1px_8px_rgba(0,0,0,0.04)] px-space-lg flex items-center justify-between"><div class="flex items-center gap-space-md">';
    const replacementHeaderDiv = `${targetHeaderDiv}${staffToggleBtnHtml}`;

    if (content.includes(targetHeaderDiv)) {
      content = content.replace(targetHeaderDiv, replacementHeaderDiv);
      fs.writeFileSync(file, content, 'utf8');
      console.log(`[HTML] Added 3-bars drawer toggle to ${file}`);
    } else {
      // Check alternative header pattern (e.g. border-b)
      const altHeaderDiv = '<header class="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl z-40 shadow-[0_1px_8px_rgba(0,0,0,0.04)] px-space-lg flex items-center justify-between border-b border-outline-variant/20">';
      if (content.includes(altHeaderDiv)) {
        content = content.replace(altHeaderDiv, `${altHeaderDiv}\n    <div class="flex items-center gap-space-md">${staffToggleBtnHtml}`);
        fs.writeFileSync(file, content, 'utf8');
        console.log(`[HTML] Added 3-bars drawer toggle to ${file} (alt pattern)`);
      } else {
        console.warn(`Could not match header in ${file}`);
      }
    }
  } else {
    console.log(`[HTML] ${file} already has data-drawer-toggle.`);
  }
});

console.log('\nUnified Drawer Toggle Controller successfully implemented across all portals!');
