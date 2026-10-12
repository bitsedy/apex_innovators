const fs = require('fs');

// 1. staff/mobile-attendance.html
const mobAttPath = 'prototype/staff/mobile-attendance.html';
if (fs.existsSync(mobAttPath)) {
  let content = fs.readFileSync(mobAttPath, 'utf8');
  content = content.replace('Class 4 Gold', 'Basic 2 Sunflower');
  content = content.replace('G. Baafi (Staff #014)', 'Mrs. Beatrice Abbey (Staff #FAC-014)');
  content = content.replace('>30</span>\r\n</div>\r\n<div class="bg-surface rounded-lg p-space-xs text-center shadow-sm">\r\n<div class="flex items-center justify-center gap-1 text-secondary">\r\n<span class="material-symbols-outlined text-[15px]" style="font-variation-settings: \'FILL\' 1;">cancel</span>\r\n<span class="font-label-sm text-label-sm font-bold uppercase">Absent</span>\r\n</div>\r\n<span class="font-headline-md text-headline-md text-secondary font-extrabold block" id="absent-count">2</span>',
    '>26</span>\r\n</div>\r\n<div class="bg-surface rounded-lg p-space-xs text-center shadow-sm">\r\n<div class="flex items-center justify-center gap-1 text-secondary">\r\n<span class="material-symbols-outlined text-[15px]" style="font-variation-settings: \'FILL\' 1;">cancel</span>\r\n<span class="font-label-sm text-label-sm font-bold uppercase">Absent</span>\r\n</div>\r\n<span class="font-headline-md text-headline-md text-secondary font-extrabold block" id="absent-count">2</span>');
  content = content.replace('>30</span>\n</div>\n<div class="bg-surface rounded-lg p-space-xs text-center shadow-sm">\n<div class="flex items-center justify-center gap-1 text-secondary">\n<span class="material-symbols-outlined text-[15px]" style="font-variation-settings: \'FILL\' 1;">cancel</span>\n<span class="font-label-sm text-label-sm font-bold uppercase">Absent</span>\n</div>\n<span class="font-headline-md text-headline-md text-secondary font-extrabold block" id="absent-count">2</span>',
    '>26</span>\n</div>\n<div class="bg-surface rounded-lg p-space-xs text-center shadow-sm">\n<div class="flex items-center justify-center gap-1 text-secondary">\n<span class="material-symbols-outlined text-[15px]" style="font-variation-settings: \'FILL\' 1;">cancel</span>\n<span class="font-label-sm text-label-sm font-bold uppercase">Absent</span>\n</div>\n<span class="font-headline-md text-headline-md text-secondary font-extrabold block" id="absent-count">2</span>');
  fs.writeFileSync(mobAttPath, content, 'utf8');
  console.log('Fixed staff/mobile-attendance.html persona & class');
}

// 2. staff/mobile-gradebook.html
const mobGradePath = 'prototype/staff/mobile-gradebook.html';
if (fs.existsSync(mobGradePath)) {
  let content = fs.readFileSync(mobGradePath, 'utf8');
  content = content.replace('Basic 4 Gold', 'Basic 2 Sunflower');
  content = content.replace('32 Enrolled', '28 Enrolled');
  fs.writeFileSync(mobGradePath, content, 'utf8');
  console.log('Fixed staff/mobile-gradebook.html class & count');
}

// 3. gate/mobile-alert.html
const mobAlertPath = 'prototype/gate/mobile-alert.html';
if (fs.existsSync(mobAlertPath)) {
  let content = fs.readFileSync(mobAlertPath, 'utf8');
  content = content.replace(/Kwadwo Osei/g, 'Kofi Mensah');
  content = content.replace(/CP-2021-062/g, 'CP-2023-0482');
  content = content.replace(/Class 4 Gold/g, 'Basic 2 Sunflower');
  content = content.replace(/Mr\. Samuel Darko/g, 'Mr. Kwame Antwi');
  content = content.replace('Asserts identity as maternal uncle', 'Asserts identity as third-party collector (Unregistered)');
  fs.writeFileSync(mobAlertPath, content, 'utf8');
  console.log('Fixed gate/mobile-alert.html student & intruder persona');
}

// 4. admin/wards.html Kofi Mensah ID
const wardsPath = 'prototype/admin/wards.html';
if (fs.existsSync(wardsPath)) {
  let content = fs.readFileSync(wardsPath, 'utf8');
  if (content.includes('CP-2018-0941')) {
    content = content.replace(/CP-2018-0941/g, 'CP-2023-0482');
    fs.writeFileSync(wardsPath, content, 'utf8');
    console.log('Fixed admin/wards.html student ID to CP-2023-0482');
  }
}
