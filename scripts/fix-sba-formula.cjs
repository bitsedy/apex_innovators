const fs = require('fs');

// 1. Update parent/academics.html table headers
const parentAcadPath = 'prototype/parent/academics.html';
if (fs.existsSync(parentAcadPath)) {
  let content = fs.readFileSync(parentAcadPath, 'utf8');
  content = content.replace(
    '<th class="py-3.5 px-space-sm text-center" scope="col">Mid-Term (20%)</th>\r\n<th class="py-3.5 px-space-sm text-center" scope="col">Exam Score (50%)</th>',
    '<th class="py-3.5 px-space-sm text-center" scope="col">Mid-Term (30%)</th>\r\n<th class="py-3.5 px-space-sm text-center" scope="col">Exam Score (40%)</th>'
  );
  content = content.replace(
    '<th class="py-3.5 px-space-sm text-center" scope="col">Mid-Term (20%)</th>\n<th class="py-3.5 px-space-sm text-center" scope="col">Exam Score (50%)</th>',
    '<th class="py-3.5 px-space-sm text-center" scope="col">Mid-Term (30%)</th>\n<th class="py-3.5 px-space-sm text-center" scope="col">Exam Score (40%)</th>'
  );
  fs.writeFileSync(parentAcadPath, content, 'utf8');
  console.log('Updated parent/academics.html to 30/30/40');
}

// 2. Update staff/gradebook.html formula banner
const gradebookPath = 'prototype/staff/gradebook.html';
if (fs.existsSync(gradebookPath)) {
  let content = fs.readFileSync(gradebookPath, 'utf8');
  content = content.replace(
    '<span class="font-headline-md text-headline-md text-primary">30% + 20% + 50%</span>',
    '<span class="font-headline-md text-headline-md text-primary">30% + 30% + 40%</span>'
  );
  content = content.replace(
    'Classwork (30 pts) + Mid-Term (20 pts) + Terminal (50 pts) = 100%',
    'Class Assessment (30 pts) + Mid-Term (30 pts) + Terminal Exam (40 pts) = 100% (NaSIA)'
  );
  fs.writeFileSync(gradebookPath, content, 'utf8');
  console.log('Updated staff/gradebook.html formula banner to 30/30/40');
}
