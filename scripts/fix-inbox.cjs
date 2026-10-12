const fs = require('fs');
const path = 'prototype/admin/inbox.html';
let content = fs.readFileSync(path, 'utf8');

const targetStart = '<!-- Right Executive Dispatch & Protocol Sidebar (4 cols on large) -->';
const targetEnd = '</aside>';

const startIndex = content.indexOf(targetStart);
const endIndex = content.indexOf(targetEnd, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `<!-- Right Executive Dispatch & Protocol Panel (4 cols on large) -->
<div class="lg:col-span-4 flex flex-col gap-space-md">
  <!-- Campus Security & Lockdown Card -->
  <div class="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md border border-outline-variant/30">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined text-primary">security</span>
        <span class="font-headline-sm text-base text-primary font-bold">Campus Security Status</span>
      </div>
      <span class="px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-bold">Normal</span>
    </div>
    <p class="font-body-sm text-body-sm text-on-surface-variant">
      All 4 perimeter gates reporting normal telemetry. Biometric and RFID turnstiles operational.
    </p>
    <button class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-secondary text-on-secondary font-label-md hover:bg-secondary-container transition-colors shadow-sm cursor-pointer" onclick="window.location.href = '../gate/alert.html';" type="button">
      <span class="material-symbols-outlined text-[18px]">lock_open</span>
      <span>Emergency Lockdown Protocol</span>
    </button>
  </div>

  <!-- Statutory Response SLA Tracker -->
  <div class="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md border border-outline-variant/30">
    <div class="flex items-center gap-2">
      <span class="material-symbols-outlined text-secondary">timer</span>
      <h3 class="font-headline-sm text-base text-primary font-bold">Statutory SLA Compliance</h3>
    </div>
    <div class="flex flex-col gap-2 text-xs font-body-sm">
      <div class="flex justify-between items-center p-2 rounded-lg bg-surface-container-low">
        <span class="text-on-surface font-medium">Custody Injunction Orders</span>
        <span class="text-secondary font-bold font-mono">&lt; 15 mins (Urgent)</span>
      </div>
      <div class="flex justify-between items-center p-2 rounded-lg bg-surface-container-low">
        <span class="text-on-surface font-medium">Faculty Leave Sanctions</span>
        <span class="text-primary font-bold font-mono">24 Hours</span>
      </div>
      <div class="flex justify-between items-center p-2 rounded-lg bg-surface-container-low">
        <span class="text-on-surface font-medium">NaSIA Form QA-2026 Audit</span>
        <span class="text-tertiary font-bold font-mono">Synced</span>
      </div>
    </div>
  </div>
</div>`;

  content = content.substring(0, startIndex) + replacement + content.substring(endIndex + targetEnd.length);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully replaced duplicate aside in admin/inbox.html');
} else {
  console.log('Target delimiters not found in inbox.html', { startIndex, endIndex });
}
