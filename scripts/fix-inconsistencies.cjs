const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, callback);
    } else if (fullPath.endsWith('.html') || fullPath.endsWith('.js')) {
      callback(fullPath);
    }
  }
}

// 1. Fix Dr. Emmanuel Appiah -> Dr. Elizabeth Appiah in all login files
walk('prototype', (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (content.includes('Dr. Emmanuel Appiah (Principal)')) {
    content = content.replace(/Dr\. Emmanuel Appiah \(Principal\)/g, 'Dr. Elizabeth Appiah (Headmaster or Headteacher / Principal)');
    changed = true;
    console.log('Fixed Principal name in:', filePath);
  }

  // 2. Fix primary-fixed hex code missing #
  if (content.includes('"primary-fixed": "dce1ff"')) {
    content = content.replace(/"primary-fixed":\s*"dce1ff"/g, '"primary-fixed": "#dce1ff"');
    changed = true;
    console.log('Fixed primary-fixed hex in:', filePath);
  }
  if (content.includes("'primary-fixed': 'dce1ff'")) {
    content = content.replace(/'primary-fixed':\s*'dce1ff'/g, "'primary-fixed': '#dce1ff'");
    changed = true;
    console.log('Fixed primary-fixed hex (single quote) in:', filePath);
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

// 3. Fix mobile-apply.html WhatsApp link
const mobApplyPath = 'prototype/public/mobile-apply.html';
if (fs.existsSync(mobApplyPath)) {
  let content = fs.readFileSync(mobApplyPath, 'utf8');
  if (content.includes('href="tel:+233200000000"')) {
    content = content.replace('href="tel:+233200000000"', 'href="https://wa.me/233241234567" target="_blank" rel="noopener noreferrer"');
    fs.writeFileSync(mobApplyPath, content, 'utf8');
    console.log('Fixed WhatsApp link in mobile-apply.html');
  }
}

// 4. Fix sysadmin/mobile-integrations.html header subtitle
const mobIntegPath = 'prototype/sysadmin/mobile-integrations.html';
if (fs.existsSync(mobIntegPath)) {
  let content = fs.readFileSync(mobIntegPath, 'utf8');
  if (content.includes('>Changes</span>')) {
    content = content.replace('>Changes</span>', '>Integrations Hub</span>');
    fs.writeFileSync(mobIntegPath, content, 'utf8');
    console.log('Fixed header subtitle in mobile-integrations.html');
  }
}

// 5. Fix sysadmin/mobile-provisioning.html @stnicholas domain leaks and 124 -> 1,248 count
const mobProvPath = 'prototype/sysadmin/mobile-provisioning.html';
if (fs.existsSync(mobProvPath)) {
  let content = fs.readFileSync(mobProvPath, 'utf8');
  let changed = false;

  if (content.includes('@stnicholas.edu.gh')) {
    content = content.replace(/@stnicholas\.edu\.gh/g, '@carepoint.edu.gh');
    changed = true;
  }
  if (content.includes('@stnicholas.sec')) {
    content = content.replace(/@stnicholas\.sec/g, '@carepoint.sec');
    changed = true;
  }
  if (content.includes('>124</span>\r\n<span class="font-label-sm text-label-sm text-on-surface-variant">total</span>') || content.includes('>124</span>\n<span class="font-label-sm text-label-sm text-on-surface-variant">total</span>')) {
    content = content.replace(/>124<\/span>/, '>1,248</span>');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(mobProvPath, content, 'utf8');
    console.log('Fixed @stnicholas and counts in mobile-provisioning.html');
  }
}

console.log('All basic consistency fixes completed.');
