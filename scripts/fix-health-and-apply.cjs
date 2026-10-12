const fs = require('fs');

// 1. Fix reference code in public/apply.html
const applyPath = 'prototype/public/apply.html';
if (fs.existsSync(applyPath)) {
  let content = fs.readFileSync(applyPath, 'utf8');
  content = content.replace(/CP-25-KG2-8812/g, 'CP-2026-9921');
  fs.writeFileSync(applyPath, content, 'utf8');
  console.log('Fixed reference ID in public/apply.html to CP-2026-9921');
}

// 2. Upgrade staff/health.html incident submission
const healthPath = 'prototype/staff/health.html';
if (fs.existsSync(healthPath)) {
  let content = fs.readFileSync(healthPath, 'utf8');

  // Add id to history container
  content = content.replace(
    '<div class="space-y-space-sm">\r\n<div class="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-space-sm">',
    '<div class="space-y-space-sm" id="health-history-list">\r\n<div class="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-space-sm">'
  );
  content = content.replace(
    '<div class="space-y-space-sm">\n<div class="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-space-sm">',
    '<div class="space-y-space-sm" id="health-history-list">\n<div class="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-space-sm">'
  );

  // Add id to incident counter
  content = content.replace(
    '<span class="font-label-sm text-label-sm text-outline">1 Resolved Incident</span>',
    '<span class="font-label-sm text-label-sm text-outline" id="incident-counter-text">1 Resolved Incident</span>'
  );

  // Upgrade script
  const oldHealthScript = `    if (submitBtn && toast) {
      submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="material-symbols-outlined text-[20px] animate-spin">refresh</span> Dispatching Escalation...';
        
        setTimeout(() => {
          submitBtn.innerHTML = '<span class="material-symbols-outlined text-[20px]">check</span> Escalation Dispatched';
          submitBtn.classList.remove('bg-secondary', 'hover:bg-red-800');
          submitBtn.classList.add('bg-tertiary-container', 'text-on-tertiary-container');
          
          toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
          toast.classList.add('translate-y-0', 'opacity-100');

          setTimeout(() => {
            toast.classList.remove('translate-y-0', 'opacity-100');
            toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
          }, 5000);
        }, 1000);
      });
    }`;

  const newHealthScript = `    if (submitBtn && toast) {
      submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="material-symbols-outlined text-[20px] animate-spin">refresh</span> Dispatching Escalation...';
        
        setTimeout(() => {
          submitBtn.innerHTML = '<span class="material-symbols-outlined text-[20px]">check</span> Escalation Dispatched';
          submitBtn.classList.remove('bg-secondary', 'hover:bg-red-800');
          submitBtn.classList.add('bg-tertiary-container', 'text-on-tertiary-container');
          
          // Append active incident to health history list
          const historyList = document.getElementById('health-history-list');
          const counterText = document.getElementById('incident-counter-text');
          if (historyList) {
            const now = new Date();
            const timeStr = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
            const newCard = document.createElement('div');
            newCard.className = 'p-space-sm bg-surface-container-low rounded-xl flex items-start gap-space-sm border-l-4 border-secondary animate-in fade-in duration-300';
            newCard.innerHTML = \`
              <span class="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5 animate-pulse">emergency</span>
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <span class="font-label-lg text-label-lg text-on-surface font-bold">Mild Wheezing & Dust Sensitivity</span>
                  <span class="font-label-sm text-label-sm text-secondary font-bold">Active Just Now</span>
                </div>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Escalated by Mrs. Beatrice Abbey. Nurse Faustina Asante attending at Health Bay. Emergency inhaler standby.
                </p>
                <div class="mt-1 font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Triage Status: Nurse Faustina Asante Attending
                </div>
              </div>
            \`;
            historyList.insertBefore(newCard, historyList.firstChild);
          }
          if (counterText) {
            counterText.innerText = '2 Incidents (1 Active Triage)';
            counterText.className = 'font-label-sm text-label-sm text-secondary font-bold';
          }

          toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
          toast.classList.add('translate-y-0', 'opacity-100');

          setTimeout(() => {
            toast.classList.remove('translate-y-0', 'opacity-100');
            toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
          }, 5000);
        }, 1000);
      });
    }`;

  content = content.replace(/\r\n/g, '\n');
  content = content.replace(oldHealthScript.replace(/\r\n/g, '\n'), newHealthScript.replace(/\r\n/g, '\n'));
  fs.writeFileSync(healthPath, content.replace(/\n/g, '\r\n'), 'utf8');
  console.log('Upgraded staff/health.html incident submission with dynamic history card');
}

// 3. Add print/PDF generation and @media print to parent/academics.html
const acadPath = 'prototype/parent/academics.html';
if (fs.existsSync(acadPath)) {
  let content = fs.readFileSync(acadPath, 'utf8');

  // Replace dead download button
  const oldBtn = `<button class="flex items-center gap-space-xs bg-secondary-container text-on-secondary px-space-md py-2.5 rounded-lg font-label-sm text-label-sm font-bold hover:bg-secondary transition-all shadow-sm active:scale-95" type="button">
<span class="material-symbols-outlined text-base">download_for_offline</span>
<span>Download Term 1 Official Report Card (PDF)</span>
</button>`;

  const newBtn = `<button id="download-report-btn" onclick="generateOfficialReportCard()" class="flex items-center gap-space-xs bg-secondary-container text-on-secondary px-space-md py-2.5 rounded-lg font-label-sm text-label-sm font-bold hover:bg-secondary transition-all shadow-sm active:scale-95 cursor-pointer" type="button">
<span class="material-symbols-outlined text-base">picture_as_pdf</span>
<span>Download &amp; Print Official Report Card (PDF)</span>
</button>`;

  // Print CSS & generator script
  const printBlock = `
<style>
@media print {
  header, footer, nav, aside, .sidebar, button, select, #term-select, .no-print, [onclick] {
    display: none !important;
  }
  body, main {
    background: #ffffff !important;
    color: #000000 !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .shadow-sm, .shadow-md, .shadow-xl {
    box-shadow: none !important;
    border: 1px solid #e2e8f0 !important;
  }
}
</style>
<script>
  function generateOfficialReportCard() {
    const btn = document.getElementById('download-report-btn');
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '<span class="material-symbols-outlined animate-spin text-base">sync</span> <span>Generating Certified Report...</span>';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.disabled = false;
        window.print();
      }, 700);
    } else {
      window.print();
    }
  }
</script>
`;

  content = content.replace(/\r\n/g, '\n');
  if (content.includes(oldBtn.replace(/\r\n/g, '\n'))) {
    content = content.replace(oldBtn.replace(/\r\n/g, '\n'), newBtn.replace(/\r\n/g, '\n'));
  }
  if (!content.includes('generateOfficialReportCard')) {
    content = content.replace('</body>', `${printBlock}\n</body>`);
  }

  fs.writeFileSync(acadPath, content.replace(/\n/g, '\r\n'), 'utf8');
  console.log('Added official report card PDF generator and print styling to parent/academics.html');
}
