/**
 * Carepoint Skeleton Load Verification Test Suite
 * Validates YouTube-style skeleton shimmer implementation across all portals,
 * CSS rules, JS engines, HUD triggers, and live HTTP endpoints.
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

console.log('\n=== CAREPOINT SKELETON LOAD SYSTEM VERIFICATION ===\n');

// 1. Check CSS definitions in prototype/carepoint-hud.css
console.log('1. Checking CSS Skeleton Engine in prototype/carepoint-hud.css...');
const cssPath = path.join(__dirname, '../prototype/carepoint-hud.css');
assert(fs.existsSync(cssPath), 'carepoint-hud.css exists');
const cssContent = fs.readFileSync(cssPath, 'utf8');

assert(cssContent.includes('@keyframes carepoint-skeleton-shimmer'), 'Defines carepoint-skeleton-shimmer wave keyframes');
assert(cssContent.includes('@keyframes carepoint-skeleton-pulse'), 'Defines carepoint-skeleton-pulse fallback keyframes');
assert(cssContent.includes('.carepoint-skeleton'), 'Defines base .carepoint-skeleton shimmer class');
assert(cssContent.includes('.carepoint-skeleton-circle') && cssContent.includes('.carepoint-skeleton-avatar'), 'Defines circular and avatar skeleton classes');
assert(cssContent.includes('.carepoint-skeleton-icon'), 'Defines icon skeleton classes with variants (sm, md, lg, xl)');
assert(cssContent.includes('.carepoint-skeleton-line') && cssContent.includes('.carepoint-skeleton-title'), 'Defines line and title text skeletons');
assert(cssContent.includes('.carepoint-skeleton-card') && cssContent.includes('.carepoint-skeleton-kpi'), 'Defines card and KPI metric container skeletons');
assert(cssContent.includes('.carepoint-skeleton-media'), 'Defines YouTube-style media 16:9 thumbnail skeleton');
assert(cssContent.includes('#carepoint-page-skeleton-overlay'), 'Defines #carepoint-page-skeleton-overlay overlay style');
assert(cssContent.includes('prefers-reduced-motion: reduce'), 'Defines prefers-reduced-motion a11y support');
assert(cssContent.includes('.dark .carepoint-skeleton'), 'Defines dark mode shimmer color adaptation');
assert(cssContent.includes('transform: translateZ(0)'), 'Uses GPU hardware acceleration (translateZ / will-change)');

// 2. Check JS Engine in prototype/carepoint-app.js
console.log('\n2. Checking JS Skeleton Engine in prototype/carepoint-app.js...');
const jsPath = path.join(__dirname, '../prototype/carepoint-app.js');
assert(fs.existsSync(jsPath), 'carepoint-app.js exists');
const jsContent = fs.readFileSync(jsPath, 'utf8');

assert(jsContent.includes('export function initCarepointSkeletonEngine'), 'Exports initCarepointSkeletonEngine');
assert(jsContent.includes('window.CarepointSkeleton ='), 'Exposes window.CarepointSkeleton global object');
assert(jsContent.includes('buildSkeletonOverlay'), 'Implements buildSkeletonOverlay for YouTube-style layout generation');
assert(jsContent.includes('hideSkeletonOverlay'), 'Implements hideSkeletonOverlay with smooth progressive transition');
assert(jsContent.includes('ensureSkeletonStyles'), 'Implements self-healing ensureSkeletonStyles fallback');
assert(jsContent.includes('Ctrl+Shift+S') || jsContent.includes("key === 'S' || e.key === 's'"), 'Binds keyboard shortcut Ctrl+Shift+S');
assert(jsContent.includes('renderYouTubeCard'), 'Implements YouTube media card skeleton renderer');
assert(jsContent.includes('renderKpiCard'), 'Implements KPI card skeleton renderer');
assert(jsContent.includes('applyMicroShimmer'), 'Implements micro-shimmer view container transition');
assert(jsContent.includes('initCarepointSkeletonEngine();'), 'Auto-initializes initCarepointSkeletonEngine on bootstrap');

// 3. Check Demo HUD trigger in prototype/carepoint-hud.js
console.log('\n3. Checking Demo HUD Trigger in prototype/carepoint-hud.js...');
const hudPath = path.join(__dirname, '../prototype/carepoint-hud.js');
assert(fs.existsSync(hudPath), 'carepoint-hud.js exists');
const hudContent = fs.readFileSync(hudPath, 'utf8');

assert(hudContent.includes('hud-sim-skeleton'), 'Demo HUD contains "Test Skeleton Loader" action button');
assert(hudContent.includes("document.getElementById('hud-sim-skeleton')"), 'Demo HUD wires click event to simulate skeleton loading');

// 4. Verify coverage across all 78 prototype HTML files
console.log('\n4. Checking prototype HTML files linkage...');
const prototypeDir = path.join(__dirname, '../prototype');
function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}
const htmlFiles = getAllHtmlFiles(prototypeDir);
assert(htmlFiles.length >= 75, `Found ${htmlFiles.length} prototype HTML files (>= 75)`);

let cssLinkedCount = 0;
let jsLinkedCount = 0;
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('carepoint-hud.css')) cssLinkedCount++;
  if (content.includes('carepoint-app.js')) jsLinkedCount++;
}
assert(cssLinkedCount === htmlFiles.length, `100% of HTML files link carepoint-hud.css (${cssLinkedCount}/${htmlFiles.length})`);
assert(jsLinkedCount === htmlFiles.length, `100% of HTML files link carepoint-app.js (${jsLinkedCount}/${htmlFiles.length})`);

// 5. Live HTTP verification (against Vite daemon on port 3000)
console.log('\n5. Checking Live HTTP Endpoints on http://localhost:3000...');
const testUrls = [
  '/',
  '/index.html',
  '/admin/dashboard.html',
  '/staff/dashboard.html',
  '/parent/dashboard.html',
  '/gate/scan.html',
  '/sysadmin/dashboard.html',
  '/public/home.html',
  '/carepoint-hud.css',
  '/carepoint-app.js',
  '/carepoint-hud.js'
];

let pendingRequests = testUrls.length;

function checkUrl(urlPath) {
  const req = http.get(`http://localhost:3000${urlPath}`, (res) => {
    assert(res.statusCode === 200, `GET ${urlPath} returned HTTP 200`);
    res.resume();
    pendingRequests--;
    if (pendingRequests === 0) finish();
  });
  req.on('error', (err) => {
    assert(false, `GET ${urlPath} failed: ${err.message}`);
    pendingRequests--;
    if (pendingRequests === 0) finish();
  });
}

for (const u of testUrls) {
  checkUrl(u);
}

function finish() {
  console.log('\n----------------------------------------------------');
  console.log(`TOTAL CHECKS: ${totalChecks}`);
  console.log(`PASSED: ${passedChecks}`);
  console.log(`FAILED: ${failedChecks}`);
  console.log('----------------------------------------------------');
  if (failedChecks === 0) {
    console.log('\x1b[32m✔ ALL SKELETON LOAD CHECKS PASSED PERFECTLY!\x1b[0m\n');
    process.exit(0);
  } else {
    console.error('\x1b[31m✖ SOME SKELETON LOAD CHECKS FAILED!\x1b[0m\n');
    process.exit(1);
  }
}
