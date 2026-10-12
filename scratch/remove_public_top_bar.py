import os

files = [
    r"c:\Projects\Carepoint_ApexEducators\prototype\public\home.html",
    r"c:\Projects\Carepoint_ApexEducators\prototype\public\home-v2.html",
    r"c:\Projects\Carepoint_ApexEducators\prototype\public\apply.html"
]

target_bar = '<div class="bg-primary text-on-primary text-label-sm font-label-sm"><div class="max-w-7xl mx-auto px-6 lg:px-12 h-10 flex items-center justify-between gap-4"><div class="flex items-center gap-space-sm overflow-hidden text-ellipsis whitespace-nowrap"><a href="apply.html" class="bg-secondary hover:bg-secondary-container text-on-secondary px-2.5 py-0.5 rounded-full font-label-sm uppercase tracking-wider text-[10px] font-bold inline-flex items-center gap-1 transition-colors"><span>Admissions 2026/2027</span><span class="material-symbols-outlined text-[12px]">arrow_forward</span></a><span class="hidden sm:inline text-on-primary/90 font-body-sm">Creche, Nursery, Kindergarten, Basic &amp; Junior High Enrollment Now Open</span></div><div class="flex items-center gap-space-md text-on-primary/90 whitespace-nowrap"><a class="flex items-center gap-1 hover:text-secondary-fixed transition-colors" href="tel:+233241234567"><span class="material-symbols-outlined text-[14px]">call</span><span class="hidden md:inline font-label-sm">+233 (0) 24 123 4567</span></a><span class="hidden md:inline text-on-primary/40">|</span><a class="flex items-center gap-1 hover:text-secondary-fixed transition-colors" href="mailto:info@carepoint.edu.gh"><span class="material-symbols-outlined text-[14px]">mail</span><span class="hidden md:inline font-label-sm">info@carepoint.edu.gh</span></a></div></div></div>'

for fpath in files:
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    if target_bar in content:
        content = content.replace(target_bar, "")
        content = content.replace('pt-[120px]', 'pt-[80px]')
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Removed top bar and updated padding in {os.path.basename(fpath)}")
    else:
        print(f"Target bar not found in {os.path.basename(fpath)}")
