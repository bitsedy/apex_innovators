const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

console.log('\n=== CAREPOINT DASHBOARD METRICS & DRAWER STATE VERIFICATION ===\n');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✔ ${message}`);
    passed++;
  } else {
    console.error(`  ❌ FAILED: ${message}`);
    failed++;
  }
}

// 1. Check carepoint-hud.css
const hudCss = fs.readFileSync(path.join(projectRoot, 'prototype/carepoint-hud.css'), 'utf8');
assert(hudCss.includes('.carepoint-metric-card'), 'carepoint-hud.css defines .carepoint-metric-card');
assert(hudCss.includes('.carepoint-metric-animated'), 'carepoint-hud.css defines .carepoint-metric-animated');
assert(hudCss.includes('.carepoint-metric-visible'), 'carepoint-hud.css defines .carepoint-metric-visible');
assert(hudCss.includes('.carepoint-metric-num'), 'carepoint-hud.css defines .carepoint-metric-num with tabular-nums');
assert(hudCss.includes('prefers-reduced-motion'), 'carepoint-hud.css handles prefers-reduced-motion');

// 2. Check carepoint-app.js
const appJs = fs.readFileSync(path.join(projectRoot, 'prototype/carepoint-app.js'), 'utf8');
assert(appJs.includes('initDashboardMetricsAnimation'), 'carepoint-app.js exports initDashboardMetricsAnimation');
assert(appJs.includes('animateQuantitativeNumber'), 'carepoint-app.js implements animateQuantitativeNumber');
assert(appJs.includes('IntersectionObserver'), 'carepoint-app.js uses IntersectionObserver for scroll trigger');
assert(appJs.includes('data-metric-target'), 'carepoint-app.js reads data-metric-target');
assert(appJs.includes("currentPath.includes('dashboard')"), 'carepoint-app.js minimizes and closes drawer on dashboard pages');

// 3. Check 4 Dashboard HTML files
const dashboards = [
  { file: 'prototype/admin/dashboard.html', name: 'Admin Dashboard', expectedTargets: ['9', '96.5%', '92.8%', '184'] },
  { file: 'prototype/staff/dashboard.html', name: 'Staff Dashboard', expectedTargets: ['0', '2', '85%', '1'] },
  { file: 'prototype/parent/dashboard.html', name: 'Parent Dashboard', expectedTargets: ['98.2%', '89.4%', '1', '2'] },
  { file: 'prototype/sysadmin/dashboard.html', name: 'SysAdmin Dashboard', expectedTargets: ['99.99%', '42', '568', '3'] }
];

dashboards.forEach(({ file, name, expectedTargets }) => {
  const content = fs.readFileSync(path.join(projectRoot, file), 'utf8');
  assert(content.includes('carepoint-metric-card'), `${name} contains .carepoint-metric-card containers`);
  assert(content.includes('carepoint-metric-num'), `${name} contains .carepoint-metric-num figures`);
  
  expectedTargets.forEach(target => {
    assert(content.includes(`data-metric-target="${target}"`), `${name} contains quantitative data-metric-target="${target}"`);
  });
});

// 4. Ensure admin triage strip is eliminated
const adminHtml = fs.readFileSync(path.join(projectRoot, 'prototype/admin/dashboard.html'), 'utf8');
assert(!adminHtml.includes('Executive Morning Triage'), 'Admin Dashboard has redundant Executive Morning Triage strip removed');

// 5. Ensure public site untouched
const publicHome = fs.readFileSync(path.join(projectRoot, 'prototype/public/home.html'), 'utf8');
assert(!publicHome.includes('carepoint-metric-card'), 'Public website home.html is strictly untouched');

console.log('\n----------------------------------------------------');
console.log(`TOTAL CHECKS: ${passed + failed}`);
console.log(`PASSED: ${passed}`);
console.log(`FAILED: ${failed}`);
console.log('----------------------------------------------------');

if (failed === 0) {
  console.log('✔ ALL DASHBOARD UX & QUANTITATIVE METRIC CHECKS PASSED PERFECTLY!\n');
  process.exit(0);
} else {
  console.error('❌ SOME CHECKS FAILED!\n');
  process.exit(1);
}
