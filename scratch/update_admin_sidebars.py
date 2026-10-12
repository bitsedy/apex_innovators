import os
import re

admin_screens = [
    ('dashboard.html', 'dashboard'),
    ('inbox.html', 'inbox'),
    ('decision.html', 'decision'),
    ('approvals.html', 'approvals'),
    ('admissions.html', 'admissions'),
    ('wards.html', 'wards'),
    ('users.html', 'users'),
    ('reports.html', 'reports'),
    ('settings.html', 'settings'),
]

nav_structure = [
    {
        'tier': 'Executive Suite',
        'items': [
            {'key': 'dashboard', 'label': 'Dashboard', 'href': 'dashboard.html', 'icon': 'dashboard', 'badge': None},
            {'key': 'inbox', 'label': 'Executive Inbox', 'href': 'inbox.html', 'icon': 'move_to_inbox', 'badge': '5', 'badge_class': 'bg-primary-fixed text-on-primary-fixed'},
            {'key': 'decision', 'label': 'Statutory Decisions', 'href': 'decision.html', 'icon': 'gavel', 'badge': '2', 'badge_class': 'bg-secondary-container text-on-secondary'},
        ]
    },
    {
        'tier': 'Operations & Approvals',
        'items': [
            {'key': 'approvals', 'label': 'Approvals Queue', 'href': 'approvals.html', 'icon': 'fact_check', 'badge': '12', 'badge_class': 'bg-secondary-container text-on-secondary'},
            {'key': 'admissions', 'label': 'Admissions Review', 'href': 'admissions.html', 'icon': 'how_to_reg', 'badge': '28', 'badge_class': 'bg-surface-container-high text-on-surface-variant'},
        ]
    },
    {
        'tier': 'Registries & Governance',
        'items': [
            {'key': 'wards', 'label': 'Ward Records', 'href': 'wards.html', 'icon': 'badge', 'badge': None},
            {'key': 'users', 'label': 'User Directory', 'href': 'users.html', 'icon': 'manage_accounts', 'badge': None},
            {'key': 'reports', 'label': 'Reports & Analytics', 'href': 'reports.html', 'icon': 'analytics', 'badge': None},
            {'key': 'settings', 'label': 'School Settings', 'href': 'settings.html', 'icon': 'tune', 'badge': None},
        ]
    }
]

def generate_sidebar_html(current_key):
    tiers_html = []
    for tier in nav_structure:
        tier_title = tier['tier']
        items_html = []
        for item in tier['items']:
            is_active = (item['key'] == current_key)
            if is_active:
                item_cls = "flex items-center justify-between px-space-md py-2.5 transition-all bg-primary-container text-on-primary font-label-lg rounded-xl shadow-sm"
                badge_cls = "bg-white/20 text-white" if item['badge'] else ""
            else:
                item_cls = "flex items-center justify-between px-space-md py-2.5 rounded-xl font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"
                badge_cls = item.get('badge_class', 'bg-surface-container-high text-on-surface-variant')
            
            badge_html = f'<span class="px-2 py-0.5 rounded-full font-label-sm text-label-sm font-bold {badge_cls}">{item["badge"]}</span>' if item['badge'] else ''
            
            items_html.append(f'''<a class="{item_cls}" data-path="{item['key']}" href="{item['href']}">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-[20px]">{item['icon']}</span>
<span>{item['label']}</span>
</div>
{badge_html}
</a>''')
        
        joined_items = "\n".join(items_html)
        tiers_html.append(f'''<div class="px-space-md pt-3 pb-1">
<span class="font-label-sm text-[10px] uppercase tracking-wider text-outline px-space-sm font-bold">{tier_title}</span>
</div>
<nav class="flex flex-col gap-1 px-space-md">
{joined_items}
</nav>''')

    all_nav = "\n".join(tiers_html)

    sidebar = f'''<aside class="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto border-r border-outline-variant/30">
<div class="flex flex-col">
<div class="h-20 px-space-lg flex items-center gap-space-sm bg-surface-container-lowest border-b border-outline-variant/20">
<div class="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
<span class="material-symbols-outlined text-[24px]">school</span>
</div>
<div class="flex flex-col">
<span class="font-label-lg text-label-lg text-primary uppercase tracking-tight font-bold">Carepoint</span>
<span class="font-label-sm text-[10px] text-secondary font-bold tracking-wider uppercase">Executive Admin &amp; Principal</span>
</div>
</div>
<div class="px-space-md py-space-sm">
<div class="px-space-md py-space-xs bg-surface-container-low rounded-lg flex items-center justify-between">
<div class="flex items-center gap-space-xs">
<span class="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
<span class="font-label-sm text-label-sm text-on-surface font-medium">Session 2026/27 Term 1</span>
</div>
<span class="font-label-sm text-label-sm px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface-variant font-bold">Wk 8</span>
</div>
</div>
{all_nav}
</div>
<div class="p-space-md bg-surface-container-lowest flex flex-col gap-space-xs mt-auto">
<div class="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<div class="flex items-center justify-between">
<span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Campus Protocol</span>
<span class="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-bold">Normal</span>
</div>
<button class="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-secondary text-on-secondary font-label-sm text-label-sm hover:bg-secondary-container transition-colors shadow-sm" onclick="window.location.href = '../gate/alert.html';" type="button">
<span class="material-symbols-outlined text-[16px]">lock_open</span>
<span>Emergency Lockdown</span>
</button>
</div>
</div>
</aside>'''
    return sidebar

# Apply to each file
for filename, key in admin_screens:
    filepath = os.path.join('prototype/admin', filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace <aside ... </aside>
    new_sidebar = generate_sidebar_html(key)
    # Regex to find <aside ... </aside>
    pattern = r'<aside\b[^>]*>.*?</aside>'
    new_content = re.sub(pattern, new_sidebar, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated sidebar in: {filepath} (active: {key})")
    else:
        print(f"Warning: No <aside> match in {filepath}")

print("Admin desktop sidebars successfully upgraded!")
