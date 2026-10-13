const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

// 1. Update prototype/carepoint-hud.css
const cssPath = path.join(root, 'prototype', 'carepoint-hud.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Fix header mobile padding rule
const oldRule = `  /* Mobile header padding and item alignment */\n  header.fixed {\n    padding-left: 14px !important;\n    padding-right: 14px !important;\n  }`;
const oldRuleCRLF = `  /* Mobile header padding and item alignment */\r\n  header.fixed {\r\n    padding-left: 14px !important;\r\n    padding-right: 14px !important;\r\n  }`;

const newRule = `  /* Mobile header padding: only apply to single-row flex headers, never to multi-row wrappers */\n  header.fixed.flex,\n  header.fixed:not(:has(> div:nth-child(2))) {\n    padding-left: 14px !important;\n    padding-right: 14px !important;\n  }\n  header.fixed:has(> div:nth-child(2)) {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }`;

if (css.includes(oldRuleCRLF)) {
  css = css.replace(oldRuleCRLF, newRule.replace(/\n/g, '\r\n'));
  console.log('[PASS] Updated header.fixed padding in carepoint-hud.css (CRLF)');
} else if (css.includes(oldRule)) {
  css = css.replace(oldRule, newRule);
  console.log('[PASS] Updated header.fixed padding in carepoint-hud.css (LF)');
} else {
  // Try regex replace
  css = css.replace(/\/\* Mobile header padding and item alignment \*\/[\r\n\s]*header\.fixed\s*\{[\r\n\s]*padding-left:\s*14px\s*!important;[\r\n\s]*padding-right:\s*14px\s*!important;[\r\n\s]*\}/, newRule);
  console.log('[PASS] Regex replaced header.fixed in carepoint-hud.css');
}

fs.writeFileSync(cssPath, css, 'utf8');

// 2. Update all 4 gate portal files
const gateFiles = ['scan.html', 'verify.html', 'log.html', 'alert.html'];

gateFiles.forEach(file => {
  const filePath = path.join(root, 'prototype', 'gate', file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace header Row 2 and main pt-28
  // Look for header with h-20
  const activeNav = {
    'scan.html': 'scanner',
    'verify.html': 'verification',
    'log.html': 'pickup-log',
    'alert.html': 'security-alerts'
  }[file];

  const newHeader = `<header class="fixed top-0 left-72 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div class="bg-primary text-on-primary px-4 sm:px-6 md:px-margin h-8 flex items-center justify-between text-xs font-label-sm tracking-wider uppercase"><div class="flex items-center gap-space-sm min-w-0 truncate"><span class="material-symbols-outlined text-sm text-tertiary-fixed shrink-0">verified</span><span class="truncate">Ghana NaSIA Accredited Security Protocol - Level 3 Campus Safety</span></div><div class="flex items-center gap-space-md shrink-0"><span class="flex items-center gap-space-xs whitespace-nowrap"><span class="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>Accra Time: 14:28:09 GMT</span><span class="text-outline-variant">|</span><span class="text-tertiary-fixed font-bold whitespace-nowrap">SECURE - ACTIVE PATROL</span></div></div><div class="h-16 w-full px-4 sm:px-6 md:px-margin flex items-center justify-between gap-2 sm:gap-4 bg-surface-container-lowest"><div class="flex items-center gap-2 sm:gap-3 shrink-0"><button type="button" data-drawer-toggle="" class="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary shadow-xs hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0" title="Toggle Navigation Sidebar" aria-label="Toggle Navigation Sidebar"><span class="material-symbols-outlined text-[22px]">menu</span></button><div class="flex items-center gap-2 shrink-0"><span class="font-headline-sm text-[15px] sm:text-base font-bold text-primary whitespace-nowrap">Gate Security</span><span class="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[10px] sm:text-[11px] font-semibold whitespace-nowrap">Turnstile A</span></div></div><nav class="hidden lg:flex items-center bg-surface-container-low p-1 rounded-xl gap-0.5 shadow-2xs shrink-0" data-active-classes="bg-primary-container text-on-secondary-container font-label-lg"><a ${activeNav === 'scanner' ? 'aria-current="page" class="px-3 py-1.5 rounded-lg transition-all flex items-center justify-center bg-primary-container text-on-secondary-container font-label-md text-xs font-bold whitespace-nowrap"' : 'class="px-3 py-1.5 rounded-lg text-on-surface-variant font-label-md text-xs hover:text-on-surface hover:bg-surface-container transition-all flex items-center justify-center whitespace-nowrap"'} data-path="scanner" href="scan.html">Scanner</a><a ${activeNav === 'verification' ? 'aria-current="page" class="px-3 py-1.5 rounded-lg transition-all flex items-center justify-center bg-primary-container text-on-secondary-container font-label-lg"' : 'class="px-3 py-1.5 rounded-lg text-on-surface-variant font-label-md text-xs hover:text-on-surface hover:bg-surface-container transition-all flex items-center justify-center whitespace-nowrap"'} data-path="verification" href="verify.html">Verification</a><a ${activeNav === 'pickup-log' ? 'aria-current="page" class="px-3 py-1.5 rounded-lg transition-all flex items-center justify-center bg-primary-container text-on-secondary-container font-label-lg"' : 'class="px-3 py-1.5 rounded-lg text-on-surface-variant font-label-md text-xs hover:text-on-surface hover:bg-surface-container transition-all flex items-center justify-center whitespace-nowrap"'} data-path="pickup-log" href="log.html">Pickup Log</a><a ${activeNav === 'security-alerts' ? 'aria-current="page" class="px-3 py-1.5 rounded-lg transition-all flex items-center justify-center bg-primary-container text-on-secondary-container font-label-lg"' : 'class="px-3 py-1.5 rounded-lg text-on-surface-variant font-label-md text-xs hover:text-on-surface hover:bg-surface-container transition-all flex items-center justify-center whitespace-nowrap"'} data-path="security-alerts" href="alert.html">Security Alerts</a></nav><div class="flex items-center gap-2 sm:gap-3 shrink-0"><button aria-label="Notifications" class="w-9 h-9 rounded-xl flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors relative shadow-2xs shrink-0" type="button"><span class="material-symbols-outlined text-[18px]">notifications</span><span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary"></span></button><button class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-xs font-bold hover:bg-secondary-container transition-colors shadow-2xs shrink-0" type="button"><span class="material-symbols-outlined text-[15px]">call</span><span>Intercom</span></button><div class="h-6 w-px bg-surface-container-high hidden sm:block shrink-0"></div><div class="flex items-center gap-2 shrink-0"><div class="text-right leading-tight whitespace-nowrap hidden sm:block"><p class="font-label-md text-xs text-on-surface font-bold">Off. Emmanuel Tetteh</p><span class="font-label-sm text-[10px] text-on-surface-variant">ID #SEC-08</span></div><img alt="Profile" class="w-8 h-8 rounded-full object-cover shadow-2xs ring-1 ring-outline-variant/30 shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWyCxim_7skt8k31G0IotbuvMRM2YBPGoHvoZYsa25Oh7YjCKOaPB9NbEJlz7absl89QYzqeKxYnR448A6GuD58V-wOmg0TgMyyhDKQx0RuvqJw6XlU06RFl_YO6p1OAhJ8yWUqb6Xir1rbx9sdVdTXXX34sj3lncm3yNoCumK2AKJSnHf-teZ8hmWgZoInrNO2R9DoQfxqZAsqD5baLXIUfUmMaFmvVU0wSaAabCoCC1PDgEeMPJThA"/></div><a class="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center shrink-0" data-path="kiosk-lock" href="login.html"><span class="material-symbols-outlined text-[18px]">lock</span></a></div></div></header>`;

  // Replace <header ... </header>
  html = html.replace(/<header[\s\S]*?<\/header>/i, newHeader);

  // Replace <main class="w-full pt-28 bg-surface"> with <main class="w-full pt-24 bg-surface">
  html = html.replace(/<main class="w-full pt-28 bg-surface">/g, '<main class="w-full pt-24 bg-surface">');

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`[PASS] Streamlined and modernized header for ${file}`);
});
