const fs = require('fs');
const path = require('path');

// 1. Update 5 Mobile Login Pages
const mobileLoginFiles = [
  'prototype/admin/mobile-login.html',
  'prototype/staff/mobile-login.html',
  'prototype/parent/mobile-login.html',
  'prototype/gate/mobile-login.html',
  'prototype/sysadmin/mobile-login.html'
];

mobileLoginFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  const oldBox = /<div class="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center shadow-sm relative mb-2">\s*<span class="material-symbols-outlined text-primary text-3xl"[^>]*>school<\/span>\s*<span class="absolute -bottom-1 -right-1 w-4 h-4 bg-tertiary-fixed-dim rounded-full flex items-center justify-center text-tertiary shadow-sm">\s*<span class="material-symbols-outlined text-\[10px\] font-bold">verified<\/span>\s*<\/span>\s*<\/div>/gi;

  const newBox = `<div class="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-md relative mb-2 p-1 border border-outline-variant/30">
        <img src="../assets/carepoint-crest.png" alt="Carepoint Community School Crest" class="w-full h-full object-contain rounded-xl"/>
        <span class="absolute -bottom-1 -right-1 w-5 h-5 bg-tertiary-fixed-dim rounded-full flex items-center justify-center text-tertiary shadow-sm">
          <span class="material-symbols-outlined text-[11px] font-bold">verified</span>
        </span>
      </div>`;

  if (oldBox.test(content)) {
    content = content.replace(oldBox, newBox);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated mobile login crest in ${file}`);
  }
});

// 2. Update staff/* desktop templates sidebar logo (replace letter "C" with crest)
const staffFiles = [
  'prototype/staff/dashboard.html',
  'prototype/staff/attendance.html',
  'prototype/staff/gradebook.html',
  'prototype/staff/health.html',
  'prototype/staff/messages.html',
  'prototype/staff/timetable.html',
  'prototype/staff/approvals.html'
];

staffFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  const oldStaffBrand = /<div class="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-on-primary font-headline-sm font-bold shadow-sm">C<\/div>/g;
  const newStaffBrand = `<div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-outline-variant/30 p-1 shrink-0 overflow-hidden">
        <img src="../assets/carepoint-crest.png" alt="Carepoint Community School" class="w-full h-full object-contain rounded-lg"/>
      </div>`;

  if (oldStaffBrand.test(content)) {
    content = content.replace(oldStaffBrand, newStaffBrand);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated staff sidebar brand in ${file}`);
  }
});

// 3. Update admin/* desktop templates sidebar logo (replace school icon with crest)
const adminFiles = [
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

adminFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  const oldAdminBrand = /<div class="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary shadow-sm">\s*<span class="material-symbols-outlined text-\[24px\]">school<\/span>\s*<\/div>/gi;
  const newAdminBrand = `<div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-outline-variant/30 p-1 shrink-0 overflow-hidden">
  <img src="../assets/carepoint-crest.png" alt="Carepoint Community School Crest" class="w-full h-full object-contain rounded-lg"/>
</div>`;

  if (oldAdminBrand.test(content)) {
    content = content.replace(oldAdminBrand, newAdminBrand);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated admin sidebar brand in ${file}`);
  }
});

// 4. Update prototype/carepoint-app.js
const appJsPath = 'prototype/carepoint-app.js';
if (fs.existsSync(appJsPath)) {
  let content = fs.readFileSync(appJsPath, 'utf8');

  // In initHeaderProfileImages, set public profile src to carepoint-crest.png
  content = content.replace(
    /public:\s*{\s*name:\s*'Carepoint Community School',\s*initials:\s*'CP',\s*src:\s*[^}]+}/gi,
    `public: {
      name: 'Carepoint Community School',
      initials: 'CP',
      src: \`\${relRoot}assets/carepoint-crest.png\`
    }`
  );

  // In createDynamicPortalDrawer, replace icon placeholder in header with crest
  content = content.replace(
    /<div class="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-sm">\s*<span class="material-symbols-outlined text-\[22px\]">\${cfg\.icon}<\/span>\s*<\/div>/gi,
    `<div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-outline-variant/30 p-1 shrink-0 overflow-hidden">
            <img src="\${rel}assets/carepoint-crest.png" alt="Carepoint Crest" class="w-full h-full object-contain rounded-lg"/>
          </div>`
  );

  fs.writeFileSync(appJsPath, content, 'utf8');
  console.log('Updated prototype/carepoint-app.js dynamic drawer and public profile image');
}

// 5. In public/home.html Section 4 (The Carepoint Philosophy / About Us), feature the official school signboard image
const homePath = 'prototype/public/home.html';
if (fs.existsSync(homePath)) {
  let content = fs.readFileSync(homePath, 'utf8');
  // Add a showcase banner of the official school profile image in the Philosophy section
  if (!content.includes('carepoint-school-profile.jpg')) {
    const philosophyHeader = '<div class="text-center max-w-3xl mx-auto flex flex-col gap-3">';
    const schoolShowcase = `<div class="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white mb-6">
        <div class="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-surface-container-low">
          <img src="../assets/carepoint-school-profile.jpg" alt="Carepoint Community School Official Signboard & Profile" class="w-full h-full object-cover object-center shadow-inner hover:scale-[1.02] transition-transform duration-700"/>
          <div class="absolute bottom-3 right-4 px-3 py-1 rounded-full bg-primary/90 text-white font-label-sm text-xs font-semibold backdrop-blur-md shadow-md flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
            <span>Official Campus Insignia</span>
          </div>
        </div>
      </div>\n      ` + philosophyHeader;
    content = content.replace(philosophyHeader, schoolShowcase);
    fs.writeFileSync(homePath, content, 'utf8');
    console.log('Added official school profile signboard showcase to prototype/public/home.html');
  }
}

// 6. In prototype/index.html, feature the official school signboard image
const indexPath = 'prototype/index.html';
if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');
  if (!content.includes('carepoint-school-profile.jpg')) {
    const heroMarker = '<!-- System Architecture Overview Banner -->';
    const indexShowcase = `<div class="max-w-6xl mx-auto px-6 -mt-6 mb-8 relative z-20">
      <div class="rounded-2xl overflow-hidden shadow-xl border-2 border-outline-variant/30 bg-white p-2">
        <div class="relative w-full aspect-[16/9] md:aspect-[24/9] rounded-xl overflow-hidden bg-slate-100">
          <img src="assets/carepoint-school-profile.jpg" alt="Carepoint Community School Official Profile" class="w-full h-full object-cover object-center"/>
          <div class="absolute bottom-3 left-4 px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold backdrop-blur-md shadow flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[14px] text-tertiary-fixed">verified</span>
            <span>Official Carepoint Community School Profile &amp; Campus Board</span>
          </div>
        </div>
      </div>
    </div>\n    ` + heroMarker;
    content = content.replace(heroMarker, indexShowcase);
    fs.writeFileSync(indexPath, content, 'utf8');
    console.log('Added official school profile signboard to prototype/index.html');
  }
}
