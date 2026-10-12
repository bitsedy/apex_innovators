const fs = require('fs');
const path = 'prototype/staff/gradebook.html';
let content = fs.readFileSync(path, 'utf8');

const targetOld = `        const subtotalCell = row.querySelector('.subtotal-cell');
        const cumulativeCell = row.querySelector('.cumulative-cell');

        if (subtotalCell) subtotalCell.innerText = subtotal + ' / 30';
        if (cumulativeCell) cumulativeCell.innerText = total + '%';`;

const targetNew = `        const subtotalCell = row.querySelector('.subtotal-cell');
        const cumulativeCell = row.querySelector('.cumulative-cell');

        if (subtotalCell) subtotalCell.innerText = subtotal + ' / 30';
        if (cumulativeCell) cumulativeCell.innerText = total + '%';

        // Dynamically update GES Grade Badge based on cumulative score
        const gradeSpan = row.cells && row.cells[7] ? row.cells[7].querySelector('span') : null;
        if (gradeSpan) {
          if (total >= 80) {
            gradeSpan.innerText = 'Grade 1';
            gradeSpan.className = 'inline-flex px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-bold';
          } else if (total >= 70) {
            gradeSpan.innerText = 'Grade 2';
            gradeSpan.className = 'inline-flex px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-label-sm text-label-sm font-bold';
          } else if (total >= 60) {
            gradeSpan.innerText = 'Grade 3';
            gradeSpan.className = 'inline-flex px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-label-sm text-label-sm font-bold';
          } else if (total >= 50) {
            gradeSpan.innerText = 'Grade 4';
            gradeSpan.className = 'inline-flex px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 font-label-sm text-label-sm font-bold';
          } else {
            gradeSpan.innerText = 'Grade 9';
            gradeSpan.className = 'inline-flex px-2 py-0.5 rounded-full bg-red-100 text-red-800 font-label-sm text-label-sm font-bold';
          }
        }`;

// Handle CRLF vs LF
content = content.replace(/\r\n/g, '\n');
const targetOldNormalized = targetOld.replace(/\r\n/g, '\n');

if (content.includes(targetOldNormalized)) {
  content = content.replace(targetOldNormalized, targetNew.replace(/\r\n/g, '\n'));
  fs.writeFileSync(path, content.replace(/\n/g, '\r\n'), 'utf8');
  console.log('Successfully updated grade calculation in staff/gradebook.html');
} else {
  console.log('Target string not found in gradebook.html');
}
