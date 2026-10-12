import os
import re

directories = ['prototype', 'src']
replacements = [
    # Compound academic years first
    ('2025/2026', '2026/2027'),
    ('2025/26', '2026/27'),
    ('2025 - 2026', '2026 - 2027'),
    ('2025-2026', '2026-2027'),
    ('2025 / 2026', '2026 / 2027'),
    
    ('2024/2025', '2025/2026'),
    ('2024/25', '2025/26'),
    ('2024 - 2025', '2025 - 2026'),
    ('2024-2025', '2025-2026'),
    ('2024 / 2025', '2025 / 2026'),
    
    # Standalone 2025 -> 2026
    ('2025', '2026'),
]

files_updated = 0
total_changes = 0

for target_dir in directories:
    if not os.path.exists(target_dir):
        continue
    for root, dirs, files in os.walk(target_dir):
        for f in files:
            if f.endswith(('.html', '.js', '.ts', '.tsx', '.json', '.css', '.md')):
                file_path = os.path.join(root, f)
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as fp:
                    content = fp.read()
                
                original = content
                for old_val, new_val in replacements:
                    content = content.replace(old_val, new_val)
                
                if content != original:
                    with open(file_path, 'w', encoding='utf-8') as fp:
                        fp.write(content)
                    files_updated += 1

print(f"Updated {files_updated} files with 2026/2027 academic years and 2026 dates!")
