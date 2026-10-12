import os
import re

mobile_screens = [
    ('mobile-dashboard.html', 'dashboard'),
    ('mobile-inbox.html', 'inbox'),
    ('mobile-decision.html', 'decision'),
    ('mobile-approvals.html', 'approvals'),
    ('mobile-admissions.html', 'admissions'),
    ('mobile-wards.html', 'wards'),
    ('mobile-users.html', 'users'),
    ('mobile-reports.html', 'reports'),
    ('mobile-settings.html', 'settings'),
]

mobile_tabs = [
    {'key': 'dashboard', 'label': 'Dashboard', 'href': 'mobile-dashboard.html', 'icon': 'dashboard', 'badge': None},
    {'key': 'inbox', 'label': 'Inbox', 'href': 'mobile-inbox.html', 'icon': 'move_to_inbox', 'badge': '5', 'badge_bg': 'bg-primary-fixed text-on-primary-fixed'},
    {'key': 'decision', 'label': 'Decisions', 'href': 'mobile-decision.html', 'icon': 'gavel', 'badge': '2', 'badge_bg': 'bg-secondary text-on-secondary'},
    {'key': 'approvals', 'label': 'Approvals', 'href': 'mobile-approvals.html', 'icon': 'verified', 'badge': '12', 'badge_bg': 'bg-secondary-container text-on-secondary'},
    {'key': 'admissions', 'label': 'Admissions', 'href': 'mobile-admissions.html', 'icon': 'how_to_reg', 'badge': '28', 'badge_bg': 'bg-surface-container-high text-on-surface-variant'},
]

def generate_mobile_nav(current_key):
    items_html = []
    for tab in mobile_tabs:
        is_active = (tab['key'] == current_key)
        if is_active:
            cls = "flex flex-col items-center justify-center min-w-[56px] h-12 transition-all duration-200 text-primary font-bold"
        else:
            cls = "flex flex-col items-center justify-center min-w-[56px] h-12 text-on-surface-variant hover:text-primary transition-all duration-200"
        
        badge_markup = ""
        if tab['badge']:
            badge_markup = f'<span class="absolute -top-1 -right-2 px-1 min-w-[16px] h-4 {tab["badge_bg"]} rounded-full font-label-sm text-[10px] flex items-center justify-center leading-none font-bold">{tab["badge"]}</span>'
        
        items_html.append(f'''<a class="{cls}" data-path="{tab['key']}" href="{tab['href']}">
<div class="relative flex items-center justify-center">
<span class="material-symbols-outlined text-[24px]">{tab['icon']}</span>
{badge_markup}
</div>
<span class="font-label-sm text-label-sm mt-0.5">{tab['label']}</span>
</a>''')
    
    joined = "\n".join(items_html)
    return f'''<nav class="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.06)] border-t border-outline-variant/20" data-active-classes="text-primary font-bold"><div class="flex justify-around items-center h-16 px-space-xs">{joined}</div></nav>'''

for filename, key in mobile_screens:
    filepath = os.path.join('prototype/admin', filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_nav = generate_mobile_nav(key)
    # Replace <nav class="fixed bottom-0 ... </nav>
    pattern = r'<nav\b[^>]*class="[^"]*fixed bottom-0[^"]*"[^>]*>.*?</nav>'
    new_content = re.sub(pattern, new_nav, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated mobile bottom nav in: {filepath} (active: {key})")
    else:
        # If no matching nav found, look for </body> and insert before it
        print(f"Notice: nav pattern didn't match directly in {filepath}, checking alternate...")
        new_content = re.sub(r'<nav\b[^>]*>.*?</nav>\s*</body>', new_nav + '</body>', content, flags=re.DOTALL)
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Replaced nav before </body> in: {filepath}")

print("Admin mobile bottom navigation successfully upgraded!")
