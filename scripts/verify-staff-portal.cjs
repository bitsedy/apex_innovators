const fs = require('fs');
const path = require('path');

console.log('=== VERIFYING STAFF PORTAL COMPREHENSIVE SCREENING & FIXES ===\n');

let passed = 0;
let total = 0;

function assert(condition, desc) {
  total++;
  if (condition) {
    passed++;
    console.log(`[PASS] ${desc}`);
  } else {
    console.error(`[FAIL] ${desc}`);
  }
}

// 1. approvals.html Category Filtering Check
const approvals = fs.readFileSync('prototype/staff/approvals.html', 'utf8');
assert(approvals.includes('data-filter="Mark Changes"'), 'approvals.html: Filter chip data-filter="Mark Changes" present');
assert(approvals.includes('data-filter="Health Alerts"'), 'approvals.html: Filter chip data-filter="Health Alerts" present');
assert(approvals.includes('data-filter="Lesson Plans"'), 'approvals.html: Filter chip data-filter="Lesson Plans" present');
assert(approvals.includes('data-filter="Timetable Changes"'), 'approvals.html: Filter chip data-filter="Timetable Changes" present');
assert(approvals.includes('data-filter="Behavior Notes"'), 'approvals.html: Filter chip data-filter="Behavior Notes" present');

// 2. gradebook.html SBA Formula and Visual Bar
const gradebook = fs.readFileSync('prototype/staff/gradebook.html', 'utf8');
assert(gradebook.includes('30% + 30% + 40%'), 'gradebook.html: SBA Formula displays 30% + 30% + 40%');
assert(gradebook.includes('style="width: 30%;"') && gradebook.includes('style="width: 40%;"'), 'gradebook.html: Visual bar widths aligned to 30%, 30%, 40%');
assert(gradebook.includes('gradeSpan.innerText = \'Grade 1\''), 'gradebook.html: Dynamic grade badge recalculation present');

// 3. health.html Incident Dispatch
const health = fs.readFileSync('prototype/staff/health.html', 'utf8');
assert(health.includes('id="health-history-list"'), 'health.html: Container id="health-history-list" present');
assert(health.includes('Nurse Faustina Asante'), 'health.html: Licensed nurse Nurse Faustina Asante present');
assert(health.includes('historyList.insertBefore(newCard, historyList.firstChild)'), 'health.html: Incident dynamically added to clinic history');

// 4. mobile-dashboard.html
const mobDash = fs.readFileSync('prototype/staff/mobile-dashboard.html', 'utf8');
assert(mobDash.includes('id="confettiBtn"'), 'mobile-dashboard.html: id="confettiBtn" exists in DOM');
assert(mobDash.includes('id="teacherToast"'), 'mobile-dashboard.html: id="teacherToast" exists in DOM');
assert(mobDash.includes('Basic 2 Sunflower'), 'mobile-dashboard.html: Persona class is Basic 2 Sunflower');
assert(!mobDash.includes('Class 4 Gold'), 'mobile-dashboard.html: No residual "Class 4 Gold" found');

// 5. mobile-gradebook.html
const mobGrade = fs.readFileSync('prototype/staff/mobile-gradebook.html', 'utf8');
assert(mobGrade.includes('26 / 28 Graded'), 'mobile-gradebook.html: Shows 26 / 28 Graded');
assert(mobGrade.includes('All Students (28)'), 'mobile-gradebook.html: Shows All Students (28)');
assert(mobGrade.includes('CP-2023-0482'), 'mobile-gradebook.html: Kofi Mensah ID updated to CP-2023-0482');

// 6. mobile-approvals.html
const mobApp = fs.readFileSync('prototype/staff/mobile-approvals.html', 'utf8');
assert(mobApp.includes('GH₵ 420.00'), 'mobile-approvals.html: Currency formatted as GH₵ 420.00');
assert(mobApp.includes('Basic 2 Sunflower • 28 Students'), 'mobile-approvals.html: Class name aligned to Basic 2 Sunflower');

// 7. messages.html & mobile-messages.html
const msg = fs.readFileSync('prototype/staff/messages.html', 'utf8');
const mobMsg = fs.readFileSync('prototype/staff/mobile-messages.html', 'utf8');
assert(msg.includes('Nurse Faustina Asante') && !msg.includes('Nurse Akua Baidoo'), 'messages.html: Unified clinic nurse to Nurse Faustina Asante');
assert(mobMsg.includes('Nurse Faustina Asante') && !mobMsg.includes('Nurse Akua Baidoo'), 'mobile-messages.html: Unified clinic nurse to Nurse Faustina Asante');
assert(mobMsg.includes('filterMobileThreads(cat, btnEl)'), 'mobile-messages.html: filterMobileThreads event handling hardened');

// 8. mobile-health.html
const mobHealth = fs.readFileSync('prototype/staff/mobile-health.html', 'utf8');
assert(mobHealth.includes('Nurse Faustina Asante') && !mobHealth.includes('Nurse M. Quaye'), 'mobile-health.html: Attending nurse unified to Nurse Faustina Asante');
assert(mobHealth.includes('role="dialog"') && mobHealth.includes('aria-modal="true"'), 'mobile-health.html: referralModal has proper dialog and modal attributes');
assert(mobHealth.includes("e.key === 'Escape'"), 'mobile-health.html: Escape key dismisses referralModal');

// 9. mobile-timetable.html
const mobTime = fs.readFileSync('prototype/staff/mobile-timetable.html', 'utf8');
assert(mobTime.includes('Room B-04') && !mobTime.includes('Room 4B'), 'mobile-timetable.html: Room updated to Room B-04');
assert(!mobTime.includes('Class 4 Gold'), 'mobile-timetable.html: No residual Class 4 Gold');

console.log('\n======================================================');
console.log(`STAFF PORTAL VERIFICATION: ${passed} / ${total} CHECKS PASSED (${Math.round(passed/total*100)}%)`);
console.log('======================================================');

if (passed === total) {
  process.exit(0);
} else {
  process.exit(1);
}
