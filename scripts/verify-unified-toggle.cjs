const fs = require('fs');
const path = require('path');
const http = require('http');

console.log('====================================================');
console.log('CAREPOINT: VERIFY UNIFIED SINGLE CANONICAL CONTROLLER');
console.log('====================================================\n');

let errors = 0;
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    errors++;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// 1. Check prototype/carepoint-app.js
const appJsPath = path.join(__dirname, '..', 'prototype', 'carepoint-app.js');
const appJs = fs.readFileSync(appJsPath, 'utf8');

assert(!appJs.includes("openBtn = document.createElement('button')"), 
  'carepoint-app.js does not instantiate floating #carepoint-drawer-open-btn');
assert(appJs.includes("existingOpenBtn.remove()"), 
  'carepoint-app.js cleans up any existing floating button in DOM');
assert(appJs.includes("btn.setAttribute('aria-expanded', 'true')") && appJs.includes("btn.setAttribute('aria-expanded', 'false')"),
  'carepoint-app.js synchronizes ARIA expanded state dynamically');
assert(appJs.includes("e.target.closest('[data-drawer-toggle], .portal-drawer-toggle, #portal-drawer-toggle')"),
  'carepoint-app.js protects drawer toggle buttons from outside-click interference');

// 2. Check prototype/carepoint-hud.css
const hudCssPath = path.join(__dirname, '..', 'prototype', 'carepoint-hud.css');
const hudCss = fs.readFileSync(hudCssPath, 'utf8');

assert(hudCss.includes('.carepoint-drawer-open-btn') && hudCss.includes('display: none !important;'),
  'carepoint-hud.css permanently hides .carepoint-drawer-open-btn');
assert(hudCss.includes('body:not(.carepoint-has-overlay-drawer):not(.carepoint-drawer-collapsed) header [data-drawer-toggle]'),
  'carepoint-hud.css hides header 3-bars hamburger when drawer is expanded on desktop');
assert(hudCss.includes('body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed header [data-drawer-toggle]'),
  'carepoint-hud.css reveals header 3-bars hamburger when drawer is collapsed on desktop');
assert(hudCss.includes('backdrop-filter: none !important'),
  'carepoint-hud.css ensures desktop docked mode has zero backdrop blur');

// 3. Check Portal Headers
const portalPages = [
  // Parent
  'parent/dashboard.html',
  'parent/academics.html',
  'parent/messages.html',
  'parent/pickup.html',
  // Staff
  'staff/dashboard.html',
  'staff/attendance.html',
  'staff/gradebook.html',
  'staff/timetable.html',
  'staff/messages.html',
  'staff/health.html',
  'staff/approvals.html',
  // Admin
  'admin/dashboard.html',
  'admin/admissions.html',
  'admin/approvals.html',
  // SysAdmin
  'sysadmin/dashboard.html',
  'sysadmin/features.html'
];

portalPages.forEach(relPath => {
  const fullPath = path.join(__dirname, '..', 'prototype', relPath);
  if (fs.existsSync(fullPath)) {
    const html = fs.readFileSync(fullPath, 'utf8');
    const hasToggle = html.includes('data-drawer-toggle') || html.includes('portal-drawer-toggle');
    assert(hasToggle, `${relPath} header contains canonical drawer toggle controller`);
  } else {
    console.warn(`⚠️ Warning: ${relPath} not found`);
  }
});

// 4. Live Server HTTP check
function checkUrl(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${urlPath}`, (res) => {
      resolve({ status: res.statusCode, path: urlPath });
    }).on('error', (err) => {
      resolve({ status: 500, error: err.message, path: urlPath });
    });
  });
}

async function runHttpChecks() {
  const testUrls = [
    '/prototype/parent/dashboard.html',
    '/prototype/staff/dashboard.html',
    '/prototype/admin/dashboard.html',
    '/prototype/sysadmin/dashboard.html'
  ];

  console.log('\n--- Verifying Live Vite Endpoints ---');
  for (const u of testUrls) {
    const res = await checkUrl(u);
    assert(res.status === 200, `Live HTTP endpoint ${u} returns 200 OK`);
  }

  console.log('\n====================================================');
  if (errors === 0) {
    console.log('🎉 ALL SINGLE CANONICAL CONTROLLER VERIFICATIONS PASSED (100%)');
  } else {
    console.error(`❌ FAILED WITH ${errors} ERRORS`);
    process.exit(1);
  }
}

runHttpChecks();
