const fs = require('fs');
const path = require('path');

console.log('=== APPLYING SOFT SIMPLE UI ACROSS ALL PORTALS ===\n');

// -----------------------------------------------------------------------------
// Helper: read and write
// -----------------------------------------------------------------------------
function updateFile(relPath, fn) {
  const fullPath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${relPath}`);
    return;
  }
  let content = fs.readFileSync(fullPath, 'utf8');
  const updated = fn(content);
  if (updated !== content) {
    fs.writeFileSync(fullPath, updated, 'utf8');
    console.log(`[UPDATED] ${relPath}`);
  } else {
    console.log(`[NO CHANGE] ${relPath}`);
  }
}

// -----------------------------------------------------------------------------
// 1. PARENT PORTAL: prototype/parent/dashboard.html
// -----------------------------------------------------------------------------
updateFile('prototype/parent/dashboard.html', (html) => {
  // Remove spotlight banner
  const spotRegex = /<!-- Proactive Feature Spotlight[\s\S]*?id="parent-feature-spotlight"[\s\S]*?<\/div>\s*<\/div>/gi;
  html = html.replace(spotRegex, '');

  // Simplify Focus Mode Tabs to Soft Pill Group
  const oldTabsRegex = /<!-- Focus Mode Navigation Tabs -->[\s\S]*?<!-- ========================================================================= -->/gi;
  const newTabs = `<!-- Navigation Tabs -->
<div class="flex items-center gap-2 p-1.5 bg-[#f4f1ee] rounded-full w-fit mb-6">
  <button id="parentTabBtn_routine" onclick="switchParentView('routine')" class="parent-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all bg-primary text-white shadow-xs flex items-center gap-1.5 cursor-pointer" type="button">
    <span class="material-symbols-outlined text-[16px]">schedule</span>
    <span>Today's Routine</span>
  </button>
  <button id="parentTabBtn_academics" onclick="switchParentView('academics')" class="parent-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all text-on-surface-variant hover:text-on-surface hover:bg-black/5 flex items-center gap-1.5 cursor-pointer" type="button">
    <span class="material-symbols-outlined text-[16px]">school</span>
    <span>Academics</span>
  </button>
  <button id="parentTabBtn_welfare" onclick="switchParentView('welfare')" class="parent-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all text-on-surface-variant hover:text-on-surface hover:bg-black/5 flex items-center gap-1.5 cursor-pointer" type="button">
    <span class="material-symbols-outlined text-[16px]">favorite</span>
    <span>Health &amp; Welfare</span>
  </button>
</div>

<!-- ========================================================================= -->`;
  html = html.replace(oldTabsRegex, newTabs);

  // Update switchParentView function in script
  html = html.replace(
    /btn\.className\s*=\s*"parent-view-tab px-4 py-2 rounded-xl text-xs font-bold transition-all bg-primary text-on-primary shadow-xs flex items-center gap-1\.5 cursor-pointer";/g,
    'btn.className = "parent-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all bg-primary text-white shadow-xs flex items-center gap-1.5 cursor-pointer";'
  );
  html = html.replace(
    /btn\.className\s*=\s*"parent-view-tab px-4 py-2 rounded-xl text-xs font-bold transition-all text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-semibold flex items-center gap-1\.5 cursor-pointer";/g,
    'btn.className = "parent-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all text-on-surface-variant hover:text-on-surface hover:bg-black/5 flex items-center gap-1.5 cursor-pointer";'
  );

  return html;
});

// -----------------------------------------------------------------------------
// 2. PARENT MOBILE: prototype/parent/mobile-dashboard.html
// -----------------------------------------------------------------------------
updateFile('prototype/parent/mobile-dashboard.html', (html) => {
  // Remove spotlight banner
  const spotRegex = /<!-- Gentle Capabilities Spotlight for Mobile -->[\s\S]*?id="parent-mobile-spotlight"[\s\S]*?<\/div>/gi;
  html = html.replace(spotRegex, '');

  return html;
});

// -----------------------------------------------------------------------------
// 3. STAFF PORTAL: prototype/staff/dashboard.html
// -----------------------------------------------------------------------------
updateFile('prototype/staff/dashboard.html', (html) => {
  // Remove feature spotlight
  const spotRegex = /<!-- Proactive Teacher Feature Spotlight -->[\s\S]*?id="staff-feature-spotlight"[\s\S]*?<\/div>\s*<\/div>/gi;
  html = html.replace(spotRegex, '');

  // Simplify tabs to soft pill group
  const oldTabsRegex = /<!-- Focus Mode Navigation Tabs -->[\s\S]*?<!-- ========================================================================= -->/gi;
  const newTabs = `<!-- Navigation Tabs -->
<div class="flex items-center gap-2 p-1.5 bg-[#f4f1ee] rounded-full w-fit mb-6">
  <button id="staffTabBtn_flow" onclick="switchStaffView('flow')" class="staff-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all bg-primary text-white shadow-xs flex items-center gap-1.5 cursor-pointer" type="button">
    <span class="material-symbols-outlined text-[16px]">schedule</span>
    <span>Today's Flow</span>
  </button>
  <button id="staffTabBtn_sba" onclick="switchStaffView('sba')" class="staff-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all text-on-surface-variant hover:text-on-surface hover:bg-black/5 flex items-center gap-1.5 cursor-pointer" type="button">
    <span class="material-symbols-outlined text-[16px]">menu_book</span>
    <span>Continuous Assessment</span>
  </button>
  <button id="staffTabBtn_approvals" onclick="switchStaffView('approvals')" class="staff-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all text-on-surface-variant hover:text-on-surface hover:bg-black/5 flex items-center gap-1.5 cursor-pointer" type="button">
    <span class="material-symbols-outlined text-[16px]">task_alt</span>
    <span>Approvals &amp; Calendar</span>
  </button>
</div>

<!-- ========================================================================= -->`;
  html = html.replace(oldTabsRegex, newTabs);

  // Soft pill buttons in hero
  html = html.replace(
    'class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary hover:brightness-105 text-on-secondary font-label-sm text-label-sm shadow-xs transition-all font-semibold cursor-pointer"',
    'class="flex-1 sm:flex-initial carepoint-soft-btn-danger"'
  );
  html = html.replace(
    'class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-surface-container-lowest text-primary hover:bg-surface-container-high font-label-sm text-label-sm shadow-xs transition-all cursor-pointer"',
    'class="flex-1 sm:flex-initial carepoint-soft-btn-secondary"'
  );
  html = html.replace(
    'class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-label-sm text-label-sm transition-all cursor-pointer"',
    'class="flex-1 sm:flex-initial carepoint-soft-btn"'
  );

  // Update switchStaffView in script
  html = html.replace(
    /btn\.className\s*=\s*"staff-view-tab px-4 py-2 rounded-xl text-xs font-bold transition-all bg-primary text-on-primary shadow-xs flex items-center gap-1\.5 cursor-pointer";/g,
    'btn.className = "staff-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all bg-primary text-white shadow-xs flex items-center gap-1.5 cursor-pointer";'
  );
  html = html.replace(
    /btn\.className\s*=\s*"staff-view-tab px-4 py-2 rounded-xl text-xs font-bold transition-all text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-semibold flex items-center gap-1\.5 cursor-pointer";/g,
    'btn.className = "staff-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all text-on-surface-variant hover:text-on-surface hover:bg-black/5 flex items-center gap-1.5 cursor-pointer";'
  );

  return html;
});

// -----------------------------------------------------------------------------
// 4. GATE SECURITY KIOSK: prototype/gate/scan.html
// -----------------------------------------------------------------------------
updateFile('prototype/gate/scan.html', (html) => {
  // Remove spotlight banner
  const spotRegex = /<!-- Capabilities Spotlight Banner for Security Officer -->[\s\S]*?id="gate-capabilities-spotlight"[\s\S]*?<\/div>\s*<\/div>/gi;
  html = html.replace(spotRegex, '');

  // Make Code Amber button soft pill
  html = html.replace(
    'class="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md transition-all active:scale-95 shadow-md hover:bg-secondary-container cursor-pointer" id="amber-alert-btn"',
    'class="carepoint-soft-btn-danger" id="amber-alert-btn"'
  );

  // Soft token input
  html = html.replace(
    'class="w-full pl-10 pr-4 py-3 bg-surface-container-low text-on-surface rounded-xl font-headline-sm text-headline-sm tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" id="token-input"',
    'class="carepoint-soft-input uppercase tracking-wider font-bold" id="token-input"'
  );

  // Soft token submit button
  html = html.replace(
    'class="px-space-lg py-3 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"',
    'class="carepoint-soft-btn text-sm px-8 py-3"'
  );

  return html;
});

// -----------------------------------------------------------------------------
// 5. ADMIN PORTAL: prototype/admin/dashboard.html
// -----------------------------------------------------------------------------
updateFile('prototype/admin/dashboard.html', (html) => {
  // Remove spotlight banner
  const spotRegex = /<!-- EXECUTIVE CAPABILITIES SPOTLIGHT -->[\s\S]*?id="admin-capabilities-spotlight"[\s\S]*?<\/div>\s*<\/div>/gi;
  html = html.replace(spotRegex, '');

  // Simplify Focus Mode Tabs to Soft Pill Group
  const oldTabsRegex = /<!-- FOCUS MODE NAVIGATION TABS -->[\s\S]*?<!-- ===================================================================== -->\s*<!-- TAB 1:/gi;
  const newTabs = `<!-- Navigation Tabs -->
<div class="flex items-center gap-2 p-1.5 bg-[#f4f1ee] rounded-full w-fit mb-6">
  <button id="adminTabBtn_approvals" onclick="switchAdminView('approvals')" class="admin-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all bg-primary text-white shadow-xs flex items-center gap-1.5 cursor-pointer" type="button">
    <span class="material-symbols-outlined text-[16px]">fact_check</span>
    <span>Approvals &amp; Queue</span>
  </button>
  <button id="adminTabBtn_vitals" onclick="switchAdminView('vitals')" class="admin-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all text-on-surface-variant hover:text-on-surface hover:bg-black/5 flex items-center gap-1.5 cursor-pointer" type="button">
    <span class="material-symbols-outlined text-[16px]">monitoring</span>
    <span>Campus Vitals</span>
  </button>
  <button id="adminTabBtn_finance" onclick="switchAdminView('finance')" class="admin-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all text-on-surface-variant hover:text-on-surface hover:bg-black/5 flex items-center gap-1.5 cursor-pointer" type="button">
    <span class="material-symbols-outlined text-[16px]">payments</span>
    <span>Bursary &amp; Fees</span>
  </button>
</div>

<!-- ===================================================================== -->
<!-- TAB 1:`;
  html = html.replace(oldTabsRegex, newTabs);

  // Update switchAdminView in script
  html = html.replace(
    /btn\.className\s*=\s*"admin-view-tab px-4 py-2 rounded-xl text-xs font-bold transition-all bg-primary text-on-primary shadow-xs flex items-center gap-1\.5 cursor-pointer";/g,
    'btn.className = "admin-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all bg-primary text-white shadow-xs flex items-center gap-1.5 cursor-pointer";'
  );
  html = html.replace(
    /btn\.className\s*=\s*"admin-view-tab px-4 py-2 rounded-xl text-xs font-bold transition-all text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-semibold flex items-center gap-1\.5 cursor-pointer";/g,
    'btn.className = "admin-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all text-on-surface-variant hover:text-on-surface hover:bg-black/5 flex items-center gap-1.5 cursor-pointer";'
  );

  return html;
});

// -----------------------------------------------------------------------------
// 6. ADMIN MOBILE: prototype/admin/mobile-dashboard.html
// -----------------------------------------------------------------------------
updateFile('prototype/admin/mobile-dashboard.html', (html) => {
  // Remove spotlight chip
  const chipRegex = /<!-- Mobile Executive Capability Spotlight Chip -->[\s\S]*?<\/div>/gi;
  html = html.replace(chipRegex, '');

  return html;
});

// -----------------------------------------------------------------------------
// 7. SYSADMIN PORTAL: prototype/sysadmin/dashboard.html
// -----------------------------------------------------------------------------
updateFile('prototype/sysadmin/dashboard.html', (html) => {
  // Remove spotlight banner
  const spotRegex = /<!-- SYSOPS CAPABILITIES EXPLORER SPOTLIGHT -->[\s\S]*?id="sysadmin-capabilities-spotlight"[\s\S]*?<\/div>\s*<\/div>/gi;
  html = html.replace(spotRegex, '');

  // Simplify Focus Mode Tabs to Soft Pill Group
  const oldTabsRegex = /<!-- FOCUS MODE NAVIGATION TABS -->[\s\S]*?<!-- ===================================================================== -->\s*<!-- TAB 1:/gi;
  const newTabs = `<!-- Navigation Tabs -->
<div class="flex items-center gap-2 p-1.5 bg-[#f4f1ee] rounded-full w-fit mb-6">
  <button id="sysadminTabBtn_mesh" onclick="switchSysadminView('mesh')" class="sysadmin-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all bg-primary text-white shadow-xs flex items-center gap-1.5 cursor-pointer" type="button">
    <span class="material-symbols-outlined text-[16px]">view_in_ar</span>
    <span>Runtime Mesh</span>
  </button>
  <button id="sysadminTabBtn_telemetry" onclick="switchSysadminView('telemetry')" class="sysadmin-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all text-on-surface-variant hover:text-on-surface hover:bg-black/5 flex items-center gap-1.5 cursor-pointer" type="button">
    <span class="material-symbols-outlined text-[16px]">show_chart</span>
    <span>Ingress &amp; Traffic</span>
  </button>
  <button id="sysadminTabBtn_logs" onclick="switchSysadminView('logs')" class="sysadmin-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all text-on-surface-variant hover:text-on-surface hover:bg-black/5 flex items-center gap-1.5 cursor-pointer" type="button">
    <span class="material-symbols-outlined text-[16px]">dvr</span>
    <span>Exception Logs</span>
  </button>
</div>

<!-- ===================================================================== -->
<!-- TAB 1:`;
  html = html.replace(oldTabsRegex, newTabs);

  // Soften SysOps Actions block
  const oldActionsRegex = /<div class="rounded-xl bg-surface-container-lowest p-space-md shadow-sm mb-space-lg flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">[\s\S]*?Propose Maintenance Window[\s\S]*?<\/div>\s*<\/div>/gi;
  const newActions = `<div class="carepoint-soft-card mb-space-lg flex flex-col lg:flex-row lg:items-center justify-between gap-4">
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
      <span class="material-symbols-outlined text-[20px]">bolt</span>
    </div>
    <span class="font-bold text-base text-primary">SysOps Actions</span>
  </div>
  <div class="flex items-center gap-2 flex-wrap">
    <button class="carepoint-soft-btn-secondary" onclick="handleAction('CDN Flush Initiated')">
      <span class="material-symbols-outlined text-[16px]">cached</span>
      <span>Flush CDN</span>
    </button>
    <button class="carepoint-soft-btn-secondary" onclick="handleAction('Health Probe Dispatched')">
      <span class="material-symbols-outlined text-[16px]">network_ping</span>
      <span>Health Probe</span>
    </button>
    <button class="carepoint-soft-btn-secondary" onclick="handleAction('Diagnostic Bundle Generating')">
      <span class="material-symbols-outlined text-[16px]">archive</span>
      <span>Diagnostic Bundle</span>
    </button>
    <button class="carepoint-soft-btn" onclick="handleAction('Maintenance Window Request Drafted')">
      <span class="material-symbols-outlined text-[16px]">edit_calendar</span>
      <span>Maintenance Window</span>
    </button>
  </div>
</div>`;
  html = html.replace(oldActionsRegex, newActions);

  // Update switchSysadminView in script
  html = html.replace(
    /btn\.className\s*=\s*'sysadmin-view-tab px-4 py-2 rounded-xl text-xs font-bold transition-all bg-primary text-on-primary shadow-xs flex items-center gap-1\.5 cursor-pointer';/g,
    'btn.className = "sysadmin-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all bg-primary text-white shadow-xs flex items-center gap-1.5 cursor-pointer";'
  );
  html = html.replace(
    /btn\.className\s*=\s*'sysadmin-view-tab px-4 py-2 rounded-xl text-xs font-bold transition-all text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-semibold flex items-center gap-1\.5 cursor-pointer';/g,
    'btn.className = "sysadmin-view-tab px-5 py-2 rounded-full text-xs font-semibold transition-all text-on-surface-variant hover:text-on-surface hover:bg-black/5 flex items-center gap-1.5 cursor-pointer";'
  );

  return html;
});

// -----------------------------------------------------------------------------
// 8. SYSADMIN MOBILE: prototype/sysadmin/mobile-dashboard.html
// -----------------------------------------------------------------------------
updateFile('prototype/sysadmin/mobile-dashboard.html', (html) => {
  // Remove spotlight chip
  const chipRegex = /<!-- Mobile SysOps Capability Spotlight Chip -->[\s\S]*?<\/div>/gi;
  html = html.replace(chipRegex, '');

  return html;
});

console.log('\nAll core portals processed with Soft Simple UI.');
