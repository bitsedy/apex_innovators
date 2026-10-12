import os
import re

roots = [
    r"c:\Projects\Carepoint_ApexEducators\src\app",
    r"c:\Projects\Carepoint_ApexEducators\prototype"
]

results = []

for r in roots:
    for dirpath, _, filenames in os.walk(r):
        for fn in filenames:
            if not fn.endswith(('.html', '.tsx')):
                continue
            fpath = os.path.join(dirpath, fn)
            with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
                lines = f.readlines()
            for idx, line in enumerate(lines, 1):
                if re.search(r'\bwards?\b', line, re.I):
                    rel = os.path.relpath(fpath, r"c:\Projects\Carepoint_ApexEducators")
                    results.append((rel, idx, line.strip()[:100]))

print(f"Total matching lines: {len(results)}")
for rel, idx, text in results[:40]:
    print(f"{rel}:{idx} -> {text}")
if len(results) > 40:
    print(f"... and {len(results) - 40} more")
