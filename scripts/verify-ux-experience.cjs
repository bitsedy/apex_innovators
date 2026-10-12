const fs = require('fs');
const http = require('http');

console.log('=== RUNNING SOFT SIMPLE UI & EXPERIENCE VERIFICATION SUITE ===\n');

let passCount = 0;
let failCount = 0;

function check(condition, desc) {
  if (condition) {
    console.log(`[PASS] ${desc}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${desc}`);
    failCount++;
  }
}

// 1. Check prototype/carepoint-hud.css Soft Simple Design System
const hudCss = fs.readFileSync('prototype/carepoint-hud.css', 'utf8');
check(hudCss.includes('.carepoint-soft-input'), 'carepoint-hud.css has .carepoint-soft-input class');
check(hudCss.includes('.carepoint-soft-btn'), 'carepoint-hud.css has .carepoint-soft-btn pill button class');
check(hudCss.includes('.carepoint-soft-card'), 'carepoint-hud.css has .carepoint-soft-card class');

// 2. Check prototype/carepoint-app.js Soft Simple Modals & Engines
const appJs = fs.readFileSync('prototype/carepoint-app.js', 'utf8');
check(appJs.includes('initCarepointCapabilitiesDiscovery'), 'carepoint-app.js has initCarepointCapabilitiesDiscovery');
check(appJs.includes('initCarepointSafeActionEngine'), 'carepoint-app.js has initCarepointSafeActionEngine');
check(appJs.includes('Ctrl+K') || appJs.includes("e.key.toLowerCase() === 'k'"), 'Capabilities Discovery has Ctrl+K shortcut listener');
check(appJs.includes('data-safe-action'), 'Safe Action Engine detects [data-safe-action]');
check(appJs.includes('}, true);') || appJs.includes('capture: true'), 'Safe Action Engine intercepts events in capture phase');
check(appJs.includes('carepoint-soft-btn-danger'), 'Safe Action modal uses soft pill button classes');

// 3. Parent Portal: Soft Simple Verification
const parentDash = fs.readFileSync('prototype/parent/dashboard.html', 'utf8');
check(parentDash.includes('id="parentTabSection_routine"'), 'Parent portal has Routine tab section');
check(parentDash.includes('id="parentTabSection_academics"'), 'Parent portal has Academics tab section');
check(parentDash.includes('id="parentTabSection_welfare"'), 'Parent portal has Welfare tab section');
check(parentDash.includes('switchParentView'), 'Parent portal has switchParentView script function');
check(!parentDash.includes('id="parent-feature-spotlight"'), 'Parent portal purged of verbose spotlight text banner');
check(parentDash.includes('bg-[#f4f1ee] rounded-full'), 'Parent portal uses soft rounded pill tab container');

const parentMobDash = fs.readFileSync('prototype/parent/mobile-dashboard.html', 'utf8');
check(!parentMobDash.includes('id="parent-mobile-spotlight"'), 'Parent mobile purged of spotlight banner');
check(parentMobDash.includes('id="view-qr-btn"'), 'Parent mobile retains working view-qr-btn');

// 4. Staff Portal: Soft Simple Verification
const staffDash = fs.readFileSync('prototype/staff/dashboard.html', 'utf8');
check(staffDash.includes('id="staffTabSection_flow"'), 'Staff portal has Flow tab section');
check(staffDash.includes('id="staffTabSection_sba"'), 'Staff portal has SBA tab section');
check(staffDash.includes('id="staffTabSection_approvals"'), 'Staff portal has Approvals tab section');
check(staffDash.includes('switchStaffView'), 'Staff portal has switchStaffView script function');
check(!staffDash.includes('id="staff-feature-spotlight"'), 'Staff portal purged of verbose pro-tip spotlight');
check(staffDash.includes('bg-[#f4f1ee] rounded-full'), 'Staff portal uses soft rounded pill tab container');
check(staffDash.includes('carepoint-soft-btn'), 'Staff portal uses soft pill buttons in hero');

// 5. Gate Security Kiosk: Soft Simple Verification
const gateScan = fs.readFileSync('prototype/gate/scan.html', 'utf8');
check(gateScan.includes('toggleTelemetryDrawer'), 'Gate scan has toggleTelemetryDrawer for clean viewport');
check(gateScan.includes('data-safe-action="amber"'), 'Gate scan has data-safe-action="amber" on Code Amber');
check(!gateScan.includes('id="gate-capabilities-spotlight"'), 'Gate scan purged of verbose spotlight banner');
check(gateScan.includes('carepoint-soft-input') && gateScan.includes('id="token-input"'), 'Gate scan has soft rounded pill token input');

const gateMobScan = fs.readFileSync('prototype/gate/mobile-scan.html', 'utf8');
check(gateMobScan.includes('data-safe-action="amber"'), 'Gate mobile scan has data-safe-action on Code Amber');

// 6. Admin Portal: Soft Simple Verification
const adminDash = fs.readFileSync('prototype/admin/dashboard.html', 'utf8');
check(adminDash.includes('id="adminTabSection_approvals"'), 'Admin portal has Approvals tab section');
check(adminDash.includes('id="adminTabSection_vitals"'), 'Admin portal has Campus Vitals tab section');
check(adminDash.includes('id="adminTabSection_finance"'), 'Admin portal has Bursary & Fees tab section');
check(adminDash.includes('data-safe-action="lockdown"'), 'Admin portal has data-safe-action on Emergency Lockdown');
check(adminDash.includes('switchAdminView'), 'Admin portal has switchAdminView script function');
check(!adminDash.includes('id="admin-capabilities-spotlight"'), 'Admin portal purged of verbose spotlight banner');
check(adminDash.includes('bg-[#f4f1ee] rounded-full'), 'Admin portal uses soft rounded pill tab container');

// 7. SysAdmin Portal: Soft Simple Verification
const sysadminDash = fs.readFileSync('prototype/sysadmin/dashboard.html', 'utf8');
check(sysadminDash.includes('id="sysadminTabSection_mesh"'), 'SysAdmin portal has Mesh tab section');
check(sysadminDash.includes('id="sysadminTabSection_telemetry"'), 'SysAdmin portal has Telemetry tab section');
check(sysadminDash.includes('id="sysadminTabSection_logs"'), 'SysAdmin portal has Logs tab section');
check(sysadminDash.includes('data-safe-action="bypass"'), 'SysAdmin portal has data-safe-action on Tier 0 Bypass');
check(sysadminDash.includes('switchSysadminView'), 'SysAdmin portal has switchSysadminView script function');
check(!sysadminDash.includes('id="sysadmin-capabilities-spotlight"'), 'SysAdmin portal purged of verbose spotlight banner');
check(sysadminDash.includes('bg-[#f4f1ee] rounded-full'), 'SysAdmin portal uses soft rounded pill tab container');
check(sysadminDash.includes('carepoint-soft-card'), 'SysAdmin portal uses soft card container for actions');

const sysadminMobDash = fs.readFileSync('prototype/sysadmin/mobile-dashboard.html', 'utf8');
check(sysadminMobDash.includes('data-safe-action="failover"'), 'SysAdmin mobile has data-safe-action on Cluster Failover');

// 8. Exclusions Check: Public Site Untouched
const publicHome = fs.readFileSync('prototype/public/home.html', 'utf8');
check(!publicHome.includes('switchParentView') && !publicHome.includes('switchStaffView'), 'Public site remained completely uncorrupted and excluded');

// 9. HTTP Endpoints Check (Vite server at localhost:3000)
function checkHttp(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${urlPath}`, (res) => {
      check(res.statusCode === 200, `HTTP GET ${urlPath} returned ${res.statusCode}`);
      resolve();
    }).on('error', (err) => {
      check(false, `HTTP GET ${urlPath} failed: ${err.message}`);
      resolve();
    });
  });
}

async function runAsyncChecks() {
  await checkHttp('/parent/dashboard.html');
  await checkHttp('/parent/mobile-dashboard.html');
  await checkHttp('/staff/dashboard.html');
  await checkHttp('/gate/scan.html');
  await checkHttp('/admin/dashboard.html');
  await checkHttp('/sysadmin/dashboard.html');
  await checkHttp('/sysadmin/mobile-dashboard.html');

  console.log('\n========================================');
  console.log(`TOTAL CHECKS: ${passCount + failCount}`);
  console.log(`PASSED: ${passCount}`);
  console.log(`FAILED: ${failCount}`);
  if (failCount === 0) {
    console.log('ALL SOFT SIMPLE UI CRITERIA VERIFIED (100% PASS)');
  } else {
    process.exit(1);
  }
}

runAsyncChecks();
