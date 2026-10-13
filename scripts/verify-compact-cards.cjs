/**
 * Carepoint Compact Cards & Expanded Visual Space Verification Suite
 * Validates minimized card sizes, content scaling, gap compression,
 * public site isolation, and live HTTP responses.
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function assert(condition, message) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  \x1b[32m✔\x1b[0m ${message}`);
  } else {
    failedChecks++;
    console.error(`  \x1b[31m✖\x1b[0m ${message}`);
  }
}

console.log('\n=== CAREPOINT COMPACT CARDS & VISUAL SPACE VERIFICATION ===\n');

// 1. Check CSS rules in prototype/carepoint-hud.css
console.log('1. Checking CSS Compact Card Engine in prototype/carepoint-hud.css...');
const cssPath = path.join(__dirname, '../prototype/carepoint-hud.css');
assert(fs.existsSync(cssPath), 'carepoint-hud.css exists');
const cssContent = fs.readFileSync(cssPath, 'utf8');

assert(cssContent.includes('CAREPOINT COMPACT CARD & EXPANDED VISUAL SPACE ARCHITECTURE'), 'Defines Compact Card & Visual Space header');
assert(cssContent.includes('padding: 12px 14px !important;'), 'Card padding minimized to 12px 14px');
assert(cssContent.includes('border-radius: 14px !important;'), 'Card corners streamlined to 14px radius');
assert(cssContent.includes('padding: 12px 16px !important;'), 'Hero banners minimized to 12px 16px padding');
assert(cssContent.includes('padding: 10px 12px !important;'), 'KPI metric cards minimized to 10px 12px padding');
assert(cssContent.includes('width: 28px !important;'), 'KPI icon boxes minimized to 28px');
assert(cssContent.includes('font-size: 16px !important;'), 'KPI icon symbols scaled to 16px');
assert(cssContent.includes('gap: 10px !important;'), 'Vertical and grid gaps compressed to 10px-12px');
assert(cssContent.includes('margin-bottom: 10px !important;'), 'Bottom section margins compressed to 10px');
assert(cssContent.includes('padding: 6px 10px !important;'), 'Table header and cell padding tightened to 6px 10px');
assert(cssContent.includes('padding: 6px 14px !important;'), 'Action buttons tightened to 6px 14px padding');
assert(cssContent.includes('min-height: 30px !important;'), 'Button min-height streamlined to 30px');
assert(cssContent.includes('padding: 7px 14px !important;') || cssContent.includes('padding: 6px 14px !important;'), 'Pill inputs tightened to 6-7px 14px');
assert(cssContent.includes('.carepoint-soft-tab-group') && cssContent.includes('padding: 3px !important;'), 'Tab group padding streamlined to 3px');

// 2. Check JS Portal Detection & Classification in prototype/carepoint-app.js
console.log('\n2. Checking JS Scope & Detection in prototype/carepoint-app.js...');
const jsPath = path.join(__dirname, '../prototype/carepoint-app.js');
assert(fs.existsSync(jsPath), 'carepoint-app.js exists');
const jsContent = fs.readFileSync(jsPath, 'utf8');

assert(jsContent.includes('initPortalCompactCardRefinements'), 'Exports initPortalCompactCardRefinements');
assert(jsContent.includes("classList.add('carepoint-portal')"), 'Adds carepoint-portal class to non-public pages');
assert(jsContent.includes("classList.add('carepoint-compact-ui')"), 'Adds carepoint-compact-ui class to non-public pages');
assert(jsContent.includes("classList.add('carepoint-public-site')"), 'Adds carepoint-public-site to preserve public landing site');
assert(jsContent.includes('initPortalCompactCardRefinements();'), 'Calls initPortalCompactCardRefinements on bootstrap');

// 3. Live HTTP verification
console.log('\n3. Checking Live HTTP Endpoints on http://localhost:3000...');
const testUrls = [
  '/admin/dashboard.html',
  '/staff/dashboard.html',
  '/parent/dashboard.html',
  '/gate/scan.html',
  '/sysadmin/dashboard.html',
  '/public/home.html'
];

let pending = testUrls.length;
function checkEndpoint(u) {
  http.get(`http://localhost:3000${u}`, (res) => {
    assert(res.statusCode === 200, `GET ${u} returned HTTP 200`);
    res.resume();
    pending--;
    if (pending === 0) finish();
  }).on('error', (err) => {
    assert(false, `GET ${u} failed: ${err.message}`);
    pending--;
    if (pending === 0) finish();
  });
}

for (const u of testUrls) checkEndpoint(u);

function finish() {
  console.log('\n----------------------------------------------------');
  console.log(`TOTAL CHECKS: ${totalChecks}`);
  console.log(`PASSED: ${passedChecks}`);
  console.log(`FAILED: ${failedChecks}`);
  console.log('----------------------------------------------------');
  if (failedChecks === 0) {
    console.log('\x1b[32m✔ ALL COMPACT CARD & VISUAL SPACE CHECKS PASSED!\x1b[0m\n');
    process.exit(0);
  } else {
    console.error('\x1b[31m✖ SOME CHECKS FAILED!\x1b[0m\n');
    process.exit(1);
  }
}
