const fs = require('fs');
const path = 'prototype/admin/settings.html';
let content = fs.readFileSync(path, 'utf8');

// Add IDs to sections
content = content.replace('<!-- Panel A: Academic Calendar & Term Configuration -->\r\n<section class="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">',
  '<!-- Panel A: Academic Calendar & Term Configuration -->\r\n<section id="panel-calendar" class="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm transition-all duration-300">');

content = content.replace('<!-- Panel A: Academic Calendar & Term Configuration -->\n<section class="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">',
  '<!-- Panel A: Academic Calendar & Term Configuration -->\n<section id="panel-calendar" class="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm transition-all duration-300">');

content = content.replace('<!-- Panel B: Statutory Approval Routing & Escalation Matrix -->\r\n<section class="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">',
  '<!-- Panel B: Statutory Approval Routing & Escalation Matrix -->\r\n<section id="panel-approvals" class="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm transition-all duration-300">');

content = content.replace('<!-- Panel B: Statutory Approval Routing & Escalation Matrix -->\n<section class="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">',
  '<!-- Panel B: Statutory Approval Routing & Escalation Matrix -->\n<section id="panel-approvals" class="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm transition-all duration-300">');

content = content.replace('<!-- Panel D: Continuous Assessment (SBA) Weighting Formulation -->\r\n<section class="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">',
  '<!-- Panel D: Continuous Assessment (SBA) Weighting Formulation -->\r\n<section id="panel-curriculum" class="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm transition-all duration-300">');

content = content.replace('<!-- Panel D: Continuous Assessment (SBA) Weighting Formulation -->\n<section class="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">',
  '<!-- Panel D: Continuous Assessment (SBA) Weighting Formulation -->\n<section id="panel-curriculum" class="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm transition-all duration-300">');

content = content.replace('<!-- Panel C: Gate Kiosk & 2FA Pickup Protocol Rules -->\r\n<section class="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">',
  '<!-- Panel C: Gate Kiosk & 2FA Pickup Protocol Rules -->\r\n<section id="panel-gate" class="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm transition-all duration-300">');

content = content.replace('<!-- Panel C: Gate Kiosk & 2FA Pickup Protocol Rules -->\n<section class="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">',
  '<!-- Panel C: Gate Kiosk & 2FA Pickup Protocol Rules -->\n<section id="panel-gate" class="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm transition-all duration-300">');

// Update JS
const oldScript = `  // Simple tab-switching micro-interaction
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-button').forEach(b => {
        b.classList.remove('bg-primary', 'text-on-primary');
        b.classList.add('text-on-surface-variant');
      });
      button.classList.add('bg-primary', 'text-on-primary');
      button.classList.remove('text-on-surface-variant');
    });
  });`;

const newScript = `  // Functional tab-switching & panel focusing interaction
  const tabMap = {
    'tab-calendar': 'panel-calendar',
    'tab-approvals': 'panel-approvals',
    'tab-gate': 'panel-gate',
    'tab-curriculum': 'panel-curriculum',
    'tab-notifications': 'panel-gate'
  };

  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-button').forEach(b => {
        b.classList.remove('bg-primary', 'text-on-primary');
        b.classList.add('text-on-surface-variant');
      });
      button.classList.add('bg-primary', 'text-on-primary');
      button.classList.remove('text-on-surface-variant');

      const targetId = tabMap[button.getAttribute('data-tab')];
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        targetEl.classList.add('ring-4', 'ring-primary/20');
        setTimeout(() => targetEl.classList.remove('ring-4', 'ring-primary/20'), 1500);
      }
    });
  });`;

content = content.replace(/\r\n/g, '\n');
content = content.replace(oldScript.replace(/\r\n/g, '\n'), newScript.replace(/\r\n/g, '\n'));
fs.writeFileSync(path, content.replace(/\n/g, '\r\n'), 'utf8');
console.log('Successfully updated settings.html');
