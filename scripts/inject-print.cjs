const fs = require('fs');
const path = 'prototype/parent/academics.html';
let content = fs.readFileSync(path, 'utf8');

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

if (!content.includes('@media print')) {
  content = content.replace('</body>', `${printBlock}\n</body>`);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully injected @media print and generateOfficialReportCard into academics.html');
} else {
  console.log('Already has @media print');
}
