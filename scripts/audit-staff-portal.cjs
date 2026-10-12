const fs = require('fs');
const path = require('path');

console.log('==================================================');
console.log('   DEEP AUDIT & SCREENING: STAFF PORTAL FILES     ');
console.log('==================================================\n');

const staffDir = path.join(__dirname, '..', 'prototype', 'staff');
const files = fs.readdirSync(staffDir).filter(f => f.endsWith('.html'));

console.log(`Found ${files.length} HTML files in prototype/staff:\n${files.map(f => ' - ' + f).join('\n')}\n`);

let totalIssues = 0;
const results = {};

files.forEach(file => {
  const filePath = path.join(staffDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  const info = [];

  // 1. Script Syntax Checking
  const inlineScripts = [...content.matchAll(/<script\b(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)];
  inlineScripts.forEach((s, idx) => {
    try {
      new Function(s[1]);
    } catch (err) {
      issues.push(`Script #${idx} SYNTAX ERROR: ${err.message}`);
    }
  });

  // 2. getElementById DOM presence
  const getByIdMatches = [...content.matchAll(/document\.getElementById\(["']([^"']+)["']\)/g)].map(m => m[1]);
  const uniqueIds = [...new Set(getByIdMatches)];
  uniqueIds.forEach(id => {
    const hasId = content.includes(`id="${id}"`) || content.includes(`id='${id}'`);
    if (!hasId) {
      issues.push(`DOM ID missing: document.getElementById("${id}") called in JS, but id="${id}" not found in HTML`);
    }
  });

  // 3. Check onclick/onsubmit handlers for missing functions
  const onclickMatches = [...content.matchAll(/on(?:click|change|submit|input)=["']([^"']+)["']/g)].map(m => m[1]);
  onclickMatches.forEach(expr => {
    const fnMatch = expr.match(/^([a-zA-Z0-9_$]+)\s*\(/);
    if (fnMatch) {
      const fnName = fnMatch[1];
      // common built-ins or globals
      const builtins = ['alert', 'confirm', 'prompt', 'history', 'window', 'location', 'console', 'setTimeout', 'clearTimeout'];
      if (!builtins.includes(fnName)) {
        const isDefined = content.includes(`function ${fnName}`) ||
                          content.includes(`${fnName} =`) ||
                          content.includes(`window.${fnName}`) ||
                          content.includes(`const ${fnName}`) ||
                          content.includes(`let ${fnName}`);
        if (!isDefined) {
          // Check if defined in carepoint-app.js
          info.push(`Event handler "${fnName}()" called inline; check if declared globally or in external script.`);
        }
      }
    }
  });

  // 4. Broken internal anchors (#target)
  const anchorHrefs = [...content.matchAll(/href=["'](#[a-zA-Z0-9_\-]+)["']/g)].map(m => m[1]);
  anchorHrefs.forEach(anchor => {
    const targetId = anchor.substring(1);
    if (!content.includes(`id="${targetId}"`) && !content.includes(`id='${targetId}'`)) {
      issues.push(`Broken internal anchor: href="${anchor}" but target id="${targetId}" not found in file`);
    }
  });

  // 5. Image sources
  const imgs = [...content.matchAll(/<img\b([^>]*)>/gi)];
  imgs.forEach((img, idx) => {
    const attrs = img[1];
    const srcMatch = attrs.match(/src=["']([^"']+)["']/i);
    const altMatch = attrs.match(/alt=["']([^"']*)["']/i);
    if (!srcMatch || !srcMatch[1].trim()) {
      issues.push(`Image #${idx} has empty or missing src attribute`);
    }
    if (!altMatch) {
      info.push(`Image #${idx} missing alt attribute: ${attrs.slice(0, 50)}...`);
    }
  });

  // 6. HUD meta configuration
  const hudMatch = content.match(/window\.__CAREPOINT_HUD__\s*=\s*\{([\s\S]*?)\};/);
  if (!hudMatch) {
    info.push(`No window.__CAREPOINT_HUD__ configuration found.`);
  } else {
    const hudBlock = hudMatch[1];
    const counterpartMatch = hudBlock.match(/counterpart:\s*["']([^"']+)["']/);
    if (counterpartMatch) {
      const cpFile = counterpartMatch[1];
      const cpPath = path.join(staffDir, cpFile);
      if (!fs.existsSync(cpPath)) {
        issues.push(`HUD counterpart file "${cpFile}" does not exist in prototype/staff/`);
      }
    }
  }

  // 7. Check for old school names, obsolete placeholders, or syntax bugs
  if (content.includes('St. Nicholas') || content.includes('stnicholas')) {
    issues.push(`Legacy school name leak found: "St. Nicholas" / "stnicholas"`);
  }
  if (content.includes('GHS') && !content.includes('GH₵')) {
    info.push(`Uses currency "GHS" instead of symbol "GH₵"`);
  }

  results[file] = { issues, info };
  totalIssues += issues.length;
});

console.log('--------------------------------------------------');
console.log('                 AUDIT SUMMARY                    ');
console.log('--------------------------------------------------');

files.forEach(f => {
  const { issues, info } = results[f];
  const status = issues.length === 0 ? '✓ PASS' : `✗ ${issues.length} ISSUE(S)`;
  console.log(`${f.padEnd(25)} : ${status}`);
  if (issues.length > 0) {
    issues.forEach(iss => console.log(`   [!] ${iss}`));
  }
  if (info.length > 0) {
    info.forEach(inf => console.log(`   [i] ${inf}`));
  }
});

console.log(`\nTOTAL BLOCKING ISSUES FOUND: ${totalIssues}`);
