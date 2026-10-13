const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const targetDirs = [
  path.join(root, 'prototype'),
  path.join(root, 'src'),
  path.join(root, 'stitch_duplicate_of_school_admissions_portal'),
  path.join(root, 'scripts')
];

// Target file extensions
const validExts = ['.html', '.js', '.cjs', '.ts', '.tsx', '.json', '.md'];

// Replacement rules in order of specificity
const rules = [
  { regex: /submitHeadmistressSecondaryBtn/g, replacement: 'submitHeadmasterOrHeadteacherSecondaryBtn' },
  { regex: /submitHeadmistressBtn/g, replacement: 'submitHeadmasterOrHeadteacherBtn' },
  { regex: /HEADMISTRESS_ADMIN/g, replacement: 'HEADMASTER_OR_HEADTEACHER_ADMIN' },
  { regex: /Headmistress's/g, replacement: "Headmaster or Headteacher's" },
  { regex: /Headmistress'/g, replacement: "Headmaster or Headteacher's" },
  { regex: /headmistress's/g, replacement: "headmaster or headteacher's" },
  { regex: /headmistress'/g, replacement: "headmaster or headteacher's" },
  { regex: /HEADMISTRESS/g, replacement: 'HEADMASTER OR HEADTEACHER' },
  { regex: /Headmistress/g, replacement: 'Headmaster or Headteacher' },
  { regex: /headmistress/g, replacement: 'headmaster or headteacher' }
];

let totalFilesModified = 0;
let totalReplacements = 0;

function processFile(filePath) {
  // Skip script that performs inspection or this replacement script itself
  const baseName = path.basename(filePath);
  if (['replace-headmistress.cjs', 'find-headmistress.cjs', 'inspect-headmistress.cjs', 'inspect-prototype-headmistress.cjs', 'check-public-headmistress.cjs'].includes(baseName)) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  let fileMatches = 0;

  rules.forEach(({ regex, replacement }) => {
    const matches = newContent.match(regex);
    if (matches) {
      fileMatches += matches.length;
      newContent = newContent.replace(regex, replacement);
    }
  });

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    const rel = path.relative(root, filePath);
    console.log(`[UPDATED] ${rel} (${fileMatches} replacements)`);
    totalFilesModified++;
    totalReplacements += fileMatches;
  }
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['node_modules', '.git', '.next', 'dist'].includes(entry.name)) {
        walk(fullPath);
      }
    } else if (validExts.some(ext => entry.name.endsWith(ext))) {
      processFile(fullPath);
    }
  }
}

console.log('=== STARTING UNIVERSAL HEADMISTRESS REPLACEMENT ===\n');
targetDirs.forEach(d => walk(d));

console.log('\n================================================');
console.log(`TOTAL FILES MODIFIED: ${totalFilesModified}`);
console.log(`TOTAL REPLACEMENTS MADE: ${totalReplacements}`);
console.log('================================================\n');
