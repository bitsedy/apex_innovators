const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.resolve(__dirname, '..');

// 1. Analyze Git Diff for text reduction in recent commits
console.log('=== CALCULATING RECENT TEXT REDUCTIONS FROM GIT HISTORY ===\n');

try {
  // Check diff stats between commits
  const log = execSync('git log -n 5 --oneline', { encoding: 'utf8' });
  console.log('Recent Commits:\n' + log);

  // Check stats for dashboard streamlining commit 84a1e99
  const diffStat = execSync('git diff --stat 15b839a 84a1e99', { encoding: 'utf8' });
  console.log('Diff Stat (Dashboard streamlining):\n' + diffStat);
} catch (e) {
  console.error(e.message);
}

// 2. Scan HTML files for blocks with high text density
console.log('\n=== SCANNING HIGH-DENSITY TEXT BLOCKS ACROSS PORTALS ===\n');

const portals = ['admin', 'staff', 'parent', 'gate', 'sysadmin'];
const heavyBlocks = [];

portals.forEach(portal => {
  const dir = path.join(root, 'prototype', portal);
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && !f.startsWith('mobile-'));

  files.forEach(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    // Extract paragraphs or divs with > 120 characters of plain text
    const pMatches = [...content.matchAll(/<(?:p|div|span|li|td)[^>]*>([\s\S]*?)<\/(?:p|div|span|li|td)>/gi)];
    pMatches.forEach(m => {
      const rawText = m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      const wordCount = rawText.split(/\s+/).length;
      if (wordCount >= 28 && !rawText.includes('{') && !rawText.includes('function') && !rawText.includes('class=')) {
        heavyBlocks.push({
          file: `${portal}/${file}`,
          tag: m[0].substring(0, 40) + '...',
          wordCount,
          charCount: rawText.length,
          preview: rawText.substring(0, 90) + '...'
        });
      }
    });
  });
});

console.log(`Found ${heavyBlocks.length} long text blocks (>= 28 words) across desktop portal pages.`);
heavyBlocks.sort((a, b) => b.wordCount - a.wordCount);
heavyBlocks.slice(0, 25).forEach(b => {
  console.log(`[${b.file}] (${b.wordCount} words): ${b.preview}`);
});
