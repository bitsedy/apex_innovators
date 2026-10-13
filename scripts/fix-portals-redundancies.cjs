const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const PROTOTYPE_DIR = path.join(ROOT_DIR, 'prototype');

console.log('=== FIXING PORTALS REDUNDANCIES & ALIGNING NAVIGATION ===\n');

// ============================================================================
// 1. PARENT PORTAL DESKTOP CLEANUP (dashboard.html, academics.html, messages.html, pickup.html)
// ============================================================================
const parentDesktopFiles = ['dashboard.html', 'academics.html', 'messages.html', 'pickup.html'];

parentDesktopFiles.forEach(fileName => {
  const filePath = path.join(PROTOTYPE_DIR, 'parent', fileName);
  if (!fs.existsSync(filePath)) return;

  let html = fs.readFileSync(filePath, 'utf8');

  // Replace drawer nav
  // The cleaned 4 links for parent drawer:
  // 1. Dashboard (dashboard.html)
  // 2. Performance & Reports (academics.html)
  // 3. Pickup Security Pass (pickup.html)
  // 4. Messages & Welfare (messages.html)
  
  const isDashboard = fileName === 'dashboard.html';
  const isAcademics = fileName === 'academics.html';
  const isPickup = fileName === 'pickup.html';
  const isMessages = fileName === 'messages.html';

  const activeDrawerClass = 'bg-primary-container text-on-primary font-bold shadow-sm';
  const inactiveDrawerClass = 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium';

  const cleanedParentDrawerNav = `    <!-- Navigation Links -->
    <nav class="flex flex-col gap-1 px-space-md overflow-y-auto flex-1 min-h-0">
      <a href="dashboard.html" class="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all ${isDashboard ? activeDrawerClass : inactiveDrawerClass}">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[20px]">dashboard</span>
          <span class="text-sm">Dashboard</span>
        </div>
      </a>
      <a href="academics.html" class="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all ${isAcademics ? activeDrawerClass : inactiveDrawerClass}">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[20px]">insights</span>
          <span class="text-sm">Performance &amp; Reports</span>
        </div>
      </a>
      <a href="pickup.html" class="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all ${isPickup ? activeDrawerClass : inactiveDrawerClass}">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[20px]">qr_code_scanner</span>
          <span class="text-sm">Pickup Security Pass</span>
        </div>
      </a>
      <a href="messages.html" class="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all ${isMessages ? activeDrawerClass : inactiveDrawerClass}">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[20px]">forum</span>
          <span class="text-sm">Messages &amp; Welfare</span>
        </div>
        <span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-secondary-container text-on-secondary">2</span>
      </a>
    </nav>`;

  // Replace in drawer: find <!-- Navigation Links --> ... </nav> inside <aside>
  html = html.replace(/<!-- Navigation Links -->[\s\S]*?<\/nav>/i, cleanedParentDrawerNav);

  // Replace header nav:
  const activeHeaderClass = 'transition-colors py-2 text-primary font-bold border-b-2 border-primary';
  const inactiveHeaderClass = 'text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-colors py-2';

  const cleanedParentHeaderNav = `<nav class="hidden xl:flex items-center gap-space-lg h-full" data-active-classes="text-primary font-bold border-b-2 border-primary"><a ${isDashboard ? 'aria-current="page" class="' + activeHeaderClass + '"' : 'class="' + inactiveHeaderClass + '"'} data-path="dashboard" href="dashboard.html">Dashboard</a><a ${isAcademics ? 'aria-current="page" class="' + activeHeaderClass + '"' : 'class="' + inactiveHeaderClass + '"'} data-path="performance-and-reports" href="academics.html">Performance &amp; Reports</a><a ${isPickup ? 'aria-current="page" class="' + activeHeaderClass + '"' : 'class="' + inactiveHeaderClass + '"'} data-path="pickup-security" href="pickup.html">Pickup Security</a><a ${isMessages ? 'aria-current="page" class="' + activeHeaderClass + '"' : 'class="' + inactiveHeaderClass + '"'} data-path="messages" href="messages.html">Messages &amp; Welfare</a></nav>`;

  html = html.replace(/<nav class="hidden xl:flex items-center gap-space-lg h-full"[\s\S]*?<\/nav>/i, cleanedParentHeaderNav);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✔ Cleaned Parent Desktop nav in ${fileName}`);
});

// ============================================================================
// 2. PARENT PORTAL MOBILE CLEANUP (mobile-dashboard, mobile-academics, mobile-messages, mobile-pickup)
// ============================================================================
const parentMobileFiles = ['mobile-dashboard.html', 'mobile-academics.html', 'mobile-messages.html', 'mobile-pickup.html'];

parentMobileFiles.forEach(fileName => {
  const filePath = path.join(PROTOTYPE_DIR, 'parent', fileName);
  if (!fs.existsSync(filePath)) return;

  let html = fs.readFileSync(filePath, 'utf8');

  const isWard = fileName === 'mobile-dashboard.html';
  const isAcademics = fileName === 'mobile-academics.html';
  const isPickup = fileName === 'mobile-pickup.html';
  const isWelfare = fileName === 'mobile-messages.html';

  const activeMobileClass = 'flex flex-col items-center justify-center min-w-[44px] min-h-[44px] flex-1 py-space-xs transition-colors text-primary font-label-md';
  const inactiveMobileClass = 'flex flex-col items-center justify-center min-w-[44px] min-h-[44px] flex-1 py-space-xs text-on-surface-variant transition-colors';

  const cleanedParentMobileBottomNav = `<nav class="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(1,21,73,0.05)]" data-active-classes="text-primary font-label-md"><div class="flex justify-around items-center h-16 px-space-xs"><a ${isWard ? 'aria-current="page" class="' + activeMobileClass + '"' : 'class="' + inactiveMobileClass + '"'} data-path="parent-home" href="mobile-dashboard.html"><span class="material-symbols-outlined text-[22px]">home</span><span class="font-label-sm text-label-sm mt-0.5">Ward</span></a><a ${isAcademics ? 'aria-current="page" class="' + activeMobileClass + '"' : 'class="' + inactiveMobileClass + '"'} data-path="academics" href="mobile-academics.html"><span class="material-symbols-outlined text-[22px]">menu_book</span><span class="font-label-sm text-label-sm mt-0.5">Academics</span></a><a ${isPickup ? 'aria-current="page" class="' + activeMobileClass + '"' : 'class="' + inactiveMobileClass + '"'} data-path="pickup-security" href="mobile-pickup.html"><span class="material-symbols-outlined text-[22px]">verified_user</span><span class="font-label-sm text-label-sm mt-0.5">Pickup Pass</span></a><a ${isWelfare ? 'aria-current="page" class="' + activeMobileClass + '"' : 'class="' + inactiveMobileClass + '"'} data-path="student-welfare" href="mobile-messages.html"><span class="material-symbols-outlined text-[22px]">forum</span><span class="font-label-sm text-label-sm mt-0.5">Messages</span></a></div></nav>`;

  html = html.replace(/<nav class="fixed bottom-0 w-full z-50 pb-safe[\s\S]*?<\/nav>/i, cleanedParentMobileBottomNav);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✔ Cleaned Parent Mobile bottom nav in ${fileName}`);
});

// ============================================================================
// 3. STAFF PORTAL DESKTOP ALIGNMENT (Add Timetable after Attendance)
// ============================================================================
const staffDesktopFiles = ['dashboard.html', 'attendance.html', 'gradebook.html', 'timetable.html', 'health.html', 'approvals.html', 'messages.html'];

staffDesktopFiles.forEach(fileName => {
  const filePath = path.join(PROTOTYPE_DIR, 'staff', fileName);
  if (!fs.existsSync(filePath)) return;

  let html = fs.readFileSync(filePath, 'utf8');

  const isDashboard = fileName === 'dashboard.html';
  const isAttendance = fileName === 'attendance.html';
  const isTimetable = fileName === 'timetable.html';
  const isGradebook = fileName === 'gradebook.html';
  const isHealth = fileName === 'health.html';
  const isApprovals = fileName === 'approvals.html';
  const isMessages = fileName === 'messages.html';

  const activeStaffClass = 'flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors font-label-lg text-label-lg bg-primary-container text-on-primary font-bold shadow-sm';
  const inactiveStaffClass = 'flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg';

  const cleanedStaffDrawerNav = `<nav class="flex flex-col gap-1" data-active-classes="bg-primary-container text-on-primary font-bold rounded-lg shadow-sm">
      <a class="${isDashboard ? activeStaffClass : inactiveStaffClass}" data-path="staff-dashboard" href="dashboard.html">
        <span class="material-symbols-outlined text-[20px]">grid_view</span>
        <span>Dashboard</span>
      </a>
      <a class="${isAttendance ? activeStaffClass : inactiveStaffClass}" data-path="staff-attendance" href="attendance.html">
        <span class="material-symbols-outlined text-[20px]">fact_check</span>
        <span>Attendance</span>
      </a>
      <a class="${isTimetable ? activeStaffClass : inactiveStaffClass}" data-path="staff-timetable" href="timetable.html">
        <span class="material-symbols-outlined text-[20px]">calendar_month</span>
        <span>Timetable</span>
      </a>
      <a class="${isGradebook ? activeStaffClass : inactiveStaffClass}" data-path="staff-gradebook" href="gradebook.html">
        <span class="material-symbols-outlined text-[20px]">menu_book</span>
        <span>Gradebook</span>
      </a>
      <a class="${isHealth ? activeStaffClass : inactiveStaffClass}" data-path="staff-health-and-welfare" href="health.html">
        <span class="material-symbols-outlined text-[20px]">medical_services</span>
        <span>Health &amp; Welfare</span>
      </a>
      <a class="${isApprovals ? 'flex items-center justify-between px-3 py-2 rounded-lg transition-colors font-label-lg text-label-lg bg-primary-container text-on-primary font-bold shadow-sm' : 'flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg'}" data-path="staff-approvals-engine" href="approvals.html">
        <div class="flex items-center gap-2.5">
          <span class="material-symbols-outlined text-[20px]">verified</span>
          <span>Approvals Engine</span>
        </div>
        <span class="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-label-sm font-label-sm font-bold">3</span>
      </a>
      <a class="${isMessages ? activeStaffClass : inactiveStaffClass}" data-path="staff-messages" href="messages.html">
        <span class="material-symbols-outlined text-[20px]">chat_bubble</span>
        <span>Messages</span>
      </a>
    </nav>`;

  html = html.replace(/<nav class="flex flex-col gap-1"[\s\S]*?<\/nav>/i, cleanedStaffDrawerNav);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✔ Aligned Staff Desktop drawer nav with Timetable in ${fileName}`);
});

// ============================================================================
// 4. SYSADMIN PORTAL DESKTOP ALIGNMENT
// ============================================================================
const sysadminDesktopFiles = ['dashboard.html', 'provisioning.html', 'features.html', 'tracker.html', 'changes.html', 'integrations.html', 'audit.html'];

sysadminDesktopFiles.forEach(fileName => {
  const filePath = path.join(PROTOTYPE_DIR, 'sysadmin', fileName);
  if (!fs.existsSync(filePath)) return;

  let html = fs.readFileSync(filePath, 'utf8');

  const isDashboard = fileName === 'dashboard.html';
  const isProvisioning = fileName === 'provisioning.html';
  const isFeatures = fileName === 'features.html';
  const isTracker = fileName === 'tracker.html';
  const isChanges = fileName === 'changes.html';
  const isIntegrations = fileName === 'integrations.html';
  const isAudit = fileName === 'audit.html';

  const activeSysClass = 'flex items-center gap-space-sm px-space-md py-space-sm transition-colors bg-primary-container text-on-primary font-bold rounded-lg';
  const inactiveSysClass = 'flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-primary-fixed hover:bg-primary-container hover:text-on-primary transition-colors font-label-lg text-label-lg';

  const cleanedSysadminDrawerNav = `<nav class="flex flex-col gap-space-xs px-space-md" data-active-classes="bg-primary-container text-on-primary font-bold rounded-lg">
      <a ${isDashboard ? 'aria-current="page" ' : ''}class="${isDashboard ? activeSysClass : inactiveSysClass}" data-path="dashboard" href="dashboard.html">
        <span class="material-symbols-outlined text-[20px]">grid_view</span>
        <span>Dashboard</span>
      </a>
      <a ${isProvisioning ? 'aria-current="page" ' : ''}class="${isProvisioning ? activeSysClass : inactiveSysClass}" data-path="user-provisioning" href="provisioning.html">
        <span class="material-symbols-outlined text-[20px]">badge</span>
        <span>User Provisioning</span>
      </a>
      <a ${isFeatures ? 'aria-current="page" ' : ''}class="${isFeatures ? activeSysClass : inactiveSysClass}" data-path="feature-flags" href="features.html">
        <span class="material-symbols-outlined text-[20px]">toggle_on</span>
        <span>Feature Flags</span>
      </a>
      <a ${isTracker ? 'aria-current="page" ' : ''}class="${isTracker ? activeSysClass : inactiveSysClass}" data-path="change-requests" href="tracker.html">
        <span class="material-symbols-outlined text-[20px]">published_with_changes</span>
        <span>Change Requests</span>
      </a>
      <a ${isChanges ? 'aria-current="page" ' : ''}class="${isChanges ? activeSysClass : inactiveSysClass}" data-path="rfc-composer" href="changes.html">
        <span class="material-symbols-outlined text-[20px]">post_add</span>
        <span>RFC Composer</span>
      </a>
      <a ${isIntegrations ? 'aria-current="page" ' : ''}class="${isIntegrations ? activeSysClass : inactiveSysClass}" data-path="integrations" href="integrations.html">
        <span class="material-symbols-outlined text-[20px]">hub</span>
        <span>Integrations</span>
      </a>
      <a ${isAudit ? 'aria-current="page" ' : ''}class="${isAudit ? activeSysClass : inactiveSysClass}" data-path="audit-logs" href="audit.html">
        <span class="material-symbols-outlined text-[20px]">receipt_long</span>
        <span>Audit Logs</span>
      </a>
    </nav>`;

  html = html.replace(/<nav class="flex flex-col gap-space-xs px-space-md"[\s\S]*?<\/nav>/i, cleanedSysadminDrawerNav);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✔ Aligned SysAdmin Desktop drawer nav in ${fileName}`);
});

// ============================================================================
// 5. ADMIN PORTAL DRAWER: REMOVE REDUNDANT INTERNAL #school-fees-section ANCHOR
// ============================================================================
const adminDashboardPath = path.join(PROTOTYPE_DIR, 'admin', 'dashboard.html');
if (fs.existsSync(adminDashboardPath)) {
  let html = fs.readFileSync(adminDashboardPath, 'utf8');

  // Look for:
  // <a class="flex items-center justify-between px-space-md py-2.5 rounded-xl font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all cursor-pointer" data-path="fees" href="#school-fees-section" onclick="switchAdminView('finance')">...</a>
  const feesLinkRegex = /<a[^>]*href="#school-fees-section"[^>]*>[\s\S]*?<\/a>\s*/i;
  if (feesLinkRegex.test(html)) {
    html = html.replace(feesLinkRegex, '');
    fs.writeFileSync(adminDashboardPath, html, 'utf8');
    console.log('✔ Removed redundant internal #school-fees-section link from admin/dashboard.html drawer');
  }
}

// ============================================================================
// 6. UPDATE CAREPOINT-APP.JS ROLE_CONFIGS & CAPABILITIES
// ============================================================================
const appJsPath = path.join(PROTOTYPE_DIR, 'carepoint-app.js');
if (fs.existsSync(appJsPath)) {
  let appJs = fs.readFileSync(appJsPath, 'utf8');

  // 1. Parent ROLE_CONFIGS: remove Child Profile duplicate & unify messages
  const oldParentConfig = `    parent: {
      title: 'Carepoint',
      sub: 'Community School',
      motto: 'MIND • HEART • HANDS',
      badge: 'PARENT & GUARDIAN PORTAL',
      badgeColor: 'bg-secondary',
      sessionText: 'Session 2026/27 Term 1',
      sessionWeek: 'Wk 8',
      sectionTitle: 'Parent Navigation',
      links: [
        { label: 'Dashboard', icon: 'dashboard', href: \`\${rel}parent/\${prefix}dashboard.html\` },
        { label: 'Child Profile', icon: 'badge', href: \`\${rel}parent/\${prefix}dashboard.html#ward\` },
        { label: 'Performance & Reports', icon: 'insights', href: \`\${rel}parent/\${prefix}academics.html\` },
        { label: 'Attendance & Welfare', icon: 'health_and_safety', href: \`\${rel}parent/\${prefix}messages.html#welfare\` },
        { label: 'Pickup Security Pass', icon: 'qr_code_scanner', href: \`\${rel}parent/\${prefix}pickup.html\` },
        { label: 'Teacher Messages', icon: 'forum', href: \`\${rel}parent/\${prefix}messages.html#messages\`, badge: '2' }
      ]
    },`;

  const newParentConfig = `    parent: {
      title: 'Carepoint',
      sub: 'Community School',
      motto: 'MIND • HEART • HANDS',
      badge: 'PARENT & GUARDIAN PORTAL',
      badgeColor: 'bg-secondary',
      sessionText: 'Session 2026/27 Term 1',
      sessionWeek: 'Wk 8',
      sectionTitle: 'Parent Navigation',
      links: [
        { label: 'Dashboard', icon: 'dashboard', href: \`\${rel}parent/\${prefix}dashboard.html\` },
        { label: 'Performance & Reports', icon: 'insights', href: \`\${rel}parent/\${prefix}academics.html\` },
        { label: 'Pickup Security Pass', icon: 'qr_code_scanner', href: \`\${rel}parent/\${prefix}pickup.html\` },
        { label: 'Messages & Welfare', icon: 'forum', href: \`\${rel}parent/\${prefix}messages.html\`, badge: '2' }
      ]
    },`;

  if (appJs.includes(oldParentConfig)) {
    appJs = appJs.replace(oldParentConfig, newParentConfig);
    console.log('✔ Updated ROLE_CONFIGS.parent in carepoint-app.js');
  }

  // 2. Staff ROLE_CONFIGS: place Timetable right after Attendance
  const oldStaffConfig = `    staff: {
      title: 'Carepoint',
      sub: 'Community School',
      motto: 'MIND • HEART • HANDS',
      badge: 'STAFF OPERATIONAL PORTAL',
      badgeColor: 'bg-secondary',
      sessionText: 'Session 2026/27 Term 1',
      sessionWeek: 'Wk 8',
      sectionTitle: 'Academic Operations',
      links: [
        { label: 'Dashboard', icon: 'grid_view', href: \`\${rel}staff/\${prefix}dashboard.html\` },
        { label: 'Attendance', icon: 'fact_check', href: \`\${rel}staff/\${prefix}attendance.html\` },
        { label: 'Gradebook', icon: 'menu_book', href: \`\${rel}staff/\${prefix}gradebook.html\` },
        { label: 'Health & Welfare', icon: 'medical_services', href: \`\${rel}staff/\${prefix}health.html\` },
        { label: 'Approvals Engine', icon: 'verified', href: \`\${rel}staff/\${prefix}approvals.html\`, badge: '3' },
        { label: 'Messages', icon: 'chat_bubble', href: \`\${rel}staff/\${prefix}messages.html\` },
        { label: 'Timetable', icon: 'calendar_month', href: \`\${rel}staff/\${prefix}timetable.html\` }
      ]
    },`;

  const newStaffConfig = `    staff: {
      title: 'Carepoint',
      sub: 'Community School',
      motto: 'MIND • HEART • HANDS',
      badge: 'STAFF OPERATIONAL PORTAL',
      badgeColor: 'bg-secondary',
      sessionText: 'Session 2026/27 Term 1',
      sessionWeek: 'Wk 8',
      sectionTitle: 'Academic Operations',
      links: [
        { label: 'Dashboard', icon: 'grid_view', href: \`\${rel}staff/\${prefix}dashboard.html\` },
        { label: 'Attendance', icon: 'fact_check', href: \`\${rel}staff/\${prefix}attendance.html\` },
        { label: 'Timetable', icon: 'calendar_month', href: \`\${rel}staff/\${prefix}timetable.html\` },
        { label: 'Gradebook', icon: 'menu_book', href: \`\${rel}staff/\${prefix}gradebook.html\` },
        { label: 'Health & Welfare', icon: 'medical_services', href: \`\${rel}staff/\${prefix}health.html\` },
        { label: 'Approvals Engine', icon: 'verified', href: \`\${rel}staff/\${prefix}approvals.html\`, badge: '3' },
        { label: 'Messages', icon: 'chat_bubble', href: \`\${rel}staff/\${prefix}messages.html\` }
      ]
    },`;

  if (appJs.includes(oldStaffConfig)) {
    appJs = appJs.replace(oldStaffConfig, newStaffConfig);
    console.log('✔ Updated ROLE_CONFIGS.staff order in carepoint-app.js');
  }

  // 3. SysAdmin ROLE_CONFIGS: add tracker and changes properly
  const oldSysadminConfig = `    sysadmin: {
      title: 'Carepoint',
      sub: 'SysOps Core',
      motto: 'MIND • HEART • HANDS',
      badge: 'SYSTEMS & IT OPERATIONS',
      badgeColor: 'bg-secondary',
      sessionText: 'Session 2026/27 Term 1',
      sessionWeek: 'Pod-A',
      sectionTitle: 'Infrastructure Operations',
      links: [
        { label: 'Dashboard', icon: 'grid_view', href: \`\${rel}sysadmin/\${prefix}dashboard.html\` },
        { label: 'User Provisioning', icon: 'badge', href: \`\${rel}sysadmin/\${prefix}provisioning.html\` },
        { label: 'Feature Flags', icon: 'toggle_on', href: \`\${rel}sysadmin/\${prefix}features.html\` },
        { label: 'Change Requests', icon: 'published_with_changes', href: \`\${rel}sysadmin/\${prefix}changes.html\` },
        { label: 'Integrations', icon: 'hub', href: \`\${rel}sysadmin/\${prefix}integrations.html\` },
        { label: 'Audit Logs', icon: 'receipt_long', href: \`\${rel}sysadmin/\${prefix}audit.html\` }
      ]
    }`;

  const newSysadminConfig = `    sysadmin: {
      title: 'Carepoint',
      sub: 'SysOps Core',
      motto: 'MIND • HEART • HANDS',
      badge: 'SYSTEMS & IT OPERATIONS',
      badgeColor: 'bg-secondary',
      sessionText: 'Session 2026/27 Term 1',
      sessionWeek: 'Pod-A',
      sectionTitle: 'Infrastructure Operations',
      links: [
        { label: 'Dashboard', icon: 'grid_view', href: \`\${rel}sysadmin/\${prefix}dashboard.html\` },
        { label: 'User Provisioning', icon: 'badge', href: \`\${rel}sysadmin/\${prefix}provisioning.html\` },
        { label: 'Feature Flags', icon: 'toggle_on', href: \`\${rel}sysadmin/\${prefix}features.html\` },
        { label: 'Change Requests', icon: 'published_with_changes', href: \`\${rel}sysadmin/\${prefix}tracker.html\` },
        { label: 'RFC Composer', icon: 'post_add', href: \`\${rel}sysadmin/\${prefix}changes.html\` },
        { label: 'Integrations', icon: 'hub', href: \`\${rel}sysadmin/\${prefix}integrations.html\` },
        { label: 'Audit Logs', icon: 'receipt_long', href: \`\${rel}sysadmin/\${prefix}audit.html\` }
      ]
    }`;

  if (appJs.includes(oldSysadminConfig)) {
    appJs = appJs.replace(oldSysadminConfig, newSysadminConfig);
    console.log('✔ Updated ROLE_CONFIGS.sysadmin in carepoint-app.js');
  }

  // 4. Admin ROLE_CONFIGS: remove { label: 'School Fees & Bursary', ... }
  const oldAdminFeesLink = `        { label: 'School Fees & Bursary', icon: 'payments', href: \`\${rel}admin/\${prefix}dashboard.html#school-fees-section\`, badge: '84.6%' },\n`;
  if (appJs.includes(oldAdminFeesLink)) {
    appJs = appJs.replace(oldAdminFeesLink, '');
    console.log('✔ Removed School Fees & Bursary from ROLE_CONFIGS.admin in carepoint-app.js');
  }

  // 5. Parent health capability target URL fix (point to messages.html#welfare instead of academics.html#health)
  const oldParentHealthAction = `action: \`url:\${relRoot}parent/\${pfx}academics.html#health\`,`;
  const newParentHealthAction = `action: \`url:\${relRoot}parent/\${pfx}messages.html#welfare\`,`;
  if (appJs.includes(oldParentHealthAction)) {
    appJs = appJs.replace(oldParentHealthAction, newParentHealthAction);
    appJs = appJs.replace("page: 'academics.html'\n      },\n      {\n        id: 'parent-switch-ward'", "page: 'messages.html'\n      },\n      {\n        id: 'parent-switch-ward'");
    console.log('✔ Corrected parent health capability target to messages.html#welfare');
  }

  fs.writeFileSync(appJsPath, appJs, 'utf8');
}

console.log('\n✔ All navigation redundancy fixes applied successfully!');
