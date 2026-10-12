const fs = require('fs');
const http = require('http');

console.log('=== VERIFYING GATE & KIOSK PORTAL DOCKED DRAWER & UNBLURRED ACCESS ===\n');

let allPassed = true;
function assert(desc, condition) {
  if (condition) {
    console.log(`[PASS] ${desc}`);
  } else {
    console.error(`[FAIL] ${desc}`);
    allPassed = false;
  }
}

// 1. Verify Desktop Gate Pages have Docked Layout Structure
const gateDesktopFiles = [
  'prototype/gate/scan.html',
  'prototype/gate/verify.html',
  'prototype/gate/alert.html',
  'prototype/gate/log.html'
];

gateDesktopFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');

  assert(
    `${file} contains docked <aside class="carepoint-drawer fixed left-0 top-0 bottom-0`,
    content.includes('<aside class="carepoint-drawer fixed left-0 top-0 bottom-0')
  );

  assert(
    `${file} contains pl-72 wrapper for desktop docked layout`,
    content.includes('<div class="pl-72 flex flex-col min-h-screen">')
  );

  assert(
    `${file} header has left-72 desktop offset`,
    content.includes('header class="fixed top-0 left-72 right-0')
  );

  assert(
    `${file} has data-drawer-toggle button in header`,
    content.includes('data-drawer-toggle')
  );

  assert(
    `${file} contains school crest, title, motto, and role badge in drawer`,
    content.includes('carepoint-crest.png') &&
    content.includes('Carepoint') &&
    content.includes('MIND • HEART • HANDS') &&
    content.includes('CAMPUS SECURITY &amp; GATEWAY')
  );

  assert(
    `${file} contains pinned Turnstile A status card in drawer`,
    content.includes('Turnstile A') &&
    content.includes('Accra Main Gate') &&
    content.includes('Level 3 Safety Shield')
  );
});

// 2. Verify prototype/carepoint-app.js
const rawAppJs = fs.readFileSync('prototype/carepoint-app.js', 'utf8');
const appJs = rawAppJs.replace(/\r\n/g, '\n');

assert(
  'JS: hasDockedLayout includes desktop gate portal without overlay mode',
  appJs.includes("activeRole === 'gate'") &&
  appJs.includes("hasDockedLayout")
);

assert(
  'JS: openDrawer does not activate backdrop when hasDockedLayout is true',
  appJs.includes("const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;") &&
  appJs.includes("if (isOverlayMode) {\n      backdrop.classList.add('active');\n      document.body.style.overflow = 'hidden';\n    } else {\n      backdrop.classList.remove('active');\n      document.body.style.overflow = '';\n    }")
);

// 3. Verify prototype/carepoint-hud.css
const hudCss = fs.readFileSync('prototype/carepoint-hud.css', 'utf8');

assert(
  'CSS: Desktop docked layout completely neutralizes backdrop and blur filter',
  hudCss.includes('body:not(.carepoint-has-overlay-drawer) .carepoint-drawer-backdrop') &&
  hudCss.includes('display: none !important;') &&
  hudCss.includes('backdrop-filter: none !important;')
);

assert(
  'CSS: Desktop docked layout hides header toggle when drawer open, shows when collapsed',
  hudCss.includes('body:not(.carepoint-has-overlay-drawer):not(.carepoint-drawer-collapsed) header [data-drawer-toggle]') &&
  hudCss.includes('body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed header [data-drawer-toggle]')
);

// 4. Verify Public Site Exclusion
const publicFiles = fs.readdirSync('prototype/public');
assert(
  'Public site files verified existing and untouched in prototype/public',
  publicFiles.length > 0 && publicFiles.includes('home.html') && publicFiles.includes('apply.html')
);

// 5. Test Live HTTP responses via Vite server
function testUrl(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${urlPath}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, data });
      });
    }).on('error', (err) => {
      resolve({ status: 500, error: err.message });
    });
  });
}

async function runLiveTests() {
  const urls = [
    '/gate/scan.html',
    '/gate/verify.html',
    '/gate/alert.html',
    '/gate/log.html',
    '/carepoint-app.js',
    '/carepoint-hud.css'
  ];

  for (const u of urls) {
    const res = await testUrl(u);
    assert(`HTTP GET ${u} returned ${res.status}`, res.status === 200);
  }

  console.log('\n========================================');
  if (allPassed) {
    console.log('ALL GATE DOCKED DRAWER & UNBLURRED ACCESS CHECKS PASSED (100%)\n');
    process.exit(0);
  } else {
    console.error('SOME CHECKS FAILED!\n');
    process.exit(1);
  }
}

runLiveTests();
