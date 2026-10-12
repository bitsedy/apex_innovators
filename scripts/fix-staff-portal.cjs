const fs = require('fs');
const path = require('path');

console.log('=== REMEDIATING SCREENED ISSUES ACROSS STAFF PORTAL ===\n');

// 1. Fix prototype/staff/approvals.html category chips filter bug
const approvalsPath = path.join(__dirname, '..', 'prototype', 'staff', 'approvals.html');
if (fs.existsSync(approvalsPath)) {
  let content = fs.readFileSync(approvalsPath, 'utf8');

  // Fix filter chip data-filter attributes to match row data-category attributes exactly
  content = content.replace('data-filter="Grade Overrides"', 'data-filter="Mark Changes"');
  content = content.replace('data-filter="Health Escalation"', 'data-filter="Health Alerts"');
  content = content.replace('data-filter="Weekly Work Report"', 'data-filter="Lesson Plans"');
  content = content.replace('data-filter="Timetable Amendment"', 'data-filter="Timetable Changes"');
  content = content.replace('data-filter="Disciplinary / Welfare Remark"', 'data-filter="Behavior Notes"');

  // Also support case-insensitive/flexible match in JS applyFilters as defensive hardening
  const oldApplyFilters = `      const matchCategory = (activeCategory === 'all' || rowCategory === activeCategory);`;
  const newApplyFilters = `      const matchCategory = (activeCategory === 'all' || rowCategory.toLowerCase() === activeCategory.toLowerCase());`;
  if (content.includes(oldApplyFilters)) {
    content = content.replace(oldApplyFilters, newApplyFilters);
  }

  fs.writeFileSync(approvalsPath, content, 'utf8');
  console.log('[FIXED] prototype/staff/approvals.html: Category filter chips synchronized with row data-category');
}

// 2. Fix prototype/staff/gradebook.html SBA progress bar widths
const gradebookPath = path.join(__dirname, '..', 'prototype', 'staff', 'gradebook.html');
if (fs.existsSync(gradebookPath)) {
  let content = fs.readFileSync(gradebookPath, 'utf8');

  content = content.replace(
    `<div class="bg-amber-500 h-full" style="width: 20%;"></div>\r\n<div class="bg-primary h-full" style="width: 50%;"></div>`,
    `<div class="bg-amber-500 h-full" style="width: 30%;"></div>\r\n<div class="bg-primary h-full" style="width: 40%;"></div>`
  );
  content = content.replace(
    `<div class="bg-amber-500 h-full" style="width: 20%;"></div>\n<div class="bg-primary h-full" style="width: 50%;"></div>`,
    `<div class="bg-amber-500 h-full" style="width: 30%;"></div>\n<div class="bg-primary h-full" style="width: 40%;"></div>`
  );

  fs.writeFileSync(gradebookPath, content, 'utf8');
  console.log('[FIXED] prototype/staff/gradebook.html: Aligned SBA visual bar to 30% + 30% + 40%');
}

// 3. Fix prototype/staff/mobile-dashboard.html
const mobDashPath = path.join(__dirname, '..', 'prototype', 'staff', 'mobile-dashboard.html');
if (fs.existsSync(mobDashPath)) {
  let content = fs.readFileSync(mobDashPath, 'utf8');

  // Replace residual Class 4 Gold with Basic 2 Sunflower
  content = content.replace(/Room 4 Gold • 30 Present/g, 'Room B-04 • 28 Present');
  content = content.replace(/Room 4B • Workbook Exercise 3A Review/g, 'Room B-04 • Workbook Exercise 2A Review');
  content = content.replace(/Room 4 Gold • Oral Exam Preparation &amp; Folktales/g, 'Room B-04 • Oral Reading &amp; Folktales');
  content = content.replace(/<span class="font-label-sm text-label-sm text-on-surface-variant">Class 4 Gold<\/span>/g, '<span class="font-label-sm text-label-sm text-on-surface-variant">Basic 2 Sunflower</span>');
  content = content.replace(/'🌟 Class 4 Gold is shining brightly today!'/g, "'🌟 Basic 2 Sunflower is shining brightly today!'");

  // Add #confettiBtn inspiration button in Classroom Pulse header
  const oldPulseHeader = `<div class="flex items-center justify-between">\r\n<span class="font-headline-sm text-headline-sm text-primary">Classroom Pulse</span>`;
  const newPulseHeader = `<div class="flex items-center justify-between">\r\n<div class="flex items-center gap-2"><span class="font-headline-sm text-headline-sm text-primary">Classroom Pulse</span><button id="confettiBtn" type="button" class="p-1 rounded-full text-secondary hover:bg-secondary-fixed/30 transition-transform active:scale-125 cursor-pointer" title="Teacher Inspiration & Affirmation" aria-label="Inspiration Affirmation"><span class="material-symbols-outlined text-[18px]">auto_awesome</span></button></div>`;
  
  if (content.includes(oldPulseHeader)) {
    content = content.replace(oldPulseHeader, newPulseHeader);
  } else {
    const oldPulseHeaderLF = `<div class="flex items-center justify-between">\n<span class="font-headline-sm text-headline-sm text-primary">Classroom Pulse</span>`;
    const newPulseHeaderLF = `<div class="flex items-center justify-between">\n<div class="flex items-center gap-2"><span class="font-headline-sm text-headline-sm text-primary">Classroom Pulse</span><button id="confettiBtn" type="button" class="p-1 rounded-full text-secondary hover:bg-secondary-fixed/30 transition-transform active:scale-125 cursor-pointer" title="Teacher Inspiration & Affirmation" aria-label="Inspiration Affirmation"><span class="material-symbols-outlined text-[18px]">auto_awesome</span></button></div>`;
    content = content.replace(oldPulseHeaderLF, newPulseHeaderLF);
  }

  fs.writeFileSync(mobDashPath, content, 'utf8');
  console.log('[FIXED] prototype/staff/mobile-dashboard.html: Restored #confettiBtn and unified Basic 2 Sunflower persona');
}

// 4. Fix prototype/staff/mobile-gradebook.html
const mobGradePath = path.join(__dirname, '..', 'prototype', 'staff', 'mobile-gradebook.html');
if (fs.existsSync(mobGradePath)) {
  let content = fs.readFileSync(mobGradePath, 'utf8');

  content = content.replace('28 / 32 Graded', '26 / 28 Graded');
  content = content.replace('All Students (32)', 'All Students (28)');
  content = content.replace('Pending (4)', 'Pending (2)');
  content = content.replace('ID: CPS-2021-048 • Index #04', 'ID: CP-2023-0482 • Roll #01');

  fs.writeFileSync(mobGradePath, content, 'utf8');
  console.log('[FIXED] prototype/staff/mobile-gradebook.html: Updated counts (28 enrolled) and student ID');
}

// 5. Fix prototype/staff/mobile-approvals.html
const mobAppPath = path.join(__dirname, '..', 'prototype', 'staff', 'mobile-approvals.html');
if (fs.existsSync(mobAppPath)) {
  let content = fs.readFileSync(mobAppPath, 'utf8');

  // Fix currency symbol
  content = content.replace(/GHS 420\.00/g, 'GH₵ 420.00');

  // Fix Class persona leak
  content = content.replace('Class 4 Gold • 34 Students • Legon Eco Walk &amp; Arboretum Tour', 'Basic 2 Sunflower • 28 Students • Legon Eco Walk &amp; Arboretum Tour');
  content = content.replace('Class parent consent forms logged (32/34 confirmed)', 'Class parent consent forms logged (26/28 confirmed)');

  fs.writeFileSync(mobAppPath, content, 'utf8');
  console.log('[FIXED] prototype/staff/mobile-approvals.html: Updated currency to GH₵ and aligned class size to 28');
}

// 6. Fix prototype/staff/messages.html and mobile-messages.html
const msgPath = path.join(__dirname, '..', 'prototype', 'staff', 'messages.html');
if (fs.existsSync(msgPath)) {
  let content = fs.readFileSync(msgPath, 'utf8');

  content = content.replace(/Nurse Akua Baidoo/g, 'Nurse Faustina Asante');
  content = content.replace(/baidoo/g, 'asante');
  content = content.replace(/AB\b/g, 'FA');

  fs.writeFileSync(msgPath, content, 'utf8');
  console.log('[FIXED] prototype/staff/messages.html: Unified clinic nurse to Nurse Faustina Asante, RN');
}

const mobMsgPath = path.join(__dirname, '..', 'prototype', 'staff', 'mobile-messages.html');
if (fs.existsSync(mobMsgPath)) {
  let content = fs.readFileSync(mobMsgPath, 'utf8');

  content = content.replace(/Nurse Akua Baidoo/g, 'Nurse Faustina Asante');
  
  // Safe event handling for filterMobileThreads
  content = content.replace(
    'function filterMobileThreads(cat) {',
    'function filterMobileThreads(cat, btnEl) {'
  );
  content = content.replace(
    `event.target.classList.add('active', 'bg-primary', 'text-on-primary');\r\n      event.target.classList.remove('bg-surface-container', 'text-on-surface');`,
    `const targetBtn = btnEl || (typeof event !== 'undefined' && event ? event.currentTarget || event.target : null);\r\n      if (targetBtn) {\r\n        targetBtn.classList.add('active', 'bg-primary', 'text-on-primary');\r\n        targetBtn.classList.remove('bg-surface-container', 'text-on-surface');\r\n      }`
  );
  content = content.replace(
    `event.target.classList.add('active', 'bg-primary', 'text-on-primary');\n      event.target.classList.remove('bg-surface-container', 'text-on-surface');`,
    `const targetBtn = btnEl || (typeof event !== 'undefined' && event ? event.currentTarget || event.target : null);\n      if (targetBtn) {\n        targetBtn.classList.add('active', 'bg-primary', 'text-on-primary');\n        targetBtn.classList.remove('bg-surface-container', 'text-on-surface');\n      }`
  );
  
  // Update button inline calls to pass 'this'
  content = content.replace(/filterMobileThreads\('all'\)/g, "filterMobileThreads('all', this)");
  content = content.replace(/filterMobileThreads\('parents'\)/g, "filterMobileThreads('parents', this)");
  content = content.replace(/filterMobileThreads\('admin'\)/g, "filterMobileThreads('admin', this)");
  content = content.replace(/filterMobileThreads\('clinic'\)/g, "filterMobileThreads('clinic', this)");

  fs.writeFileSync(mobMsgPath, content, 'utf8');
  console.log('[FIXED] prototype/staff/mobile-messages.html: Unified nurse persona and hardened filterMobileThreads event handling');
}

// 7. Fix prototype/staff/mobile-health.html
const mobHealthPath = path.join(__dirname, '..', 'prototype', 'staff', 'mobile-health.html');
if (fs.existsSync(mobHealthPath)) {
  let content = fs.readFileSync(mobHealthPath, 'utf8');

  content = content.replace(/Assigned: Class 4 Gold • 28 Students/g, 'Assigned: Basic 2 Sunflower • 28 Students');
  content = content.replace(/>Class 4G</g, '>Basic 2<');
  content = content.replace(/Select Student \(Class 4 Gold\) \*/g, 'Select Student (Basic 2 Sunflower) *');
  content = content.replace(/Nurse M\. Quaye/g, 'Nurse Faustina Asante');
  content = content.replace(/Nurse Quaye/g, 'Nurse Faustina Asante');

  // Add backdrop click dismissal & dialog semantics to referralModal
  content = content.replace(
    'id="referralModal">',
    'id="referralModal" role="dialog" aria-modal="true" aria-labelledby="referral-modal-title" onclick="if(event.target===this){this.classList.add(\'hidden\');this.classList.remove(\'flex\');}">'
  );
  content = content.replace(
    '<h3 class="font-headline-sm text-headline-sm text-primary">Clinic Check Referral Form</h3>',
    '<h3 class="font-headline-sm text-headline-sm text-primary" id="referral-modal-title">Clinic Check Referral Form</h3>'
  );

  // Add Escape key handler
  if (!content.includes("e.key === 'Escape'")) {
    const escListener = `
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('referralModal');
      if (modal && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }
  });`;
    content = content.replace('</script>', escListener + '\n</script>');
  }

  fs.writeFileSync(mobHealthPath, content, 'utf8');
  console.log('[FIXED] prototype/staff/mobile-health.html: Unified nurse/class personas, added modal backdrop and Escape key dismissal');
}

// 8. Fix prototype/staff/mobile-timetable.html
const mobTimePath = path.join(__dirname, '..', 'prototype', 'staff', 'mobile-timetable.html');
if (fs.existsSync(mobTimePath)) {
  let content = fs.readFileSync(mobTimePath, 'utf8');

  content = content.replace(/Room 4B/g, 'Room B-04');
  content = content.replace(/Class 4 Gold/g, 'Basic 2 Sunflower');

  fs.writeFileSync(mobTimePath, content, 'utf8');
  console.log('[FIXED] prototype/staff/mobile-timetable.html: Replaced Class 4 Gold / Room 4B with Basic 2 Sunflower / Room B-04');
}

console.log('\nAll staff portal updates remediated successfully!');
