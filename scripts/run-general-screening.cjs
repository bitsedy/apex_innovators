const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');

console.log('================================================================');
console.log('       CAREPOINT APEX EDUCATORS: GENERAL SYSTEM SCREENING       ');
console.log('================================================================\n');

const ROOT_DIR = path.resolve(__dirname, '..');
const PROTOTYPE_DIR = path.join(ROOT_DIR, 'prototype');

const report = {
  totalChecks: 0,
  passedChecks: 0,
  failedChecks: 0,
  warnings: 0,
  categories: {
    syntax: { pass: 0, fail: 0 },
    http: { pass: 0, fail: 0 },
    linksAndAssets: { pass: 0, fail: 0 },
    drawerArchitecture: { pass: 0, fail: 0 },
    softSimpleUI: { pass: 0, fail: 0 },
    contentHygiene: { pass: 0, fail: 0 }
  },
  errors: []
};

function record(category, desc, condition, isWarning = false) {
  report.totalChecks++;
  if (condition) {
    report.passedChecks++;
    report.categories[category].pass++;
  } else {
    if (isWarning) {
      report.warnings++;
      console.warn(`⚠️ [WARN] [${category}] ${desc}`);
    } else {
      report.failedChecks++;
      report.categories[category].fail++;
      report.errors.push({ category, desc });
      console.error(`❌ [FAIL] [${category}] ${desc}`);
    }
  }
}

// -------------------------------------------------------------
// 1. RECURSIVELY COLLECT ALL HTML AND SCRIPT FILES
// -------------------------------------------------------------
function getAllFiles(dir, ext) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (item.name !== 'node_modules' && item.name !== '.git' && item.name !== '.next') {
        results = results.concat(getAllFiles(full, ext));
      }
    } else if (item.isFile() && item.name.endsWith(ext)) {
      results.push(full);
    }
  }
  return results;
}

const allHtmlFiles = getAllFiles(PROTOTYPE_DIR, '.html');
const allJsFiles = [
  path.join(PROTOTYPE_DIR, 'carepoint-app.js'),
  path.join(PROTOTYPE_DIR, 'carepoint-hud.js')
];

console.log(`📁 Discovered ${allHtmlFiles.length} HTML template pages across all prototype portals.`);

// -------------------------------------------------------------
// 2. JS / CSS SYNTAX & RUNTIME COMPILATION SCREENING
// -------------------------------------------------------------
console.log('\n--- 1. Syntax & Script Engine Screening ---');

allJsFiles.forEach(jsFile => {
  const rel = path.relative(ROOT_DIR, jsFile);
  try {
    const code = fs.readFileSync(jsFile, 'utf8');
    execSync('node --input-type=module --check', { input: code, stdio: ['pipe', 'pipe', 'pipe'] });
    record('syntax', `ES Module syntax check passed for ${rel}`, true);
  } catch (err) {
    record('syntax', `Syntax error in ${rel}: ${err.message}`, false);
  }
});

const hudCss = fs.readFileSync(path.join(PROTOTYPE_DIR, 'carepoint-hud.css'), 'utf8');
record('syntax', 'carepoint-hud.css exists and is non-empty', hudCss.length > 5000);
record('syntax', 'carepoint-hud.css contains uncorrupted desktop media query', hudCss.includes('@media (min-width: 1025px)'));
record('syntax', 'carepoint-hud.css contains uncorrupted mobile media query', hudCss.includes('@media (max-width: 1024px)'));

// -------------------------------------------------------------
// 3. CONTENT HYGIENE & CORRUPTION SCREENING
// -------------------------------------------------------------
console.log('\n--- 2. Content Hygiene & Data Integrity Screening ---');

const bannedRenderedTerms = [
  { term: 'undefined', desc: 'Literal "undefined" rendered in markup body' },
  { term: 'NaN', desc: 'Literal "NaN" rendered in markup body' },
  { term: '[object Object]', desc: 'Unserialized "[object Object]" rendered in markup body' }
];

const bannedGlobalTerms = [
  { term: '@stnicholas.edu.gh', desc: 'Legacy St. Nicholas domain leak' },
  { term: 'href="javascript:void(0)"', desc: 'Anti-pattern href="javascript:void(0)"' }
];

allHtmlFiles.forEach(file => {
  const rel = path.relative(ROOT_DIR, file);
  const content = fs.readFileSync(file, 'utf8');

  // Strip script and style blocks for rendered text check
  const renderedOnly = content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  bannedRenderedTerms.forEach(({ term, desc }) => {
    // Check if term exists outside attribute values / scripts
    const hasTerm = renderedOnly.includes(`>${term}<`) || renderedOnly.includes(` ${term} `);
    record('contentHygiene', `${rel}: No ${desc}`, !hasTerm);
  });

  bannedGlobalTerms.forEach(({ term, desc }) => {
    const hasTerm = content.includes(term);
    record('contentHygiene', `${rel}: No ${desc}`, !hasTerm);
  });
});

// -------------------------------------------------------------
// 4. LINK & LOCAL ASSET INTEGRITY SCREENING
// -------------------------------------------------------------
console.log('\n--- 3. Hyperlink & Asset Path Screening ---');

allHtmlFiles.forEach(file => {
  const rel = path.relative(ROOT_DIR, file);
  const content = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);

  // Check image src
  const srcMatches = [...content.matchAll(/src=["']([^"']+)["']/g)];
  srcMatches.forEach(m => {
    const src = m[1];
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:') || src.startsWith('//')) {
      return;
    }
    const cleanSrc = src.split('?')[0].split('#')[0];
    let resolved;
    if (cleanSrc.startsWith('/')) {
      resolved = path.join(PROTOTYPE_DIR, cleanSrc.replace(/^\//, ''));
    } else {
      resolved = path.resolve(dir, cleanSrc);
    }
    const exists = fs.existsSync(resolved);
    record('linksAndAssets', `${rel}: Local asset exists (${src})`, exists);
  });

  // Check internal href
  const hrefMatches = [...content.matchAll(/href=["']([^"']+)["']/g)];
  hrefMatches.forEach(m => {
    const href = m[1];
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#') || href.startsWith('javascript:')) {
      return;
    }
    const cleanHref = href.split('?')[0].split('#')[0];
    if (!cleanHref.endsWith('.html') && !cleanHref.endsWith('.css')) return;

    let resolved;
    if (cleanHref.startsWith('/')) {
      resolved = path.join(PROTOTYPE_DIR, cleanHref.replace(/^\//, ''));
    } else {
      resolved = path.resolve(dir, cleanHref);
    }
    const exists = fs.existsSync(resolved);
    record('linksAndAssets', `${rel}: Local link target exists (${href})`, exists);
  });
});

// -------------------------------------------------------------
// 5. DRAWER ARCHITECTURE & CANONICAL CONTROLLER SCREENING
// -------------------------------------------------------------
console.log('\n--- 4. Drawer Architecture & Canonical Controller Screening ---');

const appJs = fs.readFileSync(path.join(PROTOTYPE_DIR, 'carepoint-app.js'), 'utf8');

// Core JS controller checks
record('drawerArchitecture', 'carepoint-app.js does NOT inject floating #carepoint-drawer-open-btn', !appJs.includes("openBtn = document.createElement('button')"));
record('drawerArchitecture', 'carepoint-app.js purges obsolete #carepoint-drawer-open-btn from DOM', appJs.includes('existingOpenBtn.remove()'));
record('drawerArchitecture', 'carepoint-app.js hasDockedLayout includes gate portal', appJs.includes("activeRole === 'gate'"));
record('drawerArchitecture', 'carepoint-app.js hasDockedLayout includes parent portal', appJs.includes("activeRole === 'parent'"));
record('drawerArchitecture', 'carepoint-app.js hasDockedLayout includes staff portal', appJs.includes("activeRole === 'staff'"));
record('drawerArchitecture', 'carepoint-app.js hasDockedLayout includes admin portal', appJs.includes("activeRole === 'admin'"));
record('drawerArchitecture', 'carepoint-app.js hasDockedLayout includes sysadmin portal', appJs.includes("activeRole === 'sysadmin'"));
record('drawerArchitecture', 'carepoint-app.js synchronizes dynamic ARIA expanded states', appJs.includes("btn.setAttribute('aria-expanded', 'true')"));

// CSS Desktop Neutralization checks
record('drawerArchitecture', 'carepoint-hud.css permanently hides .carepoint-drawer-open-btn', hudCss.includes('.carepoint-drawer-open-btn') && hudCss.includes('display: none !important;'));
record('drawerArchitecture', 'carepoint-hud.css neutralizes backdrop blur on desktop docked views', hudCss.includes('body:not(.carepoint-has-overlay-drawer) .carepoint-drawer-backdrop') && hudCss.includes('backdrop-filter: none !important;'));
record('drawerArchitecture', 'carepoint-hud.css hides header 3-bars hamburger when drawer open on desktop', hudCss.includes('body:not(.carepoint-has-overlay-drawer):not(.carepoint-drawer-collapsed) header [data-drawer-toggle]') && hudCss.includes('display: none !important;'));
record('drawerArchitecture', 'carepoint-hud.css shows header 3-bars hamburger when drawer collapsed on desktop', hudCss.includes('body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed header [data-drawer-toggle]') && hudCss.includes('display: inline-flex !important;'));

// Desktop Portal Files Docked Layout checks
const desktopPortalPages = [
  'parent/dashboard.html', 'parent/academics.html', 'parent/messages.html', 'parent/pickup.html',
  'staff/dashboard.html', 'staff/attendance.html', 'staff/gradebook.html', 'staff/timetable.html', 'staff/health.html', 'staff/approvals.html',
  'gate/scan.html', 'gate/verify.html', 'gate/alert.html', 'gate/log.html',
  'admin/dashboard.html', 'admin/admissions.html', 'admin/approvals.html', 'admin/wards.html', 'admin/users.html', 'admin/reports.html', 'admin/settings.html',
  'sysadmin/dashboard.html', 'sysadmin/features.html', 'sysadmin/provisioning.html', 'sysadmin/integrations.html', 'sysadmin/audit.html', 'sysadmin/changes.html', 'sysadmin/tracker.html'
];

desktopPortalPages.forEach(p => {
  const full = path.join(PROTOTYPE_DIR, p);
  if (fs.existsSync(full)) {
    const c = fs.readFileSync(full, 'utf8');
    const hasToggle = c.includes('data-drawer-toggle') || c.includes('portal-drawer-toggle');
    const hasDockedAside = c.includes('carepoint-drawer');
    record('drawerArchitecture', `${p}: Has canonical header drawer toggle controller`, hasToggle);
    record('drawerArchitecture', `${p}: Has docked sidebar navigation aside`, hasDockedAside);
  }
});

// -------------------------------------------------------------
// 6. SOFT SIMPLE UI & SAFE ACTION SYSTEM SCREENING
// -------------------------------------------------------------
console.log('\n--- 5. Soft Simple UI & Safe Action Screening ---');

record('softSimpleUI', 'carepoint-hud.css defines .carepoint-soft-btn pill button class', hudCss.includes('.carepoint-soft-btn'));
record('softSimpleUI', 'carepoint-hud.css defines .carepoint-soft-card rounded container class', hudCss.includes('.carepoint-soft-card'));
record('softSimpleUI', 'carepoint-hud.css defines .carepoint-soft-tab-group pill container class', hudCss.includes('.carepoint-soft-tab-group'));
record('softSimpleUI', 'carepoint-app.js implements initCarepointCapabilitiesDiscovery (Ctrl+K)', appJs.includes('initCarepointCapabilitiesDiscovery'));
record('softSimpleUI', 'carepoint-app.js implements initCarepointSafeActionEngine', appJs.includes('initCarepointSafeActionEngine'));
record('softSimpleUI', 'Critical Gate Amber Alert is protected by [data-safe-action]', fs.readFileSync(path.join(PROTOTYPE_DIR, 'gate/scan.html'), 'utf8').includes('data-safe-action="amber"'));
record('softSimpleUI', 'Critical Admin Lockdown is protected by [data-safe-action]', fs.readFileSync(path.join(PROTOTYPE_DIR, 'admin/dashboard.html'), 'utf8').includes('data-safe-action="lockdown"'));
record('softSimpleUI', 'Critical SysAdmin Bypass is protected by [data-safe-action]', fs.readFileSync(path.join(PROTOTYPE_DIR, 'sysadmin/dashboard.html'), 'utf8').includes('data-safe-action="bypass"'));

// -------------------------------------------------------------
// 7. LIVE HTTP VITE SERVER SCREENING
// -------------------------------------------------------------
console.log('\n--- 6. Live Vite HTTP Server Screening ---');

function pingUrl(urlPath) {
  return new Promise(resolve => {
    http.get(`http://localhost:3000${urlPath}`, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, size: data.length }));
    }).on('error', err => resolve({ status: 500, error: err.message }));
  });
}

async function runHttpScreening() {
  const routesToTest = [
    '/index.html',
    // Public
    '/public/home.html',
    '/public/home-v2.html',
    '/public/apply.html',
    '/public/mobile-home.html',
    '/public/mobile-apply.html',
    // Parent
    '/parent/dashboard.html',
    '/parent/academics.html',
    '/parent/messages.html',
    '/parent/pickup.html',
    '/parent/mobile-dashboard.html',
    // Staff
    '/staff/dashboard.html',
    '/staff/attendance.html',
    '/staff/gradebook.html',
    '/staff/timetable.html',
    '/staff/messages.html',
    '/staff/health.html',
    '/staff/approvals.html',
    '/staff/mobile-dashboard.html',
    // Gate
    '/gate/scan.html',
    '/gate/verify.html',
    '/gate/log.html',
    '/gate/alert.html',
    '/gate/mobile-scan.html',
    // Admin
    '/admin/dashboard.html',
    '/admin/inbox.html',
    '/admin/decision.html',
    '/admin/approvals.html',
    '/admin/admissions.html',
    '/admin/wards.html',
    '/admin/users.html',
    '/admin/reports.html',
    '/admin/settings.html',
    // SysAdmin
    '/sysadmin/dashboard.html',
    '/sysadmin/features.html',
    '/sysadmin/provisioning.html',
    '/sysadmin/integrations.html',
    '/sysadmin/audit.html',
    '/sysadmin/changes.html',
    '/sysadmin/tracker.html',
    // Assets & Scripts
    '/carepoint-app.js',
    '/carepoint-hud.js',
    '/carepoint-hud.css',
    '/assets/carepoint-crest.png'
  ];

  for (const route of routesToTest) {
    const res = await pingUrl(route);
    const ok = res.status === 200 && res.size > 0;
    record('http', `HTTP GET ${route} -> Status ${res.status} (${res.size} bytes)`, ok);
  }

  // -------------------------------------------------------------
  // SUMMARY SCOREBOARD
  // -------------------------------------------------------------
  console.log('\n================================================================');
  console.log('                 GENERAL SCREENING SCOREBOARD                   ');
  console.log('================================================================');
  console.log(`TOTAL CHECKS EXECUTED:     ${report.totalChecks}`);
  console.log(`✅ TOTAL PASSED:            ${report.passedChecks} (${((report.passedChecks / report.totalChecks) * 100).toFixed(1)}%)`);
  console.log(`❌ TOTAL FAILED:            ${report.failedChecks}`);
  console.log(`⚠️ TOTAL WARNINGS:          ${report.warnings}`);
  console.log('----------------------------------------------------------------');
  console.log(`1. Syntax & Engine:        ${report.categories.syntax.pass} passed, ${report.categories.syntax.fail} failed`);
  console.log(`2. Content & Hygiene:      ${report.categories.contentHygiene.pass} passed, ${report.categories.contentHygiene.fail} failed`);
  console.log(`3. Links & Local Assets:   ${report.categories.linksAndAssets.pass} passed, ${report.categories.linksAndAssets.fail} failed`);
  console.log(`4. Drawer Architecture:    ${report.categories.drawerArchitecture.pass} passed, ${report.categories.drawerArchitecture.fail} failed`);
  console.log(`5. Soft Simple UI:         ${report.categories.softSimpleUI.pass} passed, ${report.categories.softSimpleUI.fail} failed`);
  console.log(`6. Live HTTP Responses:    ${report.categories.http.pass} passed, ${report.categories.http.fail} failed`);
  console.log('================================================================');

  if (report.failedChecks === 0) {
    console.log('🎉 GENERAL SCREENING COMPLETE: 100% CLEAN BILL OF HEALTH!\n');
    process.exit(0);
  } else {
    console.error(`\n❌ GENERAL SCREENING FOUND ${report.failedChecks} ISSUE(S) LISTED ABOVE.\n`);
    process.exit(1);
  }
}

runHttpScreening();
