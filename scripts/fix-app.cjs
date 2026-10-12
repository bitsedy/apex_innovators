const fs = require('fs');
const path = 'prototype/carepoint-app.js';
let content = fs.readFileSync(path, 'utf8');

// 1. Safe desktop duty pill
const oldDuty = `    const desktopDutyPill = document.querySelector('#staff-duty-badge') || \r
      document.querySelector('header .bg-surface-container-low.rounded-full:has(.animate-pulse)') ||\r
      document.querySelector('header div:has(> span.bg-tertiary-fixed-dim)');`;

const newDuty = `    let desktopDutyPill = document.querySelector('#staff-duty-badge');\r
    if (!desktopDutyPill) {\r
      const candidates = document.querySelectorAll('header .bg-surface-container-low.rounded-full, header div');\r
      for (const el of candidates) {\r
        if (el.querySelector('.animate-pulse') || el.querySelector('span.bg-tertiary-fixed-dim')) {\r
          desktopDutyPill = el;\r
          break;\r
        }\r
      }\r
    }`;

if (content.includes(oldDuty)) {
  content = content.replace(oldDuty, newDuty);
  console.log('Fixed duty pill selector');
} else {
  console.log('Could not find oldDuty pattern');
}

// 2. Safe hero info and span update
const oldHero = `    // 2. Dashboard hero text update (e.g. Basic 2 Sunflower • 28 Pupils • Room B-04)\r
    const heroInfoEl = document.querySelector('main p:has(> .text-on-primary)');\r
    if (heroInfoEl) {\r
      const spanName = heroInfoEl.querySelector('.font-semibold.text-on-primary');\r
      if (spanName) spanName.textContent = current.displayName;\r
      const spans = heroInfoEl.querySelectorAll('span');\r
      if (spans.length >= 5) {\r
        spans[2].textContent = \`\${current.pupils} Pupils\`;\r
        spans[4].textContent = current.room;\r
      }\r
    }`;

const newHero = `    // 2. Dashboard hero text update (e.g. Basic 2 Sunflower • 28 Pupils • Room B-04)\r
    let heroInfoEl = null;\r
    const heroParagraphs = document.querySelectorAll('main p');\r
    for (const p of heroParagraphs) {\r
      if (p.querySelector('.text-on-primary')) {\r
        heroInfoEl = p;\r
        break;\r
      }\r
    }\r
    if (heroInfoEl) {\r
      const spanName = heroInfoEl.querySelector('.font-semibold.text-on-primary') || heroInfoEl.querySelector('.text-on-primary');\r
      if (spanName) spanName.textContent = current.displayName;\r
      const spans = heroInfoEl.querySelectorAll('span');\r
      spans.forEach(s => {\r
        if (s.textContent.includes('Pupils')) {\r
          s.textContent = \`\${current.pupils} Pupils\`;\r
        } else if (s.textContent.includes('Room')) {\r
          s.textContent = current.room;\r
        }\r
      });\r
    }`;

if (content.includes(oldHero)) {
  content = content.replace(oldHero, newHero);
  console.log('Fixed hero info selector and span indexing');
} else {
  console.log('Could not find oldHero pattern');
}

// 3. Safe cohort badge selector
const oldBadge = `    const cohortBadge = document.querySelector('.bg-surface-container-lowest:has(> .text-primary.text-\\\\[18px\\\\]) .font-label-md');`;

const newBadge = `    let cohortBadge = null;\r
    const badgeContainers = document.querySelectorAll('.bg-surface-container-lowest');\r
    for (const el of badgeContainers) {\r
      if (el.querySelector('.text-primary')) {\r
        const lbl = el.querySelector('.font-label-md');\r
        if (lbl) { cohortBadge = lbl; break; }\r
      }\r
    }`;

if (content.includes(oldBadge)) {
  content = content.replace(oldBadge, newBadge);
  console.log('Fixed cohort badge selector');
} else {
  console.log('Could not find oldBadge pattern');
}

fs.writeFileSync(path, content, 'utf8');
console.log('carepoint-app.js updated successfully');
