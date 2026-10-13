const fs = require('fs');
const path = require('path');
const http = require('http');

const root = path.resolve(__dirname, '..');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function assert(condition, description) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ✔ ${description}`);
  } else {
    failedChecks++;
    console.error(`  ✖ FAIL: ${description}`);
  }
}

console.log('\n=== CAREPOINT PROGRESSIVE DISCLOSURE VERIFICATION ===\n');

// 1. Verify CSS styles in carepoint-hud.css
console.log('1. Auditing Progressive Disclosure CSS Styles (prototype/carepoint-hud.css)...');
const cssPath = path.join(root, 'prototype', 'carepoint-hud.css');
assert(fs.existsSync(cssPath), 'carepoint-hud.css exists');
const cssContent = fs.readFileSync(cssPath, 'utf8');

assert(cssContent.includes('.carepoint-disclosure'), 'Defines .carepoint-disclosure class');
assert(cssContent.includes('.carepoint-disclosure > summary'), 'Defines .carepoint-disclosure summary trigger styling');
assert(cssContent.includes('.carepoint-disclosure[open] > summary'), 'Defines active/open state for summary trigger');
assert(cssContent.includes('.carepoint-disclosure-content'), 'Defines .carepoint-disclosure-content animated panel');
assert(cssContent.includes('.carepoint-expandable-text'), 'Defines .carepoint-expandable-text base class');
assert(cssContent.includes('.carepoint-expandable-text.carepoint-clamped'), 'Defines .carepoint-clamped line-clamp styling');
assert(cssContent.includes('.carepoint-expand-trigger'), 'Defines .carepoint-expand-trigger button styling');

// 2. Verify JS implementation in carepoint-app.js
console.log('\n2. Auditing Progressive Disclosure Engine (prototype/carepoint-app.js)...');
const jsPath = path.join(root, 'prototype', 'carepoint-app.js');
assert(fs.existsSync(jsPath), 'carepoint-app.js exists');
const jsContent = fs.readFileSync(jsPath, 'utf8');

assert(jsContent.includes('export function initCarepointProgressiveDisclosure()'), 'Exports initCarepointProgressiveDisclosure function');
assert(jsContent.includes('.carepoint-expand-trigger'), 'Binds delegated listener to .carepoint-expand-trigger');
assert(jsContent.includes('targetText.classList.toggle') || jsContent.includes('targetText.classList.remove(\'carepoint-clamped\')'), 'Implements clamping toggle');
assert(jsContent.includes('aria-expanded'), 'Manages accessible aria-expanded attribute');
assert(jsContent.includes('initCarepointProgressiveDisclosure()'), 'Auto-initializes in DOM ready sequence');

// 3. Verify markup across converted portal files
console.log('\n3. Auditing HTML Progressive Disclosure Markup...');
const filesToCheck = [
  { file: 'prototype/admin/decision.html', pattern: 'carepoint-disclosure', desc: 'admin/decision has carepoint-disclosure' },
  { file: 'prototype/admin/decision.html', pattern: 'carepoint-expand-trigger', desc: 'admin/decision has expandable triggers' },
  { file: 'prototype/gate/alert.html', pattern: 'carepoint-disclosure', desc: 'gate/alert has carepoint-disclosure' },
  { file: 'prototype/gate/scan.html', pattern: 'carepoint-disclosure', desc: 'gate/scan has carepoint-disclosure' },
  { file: 'prototype/sysadmin/tracker.html', pattern: 'carepoint-disclosure', desc: 'sysadmin/tracker has carepoint-disclosure' },
  { file: 'prototype/sysadmin/integrations.html', pattern: 'carepoint-disclosure', desc: 'sysadmin/integrations has carepoint-disclosure' },
  { file: 'prototype/sysadmin/dashboard.html', pattern: 'carepoint-disclosure', desc: 'sysadmin/dashboard has carepoint-disclosure' },
  { file: 'prototype/admin/dashboard.html', pattern: 'carepoint-disclosure', desc: 'admin/dashboard has carepoint-disclosure' },
  { file: 'prototype/admin/wards.html', pattern: 'carepoint-expand-trigger', desc: 'admin/wards has expandable triggers' },
  { file: 'prototype/admin/inbox.html', pattern: 'carepoint-disclosure', desc: 'admin/inbox has carepoint-disclosure' },
  { file: 'prototype/admin/admissions.html', pattern: 'carepoint-disclosure', desc: 'admin/admissions has carepoint-disclosure' },
  { file: 'prototype/staff/attendance.html', pattern: 'carepoint-disclosure', desc: 'staff/attendance has carepoint-disclosure' },
  { file: 'prototype/staff/gradebook.html', pattern: 'carepoint-disclosure', desc: 'staff/gradebook has carepoint-disclosure' },
  { file: 'prototype/staff/timetable.html', pattern: 'carepoint-disclosure', desc: 'staff/timetable has carepoint-disclosure' },
  { file: 'prototype/parent/dashboard.html', pattern: 'carepoint-expand-trigger', desc: 'parent/dashboard has expandable triggers' },
  { file: 'prototype/parent/dashboard.html', pattern: 'carepoint-disclosure', desc: 'parent/dashboard has carepoint-disclosure' },
  { file: 'prototype/parent/messages.html', pattern: 'carepoint-disclosure', desc: 'parent/messages has carepoint-disclosure' },
  { file: 'prototype/parent/pickup.html', pattern: 'carepoint-disclosure', desc: 'parent/pickup has carepoint-disclosure' },
  { file: 'prototype/parent/academics.html', pattern: 'carepoint-expand-trigger', desc: 'parent/academics has expandable triggers' }
];

filesToCheck.forEach(item => {
  const p = path.join(root, item.file);
  const exists = fs.existsSync(p);
  assert(exists, `${item.file} exists`);
  if (exists) {
    const content = fs.readFileSync(p, 'utf8');
    assert(content.includes(item.pattern), item.desc);
  }
});

// 4. Check live HTTP responses for critical routes
console.log('\n4. Checking Live HTTP Endpoints on http://localhost:3000...');
const routesToTest = [
  '/admin/decision.html',
  '/gate/alert.html',
  '/gate/scan.html',
  '/sysadmin/dashboard.html',
  '/parent/dashboard.html',
  '/staff/attendance.html'
];

let pendingHttp = routesToTest.length;

routesToTest.forEach(route => {
  const req = http.get(`http://localhost:3000${route}`, res => {
    assert(res.statusCode === 200, `GET ${route} returned HTTP ${res.statusCode}`);
    pendingHttp--;
    if (pendingHttp === 0) finish();
  });
  req.on('error', err => {
    assert(false, `GET ${route} failed: ${err.message}`);
    pendingHttp--;
    if (pendingHttp === 0) finish();
  });
});

function finish() {
  console.log('\n----------------------------------------------------');
  console.log(`TOTAL CHECKS: ${totalChecks}`);
  console.log(`PASSED: ${passedChecks}`);
  console.log(`FAILED: ${failedChecks}`);
  console.log('----------------------------------------------------');

  if (failedChecks === 0) {
    console.log('✔ ALL PROGRESSIVE DISCLOSURE CHECKS PASSED WITH 100% SUCCESS!\n');
    process.exit(0);
  } else {
    console.error(`✖ ${failedChecks} checks failed.`);
    process.exit(1);
  }
}
