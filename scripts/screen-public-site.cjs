const fs = require('fs');
const path = require('path');
const http = require('http');

console.log('========================================================');
console.log('   DEEP BUG SCREENING: CAREPOINT PUBLIC SITE PAGES');
console.log('========================================================\n');

const publicDir = path.resolve('prototype/public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));
console.log('Found public HTML files:', files);

const issues = [];

function recordIssue(file, category, severity, description, details) {
  issues.push({ file, category, severity, description, details });
  console.log(`[${severity}] [${file}] [${category}]: ${description}`);
  if (details) console.log(`   Details:`, details);
}

files.forEach(fileName => {
  const filePath = path.join(publicDir, fileName);
  const content = fs.readFileSync(filePath, 'utf8');

  console.log(`\n--- Screening: ${fileName} (${(content.length / 1024).toFixed(1)} KB) ---`);

  // 1. Check local images
  const imgRegex = /<img\b[^>]*>/gi;
  let imgMatch;
  while ((imgMatch = imgRegex.exec(content)) !== null) {
    const tag = imgMatch[0];
    const srcMatch = tag.match(/src=["']([^"']+)["']/i);
    const altMatch = tag.match(/alt=["']([^"']*)["']/i);
    
    if (!srcMatch) {
      recordIssue(fileName, 'Images', 'HIGH', 'Image tag missing src attribute', tag);
      continue;
    }
    const src = srcMatch[1];
    if (!altMatch || altMatch[1].trim() === '') {
      // Check if data-alt exists instead
      const dataAltMatch = tag.match(/data-alt=["']([^"']*)["']/i);
      if (!dataAltMatch || dataAltMatch[1].trim() === '') {
        recordIssue(fileName, 'Accessibility', 'LOW', `Image missing alt attribute: ${src}`, tag);
      }
    }

    if (!src.startsWith('http') && !src.startsWith('data:') && !src.startsWith('blob:')) {
      const resolved = src.startsWith('/')
        ? path.resolve('prototype', src.slice(1))
        : path.resolve(publicDir, src);
      if (!fs.existsSync(resolved)) {
        recordIssue(fileName, 'Images', 'HIGH', `Broken image src: ${src}`, { resolved });
      }
    }
  }

  // 2. Check local scripts
  const scriptSrcRegex = /<script\b[^>]*src=["']([^"']+)["'][^>]*>/gi;
  let scriptMatch;
  while ((scriptMatch = scriptSrcRegex.exec(content)) !== null) {
    const src = scriptMatch[1];
    if (!src.startsWith('http')) {
      const resolved = src.startsWith('/')
        ? path.resolve('prototype', src.slice(1))
        : path.resolve(publicDir, src);
      if (!fs.existsSync(resolved)) {
        recordIssue(fileName, 'Scripts', 'HIGH', `Broken script src: ${src}`, { resolved });
      }
    }
  }

  // 3. Check CSS links
  const cssRegex = /<link\b[^>]*href=["']([^"']+)["'][^>]*>/gi;
  let linkMatch;
  while ((linkMatch = cssRegex.exec(content)) !== null) {
    const tag = linkMatch[0];
    const href = linkMatch[1];
    if (tag.includes('rel="stylesheet"') || href.endsWith('.css')) {
      if (!href.startsWith('http')) {
        const resolved = href.startsWith('/')
          ? path.resolve('prototype', href.slice(1))
          : path.resolve(publicDir, href);
        if (!fs.existsSync(resolved)) {
          recordIssue(fileName, 'CSS', 'HIGH', `Broken CSS href: ${href}`, { resolved });
        }
      }
    }
  }

  // 4. Check links (href)
  const anchorRegex = /<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi;
  let aMatch;
  while ((aMatch = anchorRegex.exec(content)) !== null) {
    const href = aMatch[1];
    if (href.startsWith('#')) {
      const targetId = href.slice(1);
      if (targetId && targetId !== '') {
        const idRegex = new RegExp(`id=["']${targetId}["']`, 'i');
        if (!idRegex.test(content)) {
          recordIssue(fileName, 'Navigation', 'MEDIUM', `Internal anchor target not found in page: href="${href}"`);
        }
      }
    } else if (!href.startsWith('http') && !href.startsWith('tel:') && !href.startsWith('mailto:') && !href.startsWith('javascript:')) {
      const cleanPath = href.split('#')[0].split('?')[0];
      if (cleanPath) {
        const resolved = cleanPath.startsWith('/')
          ? path.resolve('prototype', cleanPath.slice(1))
          : path.resolve(publicDir, cleanPath);
        if (!fs.existsSync(resolved)) {
          recordIssue(fileName, 'Navigation', 'HIGH', `Broken relative link: href="${href}"`, { resolved });
        }
      }
    }
  }

  // 5. Check inline onclick / onchange / onsubmit handlers and IDs referenced
  const onclickRegex = /on[a-z]+=["']([^"']+)["']/gi;
  let evMatch;
  while ((evMatch = onclickRegex.exec(content)) !== null) {
    const handlerCode = evMatch[1];
    // Check for document.getElementById('...')
    const idCalls = [...handlerCode.matchAll(/document\.getElementById\(["']([^"']+)["']\)/g)];
    idCalls.forEach(call => {
      const refId = call[1];
      const hasId = new RegExp(`id=["']${refId}["']`, 'i').test(content);
      if (!hasId) {
        recordIssue(fileName, 'DOM/JS', 'HIGH', `Inline handler references missing ID: "${refId}" in code: ${handlerCode}`);
      }
    });
  }

  // 6. Check for unclosed tags or syntax oddities
  const openTags = ['<main', '<nav', '<header', '<footer', '<section', '<div', '<form'];
  openTags.forEach(ot => {
    const tagName = ot.slice(1);
    const openCount = (content.match(new RegExp(`<${tagName}\\b`, 'gi')) || []).length;
    const closeCount = (content.match(new RegExp(`</${tagName}>`, 'gi')) || []).length;
    if (openCount !== closeCount) {
      recordIssue(fileName, 'HTML Syntax', 'MEDIUM', `Tag count mismatch for <${tagName}>: ${openCount} opened vs ${closeCount} closed`);
    }
  });

  // 7. Check buttons without accessible labels or roles
  const btnRegex = /<button\b[^>]*>(.*?)<\/button>/gis;
  let btnMatch;
  while ((btnMatch = btnRegex.exec(content)) !== null) {
    const fullTag = btnMatch[0];
    const inner = btnMatch[1].replace(/<[^>]+>/g, '').trim();
    const hasAria = /aria-label=["'][^"']+["']/i.test(fullTag) || /title=["'][^"']+["']/i.test(fullTag);
    if (!inner && !hasAria) {
      recordIssue(fileName, 'Accessibility', 'LOW', `Button has no text and no aria-label/title`, fullTag.slice(0, 100));
    }
  }

  // 8. Check forms without labels or inputs without name/id
  const inputRegex = /<input\b[^>]*>/gi;
  let inpMatch;
  while ((inpMatch = inputRegex.exec(content)) !== null) {
    const tag = inpMatch[0];
    if (tag.includes('type="hidden"')) continue;
    const hasId = tag.match(/id=["']([^"']+)["']/i);
    const hasAria = tag.match(/aria-label=["']([^"']+)["']/i);
    const hasPlaceholder = tag.match(/placeholder=["']([^"']+)["']/i);
    if (hasId) {
      const idVal = hasId[1];
      const hasLabel = new RegExp(`for=["']${idVal}["']`, 'i').test(content);
      if (!hasLabel && !hasAria && !hasPlaceholder) {
        recordIssue(fileName, 'Accessibility', 'LOW', `Input #${idVal} has no associated label or aria-label`, tag);
      }
    } else if (!hasAria && !hasPlaceholder) {
      recordIssue(fileName, 'Accessibility', 'LOW', `Input has no id, label, or placeholder`, tag);
    }
  }
});

console.log('\n========================================================');
console.log(`SCREENING SUMMARY: Total issues found: ${issues.length}`);
console.log('========================================================');
const severityCounts = issues.reduce((acc, curr) => {
  acc[curr.severity] = (acc[curr.severity] || 0) + 1;
  return acc;
}, {});
console.log('By Severity:', severityCounts);
