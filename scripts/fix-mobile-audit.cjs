const fs = require('fs');
const path = 'prototype/sysadmin/mobile-audit.html';
let content = fs.readFileSync(path, 'utf8');

const oldPills = `<!-- Filter Pills (Horizontal Scroll) -->
<div class="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-margin-sm px-margin-sm">
<button class="shrink-0 px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-sm">
        All Events
      </button>
<button class="shrink-0 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-sm text-label-sm font-bold shadow-sm flex items-center gap-1">
        Security &amp; IAM <span class="px-1.5 py-0.2 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-black">14</span>
</button>
<button class="shrink-0 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-sm text-label-sm font-bold shadow-sm flex items-center gap-1">
        Turnstile Gate <span class="px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-black">182</span>
</button>
<button class="shrink-0 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-sm text-label-sm font-bold shadow-sm flex items-center gap-1">
        Grades &amp; SBA <span class="px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-black">4</span>
</button>
<button class="shrink-0 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-sm text-label-sm font-bold shadow-sm flex items-center gap-1">
        Custody Holds <span class="px-1.5 py-0.2 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-black">2</span>
</button>
</div>`;

const newPills = `<!-- Filter Pills (Horizontal Scroll) -->
<div class="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-margin-sm px-margin-sm" id="audit-pill-filters">
<button class="audit-filter-pill shrink-0 px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-sm" data-filter="all">
        All Events
      </button>
<button class="audit-filter-pill shrink-0 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-sm text-label-sm font-bold shadow-sm flex items-center gap-1" data-filter="security">
        Security &amp; IAM <span class="px-1.5 py-0.2 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-black">14</span>
</button>
<button class="audit-filter-pill shrink-0 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-sm text-label-sm font-bold shadow-sm flex items-center gap-1" data-filter="turnstile">
        Turnstile Gate <span class="px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-black">182</span>
</button>
<button class="audit-filter-pill shrink-0 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-sm text-label-sm font-bold shadow-sm flex items-center gap-1" data-filter="grades">
        Grades &amp; SBA <span class="px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-black">4</span>
</button>
<button class="audit-filter-pill shrink-0 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-sm text-label-sm font-bold shadow-sm flex items-center gap-1" data-filter="custody">
        Custody Holds <span class="px-1.5 py-0.2 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-black">2</span>
</button>
</div>`;

const oldScript = `  // Simple interaction handler for filtering demonstration
  document.querySelectorAll('input[type="search"]').forEach(input => {
    input.addEventListener('keyup', (e) => {
      const val = e.target.value.toLowerCase();
      document.querySelectorAll('article').forEach(article => {
        const text = article.innerText.toLowerCase();
        article.style.display = text.includes(val) ? 'flex' : 'none';
      });
    });
  });`;

const newScript = `  // Active interactive search & pill filtering
  const filterPills = document.querySelectorAll('.audit-filter-pill');
  const articles = document.querySelectorAll('article');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => {
        p.classList.remove('bg-primary', 'text-on-primary');
        p.classList.add('bg-surface-container-lowest', 'text-on-surface-variant');
      });
      pill.classList.add('bg-primary', 'text-on-primary');
      pill.classList.remove('bg-surface-container-lowest', 'text-on-surface-variant');

      const filter = pill.getAttribute('data-filter');
      articles.forEach(art => {
        const text = art.innerText.toLowerCase();
        if (filter === 'all') {
          art.style.display = 'flex';
        } else if (filter === 'security' && (text.includes('security') || text.includes('iam') || text.includes('lockout'))) {
          art.style.display = 'flex';
        } else if (filter === 'turnstile' && (text.includes('turnstile') || text.includes('gate'))) {
          art.style.display = 'flex';
        } else if (filter === 'grades' && (text.includes('sba') || text.includes('grade') || text.includes('assessment'))) {
          art.style.display = 'flex';
        } else if (filter === 'custody' && (text.includes('custody') || text.includes('lockout') || text.includes('injunction'))) {
          art.style.display = 'flex';
        } else {
          art.style.display = 'none';
        }
      });
    });
  });

  document.querySelectorAll('input[type="search"]').forEach(input => {
    input.addEventListener('keyup', (e) => {
      const val = e.target.value.toLowerCase();
      articles.forEach(article => {
        const text = article.innerText.toLowerCase();
        article.style.display = text.includes(val) ? 'flex' : 'none';
      });
    });
  });`;

content = content.replace(/\r\n/g, '\n');
content = content.replace(oldPills.replace(/\r\n/g, '\n'), newPills.replace(/\r\n/g, '\n'));
content = content.replace(oldScript.replace(/\r\n/g, '\n'), newScript.replace(/\r\n/g, '\n'));
fs.writeFileSync(path, content.replace(/\n/g, '\r\n'), 'utf8');
console.log('Successfully wired mobile audit filter pills');
