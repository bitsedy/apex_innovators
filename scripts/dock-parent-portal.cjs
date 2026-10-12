const fs = require('fs');
const path = require('path');

function getParentDrawerHtml(activePage) {
  const isDashboard = activePage === 'dashboard';
  const isAcademics = activePage === 'academics';
  const isWelfare = activePage === 'welfare';
  const isPickup = activePage === 'pickup';
  const isMessages = activePage === 'messages';

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
        <span class="font-label-sm text-[10px] text-on-surface-variant font-bold tracking-wider uppercase">PARENT &amp; GUARDIAN PORTAL</span>
      </div>
    </div>

    <!-- Academic Session Status Strip -->
    <div class="px-space-md py-space-sm">
      <div class="px-space-md py-space-xs bg-surface-container-low rounded-lg flex items-center justify-between">
        <div class="flex items-center gap-space-xs">
          <span class="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
          <span class="font-label-sm text-label-sm text-on-surface font-medium">Session 2026/27 Term 1</span>
        </div>
        <span class="font-label-sm text-label-sm px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface-variant font-bold">Wk 8</span>
      </div>
    </div>

    <!-- Category Label -->
    <div class="px-space-md pt-2 pb-1">
      <span class="font-label-sm text-[10px] uppercase tracking-wider text-outline px-space-sm font-bold">Parent Navigation</span>
    </div>

    <!-- Navigation Links -->
    <nav class="flex flex-col gap-1 px-space-md overflow-y-auto flex-1 min-h-0">
      <a href="dashboard.html" class="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all ${isDashboard ? 'bg-primary-container text-on-primary font-bold shadow-sm' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium'}">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[20px]">dashboard</span>
          <span class="text-sm">Dashboard</span>
        </div>
      </a>
      <a href="dashboard.html#ward" class="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[20px]">badge</span>
          <span class="text-sm">Child Profile</span>
        </div>
      </a>
      <a href="academics.html" class="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all ${isAcademics ? 'bg-primary-container text-on-primary font-bold shadow-sm' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium'}">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[20px]">insights</span>
          <span class="text-sm">Performance &amp; Reports</span>
        </div>
      </a>
      <a href="messages.html#welfare" class="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all ${isWelfare ? 'bg-primary-container text-on-primary font-bold shadow-sm' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium'}">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[20px]">health_and_safety</span>
          <span class="text-sm">Attendance &amp; Welfare</span>
        </div>
      </a>
      <a href="pickup.html" class="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all ${isPickup ? 'bg-primary-container text-on-primary font-bold shadow-sm' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium'}">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[20px]">qr_code_scanner</span>
          <span class="text-sm">Pickup Security Pass</span>
        </div>
      </a>
      <a href="messages.html#messages" class="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all ${isMessages ? 'bg-primary-container text-on-primary font-bold shadow-sm' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium'}">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[20px]">forum</span>
          <span class="text-sm">Teacher Messages</span>
        </div>
        <span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-secondary-container text-on-secondary">2</span>
      </a>
    </nav>
  </div>

  <!-- Pinned Bottom Active Ward Card -->
  <div class="shrink-0 p-3 mx-3 mb-3 rounded-xl bg-surface-container-low flex flex-col gap-1.5 border border-surface-container-high/80 shadow-2xs">
    <div class="flex items-center justify-between">
      <span class="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider font-bold">Active Ward</span>
      <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>Enrolled
      </span>
    </div>
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-xs shrink-0" id="parent-drawer-ward-avatar">
        KM
      </div>
      <div class="min-w-0 flex-1">
        <div class="font-headline-sm text-sm text-primary font-bold leading-tight truncate" id="parent-drawer-ward-name">Kofi Mensah</div>
        <div class="font-body-sm text-[11px] text-on-surface-variant truncate" id="parent-drawer-ward-class">Basic 2 • Sunflower Class</div>
      </div>
    </div>
    <div class="pt-1 border-t border-outline-variant/20 flex items-center justify-between text-[11px] text-on-surface-variant">
      <span>Term 1 Week 8</span>
      <span class="text-secondary font-bold">Good Standing</span>
    </div>
  </div>
</aside>`;
}

const parentPages = [
  { file: 'prototype/parent/dashboard.html', active: 'dashboard' },
  { file: 'prototype/parent/academics.html', active: 'academics' },
  { file: 'prototype/parent/messages.html', active: 'welfare' },
  { file: 'prototype/parent/pickup.html', active: 'pickup' }
];

parentPages.forEach(({ file, active }) => {
  let content = fs.readFileSync(file, 'utf8');

  // Check if aside already exists
  if (!content.includes('class="carepoint-drawer fixed left-0 top-0 bottom-0')) {
    const drawerHtml = getParentDrawerHtml(active);

    // Replace header opening to include left-72 and wrap with pl-72
    const targetHeaderStr = '<header class="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">';
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
    console.log(`Updated ${file} with docked layout and static parent drawer.`);
  } else {
    console.log(`${file} already has static parent drawer.`);
  }
});

// Update prototype/carepoint-app.js
let appJs = fs.readFileSync('prototype/carepoint-app.js', 'utf8');

// Ensure hasDockedLayout includes desktop parent portal
if (appJs.includes("const hasDockedLayout = Boolean(document.querySelector('.pl-72, [class*=\"pl-72\"], header.left-72, header[class*=\"left-72\"]'));")) {
  appJs = appJs.replace(
    "const hasDockedLayout = Boolean(document.querySelector('.pl-72, [class*=\"pl-72\"], header.left-72, header[class*=\"left-72\"]'));",
    `const hasDockedLayout = !isMobileLayoutPage && (
    Boolean(document.querySelector('.pl-72, [class*="pl-72"], header.left-72, header[class*="left-72"]')) ||
    activeRole === 'parent' ||
    activeRole === 'staff' ||
    activeRole === 'admin' ||
    activeRole === 'sysadmin'
  );`
  );
  console.log('Updated prototype/carepoint-app.js hasDockedLayout detection.');
}

// In syncWardDisplay, also ensure all instances of parent drawer ward elements get updated (whether static or dynamic)
if (!appJs.includes('document.querySelectorAll("#parent-drawer-ward-name")')) {
  appJs = appJs.replace(
    `    const nameEl = aside.querySelector('#parent-drawer-ward-name');
    const classEl = aside.querySelector('#parent-drawer-ward-class');
    const avatarEl = aside.querySelector('#parent-drawer-ward-avatar');`,
    `    const nameEls = document.querySelectorAll('#parent-drawer-ward-name');
    const classEls = document.querySelectorAll('#parent-drawer-ward-class');
    const avatarEls = document.querySelectorAll('#parent-drawer-ward-avatar');
    nameEls.forEach(el => el.textContent = isKofi ? 'Kofi Mensah' : 'Ama Mensah');
    classEls.forEach(el => el.textContent = isKofi ? 'Basic 2 • Sunflower Class' : 'Nursery 1 • Buttercup');
    avatarEls.forEach(el => el.textContent = isKofi ? 'KM' : 'AM');
    const nameEl = aside.querySelector('#parent-drawer-ward-name');
    const classEl = aside.querySelector('#parent-drawer-ward-class');
    const avatarEl = aside.querySelector('#parent-drawer-ward-avatar');`
  );
  console.log('Enhanced syncWardDisplay in carepoint-app.js.');
}

fs.writeFileSync('prototype/carepoint-app.js', appJs, 'utf8');

// Update prototype/carepoint-hud.css
let hudCss = fs.readFileSync('prototype/carepoint-hud.css', 'utf8');

const targetCss = `  /* On desktop docked layouts, completely neutralize the backdrop and blur filter */
  body:not(.carepoint-has-overlay-drawer) .carepoint-drawer-backdrop,
  body:not(.carepoint-has-overlay-drawer) .carepoint-drawer-backdrop.active {`;

const replacementCss = `  /* On desktop docked layouts, completely neutralize the backdrop and blur filter */
  body:not(.carepoint-has-overlay-drawer) .carepoint-drawer-backdrop,
  body:not(.carepoint-has-overlay-drawer) .carepoint-drawer-backdrop.active,
  body:not(.carepoint-has-overlay-drawer) [class*="carepoint-drawer-backdrop"] {`;

if (hudCss.includes(targetCss) && !hudCss.includes('[class*="carepoint-drawer-backdrop"]')) {
  hudCss = hudCss.replace(targetCss, replacementCss);
  fs.writeFileSync('prototype/carepoint-hud.css', hudCss, 'utf8');
  console.log('Updated prototype/carepoint-hud.css desktop backdrop neutralization.');
}

console.log('\nParent Portal Docking Setup Complete!');
