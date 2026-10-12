const fs = require('fs');
const path = require('path');

console.log('=== UPDATING PARENT PORTAL DRAWERS & TOGGLES ===\n');

const desktopToggleBtn = `<button type="button" data-drawer-toggle="" class="p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-primary transition-colors cursor-pointer mr-1 shrink-0 shadow-2xs" title="Toggle Navigation Tabs Drawer" aria-label="Toggle Navigation Tabs Drawer"><span class="material-symbols-outlined text-[24px]">menu</span></button>`;
const mobileToggleBtn = `<button type="button" data-drawer-toggle="" class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors cursor-pointer mr-0.5 shrink-0" title="Toggle Navigation Tabs Drawer" aria-label="Toggle Navigation Tabs Drawer"><span class="material-symbols-outlined text-[22px]">menu</span></button>`;

// 1. academics.html
const acadPath = 'prototype/parent/academics.html';
let acad = fs.readFileSync(acadPath, 'utf8');
if (!acad.includes('data-drawer-toggle')) {
  acad = acad.replace(
    '<div class="flex items-center gap-space-md"><div class="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-container text-on-primary">',
    `<div class="flex items-center gap-space-md">${desktopToggleBtn}<div class="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-container text-on-primary">`
  );
  fs.writeFileSync(acadPath, acad, 'utf8');
  console.log('[OK] Added data-drawer-toggle to academics.html');
}

// 2. messages.html
const msgPath = 'prototype/parent/messages.html';
let msg = fs.readFileSync(msgPath, 'utf8');
if (!msg.includes('data-drawer-toggle')) {
  msg = msg.replace(
    '<div class="flex items-center gap-space-md"><div class="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-container text-on-primary">',
    `<div class="flex items-center gap-space-md">${desktopToggleBtn}<div class="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-container text-on-primary">`
  );
}
// Add hash change listener for #welfare and #conversations if not present
if (!msg.includes("window.location.hash.includes('welfare')")) {
  const hashRouterSnippet = `
    // Hash routing for tabs (welfare vs conversations)
    window.addEventListener('DOMContentLoaded', () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('welfare') || hash === '#welfare') {
        switchMainTab('welfare');
      } else if (hash.includes('conversations') || hash.includes('messages')) {
        switchMainTab('conversations');
      }
    });
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('welfare') || hash === '#welfare') {
        switchMainTab('welfare');
      } else if (hash.includes('conversations') || hash.includes('messages')) {
        switchMainTab('conversations');
      }
    });
  `;
  msg = msg.replace('function switchMainTab(tab) {', hashRouterSnippet + '\n    function switchMainTab(tab) {');
}
fs.writeFileSync(msgPath, msg, 'utf8');
console.log('[OK] Added data-drawer-toggle & hash routing to messages.html');

// 3. pickup.html
const pickPath = 'prototype/parent/pickup.html';
let pick = fs.readFileSync(pickPath, 'utf8');
if (!pick.includes('data-drawer-toggle')) {
  pick = pick.replace(
    '<div class="flex items-center gap-space-md"><div class="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-container text-on-primary">',
    `<div class="flex items-center gap-space-md">${desktopToggleBtn}<div class="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-container text-on-primary">`
  );
  fs.writeFileSync(pickPath, pick, 'utf8');
  console.log('[OK] Added data-drawer-toggle to pickup.html');
}

// 4. dashboard.html script sync
const dashPath = 'prototype/parent/dashboard.html';
let dash = fs.readFileSync(dashPath, 'utf8');
if (!dash.includes('CarepointDrawer.syncWard')) {
  const oldSwitchWard = /function switchWard\(child\) \{[\s\S]*?\}\s*<\/script>/;
  const newSwitchWard = `// Auto-switch tab if hash present or scroll to ward
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'academics' || hash === 'grades') {
    switchParentView('academics');
  } else if (hash === 'health' || hash === 'welfare' || hash === 'calendar') {
    switchParentView('welfare');
  } else if (hash === 'ward') {
    const wardSection = document.getElementById('ward');
    if (wardSection) {
      setTimeout(() => wardSection.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }

  const savedWard = (typeof localStorage !== 'undefined' && localStorage.getItem('carepoint_active_ward')) || 'kofi';
  if (savedWard === 'ama') {
    switchWard('ama', false);
  }
});

function switchWard(child, showNotice = true) {
  const isKofi = child === 'kofi';
  const kofiOpt = document.getElementById('ward-opt-kofi');
  const amaOpt = document.getElementById('ward-opt-ama');
  const checkKofi = document.getElementById('check-kofi');
  const checkAma = document.getElementById('check-ama');

  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('carepoint_active_ward', child);
  }

  if (window.CarepointDrawer && typeof window.CarepointDrawer.syncWard === 'function') {
    window.CarepointDrawer.syncWard(child);
  }
  
  if (isKofi) {
    if (kofiOpt) { kofiOpt.className = "flex items-center gap-space-sm px-4 py-2 bg-surface-container text-primary font-bold cursor-pointer"; }
    if (amaOpt) { amaOpt.className = "flex items-center gap-space-sm px-4 py-2 hover:bg-surface-container-low text-on-surface cursor-pointer"; }
    if (checkKofi) checkKofi.classList.remove('opacity-0');
    if (checkAma) checkAma.classList.add('opacity-0');
    if (showNotice) {
      if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
        window.CarepointDemo.showToast("Active profile switched: Kofi Mensah (Basic 2 - Sunflower).", true);
      } else {
        alert("Active profile switched: Kofi Mensah (Basic 2 - Sunflower).");
      }
    }
  } else {
    if (kofiOpt) { kofiOpt.className = "flex items-center gap-space-sm px-4 py-2 hover:bg-surface-container-low text-on-surface cursor-pointer"; }
    if (amaOpt) { amaOpt.className = "flex items-center gap-space-sm px-4 py-2 bg-surface-container text-primary font-bold cursor-pointer"; }
    if (checkKofi) checkKofi.classList.add('opacity-0');
    if (checkAma) checkAma.classList.remove('opacity-0');
    if (showNotice) {
      if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
        window.CarepointDemo.showToast("Active profile switched: Ama Mensah (Nursery 1 - Buttercup).", true);
      } else {
        alert("Active profile switched: Ama Mensah (Nursery 1 - Buttercup).");
      }
    }
  }
}
</script>`;

  dash = dash.replace(oldSwitchWard, newSwitchWard);
  fs.writeFileSync(dashPath, dash, 'utf8');
  console.log('[OK] Updated switchWard and hash scrolling in dashboard.html');
}

// 5. mobile-dashboard.html
const mobDashPath = 'prototype/parent/mobile-dashboard.html';
let mobDash = fs.readFileSync(mobDashPath, 'utf8');
if (!mobDash.includes('data-drawer-toggle')) {
  mobDash = mobDash.replace(
    '<div class="flex items-center gap-space-sm"><div class="w-9 h-9 rounded-lg bg-primary',
    `<div class="flex items-center gap-space-sm">${mobileToggleBtn}<div class="w-9 h-9 rounded-lg bg-primary`
  );
}
if (!mobDash.includes('id="ward"')) {
  mobDash = mobDash.replace(
    '<div class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden">',
    '<div id="ward" class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden">'
  );
}
fs.writeFileSync(mobDashPath, mobDash, 'utf8');
console.log('[OK] Added data-drawer-toggle and id=ward to mobile-dashboard.html');

// 6. mobile-academics.html
const mobAcadPath = 'prototype/parent/mobile-academics.html';
let mobAcad = fs.readFileSync(mobAcadPath, 'utf8');
if (!mobAcad.includes('data-drawer-toggle')) {
  mobAcad = mobAcad.replace(
    '<div class="flex items-center gap-space-sm"><div class="w-9 h-9 rounded-lg bg-primary',
    `<div class="flex items-center gap-space-sm">${mobileToggleBtn}<div class="w-9 h-9 rounded-lg bg-primary`
  );
  fs.writeFileSync(mobAcadPath, mobAcad, 'utf8');
  console.log('[OK] Added data-drawer-toggle to mobile-academics.html');
}

// 7. mobile-messages.html
const mobMsgPath = 'prototype/parent/mobile-messages.html';
let mobMsg = fs.readFileSync(mobMsgPath, 'utf8');
if (!mobMsg.includes('data-drawer-toggle')) {
  mobMsg = mobMsg.replace(
    '<div class="flex items-center gap-space-sm"><div class="w-9 h-9 rounded-lg bg-primary',
    `<div class="flex items-center gap-space-sm">${mobileToggleBtn}<div class="w-9 h-9 rounded-lg bg-primary`
  );
  fs.writeFileSync(mobMsgPath, mobMsg, 'utf8');
  console.log('[OK] Added data-drawer-toggle to mobile-messages.html');
}

// 8. mobile-pickup.html
const mobPickPath = 'prototype/parent/mobile-pickup.html';
let mobPick = fs.readFileSync(mobPickPath, 'utf8');
if (!mobPick.includes('data-drawer-toggle')) {
  mobPick = mobPick.replace(
    '<div class="flex items-center gap-space-sm"><div class="w-9 h-9 rounded-lg bg-primary',
    `<div class="flex items-center gap-space-sm">${mobileToggleBtn}<div class="w-9 h-9 rounded-lg bg-primary`
  );
  fs.writeFileSync(mobPickPath, mobPick, 'utf8');
  console.log('[OK] Added data-drawer-toggle to mobile-pickup.html');
}

console.log('\nAll parent portal files synchronized successfully!');
