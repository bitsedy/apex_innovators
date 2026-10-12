const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../prototype/sysadmin/dashboard.html');
let html = fs.readFileSync(filePath, 'utf8');

// Find the parts:
const tab1Marker = '<div id="sysadminTabSection_mesh" class="space-y-6">';
const tab1Idx = html.indexOf(tab1Marker);

// Find Quick Actions
const qaStartMarker = '<div class="rounded-xl bg-surface-container-lowest p-space-md shadow-sm mb-space-lg flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">';
const qaStartIdx = html.indexOf(qaStartMarker);

// Find Governance Notice
const govStartMarker = '<div class="rounded-xl bg-surface-container-high p-space-md mb-space-lg flex items-start gap-space-sm shadow-sm">';
const govStartIdx = html.indexOf(govStartMarker);

// Find Toast
const toastMarker = '<div class="fixed bottom-6 right-6';
const toastIdx = html.indexOf(toastMarker);

// End of Quick Actions is right before govStartIdx
const qaEndIdx = govStartIdx;
const quickActionsBlock = html.substring(qaStartIdx, qaEndIdx).trim();

// End of Governance is right before toastIdx
const govBlock = html.substring(govStartIdx, toastIdx).trim();

// Now look between tab1Idx + tab1Marker.length and qaStartIdx
const middleContent = html.substring(tab1Idx + tab1Marker.length, qaStartIdx);

// In middleContent, we have:
// 1) Microservice Matrix
// 2) Telemetry Velocity
// 3) Logs Stream
const telemetryMarker = '<div class="lg:col-span-6 flex flex-col gap-space-md">';
const telemIdx = middleContent.indexOf(telemetryMarker);

const logsMarker = '<div class="flex flex-col gap-space-md mb-space-lg">';
const logsIdx = middleContent.indexOf(logsMarker);

// Microservice block is from start of middleContent to telemIdx
const microserviceBlock = middleContent.substring(0, telemIdx).trim();

// Telemetry block is from telemIdx to logsIdx
let telemetryBlock = middleContent.substring(telemIdx, logsIdx).trim();
// Replace `<div class="lg:col-span-6 flex flex-col gap-space-md">` with `<div class="flex flex-col gap-space-md">`
telemetryBlock = telemetryBlock.replace('<div class="lg:col-span-6 flex flex-col gap-space-md">', '<div class="flex flex-col gap-space-md">');
// Note: telemetryBlock had an extra </div> at the end because of the old 12-col grid wrapper
// Let's trim off trailing </div> if it ends with </div>\n</div>\n</div>
if (telemetryBlock.endsWith('</div>\n</div>\n</div>')) {
  telemetryBlock = telemetryBlock.substring(0, telemetryBlock.lastIndexOf('</div>')).trim();
} else if (telemetryBlock.endsWith('</div>\r\n</div>\r\n</div>')) {
  telemetryBlock = telemetryBlock.substring(0, telemetryBlock.lastIndexOf('</div>')).trim();
}

// Logs block is from logsIdx to end of middleContent
const logsBlock = middleContent.substring(logsIdx).trim();

console.log('Blocks successfully partitioned:');
console.log('Microservice block length:', microserviceBlock.length);
console.log('Quick Actions block length:', quickActionsBlock.length);
console.log('Telemetry block length:', telemetryBlock.length);
console.log('Logs block length:', logsBlock.length);
console.log('Gov block length:', govBlock.length);

// Now construct the 3 tabs:
const reconstructedBody = `
      <!-- ===================================================================== -->
      <!-- TAB 1: MICROSERVICE RUNTIME MESH & OPERATIONS                         -->
      <!-- ===================================================================== -->
      <div id="sysadminTabSection_mesh" class="space-y-6">
        ${microserviceBlock}

        ${quickActionsBlock}
      </div>

      <!-- ===================================================================== -->
      <!-- TAB 2: INGRESS VELOCITY & TRAFFIC TELEMETRY                          -->
      <!-- ===================================================================== -->
      <div id="sysadminTabSection_telemetry" class="space-y-6 hidden">
        ${telemetryBlock}
      </div>

      <!-- ===================================================================== -->
      <!-- TAB 3: LIVE EXCEPTION & LOG STREAM                                   -->
      <!-- ===================================================================== -->
      <div id="sysadminTabSection_logs" class="space-y-6 hidden">
        ${logsBlock}

        ${govBlock}
      </div>
`;

// Replace from tab1Idx up to toastIdx with reconstructedBody
const beforeTab1 = html.substring(0, tab1Idx);
const afterGov = html.substring(toastIdx);

let newHtml = beforeTab1 + reconstructedBody + '\n      ' + afterGov;

// Now add switchSysadminView and hash handler to <script> if not already present
const switchFuncCode = `
  function switchSysadminView(tab) {
    const tabs = ['mesh', 'telemetry', 'logs'];
    tabs.forEach(t => {
      const section = document.getElementById('sysadminTabSection_' + t);
      const btn = document.getElementById('sysadminTabBtn_' + t);
      if (section) {
        if (t === tab) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      }
      if (btn) {
        if (t === tab) {
          btn.className = 'sysadmin-view-tab px-4 py-2 rounded-xl text-xs font-bold transition-all bg-primary text-on-primary shadow-xs flex items-center gap-1.5 cursor-pointer';
        } else {
          btn.className = 'sysadmin-view-tab px-4 py-2 rounded-xl text-xs font-bold transition-all text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-semibold flex items-center gap-1.5 cursor-pointer';
        }
      }
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'telemetry' || hash === 'traffic' || hash === 'ingress') {
      switchSysadminView('telemetry');
    } else if (hash === 'logs' || hash === 'exceptions' || hash === 'trace') {
      switchSysadminView('logs');
    } else if (hash === 'mesh' || hash === 'services') {
      switchSysadminView('mesh');
    }
  });
`;

if (!newHtml.includes('function switchSysadminView')) {
  newHtml = newHtml.replace('<script>', '<script>' + switchFuncCode);
}

fs.writeFileSync(filePath, newHtml, 'utf8');
console.log('Successfully updated prototype/sysadmin/dashboard.html with 3 tabs and script switcher!');
