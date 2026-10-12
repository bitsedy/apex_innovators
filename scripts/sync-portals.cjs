const fs = require('fs');
const path = require('path');

console.log('=== SYNCHRONIZING SYSTEMATIC UPDATES ACROSS ALL PORTALS ===\n');

const dirs = ['admin', 'parent', 'gate', 'sysadmin'];

let totalFilesUpdated = 0;

// =============================================================================
// Helper 1: Font & Preconnect Standardization
// =============================================================================
function standardizeHead(content) {
  let updated = content;

  // 1. Remove duplicate Material Symbols link
  const dupMatSymbols1 = `<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>\r\n`;
  const dupMatSymbols2 = `<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>\n`;
  const dupMatSymbols3 = `<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>`;

  if (updated.includes('Material+Symbols+Outlined:opsz') || updated.includes('Material+Symbols+Outlined:opsz,wght')) {
    updated = updated.replace(dupMatSymbols1, '');
    updated = updated.replace(dupMatSymbols2, '');
    updated = updated.replace(dupMatSymbols3, '');
  }

  // 2. Remove duplicate Plus Jakarta Sans link in sysadmin
  const dupJakarta1 = `<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100..900&amp;display=swap" rel="stylesheet"/>\r\n`;
  const dupJakarta2 = `<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100..900&amp;display=swap" rel="stylesheet"/>\n`;
  const dupJakarta3 = `<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100..900&amp;display=swap" rel="stylesheet"/>`;
  if ((updated.match(/Plus\+Jakarta\+Sans/g) || []).length > 1) {
    updated = updated.replace(dupJakarta1, '');
    updated = updated.replace(dupJakarta2, '');
    updated = updated.replace(dupJakarta3, '');
  }

  // 3. Ensure preconnect tags exist
  if (!updated.includes('fonts.googleapis.com" rel="preconnect"')) {
    const preconnect = '<link href="https://fonts.googleapis.com" rel="preconnect"/><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>';
    // Insert before first google font link
    updated = updated.replace(/(<link\s+href="https:\/\/fonts\.googleapis\.com\/css2\?)/, `${preconnect}$1`);
  }

  return updated;
}

// =============================================================================
// Helper 2: Currency & Persona Standardization
// =============================================================================
function standardizeCurrencyAndPersonas(content) {
  let updated = content;

  // Replace GHS 123 -> GH₵ 123
  updated = updated.replace(/\bGHS\s*([0-9,]+(?:\.[0-9]{2})?)/g, 'GH₵ $1');

  // Replace Nurse Mary Asante -> Nurse Faustina Asante, SRN
  updated = updated.replace(/Nurse Mary Asante, SRN/g, 'Nurse Faustina Asante, SRN');
  updated = updated.replace(/Nurse Mary Asante/g, 'Nurse Faustina Asante, SRN');

  return updated;
}

// =============================================================================
// Helper 3: Admin Sidebar Brand Header & Header Drawer Toggle Button
// =============================================================================
const adminBrandHeader = `<!-- Top Header with Crest, Title, Motto, Badge, and Close Button -->
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
      <button class="carepoint-drawer-close-btn" type="button" aria-label="Collapse Navigation Sidebar" title="Collapse Sidebar">
        <span class="material-symbols-outlined text-[18px]">close</span>
      </button>
    </div>
    <div class="flex items-center justify-between pt-0.5">
      <span class="font-label-sm text-[10px] tracking-widest text-secondary font-bold">MIND • HEART • HANDS</span>
    </div>
    <div class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-high rounded-full w-fit">
      <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      <span class="font-label-sm text-[10px] text-on-surface-variant font-bold tracking-wider uppercase">Executive Admin &amp; Principal</span>
    </div>
  </div>`;

function updateAdminDesktopLayout(content) {
  let updated = content;

  // Replace old aside top brand block
  const oldAdminBrandRegex = /<div class="h-20 px-space-lg flex items-center gap-space-sm bg-surface-container-lowest border-b border-outline-variant\/20">[\s\S]*?<\/div>\s*<\/div>/;
  if (oldAdminBrandRegex.test(updated) && !updated.includes('carepoint-brand-row')) {
    updated = updated.replace(oldAdminBrandRegex, adminBrandHeader);
  }

  // Ensure <aside> has standard classes
  updated = updated.replace(
    /<aside class="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-\[0_1px_8px_rgba\(0,0,0,0\.04\)\] z-50 flex flex-col justify-between overflow-y-auto border-r border-outline-variant\/30">/,
    '<aside class="fixed left-0 top-0 bottom-0 h-screen max-h-screen w-72 bg-surface-container-lowest z-50 flex flex-col shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-r border-outline-variant/30">'
  );

  // Add data-drawer-toggle button to desktop <header> if missing
  if (!updated.includes('data-drawer-toggle')) {
    const toggleBtn = `<button type="button" data-drawer-toggle="" class="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors cursor-pointer mr-2 shrink-0" title="Toggle Navigation Sidebar" aria-label="Toggle Navigation Sidebar"><span class="material-symbols-outlined text-[22px]">menu</span></button>`;
    
    // Pattern: <header ...><div class="flex items-center gap-space-md">
    updated = updated.replace(
      /(<header\b[^>]*>\s*<div class="flex items-center gap-space-md">)/,
      `$1${toggleBtn}`
    );
  }

  return updated;
}

// =============================================================================
// Helper 4: Sysadmin Sidebar Brand Header & Header Drawer Toggle Button
// =============================================================================
const sysadminBrandHeader = `<!-- Top Header with Crest, Title, Motto, Badge, and Close Button -->
  <div class="shrink-0 p-4 border-b border-white/10 flex flex-col gap-2 relative bg-primary-container">
    <div class="flex items-center justify-between gap-2 carepoint-brand-row">
      <div class="flex items-center gap-2.5 min-w-0">
        <div class="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-xs border border-outline-variant/30 p-0.5 shrink-0 overflow-hidden">
          <img src="../assets/carepoint-crest.png" alt="Carepoint Community School" class="w-full h-full object-contain rounded-lg"/>
        </div>
        <div class="min-w-0">
          <div class="font-headline-sm text-base text-on-primary font-bold leading-tight tracking-tight truncate">Carepoint</div>
          <div class="font-label-sm text-[10px] text-primary-fixed-dim uppercase tracking-wider font-semibold truncate">SysOps Core</div>
        </div>
      </div>
      <button class="carepoint-drawer-close-btn text-on-primary hover:bg-white/10 p-1 rounded-lg" type="button" aria-label="Collapse Navigation Sidebar" title="Collapse Sidebar">
        <span class="material-symbols-outlined text-[18px]">close</span>
      </button>
    </div>
    <div class="flex items-center justify-between pt-0.5">
      <span class="font-label-sm text-[10px] tracking-widest text-secondary-fixed font-bold">MIND • HEART • HANDS</span>
    </div>
    <div class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded-full w-fit">
      <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      <span class="font-label-sm text-[10px] text-primary-fixed font-bold tracking-wider uppercase">Systems &amp; IT Operations</span>
    </div>
  </div>`;

function updateSysadminDesktopLayout(content) {
  let updated = content;

  // Replace old sysadmin aside top brand block
  const oldSysBrandRegex = /<div class="h-16 px-gutter flex items-center gap-space-sm bg-primary-container">[\s\S]*?<\/div>\s*<\/div>/;
  if (oldSysBrandRegex.test(updated) && !updated.includes('carepoint-brand-row')) {
    updated = updated.replace(oldSysBrandRegex, sysadminBrandHeader);
  }

  // Ensure <aside> has standard classes
  updated = updated.replace(
    /<aside class="fixed left-0 top-0 h-full w-72 bg-primary text-on-primary z-50 flex flex-col justify-between shadow-\[0_1px_8px_rgba\(0,0,0,0\.04\)\]">/,
    '<aside class="fixed left-0 top-0 bottom-0 h-screen max-h-screen w-72 bg-primary text-on-primary z-50 flex flex-col shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-r border-white/10">'
  );

  // Add data-drawer-toggle button to desktop <header> if missing
  if (!updated.includes('data-drawer-toggle')) {
    const toggleBtn = `<button type="button" data-drawer-toggle="" class="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors cursor-pointer mr-2 shrink-0" title="Toggle Navigation Sidebar" aria-label="Toggle Navigation Sidebar"><span class="material-symbols-outlined text-[22px]">menu</span></button>`;
    
    // Pattern: <header ...><div class="flex items-center gap-space-md">
    updated = updated.replace(
      /(<header\b[^>]*>\s*<div class="flex items-center gap-space-md">)/,
      `$1${toggleBtn}`
    );
  }

  return updated;
}

// =============================================================================
// PROCESS ALL DIRECTORIES
// =============================================================================
dirs.forEach(dir => {
  const dirPath = path.join(__dirname, '..', 'prototype', dir);
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const original = fs.readFileSync(filePath, 'utf8');
    let content = original;

    // 1. Head & font standardization across all files
    content = standardizeHead(content);

    // 2. Currency & persona standardization across all files
    content = standardizeCurrencyAndPersonas(content);

    // 3. Desktop portal layout upgrades
    if (!file.startsWith('mobile-') && file !== 'login.html') {
      if (dir === 'admin') {
        content = updateAdminDesktopLayout(content);
      } else if (dir === 'sysadmin') {
        content = updateSysadminDesktopLayout(content);
      }
    }

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`[SYNCED] ${dir}/${file}`);
      totalFilesUpdated++;
    }
  });
});

console.log(`\n======================================================`);
console.log(`TOTAL FILES SYNCHRONIZED: ${totalFilesUpdated}`);
console.log(`======================================================`);
