const { execSync } = require('child_process');

console.log('=== COMMITTED TEXT REDUCTION METRICS ===\n');

// 1. Commit c6cedd6: fix(portals): remove repetitive crowded text, duplicate badges
const stat1 = execSync('git diff --shortstat acd7e48 c6cedd6 -- prototype/', { encoding: 'utf8' }).trim();
console.log('1. Commit c6cedd6 (Crowded text & duplicate badges removal):\n   ' + stat1);

// 2. Commit 15b839a: fix(portals): eliminate portal redundancies, remove duplicate anchors
const stat2 = execSync('git diff --shortstat c6cedd6 15b839a -- prototype/', { encoding: 'utf8' });
console.log('2. Commit 15b839a (Redundancy removal & drawer alignment):\n   ' + stat2.trim());

// 3. Commit 84a1e99: feat(dashboards): streamline content, add quantitative scroll-animated metrics
const stat3 = execSync('git diff --shortstat 15b839a 84a1e99 -- prototype/', { encoding: 'utf8' });
console.log('3. Commit 84a1e99 (Dashboard streamlining & quantitative metrics):\n   ' + stat3.trim());

// 4. Overall diff across prototype since before text cleanups (acd7e48 to HEAD)
const overallStat = execSync('git diff --stat acd7e48 HEAD -- prototype/', { encoding: 'utf8' });
console.log('\nOverall Diff on prototype/:\n' + overallStat);

const overallShort = execSync('git diff --shortstat acd7e48 HEAD -- prototype/', { encoding: 'utf8' });
console.log('\nTotal Net Modifications on prototype/:\n   ' + overallShort.trim());
