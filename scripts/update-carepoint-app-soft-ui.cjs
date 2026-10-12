const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, '../prototype/carepoint-app.js');
let js = fs.readFileSync(appPath, 'utf8');
const isCRLF = js.includes('\r\n');
js = js.replace(/\r\n/g, '\n');

// 1. Update Capabilities Modal HTML
const capSearchTarget = `    container.innerHTML = \`
      <div class="bg-surface-container-lowest rounded-2xl max-w-xl w-full shadow-2xl border border-outline-variant/30 flex flex-col overflow-hidden text-on-surface transform transition-all">`;

const capSearchEnd = `    // Wire close
    document.getElementById('closeCapabilityModalBtn').onclick = closeCapabilitiesModal;`;

const capStartIdx = js.indexOf(capSearchTarget);
const capEndIdx = js.indexOf(capSearchEnd);

if (capStartIdx !== -1 && capEndIdx !== -1) {
  const newCapHTML = `    container.innerHTML = \`
      <div class="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-black/5 flex flex-col overflow-hidden text-on-surface transform transition-all">
        <!-- Top Search Header -->
        <div class="p-4 border-b border-surface-container-high/60 flex items-center gap-3 bg-white">
          <div class="flex-1 flex items-center gap-2.5 px-4 py-2.5 bg-[#f4f1ee] rounded-full">
            <span class="material-symbols-outlined text-primary text-[20px] shrink-0">search</span>
            <input
              id="carepoint-capability-search-input"
              type="text"
              value="\${filterQuery}"
              placeholder="Search actions, records, or tools..."
              class="w-full bg-transparent border-0 outline-none text-sm text-on-surface placeholder:text-outline font-medium"
              autocomplete="off"
            />
          </div>
          <button id="closeCapabilityModalBtn" class="w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/5 text-on-surface-variant transition-colors cursor-pointer shrink-0" type="button" title="Close (Esc)">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Capability Results List -->
        <div class="max-h-[60vh] overflow-y-auto p-4 flex flex-col gap-4">
          \${filtered.length === 0 ? \`
            <div class="py-10 text-center text-on-surface-variant">
              <span class="material-symbols-outlined text-4xl mb-2 text-outline">manage_search</span>
              <p class="text-sm font-semibold">No results for "\${filterQuery}"</p>
            </div>
          \` : Object.entries(categoriesMap).map(([category, items]) => \`
            <div>
              <span class="text-xs font-semibold text-outline px-2 block mb-2">\${category}</span>
              <div class="flex flex-col gap-1.5">
                \${items.map(item => \`
                  <div class="capability-item group p-3.5 rounded-2xl hover:bg-[#f4f1ee] transition-all cursor-pointer flex items-center justify-between gap-3" data-cap-id="\${item.id}">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-[#f4f1ee] group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center shrink-0 transition-colors">
                        <span class="material-symbols-outlined text-[20px]">\${item.icon}</span>
                      </div>
                      <div>
                        <h4 class="font-bold text-sm text-on-surface leading-tight">\${item.title}</h4>
                        <p class="text-xs text-on-surface-variant mt-0.5">\${item.description}</p>
                      </div>
                    </div>
                    <span class="material-symbols-outlined text-[18px] text-outline group-hover:text-primary transition-colors shrink-0">arrow_forward</span>
                  </div>
                \`).join('')}
              </div>
            </div>
          \`).join('')}
        </div>
      </div>
    \`;

`;
  js = js.substring(0, capStartIdx) + newCapHTML + js.substring(capEndIdx);
  console.log('Updated Capabilities Modal in carepoint-app.js');
} else {
  console.log('Capabilities Modal target not matched in carepoint-app.js: ', capStartIdx, capEndIdx);
}

// 2. Update Safe Action Modal HTML
const safeStartTarget = `    container.innerHTML = \`
      <div class="bg-surface-container-lowest rounded-2xl max-w-md w-full p-6 shadow-2xl border`;

const safeEndTarget = `    backdrop.classList.remove('hidden');`;

const safeStartIdx = js.indexOf(safeStartTarget);
const safeEndIdx = js.indexOf(safeEndTarget);

if (safeStartIdx !== -1 && safeEndIdx !== -1) {
  const newSafeHTML = `    container.innerHTML = \`
      <div class="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-black/5 flex flex-col gap-5 text-on-surface">
        <div class="flex items-start gap-3.5">
          <div class="w-11 h-11 rounded-full \${isDestructive ? 'bg-red-50 text-secondary' : 'bg-amber-50 text-amber-800'} flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-[24px]">\${isDestructive ? 'security' : 'warning'}</span>
          </div>
          <div>
            <h3 class="text-lg font-bold text-on-surface">\${title}</h3>
            <p class="text-xs text-on-surface-variant mt-0.5">\${subtitle}</p>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-[#f4f1ee] text-xs text-on-surface leading-relaxed">
          <p class="font-medium">\${warning}</p>
        </div>

        <div class="flex items-center justify-end gap-2.5 pt-2">
          <button id="carepoint-cancel-safe-action" type="button" class="carepoint-soft-btn-secondary">
            \${cancelLabel}
          </button>
          <button id="carepoint-confirm-safe-action" type="button" class="\${isDestructive ? 'carepoint-soft-btn-danger' : 'carepoint-soft-btn'}">
            <span>\${actionLabel}</span>
          </button>
        </div>
      </div>
    \`;

`;
  js = js.substring(0, safeStartIdx) + newSafeHTML + js.substring(safeEndIdx);
  console.log('Updated Safe Action Modal in carepoint-app.js');
} else {
  console.log('Safe Action Modal target not matched in carepoint-app.js: ', safeStartIdx, safeEndIdx);
}

if (isCRLF) {
  js = js.replace(/\n/g, '\r\n');
}

fs.writeFileSync(appPath, js, 'utf8');
console.log('Finished updating carepoint-app.js');
