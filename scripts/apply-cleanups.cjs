const fs = require('fs');
const path = require('path');

let modifiedCount = 0;

function updateFile(relPath, transforms) {
  const fullPath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${relPath}`);
    return;
  }
  let content = fs.readFileSync(fullPath, 'utf8');
  let original = content;

  transforms.forEach(({ name, search, replace }) => {
    if (typeof search === 'string') {
      if (!content.includes(search)) {
        console.warn(`[WARN] Pattern not found in ${relPath}: ${name}`);
      } else {
        content = content.replace(search, replace);
        console.log(`[OK] Applied ${name} to ${relPath}`);
      }
    } else if (search instanceof RegExp) {
      if (!search.test(content)) {
        console.warn(`[WARN] Regex not matched in ${relPath}: ${name}`);
      } else {
        content = content.replace(search, replace);
        console.log(`[OK] Applied regex ${name} to ${relPath}`);
      }
    }
  });

  if (content !== original) {
    fs.writeFileSync(fullPath, content, 'utf8');
    modifiedCount++;
  }
}

// 1. Staff Dashboard
updateFile('prototype/staff/dashboard.html', [
  {
    name: 'Remove header duty badge',
    search: /<div class="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-low hover:bg-surface-container rounded-full transition-colors cursor-pointer" id="staff-duty-badge"[\s\S]*?<\/div>/,
    replace: ''
  },
  {
    name: 'Remove redundant ON CAMPUS duty pill in hero banner',
    search: /<div class="inline-flex items-center gap-1\.5 px-2\.5 py-0\.5 rounded-full bg-white\/15 text-white w-fit text-label-sm font-label-sm">\s*<span class="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"><\/span>\s*<span>ON CAMPUS • CLOCKED IN AT 07:22 AM<\/span>\s*<\/div>/,
    replace: ''
  }
]);

// 2. Staff Messages
updateFile('prototype/staff/messages.html', [
  {
    name: 'Remove header duty badge & unwrap duplicate div',
    search: /<div class="flex items-center gap-space-md"><button type="button" data-drawer-toggle="" class="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors cursor-pointer mr-1 shrink-0" title="Toggle Navigation Sidebar" aria-label="Toggle Navigation Sidebar"><span class="material-symbols-outlined text-\[22px\]">menu<\/span><\/button>\s*<div class="flex items-center gap-space-md">\s*<div class="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-low hover:bg-surface-container rounded-full transition-colors cursor-pointer" id="staff-duty-badge"[\s\S]*?<\/div>\s*(<div class="hidden md:inline-flex items-center gap-1\.5 px-space-sm py-1 bg-surface-container-low rounded-full text-on-surface-variant">[\s\S]*?<\/div>)\s*<\/div>/,
    replace: '<div class="flex items-center gap-space-md"><button type="button" data-drawer-toggle="" class="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors cursor-pointer mr-1 shrink-0" title="Toggle Navigation Sidebar" aria-label="Toggle Navigation Sidebar"><span class="material-symbols-outlined text-[22px]">menu</span></button>\n      $1\n    </div>'
  },
  {
    name: 'Remove redundant 3-level breadcrumb',
    search: /<div class="flex items-center gap-space-xs text-on-surface-variant font-label-sm uppercase tracking-wider mb-space-xs">\s*<span>Staff Portal<\/span>\s*<span class="material-symbols-outlined text-sm">chevron_right<\/span>\s*<span>Academic Operations<\/span>\s*<span class="material-symbols-outlined text-sm">chevron_right<\/span>\s*<span class="text-primary font-bold">Communications Desk<\/span>\s*<\/div>/,
    replace: ''
  }
]);

// 3. Staff Mobile Dashboard
updateFile('prototype/staff/mobile-dashboard.html', [
  {
    name: 'Remove repetitive Basic 2 & 28 students chip right above class selector',
    search: /<span class="px-2 py-0\.5 rounded-full bg-white\/15 text-white font-label-sm text-label-sm">\s*Basic 2 &bull; 28 Students\s*<\/span>/,
    replace: ''
  }
]);

// 4. Admin Portal: Remove redundant "Executive Oversight System" pill from all desktop headers
const adminDesktopFiles = [
  'prototype/admin/dashboard.html',
  'prototype/admin/admissions.html',
  'prototype/admin/approvals.html',
  'prototype/admin/decision.html',
  'prototype/admin/inbox.html',
  'prototype/admin/reports.html',
  'prototype/admin/settings.html',
  'prototype/admin/users.html',
  'prototype/admin/wards.html'
];

adminDesktopFiles.forEach(file => {
  updateFile(file, [
    {
      name: 'Remove Executive Oversight System header badge',
      search: /<div class="hidden xl:flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">\s*<span class="w-1\.5 h-1\.5 rounded-full bg-outline-variant"><\/span>\s*<span>Executive Oversight System<\/span>\s*<\/div>/,
      replace: ''
    }
  ]);
});

// Admin Page Specific Eyebrow / Subtitle De-cluttering
updateFile('prototype/admin/approvals.html', [
  {
    name: 'Remove redundant Statutory Audit eyebrow line',
    search: /<div class="flex items-center gap-2 mb-1">\s*<span class="px-2\.5 py-0\.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider">Statutory Audit<\/span>[\s\S]*?Accredited • 2026\/2027\s*<\/span>\s*<\/div>/,
    replace: ''
  }
]);

updateFile('prototype/admin/admissions.html', [
  {
    name: 'Remove redundant 2026/2027 Cycle eyebrow line',
    search: /<div class="flex items-center gap-2 mb-1">\s*<span class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">2026\/2027 Cycle<\/span>[\s\S]*?Round 1 Intake<\/span>\s*<\/div>/,
    replace: ''
  }
]);

updateFile('prototype/admin/wards.html', [
  {
    name: 'Remove redundant Master Registry eyebrow line',
    search: /<div class="flex items-center gap-2 mb-1">\s*<span class="font-label-sm text-label-sm px-2\.5 py-0\.5 rounded-full bg-primary-fixed text-on-primary-fixed uppercase tracking-wider font-semibold">Master Registry<\/span>[\s\S]*?2026\/2027<\/span>\s*<\/div>/,
    replace: ''
  }
]);

updateFile('prototype/admin/users.html', [
  {
    name: 'Remove redundant RBAC/Active Directory eyebrow line',
    search: /<div class="flex items-center gap-2">\s*<span class="inline-flex items-center gap-1 px-2\.5 py-0\.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">[\s\S]*?• Active Directory<\/span>\s*<\/div>/,
    replace: ''
  }
]);

updateFile('prototype/admin/reports.html', [
  {
    name: 'Remove redundant NaSIA Form QA-2026 eyebrow line',
    search: /<div class="flex items-center gap-2 flex-wrap">\s*<span class="px-2\.5 py-0\.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm tracking-wide uppercase font-semibold">[\s\S]*?Ref: ACC-REG-2026\/T1-094\s*<\/span>\s*<\/div>/,
    replace: ''
  }
]);

updateFile('prototype/admin/settings.html', [
  {
    name: 'Remove redundant GOVERNANCE eyebrow line',
    search: /<div class="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">\s*<span class="px-2 py-0\.5 rounded-full bg-primary-fixed text-on-primary-fixed font-bold">GOVERNANCE<\/span>[\s\S]*?Synced<\/span>\s*<\/div>/,
    replace: ''
  }
]);

updateFile('prototype/admin/inbox.html', [
  {
    name: 'Remove redundant Executive Operations eyebrow line',
    search: /<div class="flex items-center gap-2">\s*<span class="w-2 h-2 rounded-full bg-secondary-container"><\/span>\s*<span class="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">Executive Operations<\/span>\s*<\/div>/,
    replace: ''
  }
]);

// 5. Parent Dashboard: Remove redundant "Enrolled • Basic 2" in ward banner
updateFile('prototype/parent/dashboard.html', [
  {
    name: 'Remove redundant Enrolled • Basic 2 in ward banner',
    search: /<span class="font-label-sm text-label-sm uppercase tracking-wider px-2 py-0\.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold">Enrolled • Basic 2<\/span>\s*/,
    replace: ''
  }
]);

// 6. Gate Scan: Remove redundant NaSIA Level 3 SafeZone in terminal toolbar
updateFile('prototype/gate/scan.html', [
  {
    name: 'Remove redundant NaSIA Level 3 SafeZone in toolbar',
    search: /<span class="px-2\.5 py-1 rounded-md bg-primary text-on-primary font-label-sm text-label-sm font-bold uppercase">\s*NaSIA Level 3 SafeZone\s*<\/span>/,
    replace: ''
  }
]);

// 7. Sysadmin
updateFile('prototype/sysadmin/dashboard.html', [
  {
    name: 'Remove redundant PRODUCTION (ACCRA CLOUD POD-A) in hero banner',
    search: /<span class="inline-flex items-center gap-1\.5 px-space-sm py-0\.5 rounded-full bg-surface-container-lowest\/15 text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider backdrop-blur-md">\s*<span class="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"><\/span>\s*PRODUCTION \(ACCRA CLOUD POD-A\)\s*<\/span>/,
    replace: ''
  }
]);

updateFile('prototype/sysadmin/features.html', [
  {
    name: 'Remove redundant System Operations eyebrow line',
    search: /<div class="flex items-center gap-space-xs mb-space-xs">\s*<span class="px-space-sm py-0\.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm tracking-wider uppercase">System Operations<\/span>[\s\S]*?High Governance Tier<\/span>\s*<\/div>/,
    replace: ''
  }
]);

updateFile('prototype/sysadmin/provisioning.html', [
  {
    name: 'Remove redundant SysOps Layer 0 eyebrow line',
    search: /<div class="flex items-center gap-space-xs mb-space-xs">\s*<span class="px-space-sm py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest">SysOps Layer 0<\/span>[\s\S]*?• Cryptographic Identity Core<\/span>\s*<\/div>/,
    replace: ''
  }
]);

updateFile('prototype/sysadmin/integrations.html', [
  {
    name: 'Remove redundant EXTERNAL CONNECTORS eyebrow line',
    search: /<div class="flex items-center gap-space-xs mb-space-xs">\s*<span class="inline-flex items-center gap-1\.5 px-space-sm py-0\.5 rounded-full bg-primary-container text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-bold">[\s\S]*?STAGING: SYNCED\s*<\/span>\s*<\/div>/,
    replace: ''
  }
]);

console.log(`\n==============================================`);
console.log(`Successfully processed files. Total modified: ${modifiedCount}`);
console.log(`==============================================\n`);
