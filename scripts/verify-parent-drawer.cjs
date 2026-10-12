const fs = require('fs');
const http = require('http');

console.log('=== VERIFYING PARENT PORTAL DRAWER FIX & CONSISTENCY ===\n');

let allPassed = true;
function assert(desc, condition) {
  if (condition) {
    console.log(`[PASS] ${desc}`);
  } else {
    console.error(`[FAIL] ${desc}`);
    allPassed = false;
  }
}

// 1. Verify prototype/carepoint-app.js
const appJs = fs.readFileSync('prototype/carepoint-app.js', 'utf8');

assert(
  'JS: parent role config includes Carepoint Community School title & sub',
  appJs.includes("title: 'Carepoint'") && appJs.includes("sub: 'Community School'")
);

assert(
  'JS: parent role config includes school motto MIND • HEART • HANDS',
  appJs.includes("motto: 'MIND • HEART • HANDS'")
);

assert(
  'JS: parent role config includes PARENT & GUARDIAN PORTAL badge',
  appJs.includes("badge: 'PARENT & GUARDIAN PORTAL'")
);

assert(
  'JS: parent role config includes session strip and week info',
  appJs.includes("sessionText: 'Session 2026/27 Term 1'") && appJs.includes("sessionWeek: 'Wk 8'")
);

assert(
  'JS: parent drawer links include #ward, #welfare, and #messages targets',
  appJs.includes("dashboard.html#ward") &&
  appJs.includes("messages.html#welfare") &&
  appJs.includes("messages.html#messages")
);

assert(
  'JS: parent drawer renders pinned Active Ward card with student info',
  appJs.includes('parent-drawer-ward-name') &&
  appJs.includes('parent-drawer-ward-class') &&
  appJs.includes('parent-drawer-ward-avatar') &&
  appJs.includes('Active Ward')
);

assert(
  'JS: link click handler navigates in-page hashes (#ward, #welfare)',
  appJs.includes("targetEl.scrollIntoView({ behavior: 'smooth' })") &&
  appJs.includes("switchMainTab('welfare')")
);

assert(
  'JS: window.CarepointDrawer exposes syncWard method',
  appJs.includes('syncWard: syncWardDisplay')
);

// 2. Verify prototype/carepoint-hud.css
const hudCss = fs.readFileSync('prototype/carepoint-hud.css', 'utf8');

assert(
  'CSS: .carepoint-drawer-open-btn top set to 132px (clears 120px parent header)',
  hudCss.includes('top: 132px;')
);

assert(
  'CSS: .carepoint-drawer-close-btn styles and hover transitions exist',
  hudCss.includes('.carepoint-drawer-close-btn') && hudCss.includes('.carepoint-drawer-close-btn:hover')
);

// 3. Verify desktop parent pages have data-drawer-toggle
const desktopParentFiles = [
  'prototype/parent/dashboard.html',
  'prototype/parent/academics.html',
  'prototype/parent/messages.html',
  'prototype/parent/pickup.html'
];

desktopParentFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  assert(`Desktop file ${file} has data-drawer-toggle button in header`, content.includes('data-drawer-toggle'));
});

// 4. Verify mobile parent pages have data-drawer-toggle
const mobileParentFiles = [
  'prototype/parent/mobile-dashboard.html',
  'prototype/parent/mobile-academics.html',
  'prototype/parent/mobile-messages.html',
  'prototype/parent/mobile-pickup.html'
];

mobileParentFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  assert(`Mobile file ${file} has data-drawer-toggle button in header`, content.includes('data-drawer-toggle'));
});

// 5. Verify id="ward" exists in dashboard.html and mobile-dashboard.html
const dashContent = fs.readFileSync('prototype/parent/dashboard.html', 'utf8');
assert('dashboard.html has id="ward" anchor for Child Profile navigation', dashContent.includes('id="ward"'));
assert('dashboard.html switchWard syncs with CarepointDrawer.syncWard', dashContent.includes('CarepointDrawer.syncWard'));

const mobDashContent = fs.readFileSync('prototype/parent/mobile-dashboard.html', 'utf8');
assert('mobile-dashboard.html has id="ward" anchor for Child Profile navigation', mobDashContent.includes('id="ward"'));

// 6. Verify messages.html has welfare/conversations hash router
const msgContent = fs.readFileSync('prototype/parent/messages.html', 'utf8');
assert('messages.html has hash routing for welfare and conversations tabs', msgContent.includes("hash.includes('welfare')"));

// 7. Test Vite dev server HTTP response for parent pages
function checkUrl(urlPath, label) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${urlPath}`, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        assert(`HTTP Server: ${label} returned status ${res.statusCode}`, res.statusCode === 200);
        resolve(res.statusCode === 200);
      });
    }).on('error', (err) => {
      assert(`HTTP Server: ${label} error: ${err.message}`, false);
      resolve(false);
    });
  });
}

async function runHttpChecks() {
  await checkUrl('/parent/dashboard.html', '/parent/dashboard.html');
  await checkUrl('/parent/academics.html', '/parent/academics.html');
  await checkUrl('/parent/messages.html', '/parent/messages.html');
  await checkUrl('/parent/pickup.html', '/parent/pickup.html');
  await checkUrl('/parent/mobile-dashboard.html', '/parent/mobile-dashboard.html');
  await checkUrl('/carepoint-app.js', '/carepoint-app.js');
  await checkUrl('/carepoint-hud.css', '/carepoint-hud.css');

  console.log('\n========================================');
  if (allPassed) {
    console.log('ALL PARENT PORTAL DRAWER CHECKS PASSED (100%)\n');
    process.exit(0);
  } else {
    console.error('SOME CHECKS FAILED!\n');
    process.exit(1);
  }
}

runHttpChecks();
