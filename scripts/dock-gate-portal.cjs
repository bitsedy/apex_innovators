const fs = require('fs');
const path = require('path');

function getGateDrawerHtml(activePage) {
  const isScan = activePage === 'scan';
  const isVerify = activePage === 'verify';
  const isLog = activePage === 'log';
  const isAlert = activePage === 'alert';

  return `<aside class="carepoint-drawer fixed left-0 top-0 bottom-0 h-screen max-h-screen w-72 bg-surface-container-lowest z-50 flex flex-col justify-between overflow-y-auto border-r border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
  <div class="flex flex-col min-h-0 flex-1">
    <!-- Top Header with Crest, Title, Motto, Badge, and Close Button -->
    <div class="shrink-0 p-4 border-b border-surface-container-high/70 flex flex-col gap-2 relative bg-surface-container-lowest">
      <div class="flex items-center justify-between gap-2 carepoint-brand-row">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-xs border border-outline-variant/30 p-0.5 shrink-0 overflow-hidden">
            <img src="../assets/carepoint-crest.png" alt="Carepoint Community School" class="w-full h-full object-contain rounded-lg"/>
          </div>
          <div class="min-w-0">
            <div class="font-headline-sm text-base text-primary font-bold leading-tight tracking-tight truncate">Carepoint</div>
            <div class="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold truncate">Community School</div>
          </div>
        </div>
        <button class="carepoint-drawer-close-btn" type="button" aria-label="Collapse Navigation Sidebar" title="Collapse Navigation Drawer">
          <span class="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>
      <div class="flex items-center justify-between pt-0.5">
        <span class="font-label-sm text-[10px] tracking-widest text-secondary font-bold">MIND • HEART • HANDS</span>
      </div>
      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-high rounded-full w-fit">
        <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
        <span class="font-label-sm text-[10px] text-on-surface-variant font-bold tracking-wider uppercase">CAMPUS SECURITY &amp; GATEWAY</span>
      </div>
    </div>

    <!-- Academic Session Status Strip -->
    <div class="px-space-md py-space-sm">
      <div class="px-space-md py-space-xs bg-surface-container-low rounded-lg flex items-center justify-between">
        <div class="flex items-center gap-space-xs">
          <span class="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
          <span class="font-label-sm text-label-sm text-on-surface font-medium">Session 2026/27 Term 1</span>
        </div>
        <span class="font-label-sm text-label-sm px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface-variant font-bold">Live</span>
      </div>
    </div>

    <!-- Category Label -->
    <div class="px-space-md pt-2 pb-1">
      <span class="font-label-sm text-[10px] uppercase tracking-wider text-outline px-space-sm font-bold">Security Station</span>
    </div>

    <!-- Navigation Links -->
    <nav class="flex flex-col gap-1 px-space-md overflow-y-auto flex-1 min-h-0">
      <a href="scan.html" class="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all ${isScan ? 'bg-primary-container text-on-primary font-bold shadow-sm' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium'}">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[20px]">qr_code_scanner</span>
          <span class="text-sm">Scanner Viewport</span>
        </div>
      </a>
      <a href="verify.html" class="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all ${isVerify ? 'bg-primary-container text-on-primary font-bold shadow-sm' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium'}">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[20px]">verified_user</span>
          <span class="text-sm">Verification Station</span>
        </div>
      </a>
      <a href="log.html" class="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all ${isLog ? 'bg-primary-container text-on-primary font-bold shadow-sm' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium'}">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[20px]">receipt_long</span>
          <span class="text-sm">Pickup Log</span>
        </div>
      </a>
      <a href="alert.html" class="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all ${isAlert ? 'bg-primary-container text-on-primary font-bold shadow-sm' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium'}">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[20px]">emergency</span>
          <span class="text-sm">Security Alerts</span>
        </div>
      </a>
    </nav>
  </div>

  <!-- Pinned Bottom Terminal Status Card -->
  <div class="shrink-0 p-3 mx-3 mb-3 rounded-xl bg-surface-container-low flex flex-col gap-1 border border-surface-container-high/80 shadow-2xs">
    <div class="flex items-center justify-between">
      <span class="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider font-bold">Turnstile A</span>
      <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>Online
      </span>
    </div>
    <div class="font-headline-sm text-sm text-primary font-bold leading-tight">Accra Main Gate</div>
    <div class="font-body-sm text-[11px] text-on-surface-variant">Level 3 Safety Shield</div>
  </div>
</aside>`;
}

const gatePages = [
  { file: 'prototype/gate/scan.html', active: 'scan' },
  { file: 'prototype/gate/verify.html', active: 'verify' },
  { file: 'prototype/gate/alert.html', active: 'alert' },
  { file: 'prototype/gate/log.html', active: 'log' }
];

gatePages.forEach(({ file, active }) => {
  let content = fs.readFileSync(file, 'utf8');

  // Check if aside already exists
  if (!content.includes('class="carepoint-drawer fixed left-0 top-0 bottom-0')) {
    const drawerHtml = getGateDrawerHtml(active);

    // Replace header opening to include left-72 and wrap with pl-72
    const targetHeaderStr = '<header class="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">';
    const replacementStr = `${drawerHtml}\n<div class="pl-72 flex flex-col min-h-screen">\n<header class="fixed top-0 left-72 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">`;

    if (content.includes(targetHeaderStr)) {
      content = content.replace(targetHeaderStr, replacementStr);
    } else {
      console.warn(`Could not find standard header in ${file}`);
    }

    // Close the pl-72 wrapper right after </footer>
    if (content.includes('</footer>') && !content.includes('</footer>\n</div>') && !content.includes('</footer></div>')) {
      content = content.replace('</footer>', '</footer>\n</div>');
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file} with docked layout and static gate drawer.`);
  } else {
    console.log(`${file} already has static gate drawer.`);
  }
});

// Update prototype/carepoint-app.js
const appJsPath = path.join(__dirname, '..', 'prototype', 'carepoint-app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// Ensure hasDockedLayout includes gate portal
if (appJs.includes("activeRole === 'sysadmin'") && !appJs.includes("activeRole === 'gate'")) {
  appJs = appJs.replace(
    "activeRole === 'sysadmin'",
    "activeRole === 'sysadmin' ||\n    activeRole === 'gate'"
  );
  console.log('Updated prototype/carepoint-app.js hasDockedLayout to include gate.');
}

// Enhance bottomCardHtml in createDynamicPortalDrawer for gate
const oldBottomCardPattern = /const bottomCardHtml = role === 'parent' \? `[\s\S]*?` : `/;
if (appJs.includes("const bottomCardHtml = role === 'parent' ? `") && !appJs.includes("role === 'gate' ? `")) {
  appJs = appJs.replace(
    /const bottomCardHtml = role === 'parent' \? `([\s\S]*?)` : `/,
    `const bottomCardHtml = role === 'parent' ? \`$1\` : role === 'gate' ? \`
    <div class="shrink-0 p-3 mx-3 mb-3 rounded-xl bg-surface-container-low flex flex-col gap-1 border border-surface-container-high/80 shadow-2xs">
      <div class="flex items-center justify-between">
        <span class="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider font-bold">Turnstile A</span>
        <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>Online
        </span>
      </div>
      <div class="font-headline-sm text-sm text-primary font-bold leading-tight">Accra Main Gate</div>
      <div class="font-body-sm text-[11px] text-on-surface-variant">Level 3 Safety Shield</div>
    </div>
  \` : \``
  );
  console.log('Enhanced dynamic bottom card for gate in carepoint-app.js.');
}

fs.writeFileSync(appJsPath, appJs, 'utf8');

// Update prototype/carepoint-hud.css comment
const hudCssPath = path.join(__dirname, '..', 'prototype', 'carepoint-hud.css');
let hudCss = fs.readFileSync(hudCssPath, 'utf8');
if (hudCss.includes('Used for Gate Security kiosk, mobile views, or any page without docked pl-72')) {
  hudCss = hudCss.replace(
    'Used for Gate Security kiosk, mobile views, or any page without docked pl-72',
    'Used for mobile views or standalone overlay pages without docked pl-72'
  );
  fs.writeFileSync(hudCssPath, hudCss, 'utf8');
  console.log('Updated comment in carepoint-hud.css.');
}

console.log('\nGate & Kiosk Portal Docking Setup Complete!');
