const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

// Helper to normalize and replace content
function updateFile(relPath, replacers) {
  const fullPath = path.join(projectRoot, relPath);
  let content = fs.readFileSync(fullPath, 'utf8');
  let original = content;

  replacers.forEach(({ find, replace, name }) => {
    // try exact match first
    if (content.includes(find)) {
      content = content.replace(find, replace);
      console.log(`[${relPath}] Applied: ${name}`);
    } else {
      // try normalizing CRLF vs LF
      const normContent = content.replace(/\r\n/g, '\n');
      const normFind = find.replace(/\r\n/g, '\n');
      if (normContent.includes(normFind)) {
        content = normContent.replace(normFind, replace.replace(/\r\n/g, '\n'));
        console.log(`[${relPath}] Applied (normalized LF): ${name}`);
      } else {
        console.error(`[${relPath}] FAILED to find target block: ${name}`);
      }
    }
  });

  if (content !== original) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`[${relPath}] Saved changes successfully.`);
  } else {
    console.log(`[${relPath}] No changes made.`);
  }
}

// 1. Admin Dashboard KPI metrics
const adminKpiOld = `      <!-- KPI QUICK-STATS GRID (4 CARDS) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <!-- Card 1: Approvals -->
        <div class="flex flex-col justify-between p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 shadow-xs hover:shadow-md transition-shadow">
          <div class="flex items-start justify-between">
            <div>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Pending Sign-Offs</span>
              <div class="flex items-baseline gap-2 mt-1">
                <span class="font-headline-lg text-headline-lg text-secondary-container font-extrabold">9</span>
                <span class="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-error-container text-on-error-container font-semibold">4 Urgent</span>
              </div>
            </div>
            <div class="w-10 h-10 rounded-xl bg-error-container text-error flex items-center justify-center">
              <span class="material-symbols-outlined text-[20px]">pending_actions</span>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between">
            <span class="font-body-sm text-body-sm text-on-surface-variant">Medical, gate &amp; intake</span>
            <a class="font-label-sm text-label-sm text-primary hover:text-primary-container flex items-center gap-1 font-semibold" href="approvals.html">
              <span>Review</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>

        <!-- Card 2: Attendance Today -->
        <div class="flex flex-col justify-between p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 shadow-xs hover:shadow-md transition-shadow">
          <div class="flex items-start justify-between">
            <div>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Student Attendance</span>
              <div class="flex items-baseline gap-2 mt-1">
                <span class="font-headline-lg text-headline-lg text-on-surface font-extrabold">96.5%</span>
                <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">328/340</span>
              </div>
            </div>
            <div class="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
              <span class="material-symbols-outlined text-[20px]">groups</span>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex flex-col gap-2">
            <div class="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
              <div class="bg-tertiary-container h-full rounded-full" style="width: 96.5%"></div>
            </div>
            <div class="flex items-center justify-between text-[11px] font-medium text-on-surface-variant">
              <span>NUR 42/48</span>
              <span>KG 64/92</span>
              <span>BAS 156/160</span>
              <span>JHS 66/80</span>
            </div>
          </div>
        </div>

        <!-- Card 3: Faculty Clock-In -->
        <div class="flex flex-col justify-between p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 shadow-xs hover:shadow-md transition-shadow">
          <div class="flex items-start justify-between">
            <div>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Faculty On Campus</span>
              <div class="flex items-baseline gap-2 mt-1">
                <span class="font-headline-lg text-headline-lg text-on-surface font-extrabold">26/28</span>
                <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">92.8%</span>
              </div>
            </div>
            <div class="w-10 h-10 rounded-xl bg-surface-container-high text-primary flex items-center justify-center">
              <span class="material-symbols-outlined text-[20px]">fingerprint</span>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between">
            <div class="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
              <span class="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
              <span>Geofence verified</span>
            </div>
            <span class="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant font-medium">2 on leave</span>
          </div>
        </div>

        <!-- Card 4: Gate Security Status -->
        <div class="flex flex-col justify-between p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 shadow-xs hover:shadow-md transition-shadow">
          <div class="flex items-start justify-between">
            <div>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Gate Security</span>
              <div class="flex items-baseline gap-2 mt-1">
                <span class="font-headline-lg text-headline-lg text-on-surface font-extrabold">Armed</span>
                <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">184 cleared</span>
              </div>
            </div>
            <div class="w-10 h-10 rounded-xl bg-surface-container text-primary flex items-center justify-center">
              <span class="material-symbols-outlined text-[20px]">sensor_door</span>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between">
            <div class="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface">
              <span class="material-symbols-outlined text-[16px] text-tertiary-container">verified</span>
              <span>Turnstiles active</span>
            </div>
            <span class="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant font-medium">0 Alerts</span>
          </div>
        </div>
      </div>`;

const adminKpiNew = `      <!-- KPI QUICK-STATS GRID (4 CARDS) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <!-- Card 1: Approvals -->
        <div class="carepoint-metric-card flex flex-col justify-between p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 shadow-xs hover:shadow-md transition-shadow">
          <div class="flex items-start justify-between">
            <div>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Pending Sign-Offs</span>
              <div class="flex items-baseline gap-2 mt-1">
                <span class="carepoint-metric-num font-headline-lg text-headline-lg text-secondary-container font-extrabold" data-metric-target="9">9</span>
                <span class="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-error-container text-on-error-container font-semibold">4 Urgent</span>
              </div>
            </div>
            <div class="w-10 h-10 rounded-xl bg-error-container text-error flex items-center justify-center">
              <span class="material-symbols-outlined text-[20px]">pending_actions</span>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between">
            <span class="font-body-sm text-body-sm text-on-surface-variant">Medical, gate &amp; intake</span>
            <a class="font-label-sm text-label-sm text-primary hover:text-primary-container flex items-center gap-1 font-semibold" href="approvals.html">
              <span>Review</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>

        <!-- Card 2: Attendance Today -->
        <div class="carepoint-metric-card flex flex-col justify-between p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 shadow-xs hover:shadow-md transition-shadow">
          <div class="flex items-start justify-between">
            <div>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Student Attendance</span>
              <div class="flex items-baseline gap-2 mt-1">
                <span class="carepoint-metric-num font-headline-lg text-headline-lg text-on-surface font-extrabold" data-metric-target="96.5%">96.5%</span>
                <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">328/340</span>
              </div>
            </div>
            <div class="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
              <span class="material-symbols-outlined text-[20px]">groups</span>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex flex-col gap-2">
            <div class="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
              <div class="bg-tertiary-container h-full rounded-full" style="width: 96.5%"></div>
            </div>
            <div class="flex items-center justify-between text-[11px] font-medium text-on-surface-variant">
              <span>NUR 42/48</span>
              <span>KG 64/92</span>
              <span>BAS 156/160</span>
              <span>JHS 66/80</span>
            </div>
          </div>
        </div>

        <!-- Card 3: Faculty Clock-In -->
        <div class="carepoint-metric-card flex flex-col justify-between p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 shadow-xs hover:shadow-md transition-shadow">
          <div class="flex items-start justify-between">
            <div>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Faculty On Campus</span>
              <div class="flex items-baseline gap-2 mt-1">
                <span class="carepoint-metric-num font-headline-lg text-headline-lg text-on-surface font-extrabold" data-metric-target="92.8%">92.8%</span>
                <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">26/28</span>
              </div>
            </div>
            <div class="w-10 h-10 rounded-xl bg-surface-container-high text-primary flex items-center justify-center">
              <span class="material-symbols-outlined text-[20px]">fingerprint</span>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between">
            <div class="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
              <span class="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
              <span>Geofence verified</span>
            </div>
            <span class="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant font-medium">2 on leave</span>
          </div>
        </div>

        <!-- Card 4: Gate Security Status -->
        <div class="carepoint-metric-card flex flex-col justify-between p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 shadow-xs hover:shadow-md transition-shadow">
          <div class="flex items-start justify-between">
            <div>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Gate Security</span>
              <div class="flex items-baseline gap-2 mt-1">
                <span class="carepoint-metric-num font-headline-lg text-headline-lg text-on-surface font-extrabold" data-metric-target="184">184</span>
                <span class="font-label-sm text-label-sm text-tertiary-container font-semibold">100% Cleared</span>
              </div>
            </div>
            <div class="w-10 h-10 rounded-xl bg-surface-container text-primary flex items-center justify-center">
              <span class="material-symbols-outlined text-[20px]">sensor_door</span>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between">
            <div class="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface">
              <span class="material-symbols-outlined text-[16px] text-tertiary-container">verified</span>
              <span>Turnstiles Armed</span>
            </div>
            <span class="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant font-medium">0 Alerts</span>
          </div>
        </div>
      </div>`;

updateFile('prototype/admin/dashboard.html', [
  { find: adminKpiOld, replace: adminKpiNew, name: 'Admin Dashboard KPI Cards Quantitative Update' }
]);

// 2. Staff Dashboard KPI metrics
const staffKpiOld = `    <!-- Section 2: Top KPI Metrics Bar (4 Cards) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      <!-- Metric 1: Attendance -->
      <div class="rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
        <div class="flex items-start justify-between">
          <div>
            <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Today's Attendance</span>
            <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">Not Taken Yet</h2>
          </div>
          <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
            <span class="material-symbols-outlined text-[20px]">timer</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label-sm text-label-sm">
          <span class="text-secondary font-semibold">0 of 28 marked</span>
          <span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-medium">Due by 08:30 AM</span>
        </div>
      </div>

      <!-- Metric 2: Approvals Queue -->
      <div class="rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
        <div class="flex items-start justify-between">
          <div>
            <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Approvals</span>
            <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">2 Waiting</h2>
          </div>
          <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
            <span class="material-symbols-outlined text-[20px]">approval</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label-sm text-label-sm">
          <span class="text-on-surface-variant">Sent to Headmistress</span>
          <a href="approvals.html" class="text-primary font-semibold hover:underline">See List &rarr;</a>
        </div>
      </div>

      <!-- Metric 3: Assessment Grading -->
      <div class="rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
        <div class="flex items-start justify-between">
          <div>
            <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Class Marks</span>
            <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">85% Entered</h2>
          </div>
          <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <span class="material-symbols-outlined text-[20px]">auto_stories</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex flex-col gap-1.5">
          <div class="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
            <div class="bg-emerald-600 h-full rounded-full" style="width: 85%"></div>
          </div>
          <div class="flex items-center justify-between text-[11px] text-on-surface-variant font-medium">
            <span>Mid-Term Test</span>
            <span class="text-emerald-700 font-semibold">24 of 28 students</span>
          </div>
        </div>
      </div>

      <!-- Metric 4: Parent Inquiries -->
      <a href="messages.html" class="rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group cursor-pointer block">
        <div class="flex items-start justify-between">
          <div>
            <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Messages</span>
            <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 group-hover:text-primary transition-colors">1 New Message</h2>
          </div>
          <div class="w-10 h-10 rounded-xl bg-red-100 text-secondary flex items-center justify-center group-hover:scale-105 transition-transform">
            <span class="material-symbols-outlined text-[20px]">mark_chat_unread</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between text-body-sm text-body-sm">
          <span class="text-on-surface font-medium truncate">Dr. Nana Mensah (Parent)</span>
          <span class="text-primary font-semibold text-[11px] flex items-center gap-0.5">Read &rarr;</span>
        </div>
      </a>
    </div>
</div>`;

const staffKpiNew = `    <!-- Section 2: Top KPI Metrics Bar (4 Cards) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      <!-- Metric 1: Attendance -->
      <div class="carepoint-metric-card rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
        <div class="flex items-start justify-between">
          <div>
            <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Today's Attendance</span>
            <div class="flex items-baseline gap-1 mt-1">
              <span class="carepoint-metric-num font-headline-lg text-headline-lg text-on-surface font-bold" data-metric-target="0">0</span>
              <span class="font-headline-sm text-headline-sm text-on-surface-variant font-medium">/ 28</span>
            </div>
          </div>
          <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
            <span class="material-symbols-outlined text-[20px]">timer</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label-sm text-label-sm">
          <span class="text-secondary font-semibold">0% Recorded</span>
          <span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-medium">Due 08:30 AM</span>
        </div>
      </div>

      <!-- Metric 2: Approvals Queue -->
      <div class="carepoint-metric-card rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
        <div class="flex items-start justify-between">
          <div>
            <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Approvals</span>
            <div class="flex items-baseline gap-2 mt-1">
              <span class="carepoint-metric-num font-headline-lg text-headline-lg text-secondary-container font-bold" data-metric-target="2">2</span>
              <span class="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-primary-container text-on-primary font-medium">Pending Review</span>
            </div>
          </div>
          <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
            <span class="material-symbols-outlined text-[20px]">approval</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label-sm text-label-sm">
          <span class="text-on-surface-variant">Sent to Headmistress</span>
          <a href="approvals.html" class="text-primary font-semibold hover:underline">Review &rarr;</a>
        </div>
      </div>

      <!-- Metric 3: Assessment Grading -->
      <div class="carepoint-metric-card rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
        <div class="flex items-start justify-between">
          <div>
            <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Class Marks</span>
            <div class="flex items-baseline gap-2 mt-1">
              <span class="carepoint-metric-num font-headline-lg text-headline-lg text-on-surface font-bold" data-metric-target="85%">85%</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">24/28</span>
            </div>
          </div>
          <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <span class="material-symbols-outlined text-[20px]">auto_stories</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex flex-col gap-1.5">
          <div class="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
            <div class="bg-emerald-600 h-full rounded-full" style="width: 85%"></div>
          </div>
          <div class="flex items-center justify-between text-[11px] text-on-surface-variant font-medium">
            <span>Mid-Term SBA</span>
            <span class="text-emerald-700 font-semibold">4 remaining</span>
          </div>
        </div>
      </div>

      <!-- Metric 4: Parent Inquiries -->
      <a href="messages.html" class="carepoint-metric-card rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group cursor-pointer block">
        <div class="flex items-start justify-between">
          <div>
            <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Messages</span>
            <div class="flex items-baseline gap-2 mt-1">
              <span class="carepoint-metric-num font-headline-lg text-headline-lg text-secondary font-bold" data-metric-target="1">1</span>
              <span class="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-error-container text-on-error-container font-semibold">Unread</span>
            </div>
          </div>
          <div class="w-10 h-10 rounded-xl bg-red-100 text-secondary flex items-center justify-center group-hover:scale-105 transition-transform">
            <span class="material-symbols-outlined text-[20px]">mark_chat_unread</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between text-body-sm text-body-sm">
          <span class="text-on-surface font-medium truncate">Dr. Nana Mensah</span>
          <span class="text-primary font-semibold text-[11px] flex items-center gap-0.5">Read &rarr;</span>
        </div>
      </a>
    </div>`;

updateFile('prototype/staff/dashboard.html', [
  { find: staffKpiOld, replace: staffKpiNew, name: 'Staff Dashboard KPI Cards Quantitative Update' }
]);

// 3. Parent Dashboard KPI metrics
const parentKpiOld = `<!-- Quick Metrics Grid -->
<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<!-- Attendance Card -->
<div class="rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between">
<div class="flex items-start justify-between">
<div>
<span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">Term Attendance</span>
<div class="font-headline-lg text-headline-lg font-bold text-primary mt-1">98.2%</div>
</div>
<div class="w-10 h-10 rounded-xl bg-tertiary-fixed/30 text-tertiary-container flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">how_to_reg</span>
</div>
</div>
<div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>38 of 39 Days Present</span>
<span class="font-semibold text-on-tertiary-container">1 Excused</span>
</div>
</div>
<!-- Term Average Card -->
<div class="rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between">
<div class="flex items-start justify-between">
<div>
<span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">Term Average</span>
<div class="font-headline-lg text-headline-lg font-bold text-primary mt-1">89.4%</div>
</div>
<div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[20px]">workspace_premium</span>
</div>
</div>
<div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label-sm text-label-sm">
<span class="px-2 py-0.5 rounded-full bg-tertiary-fixed/30 text-on-tertiary-fixed-variant font-bold">Grade A</span>
<span class="text-on-tertiary-container font-semibold flex items-center">
<span class="material-symbols-outlined text-xs">arrow_upward</span>+3.2%
</span>
</div>
</div>
<!-- Pickup Pass Card -->
<div class="rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between">
<div class="flex items-start justify-between">
<div>
<span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">Today's Pickup Pass</span>
<div class="font-headline-sm text-headline-sm font-bold text-on-tertiary-fixed-variant mt-1">Active &bull; Secured</div>
</div>
<div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">qr_code_2</span>
</div>
</div>
<div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Dr. Nana Mensah</span>
<span class="font-bold text-primary">#PK-8841</span>
</div>
</div>
<!-- Messages & Notices Card -->
<div class="rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between">
<div class="flex items-start justify-between">
<div>
<span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">Updates</span>
<div class="font-headline-lg text-headline-lg font-bold text-secondary mt-1">2 Unread</div>
</div>
<div class="w-10 h-10 rounded-xl bg-secondary-fixed/50 text-secondary flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">mail</span>
</div>
</div>
<div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span class="flex items-center gap-1 text-secondary font-semibold">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
1 Teacher Note
</span>
<a href="messages.html" class="text-primary font-semibold hover:underline">View &rarr;</a>
</div>
</div>
</section>`;

const parentKpiNew = `<!-- Quick Metrics Grid -->
<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<!-- Attendance Card -->
<div class="carepoint-metric-card rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between">
<div class="flex items-start justify-between">
<div>
<span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">Term Attendance</span>
<div class="carepoint-metric-num font-headline-lg text-headline-lg font-bold text-primary mt-1" data-metric-target="98.2%">98.2%</div>
</div>
<div class="w-10 h-10 rounded-xl bg-tertiary-fixed/30 text-tertiary-container flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">how_to_reg</span>
</div>
</div>
<div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>38 of 39 Days Present</span>
<span class="font-semibold text-on-tertiary-container">1 Excused</span>
</div>
</div>
<!-- Term Average Card -->
<div class="carepoint-metric-card rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between">
<div class="flex items-start justify-between">
<div>
<span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">Term Average</span>
<div class="carepoint-metric-num font-headline-lg text-headline-lg font-bold text-primary mt-1" data-metric-target="89.4%">89.4%</div>
</div>
<div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[20px]">workspace_premium</span>
</div>
</div>
<div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label-sm text-label-sm">
<span class="px-2 py-0.5 rounded-full bg-tertiary-fixed/30 text-on-tertiary-fixed-variant font-bold">Grade A</span>
<span class="text-on-tertiary-container font-semibold flex items-center">
<span class="material-symbols-outlined text-xs">arrow_upward</span>+3.2%
</span>
</div>
</div>
<!-- Pickup Pass Card -->
<div class="carepoint-metric-card rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between">
<div class="flex items-start justify-between">
<div>
<span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">Today's Pickup Pass</span>
<div class="flex items-baseline gap-2 mt-1">
<span class="carepoint-metric-num font-headline-lg text-headline-lg font-bold text-primary" data-metric-target="1">1</span>
<span class="font-label-sm text-label-sm font-bold text-on-tertiary-fixed-variant">Active Pass</span>
</div>
</div>
<div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">qr_code_2</span>
</div>
</div>
<div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Dr. Nana Mensah</span>
<span class="font-bold text-primary">#PK-8841</span>
</div>
</div>
<!-- Messages & Notices Card -->
<div class="carepoint-metric-card rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between">
<div class="flex items-start justify-between">
<div>
<span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">Updates</span>
<div class="flex items-baseline gap-2 mt-1">
<span class="carepoint-metric-num font-headline-lg text-headline-lg font-bold text-secondary" data-metric-target="2">2</span>
<span class="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-error-container text-on-error-container font-semibold">Unread</span>
</div>
</div>
<div class="w-10 h-10 rounded-xl bg-secondary-fixed/50 text-secondary flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">mail</span>
</div>
</div>
<div class="mt-4 pt-3 border-t border-surface-container-high/50 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span class="flex items-center gap-1 text-secondary font-semibold">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
1 Teacher Note
</span>
<a href="messages.html" class="text-primary font-semibold hover:underline">View &rarr;</a>
</div>
</div>
</section>`;

updateFile('prototype/parent/dashboard.html', [
  { find: parentKpiOld, replace: parentKpiNew, name: 'Parent Dashboard KPI Cards Quantitative Update' }
]);

// 4. SysAdmin Dashboard KPI metrics
const sysadminKpiOld = `<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      <div class="rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div class="flex items-start justify-between">
          <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-medium">Cluster Health</span>
            <span class="font-headline-lg text-headline-lg text-primary tracking-tight font-bold mt-0.5">99.99%</span>
          </div>
          <div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
            <span class="material-symbols-outlined text-[20px]">dns</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex flex-col gap-2">
          <div class="flex items-center justify-between font-label-sm text-label-sm">
            <span class="text-on-surface-variant font-medium">4 / 4 Nodes Active</span>
            <span class="text-tertiary-container font-semibold">100% Synced</span>
          </div>
          <div class="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
            <div class="bg-primary h-full rounded-full" style="width: 100%"></div>
          </div>
          <div class="grid grid-cols-2 gap-2 pt-0.5 font-label-sm text-label-sm">
            <div class="flex items-center justify-between px-2 py-1 rounded-lg bg-surface-container-low font-mono">
              <span class="text-on-surface-variant">CPU</span>
              <span class="font-bold text-on-surface">28%</span>
            </div>
            <div class="flex items-center justify-between px-2 py-1 rounded-lg bg-surface-container-low font-mono">
              <span class="text-on-surface-variant">MEM</span>
              <span class="font-bold text-on-surface">44%</span>
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div class="flex items-start justify-between">
          <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-medium">Latency</span>
            <div class="flex items-baseline gap-1 mt-0.5">
              <span class="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">42</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-mono">ms (P95)</span>
            </div>
          </div>
          <div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
            <span class="material-symbols-outlined text-[20px]">speed</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex flex-col gap-1.5 font-label-sm text-label-sm">
          <div class="flex items-center justify-between">
            <span class="text-on-surface-variant flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-surface-tint"></span>
              API Gateway
            </span>
            <span class="font-mono font-bold text-on-surface">18ms</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-on-surface-variant flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
              DB Primary Read
            </span>
            <span class="font-mono font-bold text-on-surface">6ms</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-on-surface-variant flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Turnstile MQTT
            </span>
            <span class="font-mono font-bold text-on-surface">14ms</span>
          </div>
        </div>
      </div>

      <div class="rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div class="flex items-start justify-between">
          <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-medium">Sockets</span>
            <div class="flex items-baseline gap-1 mt-0.5">
              <span class="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">568</span>
              <span class="font-label-sm text-label-sm text-on-tertiary-container font-mono font-medium">Live</span>
            </div>
          </div>
          <div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
            <span class="material-symbols-outlined text-[20px]">hub</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container-high/50 grid grid-cols-2 gap-1.5 font-label-sm text-label-sm">
          <div class="p-1.5 rounded-lg bg-surface-container-low flex flex-col">
            <span class="text-on-surface-variant text-[10px] uppercase">Turnstiles</span>
            <span class="font-mono font-bold text-primary">12</span>
          </div>
          <div class="p-1.5 rounded-lg bg-surface-container-low flex flex-col">
            <span class="text-on-surface-variant text-[10px] uppercase">Staff Portal</span>
            <span class="font-mono font-bold text-primary">34</span>
          </div>
          <div class="p-1.5 rounded-lg bg-surface-container-low flex flex-col">
            <span class="text-on-surface-variant text-[10px] uppercase">Parent App</span>
            <span class="font-mono font-bold text-primary">518</span>
          </div>
          <div class="p-1.5 rounded-lg bg-surface-container-low flex flex-col">
            <span class="text-on-surface-variant text-[10px] uppercase">Admins</span>
            <span class="font-mono font-bold text-primary">4</span>
          </div>
        </div>
      </div>

      <div class="rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div class="flex items-start justify-between">
          <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-medium">Error Radar</span>
            <div class="flex items-baseline gap-1 mt-0.5">
              <span class="font-headline-lg text-headline-lg text-secondary tracking-tight font-bold">3</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">Handled</span>
            </div>
          </div>
          <div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
            <span class="material-symbols-outlined text-[20px]">radar</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex flex-col gap-1.5 font-label-sm text-label-sm">
          <div class="flex items-center justify-between p-1.5 rounded-lg bg-surface-container-low">
            <span class="text-on-surface-variant">Critical Errors</span>
            <span class="font-mono font-bold text-tertiary-container">0 Faults</span>
          </div>
          <div class="flex items-center justify-between p-1.5 rounded-lg bg-surface-container-low">
            <span class="text-on-surface-variant">HTTP Throttles</span>
            <span class="font-mono font-bold text-secondary">3 Backoffs</span>
          </div>
        </div>
      </div>
    </div>`;

const sysadminKpiNew = `<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      <div class="carepoint-metric-card rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div class="flex items-start justify-between">
          <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-medium">Cluster Health</span>
            <span class="carepoint-metric-num font-headline-lg text-headline-lg text-primary tracking-tight font-bold mt-0.5" data-metric-target="99.99%">99.99%</span>
          </div>
          <div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
            <span class="material-symbols-outlined text-[20px]">dns</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex flex-col gap-2">
          <div class="flex items-center justify-between font-label-sm text-label-sm">
            <span class="text-on-surface-variant font-medium">4 / 4 Nodes Active</span>
            <span class="text-tertiary-container font-semibold">100% Synced</span>
          </div>
          <div class="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
            <div class="bg-primary h-full rounded-full" style="width: 100%"></div>
          </div>
          <div class="grid grid-cols-2 gap-2 pt-0.5 font-label-sm text-label-sm">
            <div class="flex items-center justify-between px-2 py-1 rounded-lg bg-surface-container-low font-mono">
              <span class="text-on-surface-variant">CPU</span>
              <span class="font-bold text-on-surface">28%</span>
            </div>
            <div class="flex items-center justify-between px-2 py-1 rounded-lg bg-surface-container-low font-mono">
              <span class="text-on-surface-variant">MEM</span>
              <span class="font-bold text-on-surface">44%</span>
            </div>
          </div>
        </div>
      </div>

      <div class="carepoint-metric-card rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div class="flex items-start justify-between">
          <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-medium">Latency</span>
            <div class="flex items-baseline gap-1 mt-0.5">
              <span class="carepoint-metric-num font-headline-lg text-headline-lg text-primary tracking-tight font-bold" data-metric-target="42">42</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-mono">ms (P95)</span>
            </div>
          </div>
          <div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
            <span class="material-symbols-outlined text-[20px]">speed</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex flex-col gap-1.5 font-label-sm text-label-sm">
          <div class="flex items-center justify-between">
            <span class="text-on-surface-variant flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-surface-tint"></span>
              API Gateway
            </span>
            <span class="font-mono font-bold text-on-surface">18ms</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-on-surface-variant flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
              DB Primary Read
            </span>
            <span class="font-mono font-bold text-on-surface">6ms</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-on-surface-variant flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Turnstile MQTT
            </span>
            <span class="font-mono font-bold text-on-surface">14ms</span>
          </div>
        </div>
      </div>

      <div class="carepoint-metric-card rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div class="flex items-start justify-between">
          <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-medium">Sockets</span>
            <div class="flex items-baseline gap-1 mt-0.5">
              <span class="carepoint-metric-num font-headline-lg text-headline-lg text-primary tracking-tight font-bold" data-metric-target="568">568</span>
              <span class="font-label-sm text-label-sm text-on-tertiary-container font-mono font-medium">Live</span>
            </div>
          </div>
          <div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
            <span class="material-symbols-outlined text-[20px]">hub</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container-high/50 grid grid-cols-2 gap-1.5 font-label-sm text-label-sm">
          <div class="p-1.5 rounded-lg bg-surface-container-low flex flex-col">
            <span class="text-on-surface-variant text-[10px] uppercase">Turnstiles</span>
            <span class="font-mono font-bold text-primary">12</span>
          </div>
          <div class="p-1.5 rounded-lg bg-surface-container-low flex flex-col">
            <span class="text-on-surface-variant text-[10px] uppercase">Staff Portal</span>
            <span class="font-mono font-bold text-primary">34</span>
          </div>
          <div class="p-1.5 rounded-lg bg-surface-container-low flex flex-col">
            <span class="text-on-surface-variant text-[10px] uppercase">Parent App</span>
            <span class="font-mono font-bold text-primary">518</span>
          </div>
          <div class="p-1.5 rounded-lg bg-surface-container-low flex flex-col">
            <span class="text-on-surface-variant text-[10px] uppercase">Admins</span>
            <span class="font-mono font-bold text-primary">4</span>
          </div>
        </div>
      </div>

      <div class="carepoint-metric-card rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 p-5 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div class="flex items-start justify-between">
          <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-medium">Error Radar</span>
            <div class="flex items-baseline gap-1 mt-0.5">
              <span class="carepoint-metric-num font-headline-lg text-headline-lg text-secondary tracking-tight font-bold" data-metric-target="3">3</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">Handled</span>
            </div>
          </div>
          <div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
            <span class="material-symbols-outlined text-[20px]">radar</span>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container-high/50 flex flex-col gap-1.5 font-label-sm text-label-sm">
          <div class="flex items-center justify-between p-1.5 rounded-lg bg-surface-container-low">
            <span class="text-on-surface-variant">Critical Errors</span>
            <span class="font-mono font-bold text-tertiary-container">0 Faults</span>
          </div>
          <div class="flex items-center justify-between p-1.5 rounded-lg bg-surface-container-low">
            <span class="text-on-surface-variant">HTTP Throttles</span>
            <span class="font-mono font-bold text-secondary">3 Backoffs</span>
          </div>
        </div>
      </div>
    </div>`;

updateFile('prototype/sysadmin/dashboard.html', [
  { find: sysadminKpiOld, replace: sysadminKpiNew, name: 'SysAdmin Dashboard KPI Cards Quantitative Update' }
]);

console.log('--- ALL DASHBOARD STREAMLINING COMPLETED ---');
