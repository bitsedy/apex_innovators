const { execSync } = require('child_process');

const suites = [
  'scripts/run-general-screening.cjs',
  'scripts/verify-security-pentest.cjs',
  'scripts/verify-compact-cards.cjs',
  'scripts/verify-skeleton-load.cjs',
  'scripts/verify-dashboard-metrics-and-drawer.cjs',
  'scripts/verify-progressive-disclosure.cjs',
  'scripts/verify-drawer.cjs',
  'scripts/verify-unified-toggle.cjs',
  'scripts/verify-all.cjs'
];

let failed = 0;

suites.forEach(s => {
  try {
    process.stdout.write(`Executing ${s}... `);
    const out = execSync(`node ${s}`, { encoding: 'utf8' });
    const lastLine = out.trim().split('\n').pop();
    console.log(`✅ [PASS] (${lastLine})`);
  } catch (err) {
    console.log(`❌ [FAIL]`);
    console.error(err.stdout || err.message);
    failed++;
  }
});

console.log('\n========================================');
if (failed === 0) {
  console.log(`🎉 ALL ${suites.length} SUITES PASSED FLAWLESSLY!`);
  process.exit(0);
} else {
  console.error(`💥 ${failed} SUITES FAILED!`);
  process.exit(1);
}
