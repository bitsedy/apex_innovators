const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Update src/app/(public)/layout.tsx
const layoutPath = path.join(rootDir, 'src', 'app', '(public)', 'layout.tsx');
let layoutContent = fs.readFileSync(layoutPath, 'utf8');

// Replace navLinks and state definition
const oldNavSection = `  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "Home", href: "/", exact: true },
    { label: "Academics", href: "/#academics", exact: false },
    { label: "Admissions", href: "/admissions/apply", exact: false },
    { label: "News & Events", href: "/#news", exact: false },
    { label: "Gallery", href: "/#gallery", exact: false },
    { label: "About Us", href: "/#about", exact: false },
    { label: "Contact", href: "/#contact", exact: false },
  ];`;

const newNavSection = `  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = React.useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = React.useState(false);

  // Maximum 4 primary navigation items on upper bar
  const primaryNavLinks = [
    { label: "Home", href: "/", exact: true },
    { label: "Academics", href: "/#academics", exact: false },
    { label: "Admissions", href: "/admissions/apply", exact: false },
  ];

  // Related items organized into About Us dropdown
  const aboutDropdownItems = [
    {
      label: "About Us",
      href: "/#about",
      description: "Vision, mission, Christian ethos & leadership",
      icon: "info",
    },
    {
      label: "News & Events",
      href: "/#news",
      description: "Campus announcements, term dates & calendar",
      icon: "calendar_month",
    },
    {
      label: "Campus Gallery",
      href: "/#gallery",
      description: "Photo tour, modern facilities & student life",
      icon: "photo_library",
    },
    {
      label: "Contact Us",
      href: "/#contact",
      description: "Visiting hours, location map & inquiries",
      icon: "contact_phone",
    },
  ];

  const isAboutActive =
    pathname.startsWith("/#about") ||
    pathname.startsWith("/#news") ||
    pathname.startsWith("/#gallery") ||
    pathname.startsWith("/#contact");`;

// Handle CRLF vs LF
if (layoutContent.includes(oldNavSection.replace(/\r?\n/g, '\r\n'))) {
  layoutContent = layoutContent.replace(oldNavSection.replace(/\r?\n/g, '\r\n'), newNavSection.replace(/\r?\n/g, '\r\n'));
} else if (layoutContent.includes(oldNavSection.replace(/\r?\n/g, '\n'))) {
  layoutContent = layoutContent.replace(oldNavSection.replace(/\r?\n/g, '\n'), newNavSection.replace(/\r?\n/g, '\n'));
} else {
  console.error('Could not match oldNavSection in layout.tsx');
}

// Replace desktop nav and mobile drawer in layout.tsx
const oldDesktopNavRegex = /\{\/\* Navigation links \*\/\}[\s\S]*?<nav className="hidden xl:flex items-center gap-6 h-full">[\s\S]*?<\/nav>/;
const newDesktopNav = `{/* Navigation links - Strictly max 4 items on the bar with dropdown */}
            <nav className="hidden lg:flex items-center gap-6 h-full">
              {primaryNavLinks.map((link) => {
                const isActive = link.exact
                  ? pathname === link.href
                  : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={\`h-full flex items-center font-label-lg text-label-lg transition-colors \${
                      isActive
                        ? "text-primary font-bold border-b-2 border-primary"
                        : "text-on-surface-variant hover:text-primary"
                    }\`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* 4th Item: About Us with Dropdown */}
              <div
                className="relative h-full flex items-center group"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <Link
                  href="/#about"
                  className={\`h-full flex items-center gap-1 font-label-lg text-label-lg transition-colors \${
                    isAboutActive
                      ? "text-primary font-bold border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }\`}
                >
                  <span>About Us</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:rotate-180 text-on-surface-variant group-hover:text-primary">
                    expand_more
                  </span>
                </Link>

                {/* Dropdown Menu */}
                <div
                  className={\`absolute top-[72px] right-0 sm:left-1/2 sm:-translate-x-1/2 w-80 bg-surface-container-lowest/98 backdrop-blur-xl border border-outline-variant/30 rounded-2xl shadow-2xl p-2.5 flex flex-col gap-1 transition-all duration-200 z-50 \${
                    aboutDropdownOpen
                      ? "opacity-100 visible translate-y-0 pointer-events-auto"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }\`}
                >
                  <div className="px-3 py-1.5 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider border-b border-surface-container-high mb-1">
                    Carepoint Community &amp; Life
                  </div>
                  {aboutDropdownItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setAboutDropdownOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface-container-low transition-colors group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-surface-container text-primary group-hover/item:bg-primary group-hover/item:text-on-primary flex items-center justify-center shrink-0 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg font-bold text-primary group-hover/item:text-secondary transition-colors">
                          {item.label}
                        </span>
                        <span className="text-[11px] text-on-surface-variant font-normal leading-tight">
                          {item.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>`;

layoutContent = layoutContent.replace(oldDesktopNavRegex, newDesktopNav);

// Update button xl:hidden to lg:hidden in layout.tsx
layoutContent = layoutContent.replace(
  'className="xl:hidden w-10 h-10 flex items-center justify-center',
  'className="lg:hidden w-10 h-10 flex items-center justify-center'
);

// Replace mobile drawer in layout.tsx
const oldMobileDrawerRegex = /\{\/\* Mobile Navigation Drawer \*\/\}[\s\S]*?\{mobileMenuOpen && \([\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?\)\}/;
const newMobileDrawer = `{/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface/98 backdrop-blur-2xl border-b border-surface-container-high px-6 py-4 shadow-xl max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="flex flex-col gap-2">
              {primaryNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low font-semibold transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </Link>
              ))}

              {/* Mobile About Accordion / Group */}
              <div className="border border-surface-container-high rounded-xl p-2 bg-surface-container-lowest/50">
                <button
                  type="button"
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full py-1.5 px-2 rounded-lg text-primary font-bold flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-primary">info</span>
                    About &amp; Community
                  </span>
                  <span className={\`material-symbols-outlined text-[18px] transition-transform duration-200 \${mobileAboutOpen ? "rotate-180" : ""}\`}>
                    expand_more
                  </span>
                </button>
                {mobileAboutOpen && (
                  <div className="flex flex-col gap-1 mt-2 pt-2 border-t border-surface-container-high pl-2">
                    {aboutDropdownItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileAboutOpen(false);
                        }}
                        className="py-2 px-2.5 rounded-lg text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low flex items-center gap-2.5 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px] text-secondary">{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-surface-container-high my-1 pt-2 flex flex-col gap-2">
                <Link
                  href="/admissions/apply#status"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-3 rounded-lg bg-surface-container-low text-primary font-bold text-left flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-secondary">fact_check</span>
                    Check Application Status
                  </span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </Link>
                <Link
                  href="/admissions/apply"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-3 rounded-lg bg-secondary text-on-secondary font-bold text-center flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Apply for 2026/2027</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        )}`;

layoutContent = layoutContent.replace(oldMobileDrawerRegex, newMobileDrawer);

fs.writeFileSync(layoutPath, layoutContent, 'utf8');
console.log('Updated src/app/(public)/layout.tsx successfully.');

// 2. Update prototype/public/home.html and home-v2.html
function updatePrototypeHtml(filePath, isApplyPage = false) {
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');

  // A. Remove hero admissions announcement badge if present
  const heroBadgeRegex = /<div class="inline-flex items-center gap-2 self-start bg-surface-container-high px-4 py-1\.5 rounded-full">\s*<span class="w-2\.5 h-2\.5 rounded-full bg-secondary animate-pulse"><\/span>\s*<span class="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">Admissions Cycle 2026 \/ 2027 Active<\/span>\s*<\/div>/g;
  html = html.replace(heroBadgeRegex, '');

  // B. Replace desktop-nav with 4 items max + dropdown
  const oldDesktopNavRegex = /<nav id="desktop-nav"[\s\S]*?<\/nav>/;
  const homePrefix = isApplyPage ? 'home.html' : '';
  const applyPrefix = isApplyPage ? 'apply.html' : 'apply.html';

  const newDesktopNavHtml = `<nav id="desktop-nav" class="hidden lg:flex items-center gap-6 h-full relative" data-active-classes="text-primary font-bold">
<a class="nav-link h-full flex items-center transition-colors ${isApplyPage ? 'text-on-surface-variant hover:text-primary' : 'text-primary font-bold'} font-label-lg text-label-lg" data-section="home" href="${homePrefix}#home"${isApplyPage ? '' : ' aria-current="page"'}>Home</a>
<a class="nav-link h-full flex items-center transition-colors text-on-surface-variant hover:text-primary font-label-lg text-label-lg" data-section="academics" href="${homePrefix}#academics">Academics</a>
<a class="nav-link h-full flex items-center transition-colors ${isApplyPage ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'} font-label-lg text-label-lg" data-section="admissions" href="${applyPrefix}"${isApplyPage ? ' aria-current="page"' : ''}>Admissions</a>
<div class="relative h-full flex items-center group" id="about-dropdown-container">
<a class="nav-link h-full flex items-center gap-1 transition-colors text-on-surface-variant hover:text-primary font-label-lg text-label-lg cursor-pointer" data-section="about" href="${homePrefix}#about">
<span>About Us</span>
<span class="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:rotate-180 text-on-surface-variant group-hover:text-primary">expand_more</span>
</a>
<div class="dropdown-menu absolute top-[72px] right-0 sm:left-1/2 sm:-translate-x-1/2 w-80 bg-surface-container-lowest/98 backdrop-blur-xl border border-outline-variant/30 rounded-2xl shadow-2xl p-2.5 flex flex-col gap-1 transition-all duration-200 z-50 opacity-0 invisible -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto">
<div class="px-3 py-1.5 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider border-b border-surface-container-high mb-1">Carepoint Community &amp; Life</div>
<a href="${homePrefix}#about" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface-container-low transition-colors group/item" data-section="about">
<div class="w-10 h-10 rounded-xl bg-surface-container text-primary group-hover/item:bg-primary group-hover/item:text-on-primary flex items-center justify-center shrink-0 transition-colors">
<span class="material-symbols-outlined text-[20px]">info</span>
</div>
<div class="flex flex-col">
<span class="font-label-lg text-label-lg font-bold text-primary group-hover/item:text-secondary transition-colors">About Us</span>
<span class="text-[11px] text-on-surface-variant font-normal leading-tight">Vision, Mission &amp; Leadership</span>
</div>
</a>
<a href="${homePrefix}#news" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface-container-low transition-colors group/item" data-section="news">
<div class="w-10 h-10 rounded-xl bg-surface-container text-primary group-hover/item:bg-primary group-hover/item:text-on-primary flex items-center justify-center shrink-0 transition-colors">
<span class="material-symbols-outlined text-[20px]">calendar_month</span>
</div>
<div class="flex flex-col">
<span class="font-label-lg text-label-lg font-bold text-primary group-hover/item:text-secondary transition-colors">News &amp; Events</span>
<span class="text-[11px] text-on-surface-variant font-normal leading-tight">Announcements &amp; Term Calendar</span>
</div>
</a>
<a href="${homePrefix}#gallery" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface-container-low transition-colors group/item" data-section="gallery">
<div class="w-10 h-10 rounded-xl bg-surface-container text-primary group-hover/item:bg-primary group-hover/item:text-on-primary flex items-center justify-center shrink-0 transition-colors">
<span class="material-symbols-outlined text-[20px]">photo_library</span>
</div>
<div class="flex flex-col">
<span class="font-label-lg text-label-lg font-bold text-primary group-hover/item:text-secondary transition-colors">Campus Gallery</span>
<span class="text-[11px] text-on-surface-variant font-normal leading-tight">Photos &amp; Student Life</span>
</div>
</a>
<a href="${homePrefix}#contact" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface-container-low transition-colors group/item" data-section="contact">
<div class="w-10 h-10 rounded-xl bg-secondary/10 text-secondary group-hover/item:bg-secondary group-hover/item:text-on-secondary flex items-center justify-center shrink-0 transition-colors">
<span class="material-symbols-outlined text-[20px]">contact_phone</span>
</div>
<div class="flex flex-col">
<span class="font-label-lg text-label-lg font-bold text-primary group-hover/item:text-secondary transition-colors">Contact Us</span>
<span class="text-[11px] text-on-surface-variant font-normal leading-tight">Location, Phone &amp; Inquiries</span>
</div>
</a>
</div>
</div>
<div id="nav-active-bar" class="absolute bottom-0 h-[3px] bg-primary rounded-t-sm transition-all duration-300 ease-out pointer-events-none"></div>
</nav>`;

  html = html.replace(oldDesktopNavRegex, newDesktopNavHtml);

  // C. Update mobile button to lg:hidden
  html = html.replace('id="mobile-menu-btn" class="xl:hidden', 'id="mobile-menu-btn" class="lg:hidden');

  // D. Update mobile drawer
  const oldMobileDrawerRegex = /<div id="mobile-nav-drawer"[\s\S]*?<\/div><script>function toggleMobileMenu/;
  const newMobileDrawerHtml = `<div id="mobile-nav-drawer" class="hidden lg:hidden bg-surface/98 backdrop-blur-2xl border-b border-surface-container-high px-6 py-4 shadow-xl max-h-[calc(100vh-120px)] overflow-y-auto">
<div class="flex flex-col gap-2">
<a class="py-2.5 px-3 rounded-lg ${isApplyPage ? 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low font-semibold' : 'text-primary font-bold bg-surface-container-low'} flex items-center justify-between" data-section="home" href="${homePrefix}#home" onclick="toggleMobileMenu()">
<span class="flex items-center gap-2.5"><span class="material-symbols-outlined text-[20px] text-primary">home</span>Home</span>
<span class="material-symbols-outlined text-[18px]">chevron_right</span>
</a>
<a class="py-2.5 px-3 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low font-semibold transition-colors flex items-center justify-between" data-section="academics" href="${homePrefix}#academics" onclick="toggleMobileMenu()">
<span class="flex items-center gap-2.5"><span class="material-symbols-outlined text-[20px] text-secondary">school</span>Academics</span>
<span class="material-symbols-outlined text-[18px]">chevron_right</span>
</a>
<a class="py-2.5 px-3 rounded-lg ${isApplyPage ? 'text-primary font-bold bg-surface-container-low' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low font-semibold'} transition-colors flex items-center justify-between" data-section="admissions" href="${applyPrefix}" onclick="toggleMobileMenu()">
<span class="flex items-center gap-2.5"><span class="material-symbols-outlined text-[20px] text-primary">assignment_turned_in</span>Admissions (Apply)</span>
<span class="material-symbols-outlined text-[18px]">chevron_right</span>
</a>

<div class="border border-surface-container-high rounded-xl p-2 bg-surface-container-lowest/50">
<button type="button" onclick="document.getElementById('mobile-about-submenu')?.classList.toggle('hidden'); document.getElementById('mobile-about-chevron')?.classList.toggle('rotate-180');" class="w-full py-1.5 px-2 rounded-lg text-primary font-bold flex items-center justify-between">
<span class="flex items-center gap-2"><span class="material-symbols-outlined text-[20px] text-primary">info</span>About &amp; Community</span>
<span id="mobile-about-chevron" class="material-symbols-outlined text-[18px] transition-transform duration-200">expand_more</span>
</button>
<div id="mobile-about-submenu" class="flex flex-col gap-1 mt-2 pt-2 border-t border-surface-container-high pl-2">
<a class="py-2 px-2.5 rounded-lg text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low flex items-center gap-2.5 transition-colors" data-section="about" href="${homePrefix}#about" onclick="toggleMobileMenu()">
<span class="material-symbols-outlined text-[18px] text-secondary">info</span><span>About Us</span>
</a>
<a class="py-2 px-2.5 rounded-lg text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low flex items-center gap-2.5 transition-colors" data-section="news" href="${homePrefix}#news" onclick="toggleMobileMenu()">
<span class="material-symbols-outlined text-[18px] text-primary">calendar_month</span><span>News &amp; Events</span>
</a>
<a class="py-2 px-2.5 rounded-lg text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low flex items-center gap-2.5 transition-colors" data-section="gallery" href="${homePrefix}#gallery" onclick="toggleMobileMenu()">
<span class="material-symbols-outlined text-[18px] text-tertiary-fixed-variant">photo_library</span><span>Campus Gallery</span>
</a>
<a class="py-2 px-2.5 rounded-lg text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low flex items-center gap-2.5 transition-colors" data-section="contact" href="${homePrefix}#contact" onclick="toggleMobileMenu()">
<span class="material-symbols-outlined text-[18px] text-secondary">contact_phone</span><span>Contact Us</span>
</a>
</div>
</div>

<div class="border-t border-surface-container-high my-1 pt-2 flex flex-col gap-2">
<button onclick="openStatusModal(event); toggleMobileMenu();" class="w-full py-2.5 px-3 rounded-lg bg-surface-container-low text-primary font-bold text-left flex items-center justify-between">
<span class="flex items-center gap-2.5"><span class="material-symbols-outlined text-[20px] text-secondary">fact_check</span>Check Application Status</span>
<span class="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
<a href="apply.html" class="w-full py-2.5 px-3 rounded-lg bg-secondary text-on-secondary font-bold text-center flex items-center justify-center gap-2 shadow-sm">
<span>Apply for 2026/2027</span>
<span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
<a href="../parent/dashboard.html" class="py-2 px-3 rounded-lg text-xs text-on-surface-variant hover:text-primary flex items-center gap-2">
<span class="material-symbols-outlined text-[16px]">login</span><span>Enter Carepoint Portal Hub</span>
</a>
</div>
</div>
</div><script>function toggleMobileMenu`;

  html = html.replace(oldMobileDrawerRegex, newMobileDrawerHtml);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Updated ' + filePath + ' successfully.');
}

updatePrototypeHtml(path.join(rootDir, 'prototype', 'public', 'home.html'), false);
updatePrototypeHtml(path.join(rootDir, 'prototype', 'public', 'home-v2.html'), false);
updatePrototypeHtml(path.join(rootDir, 'prototype', 'public', 'apply.html'), true);

// 3. Update prototype/carepoint-app.js scrollspy logic
const appJsPath = path.join(rootDir, 'prototype', 'carepoint-app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

const oldScrollspyCode = `  function updateIndicator(targetSection, animate = true) {
    currentActive = targetSection;
    let activeLink = null;

    links.forEach(link => {
      const isMatch = link.getAttribute('data-section') === targetSection;
      if (isMatch) {
        activeLink = link;
        link.classList.remove('text-on-surface-variant');
        link.classList.add('text-primary', 'font-bold');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('text-primary', 'font-bold');
        link.classList.add('text-on-surface-variant');
        link.removeAttribute('aria-current');
      }
    });`;

const newScrollspyCode = `  function updateIndicator(targetSection, animate = true) {
    currentActive = targetSection;
    let activeLink = null;

    // Group related sections into 'about' top-level bar item
    const aboutGroup = ['about', 'news', 'gallery', 'contact'];
    const barTargetSection = aboutGroup.includes(targetSection) ? 'about' : targetSection;

    links.forEach(link => {
      const isMatch = link.getAttribute('data-section') === barTargetSection;
      if (isMatch) {
        activeLink = link;
        link.classList.remove('text-on-surface-variant');
        link.classList.add('text-primary', 'font-bold');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('text-primary', 'font-bold');
        link.classList.add('text-on-surface-variant');
        link.removeAttribute('aria-current');
      }
    });

    // Also highlight dropdown item if applicable
    const dropdownItems = Array.from(nav.querySelectorAll('.dropdown-item'));
    dropdownItems.forEach(dItem => {
      const dSection = dItem.getAttribute('data-section');
      if (dSection === targetSection) {
        dItem.classList.add('bg-surface-container');
      } else {
        dItem.classList.remove('bg-surface-container');
      }
    });`;

if (appJs.includes(oldScrollspyCode)) {
  appJs = appJs.replace(oldScrollspyCode, newScrollspyCode);
  fs.writeFileSync(appJsPath, appJs, 'utf8');
  console.log('Updated prototype/carepoint-app.js successfully.');
} else {
  console.log('Checking alternative line endings in carepoint-app.js');
  const normalizedOld = oldScrollspyCode.replace(/\r?\n/g, '\n');
  const normalizedApp = appJs.replace(/\r?\n/g, '\n');
  if (normalizedApp.includes(normalizedOld)) {
    const updated = normalizedApp.replace(normalizedOld, newScrollspyCode.replace(/\r?\n/g, '\n'));
    fs.writeFileSync(appJsPath, updated, 'utf8');
    console.log('Updated prototype/carepoint-app.js with normalized line endings.');
  } else {
    console.error('Could not find oldScrollspyCode in carepoint-app.js');
  }
}
