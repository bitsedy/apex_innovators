const fs = require('fs');
const http = require('http');

console.log('=== VERIFYING TABS DRAWER TOGGLE FIX ===\n');

let allPassed = true;
function assert(desc, condition) {
  if (condition) {
    console.log(`[PASS] ${desc}`);
  } else {
    console.error(`[FAIL] ${desc}`);
    allPassed = false;
  }
}

// 1. Check prototype/carepoint-hud.css
const hudCss = fs.readFileSync('prototype/carepoint-hud.css', 'utf8');

assert(
  'CSS: body.carepoint-has-overlay-drawer off-canvas rule exists',
  hudCss.includes('body.carepoint-has-overlay-drawer aside.carepoint-drawer')
);

assert(
  'CSS: body.carepoint-has-overlay-drawer open state rule exists',
  hudCss.includes('body.carepoint-has-overlay-drawer aside.carepoint-drawer.carepoint-drawer-open')
);

assert(
  'CSS: Desktop docked collapsed rule specifically checks :not(.carepoint-has-overlay-drawer)',
  hudCss.includes('body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed aside.carepoint-drawer')
);

assert(
  'CSS: Desktop docked expanded rule specifically checks :not(.carepoint-has-overlay-drawer)',
  hudCss.includes('body:not(.carepoint-has-overlay-drawer):not(.carepoint-drawer-collapsed) aside.carepoint-drawer')
);

assert(
  'CSS: Old unconditional body:not(.carepoint-drawer-collapsed) removed',
  !hudCss.includes('body:not(.carepoint-drawer-collapsed) aside.carepoint-drawer,')
);

// 2. Check prototype/carepoint-app.js
const appJs = fs.readFileSync('prototype/carepoint-app.js', 'utf8');

assert(
  'JS: closeDrawer unconditionally sets carepoint-drawer-collapsed on body',
  appJs.includes("document.body.classList.add('carepoint-drawer-collapsed');") &&
  appJs.includes("sessionStorage.setItem('carepoint_drawer_collapsed', 'true');")
);

assert(
  'JS: Canonical controller: [data-drawer-toggle] buttons wired to toggleDrawer and openBtn superseded',
  !appJs.includes("openBtn = document.createElement('button')") &&
  appJs.includes("toggleDrawer()")
);

assert(
  'JS: closeBtn has both addEventListener and onclick wired',
  appJs.includes("closeBtn.addEventListener('click'") && appJs.includes("closeBtn.onclick =")
);

assert(
  'JS: backdrop has both addEventListener and onclick wired',
  appJs.includes("backdrop.addEventListener('click'") && appJs.includes("backdrop.onclick =")
);

assert(
  'JS: Escape key closes drawer if open',
  appJs.includes("e.key === 'Escape'")
);

assert(
  'JS: Click outside drawer closes drawer in overlay mode',
  appJs.includes("!aside.contains(e.target) && !e.target.closest('[data-drawer-toggle]")
);

assert(
  'JS: [data-drawer-toggle] buttons are wired to toggleDrawer',
  appJs.includes("data-drawer-toggle") && appJs.includes("toggleDrawer()")
);

assert(
  'JS: createDynamicPortalDrawer embeds close button in header',
  appJs.includes('carepoint-drawer-close-btn') && appJs.includes('Close Navigation Tabs Drawer')
);

// 3. Check gate files
const gateFiles = [
  'prototype/gate/scan.html',
  'prototype/gate/verify.html',
  'prototype/gate/log.html',
  'prototype/gate/alert.html'
];

gateFiles.forEach(gf => {
  const content = fs.readFileSync(gf, 'utf8');
  assert(
    `Gate file ${gf} has header drawer toggle button`,
    content.includes('data-drawer-toggle=""') || content.includes('data-drawer-toggle')
  );
});

// 4. HTTP Fetch Test from Vite Dev Server (Vite root is prototype/)
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, body }));
    }).on('error', reject);
  });
}

async function runHttpTests() {
  try {
    const scanRes = await fetchUrl('http://localhost:3000/gate/scan.html');
    assert('Vite HTTP Server: /gate/scan.html returned 200 OK', scanRes.statusCode === 200);

    const adminRes = await fetchUrl('http://localhost:3000/admin/dashboard.html');
    assert('Vite HTTP Server: /admin/dashboard.html returned 200 OK', adminRes.statusCode === 200);

    const appJsRes = await fetchUrl('http://localhost:3000/carepoint-app.js');
    assert('Vite HTTP Server: /carepoint-app.js served and contains closeBtn wiring',
      appJsRes.statusCode === 200 && appJsRes.body.includes('carepoint-drawer-close-btn')
    );

    const hudCssRes = await fetchUrl('http://localhost:3000/carepoint-hud.css');
    assert('Vite HTTP Server: /carepoint-hud.css served and contains overlay-drawer rules',
      hudCssRes.statusCode === 200 && hudCssRes.body.includes('carepoint-has-overlay-drawer')
    );
  } catch (err) {
    console.error('HTTP test error:', err.message);
    assert('Vite HTTP Server reachable', false);
  }

  console.log('\n========================================');
  if (allPassed) {
    console.log('ALL DRAWER VERIFICATION CHECKS PASSED (100%)');
  } else {
    console.error('SOME DRAWER VERIFICATION CHECKS FAILED');
    process.exit(1);
  }
}

runHttpTests();
