const fs = require('fs');
const path = require('path');

// 1. Fix prototype/parent/mobile-messages.html line 375
const parentMobileMsgPath = 'prototype/parent/mobile-messages.html';
if (fs.existsSync(parentMobileMsgPath)) {
  let content = fs.readFileSync(parentMobileMsgPath, 'utf8');
  const oldTag = '<img src="placeholder" data-alt="Tutor avatar acknowledging message with a smile." class="w-full h-full object-cover">';
  const newTag = '<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo1EGS9Udv9jbRuc-r6_oXpPteu9hto5W-SkEkm2uTxYC_8t04Z0bkIPpHMyA7yGLHXLvsrFuQqok8JD7tVi6QkAq01hTH_2GU1O1U0WY1b_fqIXnvJvjsmyxu_6286Xsi9NMB9HAsZaxqurxk17R4oPRa4XNsolx6wRTOhJJIEBUI6m6AdHqZ8LPBO6IrFN8ItlRIZm_xSUzn8SkT-Hm1LpNpyB808pBwbwzAPFI0qzuy3owK2k3KoA" alt="Mrs. Beatrice Abbey" class="w-full h-full object-cover">';
  if (content.includes(oldTag)) {
    content = content.replace(oldTag, newTag);
    fs.writeFileSync(parentMobileMsgPath, content, 'utf8');
    console.log('Fixed placeholder in prototype/parent/mobile-messages.html');
  }
}

// 2. Update Login pages (10 login files)
const loginFiles = [
  'prototype/admin/login.html',
  'prototype/admin/mobile-login.html',
  'prototype/staff/login.html',
  'prototype/staff/mobile-login.html',
  'prototype/parent/login.html',
  'prototype/parent/mobile-login.html',
  'prototype/gate/login.html',
  'prototype/gate/mobile-login.html',
  'prototype/sysadmin/login.html',
  'prototype/sysadmin/mobile-login.html'
];

loginFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  const isMobile = file.includes('mobile-');
  const rel = file.split('/').length > 2 ? '../' : './';
  const crestPath = `${rel}assets/carepoint-crest.png`;

  // Replace school crest placeholder in desktop login
  const desktopOldPattern = /<div class="w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center shadow-sm relative mb-3">\s*<span class="material-symbols-outlined text-primary text-4xl"[^>]*>school<\/span>\s*<span class="absolute -bottom-1 -right-1 w-5 h-5 bg-tertiary-fixed-dim rounded-full flex items-center justify-center text-tertiary shadow-sm">\s*<span class="material-symbols-outlined text-\[13px\] font-bold">verified<\/span>\s*<\/span>\s*<\/div>/gi;

  const desktopNewHtml = `<div class="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-md relative mb-3 p-1.5 border border-outline-variant/30">
            <img src="${crestPath}" alt="Carepoint Community School Crest" class="w-full h-full object-contain rounded-xl"/>
            <span class="absolute -bottom-1 -right-1 w-6 h-6 bg-tertiary-fixed-dim rounded-full flex items-center justify-center text-tertiary shadow-sm">
              <span class="material-symbols-outlined text-[14px] font-bold">verified</span>
            </span>
          </div>`;

  if (desktopOldPattern.test(content)) {
    content = content.replace(desktopOldPattern, desktopNewHtml);
    console.log(`Updated desktop school crest in ${file}`);
  }

  // Replace mobile login crest placeholder
  const mobileOldPattern = /<div class="w-14 h-14 rounded-2xl bg-primary\/10 flex items-center justify-center shadow-sm relative mb-2">\s*<span class="material-symbols-outlined text-primary text-3xl"[^>]*>school<\/span>\s*<span class="absolute -bottom-1 -right-1 w-4 h-4 bg-tertiary-fixed-dim rounded-full flex items-center justify-center text-tertiary text-\[10px\] font-bold">\s*✓\s*<\/span>\s*<\/div>/gi;

  const mobileNewHtml = `<div class="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-md relative mb-2 p-1 border border-outline-variant/30">
          <img src="${crestPath}" alt="Carepoint Community School Crest" class="w-full h-full object-contain rounded-xl"/>
          <span class="absolute -bottom-1 -right-1 w-5 h-5 bg-tertiary-fixed-dim rounded-full flex items-center justify-center text-tertiary shadow-sm">
            <span class="material-symbols-outlined text-[12px] font-bold">verified</span>
          </span>
        </div>`;

  if (mobileOldPattern.test(content)) {
    content = content.replace(mobileOldPattern, mobileNewHtml);
    console.log(`Updated mobile school crest in ${file}`);
  }

  fs.writeFileSync(file, content, 'utf8');
});

// 3. Update parent/academics.html & parent/mobile-academics.html report crest
const reportFiles = [
  'prototype/parent/academics.html',
  'prototype/parent/mobile-academics.html'
];

reportFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  const rel = file.split('/').length > 2 ? '../' : './';
  const crestPath = `${rel}assets/carepoint-crest.png`;

  const oldStampPattern = /<!-- School Crest \/ Official Stamp Glyph -->\s*<div class="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center text-surface-container-lowest mb-space-xs shadow-sm">\s*<span class="material-symbols-outlined text-3xl">verified<\/span>\s*<div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center">\s*<span class="material-symbols-outlined text-xs">lock<\/span>\s*<\/div>\s*<\/div>/gi;

  const newStampHtml = `<!-- School Crest / Official Stamp Glyph -->
<div class="relative w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md mb-space-xs p-1 border-2 border-primary/20">
<img src="${crestPath}" alt="Carepoint Community School Official Crest" class="w-full h-full object-contain rounded-full"/>
<div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shadow-sm">
<span class="material-symbols-outlined text-[13px] font-bold">verified</span>
</div>
</div>`;

  if (oldStampPattern.test(content)) {
    content = content.replace(oldStampPattern, newStampHtml);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated report crest stamp in ${file}`);
  }
});

// 4. Update public site top-left brand logos and top-right profile
const publicFiles = [
  'prototype/public/home.html',
  'prototype/public/home-v2.html',
  'prototype/public/apply.html',
  'prototype/public/mobile-home.html',
  'prototype/public/mobile-apply.html'
];

publicFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  const rel = '../';
  const crestPath = `${rel}assets/carepoint-crest.png`;

  // Top-left header brand placeholder icon:
  const oldBrandLogo = /<div class="w-11 h-11 rounded-xl bg-primary text-on-primary flex items-center justify-center font-headline-sm font-bold shadow-sm transition-transform group-hover:scale-105">\s*<span class="material-symbols-outlined text-secondary-fixed">school<\/span>\s*<\/div>/gi;

  const newBrandLogo = `<div class="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm border border-outline-variant/30 p-0.5 transition-transform group-hover:scale-105 shrink-0 overflow-hidden">
<img src="${crestPath}" alt="Carepoint Community School Crest" class="w-full h-full object-contain rounded-lg"/>
</div>`;

  content = content.replace(oldBrandLogo, newBrandLogo);

  // Mobile top-left brand logo
  const oldMobileBrandLogo = /<div class="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-headline-sm font-bold shadow-sm">\s*<span class="material-symbols-outlined text-secondary-fixed">school<\/span>\s*<\/div>/gi;

  const newMobileBrandLogo = `<div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-outline-variant/30 p-0.5 shrink-0 overflow-hidden">
<img src="${crestPath}" alt="Carepoint Community School Crest" class="w-full h-full object-contain rounded-lg"/>
</div>`;

  content = content.replace(oldMobileBrandLogo, newMobileBrandLogo);

  // Top-right profile button on public site:
  // Update to use school crest avatar
  const publicAvatarRegex = /(<button id="portal-menu-button"[^>]*>\s*<img [^>]*src=")[^"]*(")/gi;
  content = content.replace(publicAvatarRegex, `$1${crestPath}$2`);

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated public brand & profile in ${file}`);
});

// 5. Update index.html
const indexHtmlPath = 'prototype/index.html';
if (fs.existsSync(indexHtmlPath)) {
  let content = fs.readFileSync(indexHtmlPath, 'utf8');
  const oldIndexLogo = /<div class="w-12 h-12 rounded-xl bg-white\/10 flex items-center justify-center backdrop-blur-md">\s*<span class="material-symbols-outlined text-\[30px\] text-white">school<\/span>\s*<\/div>/gi;
  const newIndexLogo = `<div class="w-14 h-14 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-lg border border-white/20 shrink-0">
            <img src="assets/carepoint-crest.png" alt="Carepoint Community School Crest" class="w-full h-full object-contain rounded-xl"/>
          </div>`;
  content = content.replace(oldIndexLogo, newIndexLogo);
  fs.writeFileSync(indexHtmlPath, content, 'utf8');
  console.log('Updated prototype/index.html header crest');
}
