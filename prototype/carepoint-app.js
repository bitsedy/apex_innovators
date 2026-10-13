import Alpine from 'alpinejs';

// Expose Alpine globally
window.Alpine = Alpine;

// Carepoint Global Reactive Store
Alpine.store('carepoint', {
  // Session & UI state
  activeTab: 'overview',
  searchQuery: '',
  isModalOpen: false,
  notificationCount: 3,
  currentTerm: 'Term 1, 2026/2027',
  activeWeek: 'Week 8',

  // Alert & Feedback helper
  showToast(message, isSuccess = true) {
    if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
      window.CarepointDemo.showToast(message, isSuccess);
    } else {
      console.log(`[Carepoint Toast] ${message}`);
    }
  }
});

// Interactive Components Definition for Alpine
document.addEventListener('alpine:init', () => {
  // Gate Kiosk Barcode / Guardian Scanner Simulator
  Alpine.data('gateScanner', () => ({
    status: 'idle',
    scannerActive: true,
    scannedCode: '',
    verifiedStudent: null,
    
    simulateScan(code = 'CP-STU-8829') {
      this.status = 'scanning';
      setTimeout(() => {
        this.status = 'verified';
        this.scannedCode = code;
        this.$store.carepoint.showToast('Guardian & Student custody match verified! Gate turnstile unlocked.', true);
      }, 700);
    },
    
    resetScanner() {
      this.status = 'idle';
      this.scannedCode = '';
      this.verifiedStudent = null;
    }
  }));

  // Parent OTP & Pickup Pass Component
  Alpine.data('pickupPass', () => ({
    qrActive: true,
    passCountdown: 45,
    timerInterval: null,
    
    init() {
      this.timerInterval = setInterval(() => {
        if (this.passCountdown > 0) {
          this.passCountdown--;
        } else {
          this.passCountdown = 45;
        }
      }, 1000);
    },
    
    destroy() {
      if (this.timerInterval) clearInterval(this.timerInterval);
    }
  }));

  // Staff Attendance Register Component
  Alpine.data('attendanceRegister', () => ({
    selectedStatus: {},
    allMarkedPresent: false,
    
    markAllPresent(studentIds) {
      studentIds.forEach(id => {
        this.selectedStatus[id] = 'present';
      });
      this.allMarkedPresent = true;
      this.$store.carepoint.showToast('All 24 students marked Present for morning session.', true);
    },
    
    setStatus(id, status) {
      this.selectedStatus[id] = status;
    }
  }));

  // Admin Approval Queue Component
  Alpine.data('approvalQueue', () => ({
    filter: 'all',
    items: [],
    
    approve(itemTitle) {
      this.$store.carepoint.showToast(`Approved: ${itemTitle}`, true);
    },
    
    reject(itemTitle) {
      this.$store.carepoint.showToast(`Flagged for review: ${itemTitle}`, false);
    }
  }));
});

// Initialize Alpine
Alpine.start();
console.log('[Carepoint] Alpine.js v' + Alpine.version + ' reactive engine initialized.');

// Public Landing Page Scrollspy & Animated Nav Indicator
export function initPublicNavbarScrollspy() {
  const nav = document.getElementById('desktop-nav');
  if (!nav) return;
  const bar = document.getElementById('nav-active-bar');
  const links = Array.from(nav.querySelectorAll('.nav-link, .dropdown-item'));
  if (!links.length) return;

  const sections = ['home', 'academics', 'admissions', 'news', 'gallery', 'about', 'contact'];
  let currentActive = 'home';
  let isClickScrolling = false;
  let clickTimeout = null;

  function updateIndicator(targetSection, animate = true) {
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
    });

    if (activeLink && bar) {
      if (!animate) {
        bar.style.transition = 'none';
      } else {
        bar.style.transition = 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease';
      }
      bar.style.left = activeLink.offsetLeft + 'px';
      bar.style.width = activeLink.offsetWidth + 'px';
      bar.style.opacity = '1';
      if (!animate) {
        bar.offsetHeight;
        bar.style.transition = 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease';
      }
    }

    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    if (mobileDrawer) {
      mobileDrawer.querySelectorAll('a[data-section]').forEach(mLink => {
        if (mLink.getAttribute('data-section') === targetSection) {
          mLink.classList.add('bg-surface-container-low', 'text-primary', 'font-bold');
          mLink.classList.remove('text-on-surface-variant');
        } else {
          mLink.classList.remove('bg-surface-container-low', 'text-primary', 'font-bold');
          mLink.classList.add('text-on-surface-variant');
        }
      });
    }
  }

  // Check if current page contains target landing sections (home, academics, etc.)
  const hasSections = sections.some(secId => document.getElementById(secId));
  if (!hasSections) {
    const pageActive = nav.querySelector('.nav-link[aria-current="page"]');
    const defaultSection = pageActive ? (pageActive.getAttribute('data-section') || 'home') : 'home';
    updateIndicator(defaultSection, false);
    window.addEventListener('load', () => updateIndicator(defaultSection, false));
    window.addEventListener('resize', () => updateIndicator(defaultSection, false));
    return;
  }

  // Smooth scroll click handler on nav links
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const section = link.getAttribute('data-section');
      if (!section) return;
      const targetEl = document.getElementById(section);
      if (targetEl) {
        e.preventDefault();
        isClickScrolling = true;
        if (clickTimeout) clearTimeout(clickTimeout);
        updateIndicator(section, true);
        targetEl.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, null, '#' + section);
        clickTimeout = setTimeout(() => {
          isClickScrolling = false;
        }, 900);
      }
    });
  });

  // Mobile drawer links
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  if (mobileDrawer) {
    mobileDrawer.querySelectorAll('a[data-section]').forEach(mLink => {
      mLink.addEventListener('click', (e) => {
        const section = mLink.getAttribute('data-section');
        const targetEl = document.getElementById(section);
        if (targetEl) {
          e.preventDefault();
          updateIndicator(section, true);
          targetEl.scrollIntoView({ behavior: 'smooth' });
          if (typeof window.closeMobileMenu === 'function') {
            window.closeMobileMenu();
          } else if (typeof window.toggleMobileMenu === 'function') {
            window.toggleMobileMenu();
          }
        }
      });
    });
  }

  // Scrollspy logic
  function onScroll() {
    if (isClickScrolling) return;

    if (window.scrollY < 180) {
      updateIndicator('home', true);
      return;
    }

    const scrollBottom = window.innerHeight + window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    if (scrollBottom >= docHeight - 80) {
      updateIndicator('contact', true);
      return;
    }

    const scrollPosition = window.scrollY + 160;
    let detected = 'home';

    for (let i = sections.length - 1; i >= 0; i--) {
      const secId = sections[i];
      const el = document.getElementById(secId);
      if (el) {
        const elTop = el.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition >= elTop) {
          detected = secId;
          break;
        }
      }
    }

    if (detected !== currentActive) {
      updateIndicator(detected, true);
    }
  }

  let scrollThrottle = null;
  window.addEventListener('scroll', () => {
    if (isClickScrolling) return;
    if (!scrollThrottle) {
      scrollThrottle = setTimeout(() => {
        scrollThrottle = null;
        onScroll();
      }, 30);
    }
  }, { passive: true });

  // Handle URL hash on initial load
  function initPosition() {
    const hash = window.location.hash.replace('#', '');
    if (hash && sections.includes(hash)) {
      updateIndicator(hash, false);
      const targetEl = document.getElementById(hash);
      if (targetEl) {
        setTimeout(() => targetEl.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      const pageActive = nav.querySelector('.nav-link[aria-current="page"]');
      if (pageActive) {
        updateIndicator(pageActive.getAttribute('data-section') || 'home', false);
      } else {
        updateIndicator('home', false);
      }
    }
  }

  initPosition();
  window.addEventListener('load', () => {
    const hash = window.location.hash.replace('#', '');
    const active = hash && sections.includes(hash) ? hash : currentActive;
    updateIndicator(active, false);
  });
  window.addEventListener('resize', () => updateIndicator(currentActive, false));
}

export function initPortalCompactCardRefinements() {
  if (typeof document === 'undefined') return;
  const currentPath = window.location.pathname.toLowerCase();
  const isPublic = (window.__CAREPOINT_HUD__ && window.__CAREPOINT_HUD__.role === 'public') ||
                   currentPath.includes('/public/');
  if (!isPublic) {
    document.body.classList.add('carepoint-portal');
    document.body.classList.add('carepoint-compact-ui');
  } else {
    document.body.classList.add('carepoint-public-site');
  }
}

export function initStaffPortalRefinements() {
  if (typeof document === 'undefined') return;
  const currentPath = window.location.pathname.toLowerCase();
  const isStaff = (window.__CAREPOINT_HUD__ && window.__CAREPOINT_HUD__.role === 'staff') ||
    currentPath.includes('/staff/') ||
    Boolean(document.querySelector('aside a[data-path^="staff-"], #staff-duty-badge, #staff-clockout-btn'));
  if (isStaff) {
    document.body.classList.add('carepoint-staff-portal');
  }
}

// =============================================================================
// DASHBOARD METRIC CARDS: QUANTITATIVE ANIMATION ON PAGE SCROLL
// =============================================================================

function animateQuantitativeNumber(el) {
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const rawText = el.getAttribute('data-metric-target') || el.textContent.trim();
  if (!rawText) return;

  const match = rawText.match(/^([^0-9.-]*)([0-9,.]+)(.*)$/);
  if (!match) return;

  const prefix = match[1] || '';
  const numStr = match[2].replace(/,/g, '');
  const suffix = match[3] || '';

  const targetNum = parseFloat(numStr);
  if (isNaN(targetNum)) return;

  const decimals = (numStr.split('.')[1] || '').length;
  const duration = 900;
  const startTime = performance.now();

  function updateFrame(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const currentVal = targetNum * ease;

    const formatted = currentVal.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });

    el.textContent = `${prefix}${formatted}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(updateFrame);
    } else {
      el.textContent = rawText;
    }
  }

  requestAnimationFrame(updateFrame);
}

export function initDashboardMetricsAnimation() {
  if (typeof document === 'undefined') return;

  const metricCards = document.querySelectorAll(
    '.carepoint-metric-card, [data-metric-card], .grid.grid-cols-1.sm\\:grid-cols-2.xl\\:grid-cols-4 > div, .grid.grid-cols-1.md\\:grid-cols-2.xl\\:grid-cols-4 > div, .grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 > div'
  );

  if (!metricCards.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -25px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        card.classList.add('carepoint-metric-visible');

        const numEl = card.querySelector(
          '.carepoint-metric-num, [data-metric-target], .font-headline-lg, .font-headline-xl'
        );

        if (numEl && !numEl.dataset.animated) {
          numEl.dataset.animated = 'true';
          animateQuantitativeNumber(numEl);
        }

        obs.unobserve(card);
      }
    });
  }, observerOptions);

  metricCards.forEach(card => {
    card.classList.add('carepoint-metric-card', 'carepoint-metric-animated');
    observer.observe(card);
  });
}

// Auto-run if DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initPortalCompactCardRefinements();
    initPublicNavbarScrollspy();
    initCarepointNotifications();
    initStaffDutySystem();
    initStaffClassSwitcher();
    initNavigationDrawer();
    initHeaderProfileImages();
    initStaffPortalRefinements();
    initDashboardMetricsAnimation();
    initCarepointCapabilitiesDiscovery();
    initCarepointSafeActionEngine();
    initCarepointSkeletonEngine();
  });
} else {
  initPortalCompactCardRefinements();
  initPublicNavbarScrollspy();
  initCarepointNotifications();
  initStaffDutySystem();
  initStaffClassSwitcher();
  initNavigationDrawer();
  initHeaderProfileImages();
  initStaffPortalRefinements();
  initDashboardMetricsAnimation();
  initCarepointCapabilitiesDiscovery();
  initCarepointSafeActionEngine();
  initCarepointSkeletonEngine();
}

// =============================================================================
// CAREPOINT GLOBAL PROFILE IMAGE & AVATAR ENGINE
// Ensures every top-right header avatar uses the exact official persona photo
// with resilient error fallbacks to branded initials.
// =============================================================================

export function initHeaderProfileImages() {
  if (typeof document === 'undefined') return;

  const currentPath = window.location.pathname.toLowerCase();
  let role = (window.__CAREPOINT_HUD__ && window.__CAREPOINT_HUD__.role) || '';
  if (!role) {
    if (currentPath.includes('sysadmin')) role = 'sysadmin';
    else if (currentPath.includes('admin')) role = 'admin';
    else if (currentPath.includes('staff')) role = 'staff';
    else if (currentPath.includes('parent')) role = 'parent';
    else if (currentPath.includes('gate')) role = 'gate';
    else role = 'public';
  }

  const relRoot = (window.__CAREPOINT_HUD__ && window.__CAREPOINT_HUD__.relRoot) || (window.location.pathname.split('/').filter(Boolean).length > 1 ? '../' : './');

  const PERSONA_PROFILES = {
    admin: {
      name: 'Dr. Elizabeth Appiah',
      initials: 'EA',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkWfNsavZrE2q7ehrA64sihUwtmROAw4xXN-C6BlUTPhqxnN--2RN5DRycS1Zzkyt6oCEfdTUfjODz6QYZEv08Q-JAkUc3Av7yS8ahvu_IycCMkJCxx5Dx9PYnuyuHQLKp_OkepCnkvleE-hqHca1ZtXA-REaPgIftK5gPRsomXA64FFaJZFdKmQGy-GEt_k2m5zV-0ASaXXLnRB3Au6F5xwS03ye8IFEGRzgETPCCJ1eKP6QrBZk3BQ'
    },
    staff: {
      name: 'Mrs. Beatrice Abbey',
      initials: 'BA',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo1EGS9Udv9jbRuc-r6_oXpPteu9hto5W-SkEkm2uTxYC_8t04Z0bkIPpHMyA7yGLHXLvsrFuQqok8JD7tVi6QkAq01hTH_2GU1O1U0WY1b_fqIXnvJvjsmyxu_6286Xsi9NMB9HAsZaxqurxk17R4oPRa4XNsolx6wRTOhJJIEBUI6m6AdHqZ8LPBO6IrFN8ItlRIZm_xSUzn8SkT-Hm1LpNpyB808pBwbwzAPFI0qzuy3owK2k3KoA'
    },
    parent: {
      name: 'Dr. Nana Mensah',
      initials: 'NM',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk7nHm7egIuiTau40KQEFHBKNDX3EptaSdTu9TBK2iwADoApEdjY9Kkt9Tjm_DoF2KYNTvFIWgNO5GlABZPWPHY658qTxcggA0vvpzxYpMpol0tKKMsBvv14t1fD96WIU0vH77Tjlup7Pbm-TJ2cyzQEIlGRhdG85eoLM-GTjxqblK4wxMDpCIWDtDAyb_zVdq8MuHW3anaXkB6adGWp9xlHqAM3FbRNIoqmH3e2xOnAIl_mjOPskfLg'
    },
    gate: {
      name: 'Officer Emmanuel Tetteh',
      initials: 'ET',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWyCxim_7skt8k31G0IotbuvMRM2YBPGoHvoZYsa25Oh7YjCKOaPB9NbEJlz7absl89QYzqeKxYnR448A6GuD58V-wOmg0TgMyyhDKQx0RuvqJw6XlU06RFl_YO6p1OAhJ8yWUqb6Xir1rbx9sdVdTXXX34sj3lncm3yNoCumK2AKJSnHf-teZ8hmWgZoInrNO2R9DoQfxqZAsqD5baLXIUfUmMaFmvVU0wSaAabCoCC1PDgEeMPJThA'
    },
    sysadmin: {
      name: 'Ing. Kwabena Boateng',
      initials: 'KB',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDficibdtzh0xCg-RYeNu3YjQOB2wMrnGhDiTxfeEkMCvfdTGILXcQePEO7gWXcB0Go5WFlo_hEWJ02SQiIcocAII6hOv3v1Vsp7KFfSldX32a6rzPOlL4ReSyMBYgRP4crioNrulufNiTAaSTQ4t8TQjfTn2QMKIucNdX2AAUv4Tqdihfy2Ta3gZpSWIFxOD5ap0xX9esm5pfkFeCaRACUrCY2TlfFs2xIlboc8vEYjBoZW3eIjBokfQ'
    },
    public: {
      name: 'Carepoint Community School',
      initials: 'CP',
      src: `${relRoot}assets/carepoint-crest.png`
    }
  };

  const persona = PERSONA_PROFILES[role] || PERSONA_PROFILES.public;

  document.querySelectorAll('header img, .carepoint-profile-img').forEach(img => {
    if (img.classList.contains('rounded-full') && (img.alt === 'Profile' || img.alt.includes(persona.name) || !img.alt)) {
      if (!img.src || img.src.includes('/aida/')) {
        img.src = persona.src;
        img.alt = persona.name;
      }
      img.onerror = () => {
        img.style.display = 'none';
        const fallback = document.createElement('div');
        fallback.className = 'w-8 h-8 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center shadow-sm ring-1 ring-white/20 select-none';
        fallback.textContent = persona.initials;
        img.parentNode.insertBefore(fallback, img);
      };
    }
  });
}

// =============================================================================
// CAREPOINT RESPONSIVE NAVIGATION DRAWER & MOBILE LAYOUT CONTROLLER
// Transforms the static left tab section into a modern off-canvas drawer
// with '>' to open and 'x' to close. Resolves all mobile layout disruptions.
// =============================================================================

function createDynamicPortalDrawer(role, isMobile) {
  const aside = document.createElement('aside');
  aside.className = 'carepoint-drawer fixed left-0 top-0 bottom-0 h-screen max-h-screen w-72 bg-surface-container-lowest z-50 flex flex-col justify-between overflow-y-auto border-r border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]';

  const prefix = isMobile ? 'mobile-' : '';
  const rel = (window.__CAREPOINT_HUD__ && window.__CAREPOINT_HUD__.relRoot) || '';

  const ROLE_CONFIGS = {
    admin: {
      title: 'Carepoint',
      sub: 'Community School',
      motto: 'MIND • HEART • HANDS',
      badge: 'EXECUTIVE ADMIN & PRINCIPAL',
      badgeColor: 'bg-secondary',
      sessionText: 'Session 2026/27 Term 1',
      sessionWeek: 'Wk 8',
      sectionTitle: 'Executive Suite',
      links: [
        { label: 'Dashboard', icon: 'dashboard', href: `${rel}admin/${prefix}dashboard.html` },
        { label: 'Executive Inbox', icon: 'move_to_inbox', href: `${rel}admin/${prefix}inbox.html`, badge: '5' },
        { label: 'Statutory Decisions', icon: 'gavel', href: `${rel}admin/${prefix}decision.html`, badge: '2' },
        { label: 'Approvals Queue', icon: 'fact_check', href: `${rel}admin/${prefix}approvals.html`, badge: '12' },
        { label: 'School Fees & Bursary', icon: 'payments', href: `${rel}admin/${prefix}dashboard.html#school-fees-section`, badge: '84.6%' },
        { label: 'Admissions Review', icon: 'how_to_reg', href: `${rel}admin/${prefix}admissions.html`, badge: '28' },
        { label: 'Student Records', icon: 'badge', href: `${rel}admin/${prefix}wards.html` },
        { label: 'User Directory', icon: 'manage_accounts', href: `${rel}admin/${prefix}users.html` },
        { label: 'Reports & Analytics', icon: 'analytics', href: `${rel}admin/${prefix}reports.html` },
        { label: 'School Settings', icon: 'tune', href: `${rel}admin/${prefix}settings.html` }
      ]
    },
    staff: {
      title: 'Carepoint',
      sub: 'Community School',
      motto: 'MIND • HEART • HANDS',
      badge: 'STAFF OPERATIONAL PORTAL',
      badgeColor: 'bg-secondary',
      sessionText: 'Session 2026/27 Term 1',
      sessionWeek: 'Wk 8',
      sectionTitle: 'Academic Operations',
      links: [
        { label: 'Dashboard', icon: 'grid_view', href: `${rel}staff/${prefix}dashboard.html` },
        { label: 'Attendance', icon: 'fact_check', href: `${rel}staff/${prefix}attendance.html` },
        { label: 'Gradebook', icon: 'menu_book', href: `${rel}staff/${prefix}gradebook.html` },
        { label: 'Health & Welfare', icon: 'medical_services', href: `${rel}staff/${prefix}health.html` },
        { label: 'Approvals Engine', icon: 'verified', href: `${rel}staff/${prefix}approvals.html`, badge: '3' },
        { label: 'Messages', icon: 'chat_bubble', href: `${rel}staff/${prefix}messages.html` },
        { label: 'Timetable', icon: 'calendar_month', href: `${rel}staff/${prefix}timetable.html` }
      ]
    },
    parent: {
      title: 'Carepoint',
      sub: 'Community School',
      motto: 'MIND • HEART • HANDS',
      badge: 'PARENT & GUARDIAN PORTAL',
      badgeColor: 'bg-secondary',
      sessionText: 'Session 2026/27 Term 1',
      sessionWeek: 'Wk 8',
      sectionTitle: 'Parent Navigation',
      links: [
        { label: 'Dashboard', icon: 'dashboard', href: `${rel}parent/${prefix}dashboard.html` },
        { label: 'Child Profile', icon: 'badge', href: `${rel}parent/${prefix}dashboard.html#ward` },
        { label: 'Performance & Reports', icon: 'insights', href: `${rel}parent/${prefix}academics.html` },
        { label: 'Attendance & Welfare', icon: 'health_and_safety', href: `${rel}parent/${prefix}messages.html#welfare` },
        { label: 'Pickup Security Pass', icon: 'qr_code_scanner', href: `${rel}parent/${prefix}pickup.html` },
        { label: 'Teacher Messages', icon: 'forum', href: `${rel}parent/${prefix}messages.html#messages`, badge: '2' }
      ]
    },
    gate: {
      title: 'Carepoint',
      sub: 'Community School',
      motto: 'MIND • HEART • HANDS',
      badge: 'CAMPUS SECURITY & GATEWAY',
      badgeColor: 'bg-secondary',
      sessionText: 'Session 2026/27 Term 1',
      sessionWeek: 'Live',
      sectionTitle: 'Security Station',
      links: [
        { label: 'Scanner Viewport', icon: 'qr_code_scanner', href: `${rel}gate/${prefix}scan.html` },
        { label: 'Verification Station', icon: 'verified_user', href: `${rel}gate/${prefix}verify.html` },
        { label: 'Pickup Log', icon: 'receipt_long', href: `${rel}gate/${prefix}log.html` },
        { label: 'Security Alerts', icon: 'emergency', href: `${rel}gate/${prefix}alert.html` }
      ]
    },
    sysadmin: {
      title: 'Carepoint',
      sub: 'SysOps Core',
      motto: 'MIND • HEART • HANDS',
      badge: 'SYSTEMS & IT OPERATIONS',
      badgeColor: 'bg-secondary',
      sessionText: 'Session 2026/27 Term 1',
      sessionWeek: 'Pod-A',
      sectionTitle: 'Infrastructure Operations',
      links: [
        { label: 'Dashboard', icon: 'grid_view', href: `${rel}sysadmin/${prefix}dashboard.html` },
        { label: 'User Provisioning', icon: 'badge', href: `${rel}sysadmin/${prefix}provisioning.html` },
        { label: 'Feature Flags', icon: 'toggle_on', href: `${rel}sysadmin/${prefix}features.html` },
        { label: 'Change Requests', icon: 'published_with_changes', href: `${rel}sysadmin/${prefix}changes.html` },
        { label: 'Integrations', icon: 'hub', href: `${rel}sysadmin/${prefix}integrations.html` },
        { label: 'Audit Logs', icon: 'receipt_long', href: `${rel}sysadmin/${prefix}audit.html` }
      ]
    }
  };

  const cfg = ROLE_CONFIGS[role] || ROLE_CONFIGS.admin;
  const currentFileName = (window.location.pathname.split('/').pop() || 'dashboard.html').toLowerCase();
  const currentHash = (window.location.hash || '').toLowerCase();

  const savedChild = (typeof localStorage !== 'undefined' && localStorage.getItem('carepoint_active_ward')) || 'kofi';
  const isAma = savedChild === 'ama';
  const wardName = isAma ? 'Ama Mensah' : 'Kofi Mensah';
  const wardClass = isAma ? 'Nursery 1 • Buttercup' : 'Basic 2 • Sunflower Class';
  const wardInitials = isAma ? 'AM' : 'KM';

  const bottomCardHtml = role === 'parent' ? `
    <div class="shrink-0 p-3 mx-3 mb-3 rounded-xl bg-surface-container-low flex flex-col gap-1.5 border border-surface-container-high/80 shadow-2xs">
      <div class="flex items-center justify-between">
        <span class="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider font-bold">Active Ward</span>
        <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>Enrolled
        </span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-xs shrink-0" id="parent-drawer-ward-avatar">
          ${wardInitials}
        </div>
        <div class="min-w-0 flex-1">
          <div class="font-headline-sm text-sm text-primary font-bold leading-tight truncate" id="parent-drawer-ward-name">${wardName}</div>
          <div class="font-body-sm text-[11px] text-on-surface-variant truncate" id="parent-drawer-ward-class">${wardClass}</div>
        </div>
      </div>
      <div class="pt-1 border-t border-outline-variant/20 flex items-center justify-between text-[11px] text-on-surface-variant">
        <span>Term 1 Week 8</span>
        <span class="text-secondary font-bold">Good Standing</span>
      </div>
    </div>
  ` : role === 'gate' ? `
    <div class="shrink-0 p-3 mx-3 mb-3 rounded-xl bg-surface-container-low flex flex-col gap-1 border border-surface-container-high/80 shadow-2xs">
      <div class="flex items-center justify-between">
        <span class="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider font-bold">Turnstile A</span>
        <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>Online
        </span>
      </div>
      <div class="font-headline-sm text-sm text-primary font-bold leading-tight">Accra Main Gate</div>
      <div class="font-body-sm text-[11px] text-on-surface-variant">Level 3 Safety Shield</div>
    </div>
  ` : `
    <div class="p-4 bg-surface-container-lowest border-t border-outline-variant/20">
      <div class="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
          <span class="text-xs font-semibold text-on-surface">Carepoint 2026/27</span>
        </div>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-surface-container text-primary uppercase">Active</span>
      </div>
    </div>
  `;

  aside.innerHTML = `
    <div class="flex flex-col min-h-0 flex-1">
      <!-- Top Header with Crest, Title, Motto, Badge, and Close Button -->
      <div class="shrink-0 p-4 border-b border-surface-container-high/70 flex flex-col gap-2 relative bg-surface-container-lowest">
        <div class="flex items-center justify-between gap-2 carepoint-brand-row">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-xs border border-outline-variant/30 p-0.5 shrink-0 overflow-hidden">
              <img src="${rel}assets/carepoint-crest.png" alt="Carepoint Community School" class="w-full h-full object-contain rounded-lg"/>
            </div>
            <div class="min-w-0">
              <div class="font-headline-sm text-base text-primary font-bold leading-tight tracking-tight truncate">${cfg.title}</div>
              <div class="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold truncate">${cfg.sub}</div>
            </div>
          </div>
          <button class="carepoint-drawer-close-btn" type="button" aria-label="Collapse Navigation Sidebar" title="Collapse Navigation Drawer">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <div class="flex items-center justify-between pt-0.5">
          <span class="font-label-sm text-[10px] tracking-widest text-secondary font-bold">${cfg.motto}</span>
        </div>
        <div class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-high rounded-full w-fit">
          <span class="w-1.5 h-1.5 rounded-full ${cfg.badgeColor}"></span>
          <span class="font-label-sm text-[10px] text-on-surface-variant font-bold tracking-wider uppercase">${cfg.badge}</span>
        </div>
      </div>

      <!-- Academic Session Status Strip -->
      <div class="px-space-md py-space-sm">
        <div class="px-space-md py-space-xs bg-surface-container-low rounded-lg flex items-center justify-between">
          <div class="flex items-center gap-space-xs">
            <span class="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
            <span class="font-label-sm text-label-sm text-on-surface font-medium">${cfg.sessionText}</span>
          </div>
          <span class="font-label-sm text-label-sm px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface-variant font-bold">${cfg.sessionWeek}</span>
        </div>
      </div>

      <!-- Category Label -->
      <div class="px-space-md pt-2 pb-1">
        <span class="font-label-sm text-[10px] uppercase tracking-wider text-outline px-space-sm font-bold">${cfg.sectionTitle}</span>
      </div>

      <!-- Navigation Links -->
      <nav class="flex flex-col gap-1 px-space-md overflow-y-auto flex-1 min-h-0">
        ${cfg.links.map(lnk => {
          const rawTarget = lnk.href.split('/').pop() || '';
          const [targetFile, targetHash] = rawTarget.split('#');
          
          let isAct = false;
          if (targetHash) {
            isAct = currentFileName === targetFile && currentHash === `#${targetHash}`;
          } else {
            isAct = currentFileName === targetFile && (!currentHash || currentHash === '#');
          }

          if (!isAct && (currentFileName === '' || currentFileName === 'parent') && targetFile.includes('dashboard.html')) {
            isAct = true;
          }

          return `
            <a href="${lnk.href}" class="flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all ${isAct ? 'bg-primary-container text-on-primary font-bold shadow-sm' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium'}">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-[20px]">${lnk.icon}</span>
                <span class="text-sm">${lnk.label}</span>
              </div>
              ${lnk.badge ? `<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-secondary-container text-on-secondary">${lnk.badge}</span>` : ''}
            </a>
          `;
        }).join('')}
      </nav>
    </div>

    <!-- Pinned Bottom Card -->
    ${bottomCardHtml}
  `;

  return aside;
}

export function initNavigationDrawer() {
  if (typeof document === 'undefined') return;

  const currentPath = window.location.pathname.toLowerCase();

  // Get active role from HUD metadata or URL path
  let activeRole = (window.__CAREPOINT_HUD__ && window.__CAREPOINT_HUD__.role) || '';
  if (!activeRole) {
    if (currentPath.includes('/admin/')) activeRole = 'admin';
    else if (currentPath.includes('/staff/')) activeRole = 'staff';
    else if (currentPath.includes('/parent/')) activeRole = 'parent';
    else if (currentPath.includes('/gate/')) activeRole = 'gate';
    else if (currentPath.includes('/sysadmin/')) activeRole = 'sysadmin';
    else if (currentPath.includes('/public/')) activeRole = 'public';
  }

  // EXCLUSION: Collapsing drawer applies to every user portal page.
  // ONLY on the public site and standalone login screens should it NOT apply.
  const isPublicOrLogin = activeRole === 'public' ||
    currentPath.includes('/public/') ||
    currentPath.endsWith('/index.html') ||
    currentPath === '/' ||
    currentPath.endsWith('/prototype/') ||
    currentPath.includes('login');

  if (isPublicOrLogin) {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    // Remove any leftover drawer controls if present
    const existingOpenBtn = document.getElementById('carepoint-drawer-open-btn');
    if (existingOpenBtn) existingOpenBtn.remove();
    const existingBackdrop = document.getElementById('carepoint-drawer-backdrop');
    if (existingBackdrop) existingBackdrop.remove();
    return;
  }

  // Look specifically for the portal sidebar navigation drawer (direct child of body or fixed left-0),
  // NEVER an internal content aside inside <main> (such as chat thread lists or form cards)
  let aside = document.querySelector('body > aside, aside.fixed.left-0.top-0, aside.carepoint-drawer');
  if (aside && (aside.closest('main, #view-conversations, form') || !aside.classList.contains('fixed'))) {
    aside = null;
  }

  const isMobileLayoutPage = (window.__CAREPOINT_HUD__ && window.__CAREPOINT_HUD__.isMobile) || currentPath.includes('mobile-');

  // If no <aside> exists on this user portal page, dynamically build one
  if (!aside && activeRole && activeRole !== 'public') {
    aside = createDynamicPortalDrawer(activeRole, isMobileLayoutPage);
    document.body.prepend(aside);
  }

  if (!aside) return;

  // Mark aside with carepoint-drawer class
  aside.classList.add('carepoint-drawer');

  // Determine whether this page features a desktop docked layout (pl-72 / left-72)
  const hasDockedLayout = !isMobileLayoutPage && (
    Boolean(document.querySelector('.pl-72, [class*="pl-72"], header.left-72, header[class*="left-72"]')) ||
    activeRole === 'parent' ||
    activeRole === 'staff' ||
    activeRole === 'admin' ||
    activeRole === 'sysadmin' ||
    activeRole === 'gate'
  );
  if (!hasDockedLayout || isMobileLayoutPage) {
    document.body.classList.add('carepoint-has-overlay-drawer');
  } else {
    document.body.classList.remove('carepoint-has-overlay-drawer');
  }

  // 1. Ensure Backdrop exists
  let backdrop = document.getElementById('carepoint-drawer-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'carepoint-drawer-backdrop';
    backdrop.className = 'carepoint-drawer-backdrop';
    document.body.appendChild(backdrop);
  }

  // 2. Remove any obsolete floating open tab button (3-bars hamburger is the single canonical controller)
  const existingOpenBtnNode = document.getElementById('carepoint-drawer-open-btn');
  if (existingOpenBtnNode) existingOpenBtnNode.remove();

  // 3. Ensure 'x' Close Button exists inside the drawer header
  let closeBtn = aside.querySelector('.carepoint-drawer-close-btn');
  if (!closeBtn) {
    closeBtn = document.createElement('button');
    closeBtn.className = 'carepoint-drawer-close-btn';
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', 'Close Navigation Tabs Drawer');
    closeBtn.setAttribute('title', 'Collapse Navigation Drawer');
    closeBtn.innerHTML = `<span class="material-symbols-outlined text-[18px]">close</span>`;

    // Place the close button properly in the drawer's top header row
    const brandRow = aside.querySelector('.carepoint-brand-row, .h-20, .h-16, header > div, .p-space-lg > div:first-child');
    if (brandRow) {
      brandRow.classList.add('flex', 'items-center', 'justify-between');
      brandRow.appendChild(closeBtn);
    } else {
      const topSection = aside.querySelector('.p-space-lg, .p-4, header') || aside.firstElementChild;
      if (topSection) {
        topSection.style.position = 'relative';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '14px';
        closeBtn.style.right = '14px';
        topSection.appendChild(closeBtn);
      } else {
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '14px';
        closeBtn.style.right = '14px';
        aside.prepend(closeBtn);
      }
    }
  }

  // State Management
  const wasCollapsed = sessionStorage.getItem('carepoint_drawer_collapsed') === 'true';
  let isDrawerOpen = false;

  function openDrawer() {
    isDrawerOpen = true;
    aside.classList.add('carepoint-drawer-open');
    document.body.classList.remove('carepoint-drawer-collapsed');
    sessionStorage.setItem('carepoint_drawer_collapsed', 'false');
    document.querySelectorAll('[data-drawer-toggle], .portal-drawer-toggle').forEach(btn => {
      btn.setAttribute('aria-expanded', 'true');
    });

    const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;
    if (isOverlayMode) {
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function closeDrawer() {
    isDrawerOpen = false;
    aside.classList.remove('carepoint-drawer-open');
    document.body.classList.add('carepoint-drawer-collapsed');
    sessionStorage.setItem('carepoint_drawer_collapsed', 'true');
    document.querySelectorAll('[data-drawer-toggle], .portal-drawer-toggle').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  function toggleDrawer() {
    if (isDrawerOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  }

  // Wire Click Handlers cleanly with multiple fallbacks
  
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeDrawer();
  });
  closeBtn.onclick = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    closeDrawer();
  };

  backdrop.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeDrawer();
  });
  backdrop.onclick = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    closeDrawer();
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isDrawerOpen) {
      closeDrawer();
    }
  });

  // Clicking outside drawer in overlay mode closes it
  document.addEventListener('click', (e) => {
    if (isDrawerOpen) {
      const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;
      if (isOverlayMode && !aside.contains(e.target) && !e.target.closest('[data-drawer-toggle], .portal-drawer-toggle, #portal-drawer-toggle')) {
        closeDrawer();
      }
    }
  });

  // Close drawer on navigation link click on mobile/overlay and handle in-page hash links
  aside.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href') || '';
      if (href.includes('#')) {
        const [targetPath, hash] = href.split('#');
        const currentFile = (window.location.pathname.split('/').pop() || 'dashboard.html').toLowerCase();
        const targetFile = (targetPath.split('/').pop() || '').toLowerCase();

        if (!targetFile || targetFile === currentFile) {
          e.preventDefault();
          const targetEl = document.getElementById(hash);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          } else if (hash === 'welfare' && typeof window.switchMainTab === 'function') {
            window.switchMainTab('welfare');
          } else if ((hash === 'messages' || hash === 'conversations') && typeof window.switchMainTab === 'function') {
            window.switchMainTab('conversations');
          }
          if (window.history && window.history.pushState) {
            window.history.pushState(null, '', '#' + hash);
          } else {
            window.location.hash = hash;
          }
          const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;
          if (isOverlayMode) closeDrawer();
          return;
        }
      }

      const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;
      if (isOverlayMode) {
        closeDrawer();
      }
    });
  });

  // Ward display synchronization for parent portal
  function syncWardDisplay(child) {
    const isKofi = child === 'kofi';
    document.querySelectorAll('#parent-drawer-ward-name').forEach(el => el.textContent = isKofi ? 'Kofi Mensah' : 'Ama Mensah');
    document.querySelectorAll('#parent-drawer-ward-class').forEach(el => el.textContent = isKofi ? 'Basic 2 • Sunflower Class' : 'Nursery 1 • Buttercup');
    document.querySelectorAll('#parent-drawer-ward-avatar').forEach(el => el.textContent = isKofi ? 'KM' : 'AM');
    const nameEl = aside.querySelector('#parent-drawer-ward-name');
    const classEl = aside.querySelector('#parent-drawer-ward-class');
    const avatarEl = aside.querySelector('#parent-drawer-ward-avatar');
    if (nameEl) nameEl.textContent = isKofi ? 'Kofi Mensah' : 'Ama Mensah';
    if (classEl) classEl.textContent = isKofi ? 'Basic 2 • Sunflower Class' : 'Nursery 1 • Buttercup';
    if (avatarEl) avatarEl.textContent = isKofi ? 'KM' : 'AM';
  }

  const initialWard = (typeof localStorage !== 'undefined' && localStorage.getItem('carepoint_active_ward')) || 'kofi';
  syncWardDisplay(initialWard);

  // Wire any element with data-drawer-toggle or .carepoint-drawer-toggle
  document.querySelectorAll('[data-drawer-toggle], .portal-drawer-toggle, #portal-drawer-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleDrawer();
    });
  });

  // Initial Responsive State Sync
  function syncResponsiveState() {
    const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;

    if (isOverlayMode) {
      // Mobile / Overlay mode: Drawer starts collapsed off-canvas so layout is clean and pristine
      closeDrawer();
    } else {
      // Desktop docked mode:
      backdrop.classList.remove('active');
      document.body.style.overflow = '';

      // On dashboard pages, side navbar is minimized and closed by default for maximum visual space
      const isDashboardPage = currentPath.includes('dashboard') || currentPath.endsWith('/') || currentPath.endsWith('/prototype');

      if (isDashboardPage || wasCollapsed) {
        closeDrawer();
      } else {
        openDrawer();
      }
    }
  }

  window.addEventListener('resize', () => {
    const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;

    if (!isOverlayMode) {
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
      if (document.body.classList.contains('carepoint-drawer-collapsed')) {
      } else {
      }
    } else {
      if (!isDrawerOpen) {
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  syncResponsiveState();

  // Expose globally
  window.CarepointDrawer = {
    open: openDrawer,
    close: closeDrawer,
    toggle: toggleDrawer,
    isOpen: () => isDrawerOpen,
    syncWard: syncWardDisplay
  };

  console.log('[Carepoint] Navigation Drawer Engine initialized with > and x controls.');
}

// =============================================================================
// CAREPOINT GLOBAL NOTIFICATION SYSTEM
// Fully responsive, role-aware notification center for Admin, Staff, Parent, Gate, Sysadmin
// =============================================================================

export function initCarepointNotifications() {
  if (typeof document === 'undefined') return;

  function getActiveRole() {
    if (window.__CAREPOINT_HUD__ && window.__CAREPOINT_HUD__.role) {
      return window.__CAREPOINT_HUD__.role;
    }
    const path = window.location.pathname.toLowerCase();
    if (path.includes('/admin/')) return 'admin';
    if (path.includes('/staff/')) return 'staff';
    if (path.includes('/parent/')) return 'parent';
    if (path.includes('/gate/')) return 'gate';
    if (path.includes('/sysadmin/')) return 'sysadmin';
    return 'public';
  }

  function getRelRoot() {
    if (window.__CAREPOINT_HUD__ && window.__CAREPOINT_HUD__.relRoot) {
      return window.__CAREPOINT_HUD__.relRoot;
    }
    const parts = window.location.pathname.split('/').filter(Boolean);
    return parts.length > 1 ? '../' : './';
  }

  const role = getActiveRole();
  const relRoot = getRelRoot();
  const isMobile = window.__CAREPOINT_HUD__?.isMobile || window.innerWidth < 768;
  const pfx = isMobile ? 'mobile-' : '';

  const roleTitles = {
    admin: 'Admin & Principal Console',
    staff: 'Staff & Teacher Portal',
    parent: 'Parent & Guardian Portal',
    gate: 'Gate Security & Kiosk',
    sysadmin: 'Super Admin Console',
    public: 'Carepoint Community School'
  };

  const initialNotifications = {
    admin: [
      {
        id: 'adm-1',
        title: '🚨 Emergency Lockdown Drill Verified',
        message: 'All 4 perimeter gates secured in 84 seconds. Officer Tetteh logged Turnstile A & B status as intact.',
        time: '5m ago',
        category: 'urgent',
        unread: true,
        icon: 'lock_clock',
        iconBg: 'bg-red-100 text-secondary',
        actionUrl: `${relRoot}admin/${pfx}approvals.html#security`,
        actionText: 'View Incident Log'
      },
      {
        id: 'adm-2',
        title: 'Basic 2 Sunflower Scores Uploaded',
        message: 'Mrs. Beatrice Abbey submitted Term 1 Continuous Assessment grade sheets for 28 students pending executive endorsement.',
        time: '18m ago',
        category: 'academic',
        unread: true,
        icon: 'grade',
        iconBg: 'bg-primary/10 text-primary',
        actionUrl: `${relRoot}admin/${pfx}approvals.html`,
        actionText: 'Review & Sign'
      },
      {
        id: 'adm-3',
        title: 'New Creche Tier Application',
        message: 'Application #CP-2026-094 submitted for Nana Ama Serwaa with immunization records and birth certificate attached.',
        time: '45m ago',
        category: 'admissions',
        unread: true,
        icon: 'assignment_turned_in',
        iconBg: 'bg-emerald-100 text-emerald-800',
        actionUrl: `${relRoot}admin/${pfx}admissions.html`,
        actionText: 'Process Intake'
      },
      {
        id: 'adm-4',
        title: 'MoMo Bulk Fee Settlement Verified',
        message: 'Ecobank Merchant Gateway reconciled GH₵ 18,450.00 in mobile money fee disbursements today.',
        time: '2h ago',
        category: 'finance',
        unread: false,
        icon: 'payments',
        iconBg: 'bg-amber-100 text-amber-800',
        actionUrl: `${relRoot}admin/${pfx}reports.html`,
        actionText: 'View Financials'
      },
      {
        id: 'adm-5',
        title: 'Sickbay Consultation Logged',
        message: 'Kwame Osei (Basic 4) received oral rehydration therapy from School Nurse. Parent contacted and acknowledged.',
        time: '3h ago',
        category: 'welfare',
        unread: false,
        icon: 'medical_services',
        iconBg: 'bg-teal-100 text-teal-800',
        actionUrl: `${relRoot}admin/${pfx}inbox.html`,
        actionText: 'View Welfare Inbox'
      }
    ],
    staff: [
      {
        id: 'stf-1',
        title: 'Week 9 Lesson Plan Endorsed',
        message: 'Principal Dr. Elizabeth Appiah endorsed your Basic 2 Integrated Science & Mathematics syllabus.',
        time: '12m ago',
        category: 'academic',
        unread: true,
        icon: 'verified',
        iconBg: 'bg-primary/10 text-primary',
        actionUrl: `${relRoot}staff/${pfx}approvals.html`,
        actionText: 'View Approval'
      },
      {
        id: 'stf-2',
        title: 'Direct Message from Mrs. Mensah',
        message: 'Inquiry regarding Kofi\'s physical education kit requirements for Thursday\'s relay sports trials.',
        time: '25m ago',
        category: 'urgent',
        unread: true,
        icon: 'chat',
        iconBg: 'bg-red-100 text-secondary',
        actionUrl: `${relRoot}staff/${pfx}messages.html`,
        actionText: 'Reply to Parent'
      },
      {
        id: 'stf-3',
        title: 'Morning Assembly Conductor Duty',
        message: 'You are designated assembly conductor for Wednesday 07:30 AM at the Forecourt assembly ground.',
        time: '1h ago',
        category: 'duty',
        unread: true,
        icon: 'event_note',
        iconBg: 'bg-amber-100 text-amber-800',
        actionUrl: `${relRoot}staff/${pfx}timetable.html`,
        actionText: 'View Timetable'
      },
      {
        id: 'stf-4',
        title: 'Term 1 Assessment Sheets Due',
        message: '4 continuous assessment score sheets for Basic 2 Sunflower are due for final submission on Friday.',
        time: '3h ago',
        category: 'academic',
        unread: false,
        icon: 'menu_book',
        iconBg: 'bg-blue-100 text-blue-800',
        actionUrl: `${relRoot}staff/${pfx}gradebook.html`,
        actionText: 'Open Gradebook'
      }
    ],
    parent: [
      {
        id: 'par-1',
        title: 'Kofi Mensah Safe Arrival at Gate 1',
        message: 'Student turnstile scan verified by Officer Emmanuel Tetteh at 07:44 AM GMT.',
        time: 'Just now',
        category: 'urgent',
        unread: true,
        icon: 'verified_user',
        iconBg: 'bg-emerald-100 text-emerald-800',
        actionUrl: `${relRoot}parent/${pfx}pickup.html`,
        actionText: 'Check Gate Pass'
      },
      {
        id: 'par-2',
        title: 'Term 1 Assessment Report Available',
        message: 'Mrs. Beatrice Abbey has finalized Kofi\'s Continuous Assessment scores for Basic 2 Sunflower.',
        time: '1h ago',
        category: 'academic',
        unread: true,
        icon: 'school',
        iconBg: 'bg-primary/10 text-primary',
        actionUrl: `${relRoot}parent/${pfx}academics.html`,
        actionText: 'View Terminal Report'
      },
      {
        id: 'par-3',
        title: 'Tuition Payment Receipt: GH₵ 1,200.00',
        message: 'Official Carepoint receipt generated for Term 1 tuition payment via MTN Mobile Money.',
        time: 'Yesterday',
        category: 'finance',
        unread: true,
        icon: 'receipt_long',
        iconBg: 'bg-teal-100 text-teal-800',
        actionUrl: `${relRoot}parent/${pfx}dashboard.html#fees`,
        actionText: 'Download Receipt'
      },
      {
        id: 'par-4',
        title: 'Carepoint PTA General Assembly',
        message: 'Saturday at 10:00 AM in the Main Auditorium. Agenda: 2026/2027 STEM & Robotics Lab development.',
        time: '2d ago',
        category: 'general',
        unread: false,
        icon: 'groups',
        iconBg: 'bg-indigo-100 text-indigo-800',
        actionUrl: `${relRoot}parent/${pfx}messages.html`,
        actionText: 'View Notice'
      }
    ],
    gate: [
      {
        id: 'gat-1',
        title: 'Authorized Pickup Pass: Kofi Mensah',
        message: 'Dr. Nana Mensah generated single-use OTP Pass #CP-PASS-4402 for designated driver Samuel Kwaku.',
        time: '1m ago',
        category: 'urgent',
        unread: true,
        icon: 'qr_code_scanner',
        iconBg: 'bg-emerald-100 text-emerald-800',
        actionUrl: `${relRoot}gate/${pfx}scan.html`,
        actionText: 'Scan QR Pass'
      },
      {
        id: 'gat-2',
        title: 'Bus Route 3 Entered Gate 2',
        message: 'Spintex-Batsonaa route bus arrived on campus with 14 students. All headcounts verified.',
        time: '15m ago',
        category: 'fleet',
        unread: true,
        icon: 'directions_bus',
        iconBg: 'bg-primary/10 text-primary',
        actionUrl: `${relRoot}gate/${pfx}log.html`,
        actionText: 'View Fleet Log'
      },
      {
        id: 'gat-3',
        title: 'Perimeter Security Status: Normal',
        message: 'All turnstiles, gate barriers, and CCTV feeds operating normally under Level 3 NaSIA protocol.',
        time: '1h ago',
        category: 'general',
        unread: false,
        icon: 'shield',
        iconBg: 'bg-blue-100 text-blue-800',
        actionUrl: `${relRoot}gate/${pfx}alert.html`,
        actionText: 'Security Console'
      }
    ],
    sysadmin: [
      {
        id: 'sys-1',
        title: 'Automated PostgreSQL Backup Complete',
        message: 'Production database backup snapshot (420 MB) verified and encrypted with AES-256 replication.',
        time: '10m ago',
        category: 'system',
        unread: true,
        icon: 'database',
        iconBg: 'bg-primary/10 text-primary',
        actionUrl: `${relRoot}sysadmin/${pfx}audit.html`,
        actionText: 'View Audit Logs'
      },
      {
        id: 'sys-2',
        title: 'SMS Gateway Top-Up Confirmed',
        message: '25,000 automated parent attendance and fees notification units loaded successfully.',
        time: '35m ago',
        category: 'integration',
        unread: true,
        icon: 'sms',
        iconBg: 'bg-amber-100 text-amber-800',
        actionUrl: `${relRoot}sysadmin/${pfx}integrations.html`,
        actionText: 'Gateway Status'
      },
      {
        id: 'sys-3',
        title: 'Role Permission Modified',
        message: 'Principal Dr. Elizabeth Appiah temporarily elevated Bursar account privileges for external audit.',
        time: '2h ago',
        category: 'urgent',
        unread: true,
        icon: 'security',
        iconBg: 'bg-red-100 text-secondary',
        actionUrl: `${relRoot}sysadmin/${pfx}changes.html`,
        actionText: 'View Change Record'
      }
    ],
    public: [
      {
        id: 'pub-1',
        title: '2026/2027 Admissions Open',
        message: 'Carepoint Community School is now accepting intake registrations across all levels.',
        time: 'Just now',
        category: 'admissions',
        unread: true,
        icon: 'school',
        iconBg: 'bg-primary/10 text-primary',
        actionUrl: `${relRoot}public/apply.html`,
        actionText: 'Apply Now'
      },
      {
        id: 'pub-2',
        title: 'Campus Tour & Diagnostic Booking',
        message: 'Schedule your guided campus inspection with the Admissions Desk.',
        time: '1h ago',
        category: 'general',
        unread: true,
        icon: 'event',
        iconBg: 'bg-emerald-100 text-emerald-800',
        actionUrl: `${relRoot}public/home.html#contact`,
        actionText: 'Book Tour'
      }
    ]
  };

  let notifState = {
    notifications: initialNotifications[role] || initialNotifications.admin,
    currentFilter: 'all',
    isOpen: false,
    expandedIds: new Set()
  };

  // Helper to test if an element is a notification trigger
  function isNotificationButton(el) {
    if (!el || !(el instanceof Element)) return false;
    if (el.id === 'carepoint-notif-toggle-btn') return true;
    if (el.closest('#carepoint-notification-panel') || el.closest('#carepoint-hud-root')) return false;

    // Check if it's an action button containing words like Broadcast, Notice, Send, SMS
    const textWithoutIcon = el.textContent.replace(/notifications(_active|_none)?/gi, '').trim().toLowerCase();
    if (textWithoutIcon.includes('broadcast') || textWithoutIcon.includes('notice') || textWithoutIcon.includes('send') || textWithoutIcon.includes('sms')) {
      return false;
    }

    const aria = (el.getAttribute('aria-label') || '').toLowerCase();
    const title = (el.getAttribute('title') || '').toLowerCase();
    if (aria === 'notifications' || aria === 'urgent alerts' || title === 'notifications') {
      return true;
    }

    const icons = el.querySelectorAll('.material-symbols-outlined, .material-symbols, [class*="material-symbols"]');
    for (const icon of icons) {
      const text = icon.textContent.trim().toLowerCase();
      if (text === 'notifications' || text === 'notifications_active' || text === 'notifications_none') {
        // Bell button should only be an icon button or have small badge text (e.g. "3")
        if (textWithoutIcon.length <= 4) {
          return true;
        }
      }
    }

    if (el.childNodes.length === 1 && el.textContent.trim() === 'notifications') {
      return true;
    }

    return false;
  }

  // Update page badge counts (bell icon indicator)
  function updateAllPageBadges() {
    const unreadCount = notifState.notifications.filter(n => n.unread).length;
    const allButtons = Array.from(document.querySelectorAll('button, a')).filter(isNotificationButton);

    allButtons.forEach(btn => {
      let badge = btn.querySelector('.notification-badge, .notif-badge');
      if (!badge) {
        badge = btn.querySelector('span.rounded-full.bg-secondary, span.rounded-full.bg-secondary-container, span.absolute.top-2, span.absolute.top-1\\.5, span.absolute.top-2\\.5');
      }
      if (badge) {
        if (unreadCount > 0) {
          badge.style.display = '';
          if (badge.textContent.trim() !== '' && !isNaN(parseInt(badge.textContent))) {
            badge.textContent = unreadCount;
          }
        } else {
          badge.style.display = 'none';
        }
      }
    });

    if (window.Alpine && window.Alpine.store('carepoint')) {
      window.Alpine.store('carepoint').notificationCount = unreadCount;
    }
  }

  // Build UI Container if missing
  let backdrop = document.getElementById('carepoint-notification-backdrop');
  let panel = document.getElementById('carepoint-notification-panel');

  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'carepoint-notification-backdrop';
    backdrop.style.cssText = 'position:fixed;inset:0;background:rgba(1,21,73,0.45);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);z-index:99998;opacity:0;pointer-events:none;transition:opacity 0.28s ease;';
    document.body.appendChild(backdrop);
  }

  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'carepoint-notification-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-label', 'Carepoint Notifications Drawer');
    panel.className = 'w-full sm:w-[420px] max-w-full sm:max-w-[92vw]';
    panel.style.cssText = 'position:fixed;top:0;right:0;height:100%;background:#ffffff;box-shadow:-8px 0 32px rgba(1,21,73,0.18);z-index:99999;display:flex;flex-direction:column;border-left:1px solid #dde3ec;transform:translateX(100%);transition:transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);font-family:"Plus Jakarta Sans", system-ui, sans-serif;';
    document.body.appendChild(panel);
  }

  function renderDrawerContent() {
    if (!notifState.expandedIds) notifState.expandedIds = new Set();
    const unreadCount = notifState.notifications.filter(n => n.unread).length;
    const urgentCount = notifState.notifications.filter(n => n.category === 'urgent').length;
    const totalCount = notifState.notifications.length;

    let filtered = notifState.notifications;
    if (notifState.currentFilter === 'unread') {
      filtered = notifState.notifications.filter(n => n.unread);
    } else if (notifState.currentFilter === 'urgent') {
      filtered = notifState.notifications.filter(n => n.category === 'urgent');
    }

    const allFilteredExpanded = filtered.length > 0 && filtered.every(n => notifState.expandedIds.has(n.id));

    panel.innerHTML = `
      <!-- Carepoint Insignia Ribbon -->
      <div style="display:flex;height:6px;width:100%;flex-shrink:0;">
        <div style="flex:1;background:#38bdf8;"></div>
        <div style="flex:1;background:#ba0a0c;"></div>
        <div style="flex:1;background:#16a34a;"></div>
      </div>

      <!-- Drawer Header -->
      <div class="px-5 py-3.5 border-b border-surface-container-high bg-surface-container-lowest flex flex-col gap-1 flex-shrink-0">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-sm">
              <span class="material-symbols-outlined text-[22px] text-tertiary-fixed">notifications_active</span>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h2 class="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">Notifications</h2>
                ${unreadCount > 0 ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-secondary text-on-secondary shadow-xs">${unreadCount} New</span>` : `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-surface-container text-on-surface-variant">All Read</span>`}
              </div>
              <div class="flex items-center gap-1.5 mt-0.5">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">${roleTitles[role] || 'Carepoint Portal'}</span>
              </div>
            </div>
          </div>
          <button id="carepoint-notif-close-btn" aria-label="Close notifications" class="w-9 h-9 rounded-xl hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer" type="button">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <p class="text-[11.5px] text-on-surface-variant pl-0.5">
          Showing headlines only. <strong>Click any headline</strong> to read full details.
        </p>
      </div>

      <!-- Filter Controls -->
      <div class="px-5 py-2.5 bg-surface-container-low border-b border-surface-container-high flex items-center justify-between gap-2 flex-shrink-0">
        <div class="flex items-center gap-1.5">
          <button data-filter="all" class="notif-filter-btn px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${notifState.currentFilter === 'all' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container'}">All (${totalCount})</button>
          <button data-filter="unread" class="notif-filter-btn px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${notifState.currentFilter === 'unread' ? 'bg-primary text-on-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container'}">Unread (${unreadCount})</button>
          <button data-filter="urgent" class="notif-filter-btn px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${notifState.currentFilter === 'urgent' ? 'bg-primary text-on-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container'}">Urgent (${urgentCount})</button>
        </div>
        <div class="flex items-center gap-2">
          <button id="carepoint-notif-toggle-expand" class="text-[11px] font-bold text-primary hover:underline transition-colors cursor-pointer" type="button">
            ${allFilteredExpanded ? 'Collapse All' : 'Expand All'}
          </button>
          <button id="carepoint-notif-mark-all" class="text-[11px] font-bold text-secondary hover:text-secondary-container transition-colors flex items-center gap-1 cursor-pointer" type="button">
            <span class="material-symbols-outlined text-[15px]">done_all</span>
            <span>Mark read</span>
          </button>
        </div>
      </div>

      <!-- Notifications List -->
      <div id="carepoint-notif-list" class="flex-1 overflow-y-auto p-4 space-y-2.5 bg-surface">
        ${filtered.length === 0 ? `
          <div class="py-14 px-4 text-center flex flex-col items-center justify-center">
            <div class="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-on-surface-variant mb-3 shadow-inner">
              <span class="material-symbols-outlined text-[28px] text-emerald-600">done_all</span>
            </div>
            <h3 class="text-body-md font-bold text-on-surface">You're all caught up!</h3>
            <p class="text-xs text-on-surface-variant mt-1 max-w-[240px]">No ${notifState.currentFilter === 'unread' ? 'unread' : ''} alerts at this moment.</p>
            <button id="carepoint-notif-restore" class="mt-4 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary text-xs font-bold transition-colors cursor-pointer" type="button">
              Reset Demo Alerts
            </button>
          </div>
        ` : filtered.map(item => {
          const isExpanded = notifState.expandedIds.has(item.id);
          return `
          <div class="notif-item-card group relative p-3.5 rounded-xl transition-all cursor-pointer border ${item.unread ? 'bg-surface-container-lowest border-primary/20 shadow-xs' : 'bg-surface-container-lowest/80 border-surface-container-high/60'} hover:border-primary/40 hover:shadow-sm" data-id="${item.id}">
            <div class="flex items-start gap-3">
              <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.iconBg} shadow-xs mt-0.5">
                <span class="material-symbols-outlined text-[18px]">${item.icon}</span>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between gap-1.5">
                  <h4 class="text-body-sm font-bold text-primary leading-tight hover:text-primary-container transition-colors">${item.title}</h4>
                  <div class="flex items-center gap-1.5 flex-shrink-0">
                    ${item.unread ? '<span class="w-2 h-2 rounded-full bg-secondary flex-shrink-0" title="Unread alert"></span>' : ''}
                    <span class="material-symbols-outlined text-[18px] text-on-surface-variant transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}">expand_more</span>
                  </div>
                </div>

                <div class="flex items-center justify-between mt-1 text-[11px] text-on-surface-variant">
                  <span class="flex items-center gap-1 font-medium">
                    <span class="material-symbols-outlined text-[12px]">schedule</span>${item.time}
                  </span>
                  ${!isExpanded ? `<span class="text-primary font-semibold text-[10.5px] hover:underline flex items-center gap-0.5"><span>Tap for details</span><span class="material-symbols-outlined text-[13px]">arrow_drop_down</span></span>` : ''}
                </div>

                <!-- INFORMATIVE VIEW: Revealed smoothly when clicked -->
                ${isExpanded ? `
                  <div class="mt-2.5 pt-2 border-t border-surface-container-high/80 animate-in fade-in duration-200">
                    <p class="text-[12px] text-on-surface leading-relaxed">${item.message}</p>
                    ${item.actionUrl ? `
                      <div class="flex items-center justify-between mt-3 pt-2 border-t border-surface-container-low">
                        <span class="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">${item.category || 'School Update'}</span>
                        <a href="${item.actionUrl}" class="notif-action-btn inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-primary text-on-primary text-[11px] font-bold hover:bg-primary-container transition-colors shadow-xs" data-id="${item.id}">
                          <span>${item.actionText || 'View Details'}</span>
                          <span class="material-symbols-outlined text-[13px]">arrow_forward</span>
                        </a>
                      </div>
                    ` : ''}
                  </div>
                ` : ''}
              </div>
            </div>
          </div>
        `}).join('')}
      </div>

      <!-- Drawer Footer -->
      <div class="p-4 bg-surface-container-low border-t border-surface-container-high flex items-center justify-between flex-shrink-0">
        <button id="carepoint-notif-clear-btn" class="text-xs text-on-surface-variant hover:text-secondary font-semibold transition-colors flex items-center gap-1 cursor-pointer" type="button">
          <span class="material-symbols-outlined text-[16px]">clear_all</span>
          <span>Clear All</span>
        </button>
        <div class="flex items-center gap-1 text-[11px] text-on-surface-variant font-medium">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Campus Gate Stream</span>
        </div>
      </div>
    `;

    // Wire internal drawer buttons
    const closeBtn = panel.querySelector('#carepoint-notif-close-btn');
    if (closeBtn) closeBtn.onclick = closeCarepointNotifications;

    const filterBtns = panel.querySelectorAll('.notif-filter-btn');
    filterBtns.forEach(btn => {
      btn.onclick = () => {
        notifState.currentFilter = btn.getAttribute('data-filter') || 'all';
        renderDrawerContent();
      };
    });

    const toggleExpandBtn = panel.querySelector('#carepoint-notif-toggle-expand');
    if (toggleExpandBtn) {
      toggleExpandBtn.onclick = () => {
        if (!notifState.expandedIds) notifState.expandedIds = new Set();
        const allExp = filtered.length > 0 && filtered.every(n => notifState.expandedIds.has(n.id));
        if (allExp) {
          filtered.forEach(n => notifState.expandedIds.delete(n.id));
        } else {
          filtered.forEach(n => notifState.expandedIds.add(n.id));
        }
        renderDrawerContent();
      };
    }

    const markAllBtn = panel.querySelector('#carepoint-notif-mark-all');
    if (markAllBtn) {
      markAllBtn.onclick = () => {
        notifState.notifications.forEach(n => n.unread = false);
        updateAllPageBadges();
        renderDrawerContent();
        if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
          window.CarepointDemo.showToast('All notifications marked as read', true);
        }
      };
    }

    const clearBtn = panel.querySelector('#carepoint-notif-clear-btn');
    if (clearBtn) {
      clearBtn.onclick = () => {
        notifState.notifications = [];
        updateAllPageBadges();
        renderDrawerContent();
        if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
          window.CarepointDemo.showToast('Notification drawer cleared', true);
        }
      };
    }

    const restoreBtn = panel.querySelector('#carepoint-notif-restore');
    if (restoreBtn) {
      restoreBtn.onclick = () => {
        notifState.notifications = initialNotifications[role] ? JSON.parse(JSON.stringify(initialNotifications[role])) : [];
        notifState.expandedIds.clear();
        updateAllPageBadges();
        renderDrawerContent();
      };
    }

    // Single item cards click
    const cards = panel.querySelectorAll('.notif-item-card');
    cards.forEach(card => {
      card.onclick = (e) => {
        if (e.target.closest('.notif-action-btn')) {
          const actionBtn = e.target.closest('.notif-action-btn');
          const id = actionBtn.getAttribute('data-id');
          const item = notifState.notifications.find(n => n.id === id);
          if (item) item.unread = false;
          updateAllPageBadges();
          closeCarepointNotifications();
          return;
        }
        const id = card.getAttribute('data-id');
        const item = notifState.notifications.find(n => n.id === id);
        if (item) {
          if (!notifState.expandedIds) notifState.expandedIds = new Set();
          if (notifState.expandedIds.has(id)) {
            notifState.expandedIds.delete(id);
          } else {
            notifState.expandedIds.add(id);
          }
          item.unread = false;
          updateAllPageBadges();
          renderDrawerContent();
        }
      };
    });
  }

  function openCarepointNotifications() {
    notifState.isOpen = true;
    renderDrawerContent();
    backdrop.style.opacity = '1';
    backdrop.style.pointerEvents = 'auto';
    panel.style.transform = 'translateX(0)';
  }

  function closeCarepointNotifications() {
    notifState.isOpen = false;
    backdrop.style.opacity = '0';
    backdrop.style.pointerEvents = 'none';
    panel.style.transform = 'translateX(100%)';
  }

  function toggleCarepointNotifications() {
    if (notifState.isOpen) {
      closeCarepointNotifications();
    } else {
      openCarepointNotifications();
    }
  }

  // Backdrop click closes drawer
  backdrop.onclick = closeCarepointNotifications;

  // Escape key closes drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && notifState.isOpen) {
      closeCarepointNotifications();
    }
  });

  // Delegated click listener for any notification button in any header / page
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button, a');
    if (btn && isNotificationButton(btn)) {
      e.preventDefault();
      e.stopPropagation();
      toggleCarepointNotifications();
    }
  });

  // Expose global methods
  window.openCarepointNotifications = openCarepointNotifications;
  window.closeCarepointNotifications = closeCarepointNotifications;
  window.toggleCarepointNotifications = toggleCarepointNotifications;

  // Initial badge update
  updateAllPageBadges();
  console.log(`[Carepoint] Notification System initialized for role: ${role}`);
}

// =============================================================================
// CAREPOINT FACULTY DUTY & SHIFT TRACKING SYSTEM (Clock-In / Clock-Out)
// Compliant with Ghana Education Service (GES) & NaSIA Faculty Attendance Standards
// =============================================================================

export function initStaffDutySystem() {
  if (typeof document === 'undefined') return;

  function getActiveRole() {
    if (window.__CAREPOINT_HUD__ && window.__CAREPOINT_HUD__.role) {
      return window.__CAREPOINT_HUD__.role;
    }
    const path = window.location.pathname.toLowerCase();
    if (path.includes('/staff/')) return 'staff';
    return null;
  }

  const role = getActiveRole();
  if (role !== 'staff') return;

  // Retrieve current duty status from sessionStorage or default to 'clocked_in'
  function getDutyStatus() {
    return sessionStorage.getItem('carepoint_staff_duty') || 'clocked_in';
  }

  function setDutyStatus(status, timeStr) {
    sessionStorage.setItem('carepoint_staff_duty', status);
    if (status === 'clocked_out') {
      sessionStorage.setItem('carepoint_staff_clockout_time', timeStr || getCurrentTimeGMT());
    } else {
      sessionStorage.setItem('carepoint_staff_clockin_time', timeStr || getCurrentTimeGMT());
      sessionStorage.removeItem('carepoint_staff_clockout_time');
    }
    syncHeaderDutyUI();
  }

  function getClockInTime() {
    return sessionStorage.getItem('carepoint_staff_clockin_time') || '07:15 GMT';
  }

  function getClockOutTime() {
    return sessionStorage.getItem('carepoint_staff_clockout_time') || '15:30 GMT';
  }

  function getCurrentTimeGMT() {
    const now = new Date();
    const hrs = String(now.getUTCHours()).padStart(2, '0');
    const mins = String(now.getUTCMinutes()).padStart(2, '0');
    return `${hrs}:${mins} GMT`;
  }

  function calculateShiftDuration(inTimeStr, outTimeStr) {
    try {
      const inParts = inTimeStr.split(' ')[0].split(':');
      const outParts = outTimeStr.split(' ')[0].split(':');
      const inMinutes = parseInt(inParts[0]) * 60 + parseInt(inParts[1]);
      const outMinutes = parseInt(outParts[0]) * 60 + parseInt(outParts[1]);
      let diff = outMinutes - inMinutes;
      if (diff <= 0) diff += 24 * 60;
      const h = Math.floor(diff / 60);
      const m = diff % 60;
      return `${h} hrs ${m} mins`;
    } catch (e) {
      return '8 hrs 15 mins';
    }
  }

  // Sync header badges and buttons across all desktop & mobile staff templates
  function syncHeaderDutyUI() {
    const status = getDutyStatus();
    const clockInTime = getClockInTime();
    const clockOutTime = getClockOutTime();

    // Desktop duty badge in header (if present)
    const desktopDutyPill = document.querySelector('#staff-duty-badge');
    if (desktopDutyPill) {
      desktopDutyPill.id = 'staff-duty-badge';
      desktopDutyPill.style.cursor = 'pointer';
      desktopDutyPill.title = status === 'clocked_in' 
        ? `On-Duty • Clocked In at ${clockInTime} (Click to Clock-Out)` 
        : `Off-Duty • Clocked Out at ${clockOutTime} (Click to Clock-In)`;
      
      if (status === 'clocked_in') {
        desktopDutyPill.innerHTML = `
          <span class="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
          <span class="font-label-sm text-label-sm text-on-surface font-semibold" id="staff-duty-status-text">Campus: On-Duty (Main Block)</span>
        `;
      } else {
        desktopDutyPill.innerHTML = `
          <span class="w-2 h-2 rounded-full bg-amber-500"></span>
          <span class="font-label-sm text-label-sm text-on-surface-variant font-semibold" id="staff-duty-status-text">Campus: Off-Duty (Clocked Out)</span>
        `;
      }
    }

    // Desktop Clock-Out buttons (in header next to profile)
    document.querySelectorAll('button[title*="Clock-Out"], button[title*="Clock-in"], #staff-clockout-btn').forEach(btn => {
      btn.id = 'staff-clockout-btn';
      if (status === 'clocked_in') {
        btn.title = "Clock-Out of Campus Duty";
        btn.innerHTML = `<span class="material-symbols-outlined text-[20px] text-on-surface-variant hover:text-secondary">logout</span>`;
      } else {
        btn.title = "Clock-In for Duty";
        btn.innerHTML = `<span class="material-symbols-outlined text-[20px] text-tertiary-container font-bold">how_to_reg</span>`;
      }
    });

    // Mobile duty pills
    document.querySelectorAll('#mobile-staff-duty-badge, header .bg-tertiary-fixed').forEach(pill => {
      pill.id = 'mobile-staff-duty-badge';
      pill.style.cursor = 'pointer';
      if (status === 'clocked_in') {
        pill.className = "cursor-pointer flex items-center gap-1 px-space-xs py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm shrink-0";
        pill.innerHTML = `
          <span class="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
          <span class="hidden xs:inline">Clocked In ${clockInTime.substring(0,5)}</span>
          <span class="xs:hidden">${clockInTime.substring(0,5)}</span>
        `;
      } else {
        pill.className = "cursor-pointer flex items-center gap-1 px-space-xs py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm shrink-0";
        pill.innerHTML = `
          <span class="w-2 h-2 rounded-full bg-amber-500"></span>
          <span class="hidden xs:inline">Clocked Out</span>
          <span class="xs:hidden">Off-Duty</span>
        `;
      }
    });
  }

  // Create Modal DOM Elements if missing
  let backdrop = document.getElementById('carepoint-duty-modal-backdrop');
  let container = document.getElementById('carepoint-duty-modal-container');

  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'carepoint-duty-modal-backdrop';
    backdrop.className = 'fixed inset-0 bg-primary/60 backdrop-blur-xs z-[100] hidden transition-opacity duration-200';
    document.body.appendChild(backdrop);
  }

  if (!container) {
    container = document.createElement('div');
    container.id = 'carepoint-duty-modal-container';
    container.className = 'fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto hidden';
    document.body.appendChild(container);
  }

  function closeStaffDutyModal() {
    backdrop.classList.add('hidden');
    container.classList.add('hidden');
  }

  function openStaffDutyModal(forcedMode) {
    const currentStatus = getDutyStatus();
    const mode = forcedMode || (currentStatus === 'clocked_in' ? 'clockout' : 'clockin');
    const clockInTime = getClockInTime();
    const currentTime = getCurrentTimeGMT();
    const duration = calculateShiftDuration(clockInTime, currentTime);

    backdrop.classList.remove('hidden');
    container.classList.remove('hidden');

    if (mode === 'clockout') {
      renderClockOutView(clockInTime, currentTime, duration);
    } else {
      renderClockInView(currentTime);
    }
  }

  function renderClockOutView(clockInTime, currentTime, duration) {
    container.innerHTML = `
      <div class="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-outline-variant/30 flex flex-col gap-5 text-on-surface">
        <!-- Top Institutional Header -->
        <div class="flex items-start justify-between pb-3 border-b border-surface-container-high">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-xl bg-red-100 text-secondary flex items-center justify-center font-bold shadow-xs">
              <span class="material-symbols-outlined text-[24px]">timer_off</span>
            </div>
            <div>
              <div class="flex items-center gap-1.5">
                <h3 class="font-headline-sm text-headline-sm text-primary font-bold">Shift Clock-Out Protocol</h3>
              </div>
              <p class="font-label-sm text-xs text-on-surface-variant font-medium">NaSIA &amp; GES Faculty Attendance Registry</p>
            </div>
          </div>
          <button id="closeDutyModalBtn" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container text-on-surface-variant transition-colors">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Faculty Profile Card -->
        <div class="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low border border-surface-container-high/60">
          <img class="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-primary/20" src="https://lh3.googleusercontent.com/aida/AEtjO1UcOOFjMJZVJ59Yh3L8LzZiUZO0hEp_GwwTgvCtTnWZfJagO3-7TaJ4bxUgdy1S0Qh8tAD2MH6qGl39TQi65jkrsFxWRv-PuCoY4nMUoIztIr-M-TCSylx_ZDc-MCAG1QUpd-D-vnuiKsvstaH_9Jq_M2glwv__1QoKqT23MMd4t5D_zr35wty3UKyOV57GvEWnMEmNaQqzHhM6qGSpm3xSDR4xv5NwnsbzLg4MTkwc1oa_otpV5DwCDA_KcraFD6DtOcNBhDHiNQ" alt="Mrs. Beatrice Abbey"/>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <span class="font-label-md text-label-md text-primary font-bold">Mrs. Beatrice Abbey</span>
              <span class="font-mono text-[11px] text-on-surface-variant">#CP-FAC-014</span>
            </div>
            <p class="text-xs text-on-surface-variant truncate">Basic 2 Sunflower Lead • Academic Division</p>
            <div class="flex items-center gap-1 text-[11px] text-emerald-700 font-medium mt-0.5">
              <span class="material-symbols-outlined text-[13px]">location_on</span>
              <span>Campus Main Block (Room B-04)</span>
            </div>
          </div>
        </div>

        <!-- Shift Duration & Timestamp Breakdown (2x2 Grid) -->
        <div class="grid grid-cols-2 gap-3">
          <div class="p-3 rounded-xl bg-surface-container-lowest border border-surface-container-high shadow-2xs flex flex-col justify-between">
            <span class="text-[11px] text-on-surface-variant font-bold uppercase tracking-wider flex items-center gap-1">
              <span class="material-symbols-outlined text-[14px] text-emerald-600">login</span>
              Clock-In Time
            </span>
            <div class="mt-1 font-headline-sm text-headline-sm text-primary font-bold">${clockInTime}</div>
            <span class="text-[10px] text-on-surface-variant">Geofence Verified</span>
          </div>

          <div class="p-3 rounded-xl bg-surface-container-lowest border border-surface-container-high shadow-2xs flex flex-col justify-between">
            <span class="text-[11px] text-secondary font-bold uppercase tracking-wider flex items-center gap-1">
              <span class="material-symbols-outlined text-[14px] text-secondary">logout</span>
              Clock-Out (Now)
            </span>
            <div class="mt-1 font-headline-sm text-headline-sm text-secondary font-bold">${currentTime}</div>
            <span class="text-[10px] text-secondary font-medium">Ghana Std Time</span>
          </div>

          <div class="col-span-2 p-3 rounded-xl bg-primary/5 border border-primary/15 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-primary text-[20px]">timelapse</span>
              <span class="text-xs text-on-surface font-medium">Total Active Shift Accrued:</span>
            </div>
            <span class="font-label-md text-label-md text-primary font-bold">${duration}</span>
          </div>
        </div>

        <!-- End of Shift Verification Checklist -->
        <div class="space-y-2">
          <span class="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">End-of-Day Handover Checklist</span>
          <div class="space-y-1.5 text-xs text-on-surface-variant bg-surface-container-low p-3 rounded-xl">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked disabled class="accent-primary w-4 h-4 rounded"/>
              <span>Basic 2 Sunflower Roll Call recorded &amp; submitted (28/28 verified)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked disabled class="accent-primary w-4 h-4 rounded"/>
              <span>Term 1 Continuous Assessment &amp; homework marks synchronized</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked class="accent-primary w-4 h-4 rounded"/>
              <span>Classroom secured and student departure handed over to Gate Turnstiles</span>
            </label>
          </div>
        </div>

        <!-- Primary Action Group -->
        <div class="flex flex-col gap-2 pt-2 border-t border-surface-container-high">
          <button id="confirmClockOutBtn" type="button" class="w-full py-3 px-4 rounded-xl bg-secondary hover:brightness-105 text-on-secondary font-label-md text-label-md font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.99]">
            <span class="material-symbols-outlined text-[18px]">timer_off</span>
            <span>Confirm Clock-Out &amp; End Shift</span>
          </button>
          
          <div class="flex items-center justify-between gap-2 mt-1">
            <button id="signOutToLoginBtn" type="button" class="text-xs text-on-surface-variant hover:text-primary font-medium flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-[15px]">lock</span>
              <span>Fast Sign Out to Login</span>
            </button>
            <button id="cancelDutyBtn" type="button" class="text-xs text-on-surface-variant hover:text-on-surface font-semibold px-3 py-1.5 rounded-lg hover:bg-surface-container transition-colors">
              Cancel &bull; Remain On-Duty
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('closeDutyModalBtn').onclick = closeStaffDutyModal;
    document.getElementById('cancelDutyBtn').onclick = closeStaffDutyModal;
    
    document.getElementById('signOutToLoginBtn').onclick = () => {
      setDutyStatus('clocked_out', currentTime);
      window.location.href = 'login.html';
    };

    document.getElementById('confirmClockOutBtn').onclick = () => {
      setDutyStatus('clocked_out', currentTime);
      renderClockOutReceipt(clockInTime, currentTime, duration);
      if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
        window.CarepointDemo.showToast(`Clock-Out Confirmed (${currentTime}). Shift Duration: ${duration}. Rest well, Mrs. Abbey!`);
      }
    };
  }

  function renderClockOutReceipt(clockInTime, currentTime, duration) {
    container.innerHTML = `
      <div class="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-black/5 flex flex-col gap-5 text-on-surface">
        <div class="flex items-start gap-3.5">
          <div class="w-11 h-11 rounded-full ${isDestructive ? 'bg-red-50 text-secondary' : 'bg-amber-50 text-amber-800'} flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-[24px]">${isDestructive ? 'security' : 'warning'}</span>
          </div>
          <div>
            <h3 class="text-lg font-bold text-on-surface">${title}</h3>
            <p class="text-xs text-on-surface-variant mt-0.5">${subtitle}</p>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-[#f4f1ee] text-xs text-on-surface leading-relaxed">
          <p class="font-medium">${warning}</p>
        </div>

        <div class="flex items-center justify-end gap-2.5 pt-2">
          <button id="carepoint-cancel-safe-action" type="button" class="carepoint-soft-btn-secondary">
            ${cancelLabel}
          </button>
          <button id="carepoint-confirm-safe-action" type="button" class="${isDestructive ? 'carepoint-soft-btn-danger' : 'carepoint-soft-btn'}">
            <span>${actionLabel}</span>
          </button>
        </div>
      </div>
    `;

    backdrop.classList.remove('hidden');
    container.classList.remove('hidden');

    if (mode === 'clockout') {
      renderClockOutView(clockInTime, currentTime, duration);
    } else {
      renderClockInView(currentTime);
    }
  }

  function renderClockOutView(clockInTime, currentTime, duration) {
    container.innerHTML = `
      <div class="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-outline-variant/30 flex flex-col gap-5 text-on-surface">
        <!-- Top Institutional Header -->
        <div class="flex items-start justify-between pb-3 border-b border-surface-container-high">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-xl bg-red-100 text-secondary flex items-center justify-center font-bold shadow-xs">
              <span class="material-symbols-outlined text-[24px]">timer_off</span>
            </div>
            <div>
              <div class="flex items-center gap-1.5">
                <h3 class="font-headline-sm text-headline-sm text-primary font-bold">Shift Clock-Out Protocol</h3>
              </div>
              <p class="font-label-sm text-xs text-on-surface-variant font-medium">NaSIA &amp; GES Faculty Attendance Registry</p>
            </div>
          </div>
          <button id="closeDutyModalBtn" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container text-on-surface-variant transition-colors">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Faculty Profile Card -->
        <div class="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low border border-surface-container-high/60">
          <img class="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-primary/20" src="https://lh3.googleusercontent.com/aida/AEtjO1UcOOFjMJZVJ59Yh3L8LzZiUZO0hEp_GwwTgvCtTnWZfJagO3-7TaJ4bxUgdy1S0Qh8tAD2MH6qGl39TQi65jkrsFxWRv-PuCoY4nMUoIztIr-M-TCSylx_ZDc-MCAG1QUpd-D-vnuiKsvstaH_9Jq_M2glwv__1QoKqT23MMd4t5D_zr35wty3UKyOV57GvEWnMEmNaQqzHhM6qGSpm3xSDR4xv5NwnsbzLg4MTkwc1oa_otpV5DwCDA_KcraFD6DtOcNBhDHiNQ" alt="Mrs. Beatrice Abbey"/>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <span class="font-label-md text-label-md text-primary font-bold">Mrs. Beatrice Abbey</span>
              <span class="font-mono text-[11px] text-on-surface-variant">#CP-FAC-014</span>
            </div>
            <p class="text-xs text-on-surface-variant truncate">Basic 2 Sunflower Lead • Academic Division</p>
            <div class="flex items-center gap-1 text-[11px] text-emerald-700 font-medium mt-0.5">
              <span class="material-symbols-outlined text-[13px]">location_on</span>
              <span>Campus Main Block (Room B-04)</span>
            </div>
          </div>
        </div>

        <!-- Shift Duration & Timestamp Breakdown (2x2 Grid) -->
        <div class="grid grid-cols-2 gap-3">
          <div class="p-3 rounded-xl bg-surface-container-lowest border border-surface-container-high shadow-2xs flex flex-col justify-between">
            <span class="text-[11px] text-on-surface-variant font-bold uppercase tracking-wider flex items-center gap-1">
              <span class="material-symbols-outlined text-[14px] text-emerald-600">login</span>
              Clock-In Time
            </span>
            <div class="mt-1 font-headline-sm text-headline-sm text-primary font-bold">${clockInTime}</div>
            <span class="text-[10px] text-on-surface-variant">Geofence Verified</span>
          </div>

          <div class="p-3 rounded-xl bg-surface-container-lowest border border-surface-container-high shadow-2xs flex flex-col justify-between">
            <span class="text-[11px] text-secondary font-bold uppercase tracking-wider flex items-center gap-1">
              <span class="material-symbols-outlined text-[14px] text-secondary">logout</span>
              Clock-Out (Now)
            </span>
            <div class="mt-1 font-headline-sm text-headline-sm text-secondary font-bold">${currentTime}</div>
            <span class="text-[10px] text-secondary font-medium">Ghana Std Time</span>
          </div>

          <div class="col-span-2 p-3 rounded-xl bg-primary/5 border border-primary/15 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-primary text-[20px]">timelapse</span>
              <span class="text-xs text-on-surface font-medium">Total Active Shift Accrued:</span>
            </div>
            <span class="font-label-md text-label-md text-primary font-bold">${duration}</span>
          </div>
        </div>

        <!-- End of Shift Verification Checklist -->
        <div class="space-y-2">
          <span class="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">End-of-Day Handover Checklist</span>
          <div class="space-y-1.5 text-xs text-on-surface-variant bg-surface-container-low p-3 rounded-xl">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked disabled class="accent-primary w-4 h-4 rounded"/>
              <span>Basic 2 Sunflower Roll Call recorded &amp; submitted (28/28 verified)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked disabled class="accent-primary w-4 h-4 rounded"/>
              <span>Term 1 Continuous Assessment &amp; homework marks synchronized</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked class="accent-primary w-4 h-4 rounded"/>
              <span>Classroom secured and student departure handed over to Gate Turnstiles</span>
            </label>
          </div>
        </div>

        <!-- Primary Action Group -->
        <div class="flex flex-col gap-2 pt-2 border-t border-surface-container-high">
          <button id="confirmClockOutBtn" type="button" class="w-full py-3 px-4 rounded-xl bg-secondary hover:brightness-105 text-on-secondary font-label-md text-label-md font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.99]">
            <span class="material-symbols-outlined text-[18px]">timer_off</span>
            <span>Confirm Clock-Out &amp; End Shift</span>
          </button>
          
          <div class="flex items-center justify-between gap-2 mt-1">
            <button id="signOutToLoginBtn" type="button" class="text-xs text-on-surface-variant hover:text-primary font-medium flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-[15px]">lock</span>
              <span>Fast Sign Out to Login</span>
            </button>
            <button id="cancelDutyBtn" type="button" class="text-xs text-on-surface-variant hover:text-on-surface font-semibold px-3 py-1.5 rounded-lg hover:bg-surface-container transition-colors">
              Cancel &bull; Remain On-Duty
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('closeDutyModalBtn').onclick = closeStaffDutyModal;
    document.getElementById('cancelDutyBtn').onclick = closeStaffDutyModal;
    
    document.getElementById('signOutToLoginBtn').onclick = () => {
      setDutyStatus('clocked_out', currentTime);
      window.location.href = 'login.html';
    };

    document.getElementById('confirmClockOutBtn').onclick = () => {
      setDutyStatus('clocked_out', currentTime);
      renderClockOutReceipt(clockInTime, currentTime, duration);
      if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
        window.CarepointDemo.showToast(`Clock-Out Confirmed (${currentTime}). Shift Duration: ${duration}. Rest well, Mrs. Abbey!`);
      }
    };
  }

  function renderClockOutReceipt(clockInTime, currentTime, duration) {
    container.innerHTML = `
      <div class="bg-surface-container-lowest rounded-2xl max-w-md w-full p-6 shadow-2xl border border-outline-variant/30 flex flex-col items-center text-center gap-4 text-on-surface">
        <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
          <span class="material-symbols-outlined text-[36px]">check_circle</span>
        </div>

        <div>
          <h3 class="font-headline-sm text-headline-sm text-primary font-bold">Shift Concluded Successfully!</h3>
          <p class="text-xs text-on-surface-variant mt-1">Departure timestamp logged on Carepoint NaSIA Attendance Ledger.</p>
        </div>

        <div class="w-full bg-surface-container-low p-4 rounded-xl border border-surface-container-high/60 flex flex-col gap-2 text-left">
          <div class="flex items-center justify-between text-xs">
            <span class="text-on-surface-variant">Faculty:</span>
            <span class="font-bold text-on-surface">Mrs. Beatrice Abbey</span>
          </div>
          <div class="flex items-center justify-between text-xs">
            <span class="text-on-surface-variant">Class Assignment:</span>
            <span class="font-semibold text-primary">Basic 2 Sunflower Lead</span>
          </div>
          <div class="flex items-center justify-between text-xs">
            <span class="text-on-surface-variant">Clocked In:</span>
            <span class="font-mono text-on-surface">${clockInTime}</span>
          </div>
          <div class="flex items-center justify-between text-xs">
            <span class="text-on-surface-variant">Clocked Out:</span>
            <span class="font-mono font-bold text-secondary">${currentTime}</span>
          </div>
          <div class="pt-2 border-t border-surface-container-high flex items-center justify-between text-xs">
            <span class="font-bold text-on-surface">Total Instructional Duty:</span>
            <span class="font-bold text-primary">${duration}</span>
          </div>
        </div>

        <div class="w-full flex flex-col gap-2 pt-2">
          <button id="receiptLoginBtn" type="button" class="w-full py-3 px-4 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold flex items-center justify-center gap-2 shadow-xs transition-colors">
            <span class="material-symbols-outlined text-[18px]">logout</span>
            <span>Return to Staff Login / Clock-In Kiosk</span>
          </button>
          <button id="receiptDismissBtn" type="button" class="w-full py-2.5 px-4 rounded-xl border border-surface-container-high hover:bg-surface-container text-on-surface-variant font-label-sm text-xs font-semibold transition-colors">
            Remain in Off-Duty Portal Mode
          </button>
        </div>
      </div>
    `;

    document.getElementById('receiptLoginBtn').onclick = () => {
      window.location.href = 'login.html';
    };
    document.getElementById('receiptDismissBtn').onclick = closeStaffDutyModal;
  }

  function renderClockInView(currentTime) {
    container.innerHTML = `
      <div class="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-outline-variant/30 flex flex-col gap-5 text-on-surface">
        <div class="flex items-start justify-between pb-3 border-b border-surface-container-high">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shadow-xs">
              <span class="material-symbols-outlined text-[24px]">how_to_reg</span>
            </div>
            <div>
              <h3 class="font-headline-sm text-headline-sm text-primary font-bold">Authorize &amp; Clock-In for Duty</h3>
              <p class="font-label-sm text-xs text-on-surface-variant font-medium">Carepoint Geofenced Campus Attendance Check-In</p>
            </div>
          </div>
          <button id="closeDutyModalBtn2" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container text-on-surface-variant transition-colors">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div class="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low border border-surface-container-high/60">
          <img class="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-primary/20" src="https://lh3.googleusercontent.com/aida/AEtjO1UcOOFjMJZVJ59Yh3L8LzZiUZO0hEp_GwwTgvCtTnWZfJagO3-7TaJ4bxUgdy1S0Qh8tAD2MH6qGl39TQi65jkrsFxWRv-PuCoY4nMUoIztIr-M-TCSylx_ZDc-MCAG1QUpd-D-vnuiKsvstaH_9Jq_M2glwv__1QoKqT23MMd4t5D_zr35wty3UKyOV57GvEWnMEmNaQqzHhM6qGSpm3xSDR4xv5NwnsbzLg4MTkwc1oa_otpV5DwCDA_KcraFD6DtOcNBhDHiNQ" alt="Mrs. Beatrice Abbey"/>
          <div class="flex-1 min-w-0">
            <span class="font-label-md text-label-md text-primary font-bold">Mrs. Beatrice Abbey</span>
            <p class="text-xs text-on-surface-variant truncate">Basic 2 Sunflower Lead • Academic Division</p>
            <div class="flex items-center gap-1 text-[11px] text-emerald-700 font-medium mt-0.5">
              <span class="material-symbols-outlined text-[13px]">verified</span>
              <span>Geofence GPS: Verified On Campus</span>
            </div>
          </div>
        </div>

        <div class="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/60 flex items-center justify-between">
          <div>
            <span class="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">Arrival Clock-In Time</span>
            <span class="font-headline-sm text-headline-sm text-emerald-900 font-bold">${currentTime}</span>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-900 font-label-sm text-xs font-bold">
            On Time
          </span>
        </div>

        <div class="flex flex-col gap-2 pt-2 border-t border-surface-container-high">
          <button id="confirmClockInBtn" type="button" class="w-full py-3 px-4 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold flex items-center justify-center gap-2 shadow-xs transition-all active:scale-[0.99]">
            <span class="material-symbols-outlined text-[18px]">how_to_reg</span>
            <span>Confirm Clock-In &amp; Begin Duty</span>
          </button>
          <button id="cancelClockInBtn" type="button" class="text-xs text-on-surface-variant hover:text-on-surface font-semibold py-1.5 transition-colors">
            Cancel
          </button>
        </div>
      </div>
    `;

    document.getElementById('closeDutyModalBtn2').onclick = closeStaffDutyModal;
    document.getElementById('cancelClockInBtn').onclick = closeStaffDutyModal;

    document.getElementById('confirmClockInBtn').onclick = () => {
      setDutyStatus('clocked_in', currentTime);
      closeStaffDutyModal();
      if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
        window.CarepointDemo.showToast(`Clock-In Confirmed (${currentTime}). Active duty started! Have a great day, Mrs. Abbey!`);
      }
    };
  }

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !container.classList.contains('hidden')) {
      closeStaffDutyModal();
    }
  });

  // Backdrop click closes modal
  backdrop.onclick = closeStaffDutyModal;

  // Delegated click listener for any Clock-Out / Clock-In button or badge
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('button[title*="Clock-Out"], button[title*="Clock-in"], #staff-clockout-btn, [data-action="staff-clockout"], #staff-duty-badge, #mobile-staff-duty-badge');
    if (trigger) {
      e.preventDefault();
      e.stopPropagation();
      openStaffDutyModal();
    }
  });

  // Expose globally
  window.openStaffDutyModal = openStaffDutyModal;
  window.closeStaffDutyModal = closeStaffDutyModal;

  // Initial UI sync
  syncHeaderDutyUI();
  console.log(`[Carepoint] Staff Duty & Shift Engine initialized (Status: ${getDutyStatus()})`);
}

// =============================================================================
// CAREPOINT FACULTY CLASS & TEACHING STREAM SWITCHER
// Multi-Class Management for Lead Teachers & Subject Specialists
// =============================================================================

export function initStaffClassSwitcher() {
  if (typeof document === 'undefined') return;

  function getActiveRole() {
    if (window.__CAREPOINT_HUD__ && window.__CAREPOINT_HUD__.role) {
      return window.__CAREPOINT_HUD__.role;
    }
    const path = window.location.pathname.toLowerCase();
    if (path.includes('/staff/')) return 'staff';
    return null;
  }

  const role = getActiveRole();
  if (role !== 'staff') return;

  const STAFF_CLASSES = [
    {
      id: 'b2-sunflower',
      name: 'Sunflower Class',
      grade: 'Basic 2',
      displayName: 'Basic 2 Sunflower',
      role: 'Homeroom Academic Lead',
      subtext: 'Basic 2 • Academic Lead',
      room: 'Room B-04',
      building: 'Main Academic Block',
      pupils: 28,
      isPrimary: true,
      badge: 'Primary Lead',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: 'local_florist',
      iconBg: 'bg-amber-100 text-amber-800',
      subjects: 'Full Primary Curriculum • Pastoral Care & Daily Roll Call',
      nextPeriod: 'Literacy & Phonics • 08:30 GMT'
    },
    {
      id: 'b2-orchid',
      name: 'Orchid Class',
      grade: 'Basic 2',
      displayName: 'Basic 2 Orchid',
      role: 'Science & STEM Specialist',
      subtext: 'Basic 2 • Science Specialist',
      room: 'Room B-05',
      building: 'Main Academic Block',
      pupils: 26,
      isPrimary: false,
      badge: 'Subject Stream',
      badgeClass: 'bg-sky-100 text-sky-800 border-sky-200',
      icon: 'eco',
      iconBg: 'bg-sky-100 text-sky-800',
      subjects: 'Integrated Science, STEM Experiments, Agriculture',
      nextPeriod: 'Science Lab • 10:30 GMT'
    },
    {
      id: 'b3-daffodil',
      name: 'Daffodil Class',
      grade: 'Basic 3',
      displayName: 'Basic 3 Daffodil',
      role: 'Creative Arts & ICT Specialist',
      subtext: 'Basic 3 • Creative Arts & ICT',
      room: 'Room C-02',
      building: 'East Junior Wing',
      pupils: 30,
      isPrimary: false,
      badge: 'Subject Stream',
      badgeClass: 'bg-purple-100 text-purple-800 border-purple-200',
      icon: 'palette',
      iconBg: 'bg-purple-100 text-purple-800',
      subjects: 'Creative Arts, Computing / ICT, Ghanaian Language (Twi)',
      nextPeriod: 'Creative Arts • 11:45 GMT'
    }
  ];

  function getActiveClassId() {
    return sessionStorage.getItem('carepoint_staff_class') || 'b2-sunflower';
  }

  function getActiveClass() {
    const id = getActiveClassId();
    return STAFF_CLASSES.find(c => c.id === id) || STAFF_CLASSES[0];
  }

  function setActiveClass(classId) {
    const target = STAFF_CLASSES.find(c => c.id === classId);
    if (!target) return;
    sessionStorage.setItem('carepoint_staff_class', classId);
    syncStaffClassUI();
    if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
      window.CarepointDemo.showToast(`Switched active class view to ${target.displayName} (${target.room})`, true);
    }
  }

  function syncStaffClassUI() {
    const current = getActiveClass();

    // 1. Desktop aside class assignment widget
    document.querySelectorAll('#staff-assigned-class-name, .staff-class-name').forEach(el => {
      el.textContent = current.name;
    });

    document.querySelectorAll('#staff-assigned-class-sub, .staff-class-sub').forEach(el => {
      el.textContent = current.subtext;
    });

    // In case HTML didn't have ID yet, find by container
    document.querySelectorAll('aside .bg-surface-container-low').forEach(box => {
      const titleEl = box.querySelector('.text-headline-sm');
      const subEl = box.querySelector('.text-body-sm');
      if (titleEl && (titleEl.textContent.includes('Class') || titleEl.id === 'staff-assigned-class-name')) {
        titleEl.textContent = current.name;
        titleEl.id = 'staff-assigned-class-name';
      }
      if (subEl && (subEl.textContent.includes('Basic') || subEl.id === 'staff-assigned-class-sub')) {
        subEl.textContent = current.subtext;
        subEl.id = 'staff-assigned-class-sub';
      }
    });

    // 2. Dashboard hero text update (e.g. Basic 2 Sunflower • 28 Students • Room B-04)
    let heroInfoEl = null;
    const heroParagraphs = document.querySelectorAll('main p');
    for (const p of heroParagraphs) {
      if (p.querySelector('.text-on-primary')) {
        heroInfoEl = p;
        break;
      }
    }
    if (heroInfoEl) {
      const spanName = heroInfoEl.querySelector('.font-semibold.text-on-primary') || heroInfoEl.querySelector('.text-on-primary');
      if (spanName) spanName.textContent = current.displayName;
      const spans = heroInfoEl.querySelectorAll('span');
      spans.forEach(s => {
        if (s.textContent.includes('Students')) {
          s.textContent = `${current.pupils} Students`;
        } else if (s.textContent.includes('Room')) {
          s.textContent = current.room;
        }
      });
    }

    // 3. Mobile dashboard greeting card
    document.querySelectorAll('.mobile-class-info, main p.text-primary-fixed-dim, #mobile-hero-cohort-text').forEach(el => {
      if (el.textContent.includes('Basic 2') || el.textContent.includes('Sunflower') || el.textContent.includes('Orchid') || el.textContent.includes('Daffodil') || el.id === 'mobile-hero-cohort-text') {
        el.textContent = `${current.displayName} • ${current.room}`;
      }
    });

    // 4. Attendance page class selector sync
    const classSelect = document.getElementById('classSelect');
    if (classSelect) {
      Array.from(classSelect.options).forEach((opt, idx) => {
        if (opt.textContent.toLowerCase().includes(current.name.toLowerCase().split(' ')[0])) {
          classSelect.selectedIndex = idx;
        }
      });
      const statTotal = document.getElementById('statTotal');
      if (statTotal) statTotal.textContent = current.pupils;
    }

    // 5. Timetable Cohort Badge sync
    let cohortBadge = null;
    const badgeContainers = document.querySelectorAll('.bg-surface-container-lowest');
    for (const el of badgeContainers) {
      if (el.querySelector('.text-primary')) {
        const lbl = el.querySelector('.font-label-md');
        if (lbl) { cohortBadge = lbl; break; }
      }
    }
    if (cohortBadge) {
      cohortBadge.textContent = `${current.grade} — ${current.name}`;
    }

    // 6. Mobile timetable role button sync
    const currentRoleText = document.getElementById('currentRoleText');
    if (currentRoleText) {
      currentRoleText.textContent = `${current.grade} ${current.name.replace(' Class', '')}`;
    }
  }

  // Build Modal Container if missing
  let backdrop = document.getElementById('carepoint-class-modal-backdrop');
  let container = document.getElementById('carepoint-class-modal-container');

  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'carepoint-class-modal-backdrop';
    backdrop.className = 'fixed inset-0 bg-primary/60 backdrop-blur-xs z-[100] hidden transition-opacity duration-200';
    document.body.appendChild(backdrop);
  }

  if (!container) {
    container = document.createElement('div');
    container.id = 'carepoint-class-modal-container';
    container.className = 'fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto hidden';
    document.body.appendChild(container);
  }

  function closeSwitchClassModal() {
    backdrop.classList.add('hidden');
    container.classList.add('hidden');
  }

  function openSwitchClassModal() {
    renderClassSwitcherView();
    backdrop.classList.remove('hidden');
    container.classList.remove('hidden');
  }

  function renderClassSwitcherView() {
    const activeClassId = getActiveClassId();

    container.innerHTML = `
      <div class="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-outline-variant/30 flex flex-col gap-5 text-on-surface">
        <!-- Institutional Header -->
        <div class="flex items-start justify-between pb-3 border-b border-surface-container-high">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold shadow-xs">
              <span class="material-symbols-outlined text-[24px] text-tertiary-fixed">swap_horiz</span>
            </div>
            <div>
              <div class="flex items-center gap-1.5">
                <h3 class="font-headline-sm text-headline-sm text-primary font-bold">Switch Class</h3>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-surface-container-high text-primary">3 Assigned</span>
              </div>
              <p class="font-label-sm text-xs text-on-surface-variant font-medium">Mrs. Beatrice Abbey • Academic Year 2026/2027</p>
            </div>
          </div>
          <button id="closeClassModalBtn" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container text-on-surface-variant transition-colors cursor-pointer" type="button">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Explanatory note -->
        <div class="p-3 bg-surface-container-low rounded-xl border border-surface-container-high/60 flex items-start gap-2.5">
          <span class="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">info</span>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Switching your active classroom dynamically alters your roll call registers, gradebook continuous assessment sheets, and timetable periods to that cohort.
          </p>
        </div>

        <!-- Class List -->
        <div class="flex flex-col gap-3">
          ${STAFF_CLASSES.map(cls => {
            const isActive = cls.id === activeClassId;
            return `
              <div class="class-card group p-4 rounded-xl border transition-all cursor-pointer ${isActive ? 'bg-primary/5 border-primary shadow-xs ring-1 ring-primary/20' : 'bg-surface-container-lowest border-surface-container-high/70 hover:border-primary/40 hover:bg-surface-container-low/40'}" data-class-id="${cls.id}">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-xl ${cls.iconBg} flex items-center justify-center shrink-0 shadow-2xs">
                      <span class="material-symbols-outlined text-[22px]">${cls.icon}</span>
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <h4 class="font-headline-sm text-[16px] font-bold ${isActive ? 'text-primary' : 'text-on-surface'}">${cls.displayName}</h4>
                        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border ${cls.badgeClass}">${cls.badge}</span>
                      </div>
                      <div class="flex flex-wrap items-center gap-2 text-xs text-on-surface-variant mt-1">
                        <span class="font-semibold text-primary">${cls.role}</span>
                        <span>•</span>
                        <span>${cls.pupils} Students</span>
                        <span>•</span>
                        <span>${cls.room}</span>
                      </div>
                      <p class="text-[11px] text-on-surface-variant/80 mt-1.5 leading-snug">${cls.subjects}</p>
                    </div>
                  </div>
                  <div class="shrink-0 flex items-center pt-1">
                    ${isActive ? `
                      <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-on-primary text-[11px] font-bold shadow-xs">
                        <span class="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-pulse"></span>
                        <span>Active</span>
                      </span>
                    ` : `
                      <button type="button" class="btn-select-class px-3 py-1 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary text-xs font-bold transition-all shadow-2xs cursor-pointer" data-class-id="${cls.id}">
                        Select
                      </button>
                    `}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Footer Actions -->
        <div class="flex items-center justify-between pt-2 border-t border-surface-container-high">
          <a href="approvals.html" class="text-xs text-on-surface-variant hover:text-primary font-semibold flex items-center gap-1 transition-colors">
            <span class="material-symbols-outlined text-[15px]">badge</span>
            <span>Request Temporary Relief Cover</span>
          </a>
          <button id="closeClassModalBtn2" type="button" class="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-xs font-bold transition-colors cursor-pointer">
            Done
          </button>
        </div>
      </div>
    `;

    document.getElementById('closeClassModalBtn').onclick = closeSwitchClassModal;
    document.getElementById('closeClassModalBtn2').onclick = closeSwitchClassModal;

    container.querySelectorAll('.class-card, .btn-select-class').forEach(el => {
      el.onclick = () => {
        const id = el.getAttribute('data-class-id');
        if (id) {
          setActiveClass(id);
          renderClassSwitcherView();
        }
      };
    });
  }

  // Backdrop click closes
  backdrop.onclick = closeSwitchClassModal;

  // Escape key closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !container.classList.contains('hidden')) {
      closeSwitchClassModal();
    }
  });

  // Delegated click listener for any "Switch Class" button
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('#switchClassBtn, [data-action="switch-class"]');
    if (trigger) {
      e.preventDefault();
      e.stopPropagation();
      openSwitchClassModal();
    }
  });

  // Expose globally
  window.openSwitchClassModal = openSwitchClassModal;
  window.closeSwitchClassModal = closeSwitchClassModal;
  window.setActiveStaffClass = setActiveClass;
  window.getActiveStaffClass = getActiveClass;

  // Initial sync
  syncStaffClassUI();
  console.log(`[Carepoint] Staff Class Switcher initialized (Active: ${getActiveClass().displayName})`);
}

// =============================================================================
// CAREPOINT CAPABILITIES DISCOVERY & SECURE SEARCH ENGINE (Ctrl+K)
// Strictly Sandboxed & Role-Isolated: Limits discovery to [This Page Only]
// by default, or strictly to the authenticated portal. Blocks cross-portal
// traversal, enforces fail-closed RBAC, and prevents XSS.
// =============================================================================

export function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function initCarepointCapabilitiesDiscovery() {
  if (typeof document === 'undefined') return;

  // 1. Strict Fail-Closed Role Verification
  function getVerifiedPortalRole() {
    const p = (window.location.pathname || '').toLowerCase();

    // Explicitly fail closed on public site, index portal directory, or root
    if (p.includes('/public/') || p === '/' || p.endsWith('/index.html') || p.endsWith('\\index.html')) {
      return null;
    }

    let derivedRole = null;
    if (p.includes('/staff/')) derivedRole = 'staff';
    else if (p.includes('/parent/')) derivedRole = 'parent';
    else if (p.includes('/admin/')) derivedRole = 'admin';
    else if (p.includes('/gate/')) derivedRole = 'gate';
    else if (p.includes('/sysadmin/')) derivedRole = 'sysadmin';

    if (!derivedRole) {
      // Fail-closed security rule: NEVER fallback to admin or guess
      return null;
    }

    // Cross-verify against HUD declared role if present
    if (window.__CAREPOINT_HUD__ && window.__CAREPOINT_HUD__.role) {
      const hudRole = String(window.__CAREPOINT_HUD__.role).toLowerCase();
      if (hudRole !== derivedRole && ['staff', 'parent', 'admin', 'gate', 'sysadmin'].includes(hudRole)) {
        console.warn(`[Carepoint Security] Path authority (${derivedRole}) overrides HUD declared role (${hudRole}).`);
      }
    }

    return derivedRole;
  }

  const role = getVerifiedPortalRole();
  if (!role) {
    // Zero footprint on unauthorized routes
    return;
  }

  function getVerifiedActivePage() {
    const p = (window.location.pathname || '').toLowerCase();
    const segments = p.split('/').filter(Boolean);
    const filename = segments.length > 0 ? segments[segments.length - 1] : 'dashboard.html';
    return filename.replace(/^mobile-/, '');
  }

  const activePage = getVerifiedActivePage();

  function getRelRoot() {
    if (window.__CAREPOINT_HUD__ && window.__CAREPOINT_HUD__.relRoot) {
      return window.__CAREPOINT_HUD__.relRoot;
    }
    const parts = window.location.pathname.split('/').filter(Boolean);
    return parts.length > 1 ? '../' : './';
  }

  const relRoot = getRelRoot();
  const isMobile = window.__CAREPOINT_HUD__?.isMobile || window.innerWidth < 768;
  const pfx = isMobile ? 'mobile-' : '';

  const ROLE_TITLES = {
    staff: 'Teacher (Staff)',
    parent: 'Parent & Guardian',
    admin: 'Administrator (Principal)',
    gate: 'Gate & Turnstile Security',
    sysadmin: 'Super Admin (System)'
  };

  const roleTitle = ROLE_TITLES[role] || 'Portal';

  // 2. Strict Role-Isolated Capabilities Catalog
  // Every capability is strictly bound to its allowedRole and page
  const CAPABILITIES_CATALOG = {
    staff: [
      {
        id: 'staff-rollcall',
        title: 'Take Morning Class Attendance',
        category: 'Daily Operations',
        description: 'Complete 1-tap morning roll call for Basic 2 Sunflower (28 pupils).',
        icon: 'fact_check',
        action: `url:${relRoot}staff/${pfx}attendance.html`,
        badge: 'Daily Priority',
        allowedRole: 'staff',
        page: 'attendance.html'
      },
      {
        id: 'staff-gradebook',
        title: 'Continuous Assessment (SBA) Marks',
        category: 'Academics',
        description: 'Enter class test, project work, and exam scores auto-scaled to GES 30/30/40.',
        icon: 'menu_book',
        action: `url:${relRoot}staff/${pfx}gradebook.html`,
        badge: 'Academic',
        allowedRole: 'staff',
        page: 'gradebook.html'
      },
      {
        id: 'staff-timetable',
        title: 'Weekly Teaching Timetable',
        category: 'Schedule',
        description: 'View Sunflower Class weekly subject periods and specialist room allocations.',
        icon: 'calendar_month',
        action: `url:${relRoot}staff/${pfx}timetable.html`,
        badge: 'Timetable',
        allowedRole: 'staff',
        page: 'timetable.html'
      },
      {
        id: 'staff-switch-class',
        title: 'Switch Active Class Cohort',
        category: 'Classrooms',
        description: 'Toggle between Sunflower (Basic 2), Orchid (Basic 2), and Daffodil (Basic 3).',
        icon: 'swap_horiz',
        action: 'custom:switch-class',
        badge: 'Multi-Class',
        allowedRole: 'staff',
        page: '*'
      },
      {
        id: 'staff-duty',
        title: 'Campus Duty & Clock-In / Out',
        category: 'Duty & Campus',
        description: 'Log campus presence, view playground supervision times, or clock-out.',
        icon: 'how_to_reg',
        action: 'custom:duty',
        badge: 'GES Compliance',
        allowedRole: 'staff',
        page: '*'
      },
      {
        id: 'staff-clinic',
        title: 'Send Student to School Clinic',
        category: 'Student Welfare',
        description: 'Submit an electronic referral to Nurse Faustina Asante with symptoms and triage priority.',
        icon: 'medical_services',
        action: `url:${relRoot}staff/${pfx}health.html`,
        badge: 'Infirmary',
        allowedRole: 'staff',
        page: 'health.html'
      },
      {
        id: 'staff-messages',
        title: 'Direct Parent Messaging',
        category: 'Communication',
        description: 'Exchange private updates, homework notes, and acknowledgements with guardians.',
        icon: 'chat_bubble',
        action: `url:${relRoot}staff/${pfx}messages.html`,
        badge: 'Parent Liaison',
        allowedRole: 'staff',
        page: 'messages.html'
      },
      {
        id: 'staff-relief',
        title: 'Request Teaching Relief Cover',
        category: 'Approvals',
        description: 'Submit an emergency substitute teacher request to Headmaster or Headteacher Dr. Elizabeth Appiah.',
        icon: 'verified',
        action: `url:${relRoot}staff/${pfx}approvals.html`,
        badge: 'Faculty',
        allowedRole: 'staff',
        page: 'approvals.html'
      }
    ],
    parent: [
      {
        id: 'parent-status',
        title: 'Campus Arrival & Gate Verification',
        category: 'Safety & Presence',
        description: 'Verify your child arrived safely on campus, morning turnstile time, and class presence.',
        icon: 'how_to_reg',
        action: `url:${relRoot}parent/${pfx}dashboard.html`,
        badge: 'Live Status',
        allowedRole: 'parent',
        page: 'dashboard.html'
      },
      {
        id: 'parent-pickup',
        title: 'Afternoon Pickup Pass & Secure QR',
        category: 'Safety & Presence',
        description: 'Generate single-use QR pass or authorize trusted relative/driver for gate checkout.',
        icon: 'qr_code_2',
        action: `url:${relRoot}parent/${pfx}pickup.html`,
        badge: 'Essential',
        allowedRole: 'parent',
        page: 'pickup.html'
      },
      {
        id: 'parent-report-card',
        title: 'Generate Official Terminal Report Card (PDF)',
        category: 'Academics',
        description: 'View and print GES & NaSIA accredited terminal progress report with official grading scale.',
        icon: 'school',
        action: `url:${relRoot}parent/${pfx}academics.html`,
        badge: 'Official PDF',
        allowedRole: 'parent',
        page: 'academics.html'
      },
      {
        id: 'parent-message-teacher',
        title: 'Message Class Teacher Mrs. Abbey',
        category: 'Communication',
        description: 'Direct, secure communication channel with Sunflower Class homeroom lead.',
        icon: 'chat',
        action: `url:${relRoot}parent/${pfx}messages.html`,
        badge: 'Direct Liaison',
        allowedRole: 'parent',
        page: 'messages.html'
      },
      {
        id: 'parent-health',
        title: 'School Clinic Logs & Medical Records',
        category: 'Health & Welfare',
        description: 'Review routine dental, vision screenings, and nurse logs from the school infirmary.',
        icon: 'health_and_safety',
        action: `url:${relRoot}parent/${pfx}messages.html#welfare`,
        badge: 'Infirmary',
        allowedRole: 'parent',
        page: 'academics.html'
      },
      {
        id: 'parent-switch-ward',
        title: 'Switch Child Profile (Kofi / Ama)',
        category: 'Family Accounts',
        description: 'Toggle between Kofi Mensah (Basic 2) and Ama Mensah (Nursery 1 Buttercup).',
        icon: 'swap_horiz',
        action: 'custom:switch-ward',
        badge: 'Multi-Child',
        allowedRole: 'parent',
        page: '*'
      }
    ],
    admin: [
      {
        id: 'admin-approvals',
        title: 'Executive Approvals Queue',
        category: 'Governance',
        description: 'Review and sign medical clearances, fee concessions, and staff relief requests.',
        icon: 'fact_check',
        action: `url:${relRoot}admin/${pfx}approvals.html`,
        badge: '12 Pending',
        allowedRole: 'admin',
        page: 'approvals.html'
      },
      {
        id: 'admin-broadcast',
        title: 'Broadcast Institutional Announcement',
        category: 'Communication',
        description: 'Dispatch SMS and portal notices to all 340 registered parents or specific cohorts.',
        icon: 'campaign',
        action: `url:${relRoot}admin/${pfx}inbox.html`,
        badge: 'All Parents',
        allowedRole: 'admin',
        page: 'inbox.html'
      },
      {
        id: 'admin-bursary',
        title: 'Bursary & School Fees Reconciliation',
        category: 'Finance',
        description: 'Monitor live term fee collections (84.6% collected) and outstanding balances in GH₵.',
        icon: 'payments',
        action: `url:${relRoot}admin/${pfx}dashboard.html#school-fees-section`,
        badge: 'Finance',
        allowedRole: 'admin',
        page: 'dashboard.html'
      },
      {
        id: 'admin-admissions',
        title: 'Admissions Intake Desk',
        category: 'Admissions',
        description: 'Review prospective student applications, schedule entry assessments, and issue offer letters.',
        icon: 'how_to_reg',
        action: `url:${relRoot}admin/${pfx}admissions.html`,
        badge: '28 Intake',
        allowedRole: 'admin',
        page: 'admissions.html'
      },
      {
        id: 'admin-wards',
        title: 'Student Census & Biometric Registry',
        category: 'Records',
        description: 'Master directory of all 340 enrolled students with emergency contacts and class allocations.',
        icon: 'badge',
        action: `url:${relRoot}admin/${pfx}wards.html`,
        badge: 'Census',
        allowedRole: 'admin',
        page: 'wards.html'
      },
      {
        id: 'admin-reports',
        title: 'Academic & Financial Reports',
        category: 'Governance',
        description: 'Generate term performance summaries and audit logs.',
        icon: 'analytics',
        action: `url:${relRoot}admin/${pfx}reports.html`,
        badge: 'Reports',
        allowedRole: 'admin',
        page: 'reports.html'
      },
      {
        id: 'admin-users',
        title: 'Staff & Faculty Directory',
        category: 'Administration',
        description: 'Manage teacher assignments and administrative accounts.',
        icon: 'group',
        action: `url:${relRoot}admin/${pfx}users.html`,
        badge: 'Staff Directory',
        allowedRole: 'admin',
        page: 'users.html'
      },
      {
        id: 'admin-settings',
        title: 'Institutional Settings & Term Dates',
        category: 'Governance',
        description: 'Configure academic calendar, school fees schedule, and GES NaSIA parameters.',
        icon: 'settings',
        action: `url:${relRoot}admin/${pfx}settings.html`,
        badge: 'Config',
        allowedRole: 'admin',
        page: 'settings.html'
      },
      {
        id: 'admin-lockdown',
        title: 'Activate Campus Emergency Lockdown',
        category: 'Safety & Security',
        description: 'High-level emergency protocol securing all turnstiles and dispatching alert broadcast.',
        icon: 'lock_open',
        action: 'custom:lockdown',
        badge: 'Level 4 Security',
        allowedRole: 'admin',
        page: '*'
      }
    ],
    gate: [
      {
        id: 'gate-scanner',
        title: 'Live QR Code Scanner',
        category: 'Turnstile Kiosk',
        description: 'Scan digital parent passes or guardian QR codes at Gate Turnstile A.',
        icon: 'qr_code_scanner',
        action: `url:${relRoot}gate/${pfx}scan.html`,
        badge: 'Primary Kiosk',
        allowedRole: 'gate',
        page: 'scan.html'
      },
      {
        id: 'gate-token',
        title: 'Manual 6-Character SMS Token Lookup',
        category: 'Turnstile Kiosk',
        description: 'Verify pickup authorization when smartphone camera or screen is unavailable.',
        icon: 'dialpad',
        action: 'custom:focus-token',
        badge: 'Fallback',
        allowedRole: 'gate',
        page: 'scan.html'
      },
      {
        id: 'gate-nfc',
        title: 'Simulate Smart Wristband / NFC Tap',
        category: 'Verification',
        description: 'One-tap biometric NFC test for student wristband turnstile clearance.',
        icon: 'tap_and_play',
        action: 'custom:nfc-tap',
        badge: 'Rapid Entry',
        allowedRole: 'gate',
        page: 'scan.html'
      },
      {
        id: 'gate-verify',
        title: 'Manual Guardian Verification',
        category: 'Security Desk',
        description: 'Verify national Ghana Card / voter ID when pupil pass is unreadable.',
        icon: 'verified_user',
        action: `url:${relRoot}gate/${pfx}verify.html`,
        badge: 'ID Check',
        allowedRole: 'gate',
        page: 'verify.html'
      },
      {
        id: 'gate-log',
        title: 'Visitor & Pickup Verification Log',
        category: 'Gate Security',
        description: 'Full chronological audit of all pedestrian, vehicle, and bus entries.',
        icon: 'history',
        action: `url:${relRoot}gate/${pfx}log.html`,
        badge: 'Audit',
        allowedRole: 'gate',
        page: 'log.html'
      },
      {
        id: 'gate-amber',
        title: 'Trigger Code Amber Security Alert',
        category: 'Safety & Security',
        description: 'Pause gate turnstiles and summon front desk security coordinator.',
        icon: 'warning',
        action: 'custom:code-amber',
        badge: 'Security Alert',
        allowedRole: 'gate',
        page: '*'
      }
    ],
    sysadmin: [
      {
        id: 'sys-health',
        title: 'Probe Production Cluster Health',
        category: 'Telemetry',
        description: 'Test Accra Cloud Pod-A latency, PostgreSQL replicas, and turnstile MQTT sockets.',
        icon: 'sync',
        action: 'custom:probe-sync',
        badge: '99.98% SLA',
        allowedRole: 'sysadmin',
        page: '*'
      },
      {
        id: 'sys-provision',
        title: 'User Provisioning & Role Assignments',
        category: 'Access Control',
        description: 'Grant, suspend, or audit faculty and administrator permissions under Act 843.',
        icon: 'badge',
        action: `url:${relRoot}sysadmin/${pfx}provisioning.html`,
        badge: 'Identity',
        allowedRole: 'sysadmin',
        page: 'provisioning.html'
      },
      {
        id: 'sys-features',
        title: 'System Feature Flags & Modules',
        category: 'Configuration',
        description: 'Toggle parent portal features, biometric scanning, and SMS automated triggers.',
        icon: 'toggle_on',
        action: `url:${relRoot}sysadmin/${pfx}features.html`,
        badge: 'Feature Engine',
        allowedRole: 'sysadmin',
        page: 'features.html'
      },
      {
        id: 'sys-integrations',
        title: 'Integrations Hub & SMS Gateway',
        category: 'Integrations',
        description: 'Inspect MTN MoMo webhooks, Hubtel SMS gateway balance, and NaSIA reporting sync.',
        icon: 'hub',
        action: `url:${relRoot}sysadmin/${pfx}integrations.html`,
        badge: 'Webhooks',
        allowedRole: 'sysadmin',
        page: 'integrations.html'
      },
      {
        id: 'sys-audit',
        title: 'Immutable Audit Trail',
        category: 'Compliance',
        description: 'Review cryptographically signed system logs and administrative overrides.',
        icon: 'receipt_long',
        action: `url:${relRoot}sysadmin/${pfx}audit.html`,
        badge: 'AES-256',
        allowedRole: 'sysadmin',
        page: 'audit.html'
      },
      {
        id: 'sys-tracker',
        title: 'Real-Time Error & Telemetry Tracker',
        category: 'System Health',
        description: 'Monitor live exceptions, gateway latencies, and turnstile telemetry.',
        icon: 'monitoring',
        action: `url:${relRoot}sysadmin/${pfx}tracker.html`,
        badge: 'Sentry SLA',
        allowedRole: 'sysadmin',
        page: 'tracker.html'
      }
    ]
  };

  // 3. In-Page Element Scanner: Indexes on-screen elements on the current page
  function scanCurrentPageElements() {
    const items = [];
    const seenTitles = new Set();

    function clean(str) {
      return (str || '').replace(/\s+/g, ' ').trim();
    }

    // A. Actionable buttons and primary links on current page
    const buttons = document.querySelectorAll('main button, main a[role="button"], main a.carepoint-btn, form button, .carepoint-soft-card button');
    buttons.forEach((btn, idx) => {
      if (btn.offsetParent === null) return;
      if (btn.id === 'closeCapabilityModalBtn' || btn.closest('#carepoint-capabilities-container') || btn.closest('#carepoint-hud-root')) return;

      const text = clean(btn.innerText || btn.getAttribute('aria-label') || btn.getAttribute('title'));
      if (!text || text.length < 3 || text.length > 55) return;
      if (seenTitles.has(text.toLowerCase())) return;
      seenTitles.add(text.toLowerCase());

      const section = btn.closest('section, article, .carepoint-soft-card, form, table');
      const secHeading = section ? clean(section.querySelector('h1, h2, h3, h4')?.innerText) : '';
      const category = secHeading ? `Page Action • ${secHeading.substring(0, 22)}` : 'On-Page Action';

      if (!btn.dataset.cpDomId) {
        btn.dataset.cpDomId = `cp-page-btn-${idx}`;
      }

      items.push({
        id: `dom-${btn.dataset.cpDomId}`,
        title: text,
        category: category,
        description: `Trigger or interact with "${text}" directly on this screen.`,
        icon: 'touch_app',
        action: `dom:${btn.dataset.cpDomId}`,
        badge: 'On This Page',
        allowedRole: role,
        page: activePage
      });
    });

    // B. Key section headings and content cards on current page
    const headings = document.querySelectorAll('main h1, main h2, main h3, main h4, section h2, section h3, .carepoint-soft-card h3, .carepoint-soft-card h4');
    headings.forEach((h, idx) => {
      if (h.offsetParent === null) return;
      if (h.closest('#carepoint-capabilities-container') || h.closest('#carepoint-hud-root')) return;

      const text = clean(h.innerText);
      if (!text || text.length < 3 || text.length > 65) return;
      if (seenTitles.has(text.toLowerCase())) return;
      seenTitles.add(text.toLowerCase());

      if (!h.dataset.cpDomId) {
        h.dataset.cpDomId = `cp-page-h-${idx}`;
      }

      const card = h.closest('.carepoint-soft-card, section');
      const p = card ? card.querySelector('p') : null;
      const desc = p ? clean(p.innerText).substring(0, 95) : `Jump directly to the ${text} section on this page.`;

      items.push({
        id: `dom-${h.dataset.cpDomId}`,
        title: text,
        category: 'Page Section',
        description: desc,
        icon: 'arrow_downward',
        action: `dom:${h.dataset.cpDomId}`,
        badge: 'Section',
        allowedRole: role,
        page: activePage
      });
    });

    // C. Form inputs and search controls on current page
    const inputs = document.querySelectorAll('main input[placeholder], main select, form input[placeholder]');
    inputs.forEach((inp, idx) => {
      if (inp.offsetParent === null) return;
      if (inp.id === 'carepoint-capability-search-input') return;

      const labelEl = inp.id ? document.querySelector(`label[for="${inp.id}"]`) : null;
      const text = clean(labelEl ? labelEl.innerText : inp.placeholder);
      if (!text || text.length < 3 || text.length > 50) return;
      if (seenTitles.has(text.toLowerCase())) return;
      seenTitles.add(text.toLowerCase());

      if (!inp.dataset.cpDomId) {
        inp.dataset.cpDomId = `cp-page-inp-${idx}`;
      }

      items.push({
        id: `dom-${inp.dataset.cpDomId}`,
        title: `Field: ${text}`,
        category: 'Page Form & Filter',
        description: `Focus and edit the "${text}" control on this page.`,
        icon: 'edit_note',
        action: `dom:${inp.dataset.cpDomId}`,
        badge: 'Form Field',
        allowedRole: role,
        page: activePage
      });
    });

    return items;
  }

  // 4. Dual-Scope Search Sandbox Engine: Default is 'page' (On This Page Only)
  let currentScope = 'page';

  function getScopedCapabilities() {
    const roleCatalog = (CAPABILITIES_CATALOG[role] || []).filter(item => item.allowedRole === role);

    if (currentScope === 'page') {
      const pageDomItems = scanCurrentPageElements();
      const pageCatalogItems = roleCatalog.filter(item => {
        if (item.page === activePage) return true;
        if (item.page === '*' && (item.action.startsWith('custom:') || item.action.startsWith('dom:'))) return true;
        return false;
      });
      return [...pageDomItems, ...pageCatalogItems];
    } else {
      // Portal Scope: STRICTLY this role's portal items only
      // ZERO cross-portal items are ever accessible
      return roleCatalog;
    }
  }

  // Build Modal DOM if missing
  let backdrop = document.getElementById('carepoint-capabilities-backdrop');
  let container = document.getElementById('carepoint-capabilities-container');

  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'carepoint-capabilities-backdrop';
    backdrop.className = 'fixed inset-0 bg-primary/60 backdrop-blur-xs z-[110] hidden transition-opacity duration-200';
    document.body.appendChild(backdrop);
  }

  if (!container) {
    container = document.createElement('div');
    container.id = 'carepoint-capabilities-container';
    container.className = 'fixed inset-0 z-[111] flex items-start justify-center pt-14 sm:pt-20 p-4 overflow-y-auto hidden';
    document.body.appendChild(container);
  }

  function closeCapabilitiesModal() {
    backdrop.classList.add('hidden');
    container.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function openCapabilitiesModal() {
    // Reset to 'page' scope by default for maximum security isolation
    currentScope = 'page';
    renderCapabilitiesModal();
    backdrop.classList.remove('hidden');
    container.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const input = document.getElementById('carepoint-capability-search-input');
      if (input) input.focus();
    }, 50);
  }

  function renderCapabilitiesModal(filterQuery = '') {
    const q = filterQuery.toLowerCase().trim();
    const capabilities = getScopedCapabilities();

    const filtered = capabilities.filter(item => {
      if (!q) return true;
      return item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
    });

    // Group by category
    const categoriesMap = {};
    filtered.forEach(item => {
      if (!categoriesMap[item.category]) categoriesMap[item.category] = [];
      categoriesMap[item.category].push(item);
    });

    const isPageScope = currentScope === 'page';

    container.innerHTML = `
      <div class="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-black/5 flex flex-col overflow-hidden text-on-surface transform transition-all">
        <!-- Top Search Header with XSS Escaping -->
        <div class="p-4 border-b border-surface-container-high/60 flex items-center gap-3 bg-white">
          <div class="flex-1 flex items-center gap-2.5 px-4 py-2 bg-[#f4f1ee] rounded-full">
            <span class="material-symbols-outlined text-primary text-[20px] shrink-0">search</span>
            <input
              id="carepoint-capability-search-input"
              type="text"
              value="${escapeHtml(filterQuery)}"
              placeholder="${isPageScope ? 'Search items, actions, or sections on this page...' : 'Search capabilities across ' + escapeHtml(roleTitle) + '...'}"
              class="w-full bg-transparent border-0 outline-none text-sm text-on-surface placeholder:text-outline font-medium"
              autocomplete="off"
            />
          </div>
          <button id="closeCapabilityModalBtn" class="w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/5 text-on-surface-variant transition-colors cursor-pointer shrink-0" type="button" title="Close (Esc)">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Security Scope Sandbox Bar -->
        <div class="px-4 py-2.5 bg-surface-container-low border-b border-surface-container-high/60 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div class="flex items-center gap-1.5 p-0.5 bg-surface-container rounded-full" id="carepoint-scope-toggle-group">
            <button
              type="button"
              id="carepoint-scope-page-btn"
              class="px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer carepoint-scope-pill ${isPageScope ? 'active' : 'text-on-surface-variant hover:text-on-surface'}"
            >
              📍 On This Page Only
            </button>
            <button
              type="button"
              id="carepoint-scope-portal-btn"
              class="px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer carepoint-scope-pill ${!isPageScope ? 'active' : 'text-on-surface-variant hover:text-on-surface'}"
            >
              🔒 ${escapeHtml(roleTitle)} Only
            </button>
          </div>

          <div class="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            <span class="material-symbols-outlined text-[13px] text-emerald-700">verified_user</span>
            <span>Sandbox Enforced</span>
          </div>
        </div>

        <!-- Scope Guidance Banner -->
        <div class="px-4 py-1.5 bg-[#faf8f5] border-b border-surface-container-high/40 text-[11px] text-on-surface-variant flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[14px] text-primary shrink-0">info</span>
          <span class="truncate">
            ${isPageScope
              ? `Restricted to items and actions located strictly on <strong>${escapeHtml(activePage)}</strong>.`
              : `Restricted strictly to your authenticated <strong>${escapeHtml(roleTitle)}</strong>. Cross-portal access blocked.`}
          </span>
        </div>

        <!-- Capability Results List -->
        <div class="max-h-[55vh] overflow-y-auto p-4 flex flex-col gap-4">
          ${filtered.length === 0 ? `
            <div class="py-10 text-center text-on-surface-variant">
              <span class="material-symbols-outlined text-4xl mb-2 text-outline">manage_search</span>
              <p class="text-sm font-semibold">No results for "${escapeHtml(filterQuery)}" in ${isPageScope ? 'current page scope' : escapeHtml(roleTitle)}</p>
              <p class="text-xs text-outline mt-1">${isPageScope ? 'Try toggling to "' + escapeHtml(roleTitle) + ' Only" to search portal-wide capabilities.' : 'Try a different search term or check page spelling.'}</p>
            </div>
          ` : Object.entries(categoriesMap).map(([category, items]) => `
            <div>
              <span class="text-xs font-semibold text-outline px-2 block mb-2">${escapeHtml(category)}</span>
              <div class="flex flex-col gap-1.5">
                ${items.map(item => `
                  <div class="capability-item group p-3.5 rounded-2xl hover:bg-[#f4f1ee] transition-all cursor-pointer flex items-center justify-between gap-3" data-cap-id="${escapeHtml(item.id)}">
                    <div class="flex items-center gap-3 min-w-0">
                      <div class="w-10 h-10 rounded-full bg-[#f4f1ee] group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center shrink-0 transition-colors">
                        <span class="material-symbols-outlined text-[20px]">${escapeHtml(item.icon)}</span>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 flex-wrap">
                          <h4 class="font-bold text-sm text-on-surface leading-tight truncate">${escapeHtml(item.title)}</h4>
                          <span class="text-[10px] font-bold px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant border border-outline-variant/30">${escapeHtml(item.badge || 'Action')}</span>
                        </div>
                        <p class="text-xs text-on-surface-variant mt-0.5 line-clamp-1">${escapeHtml(item.description)}</p>
                      </div>
                    </div>
                    <span class="material-symbols-outlined text-[18px] text-outline group-hover:text-primary transition-colors shrink-0">arrow_forward</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Wire close
    const closeBtn = document.getElementById('closeCapabilityModalBtn');
    if (closeBtn) closeBtn.onclick = closeCapabilitiesModal;

    // Wire scope switches
    const pageScopeBtn = document.getElementById('carepoint-scope-page-btn');
    const portalScopeBtn = document.getElementById('carepoint-scope-portal-btn');
    if (pageScopeBtn) {
      pageScopeBtn.onclick = () => {
        if (currentScope !== 'page') {
          currentScope = 'page';
          const curVal = document.getElementById('carepoint-capability-search-input')?.value || '';
          renderCapabilitiesModal(curVal);
          const inp = document.getElementById('carepoint-capability-search-input');
          if (inp) {
            inp.focus();
            inp.selectionStart = inp.selectionEnd = inp.value.length;
          }
        }
      };
    }
    if (portalScopeBtn) {
      portalScopeBtn.onclick = () => {
        if (currentScope !== 'portal') {
          currentScope = 'portal';
          const curVal = document.getElementById('carepoint-capability-search-input')?.value || '';
          renderCapabilitiesModal(curVal);
          const inp = document.getElementById('carepoint-capability-search-input');
          if (inp) {
            inp.focus();
            inp.selectionStart = inp.selectionEnd = inp.value.length;
          }
        }
      };
    }

    // Wire search filter
    const input = document.getElementById('carepoint-capability-search-input');
    if (input) {
      input.oninput = (e) => {
        renderCapabilitiesModal(e.target.value);
        const updatedInput = document.getElementById('carepoint-capability-search-input');
        if (updatedInput) {
          updatedInput.focus();
          updatedInput.selectionStart = updatedInput.selectionEnd = updatedInput.value.length;
        }
      };
    }

    // Wire click actions
    container.querySelectorAll('.capability-item').forEach(el => {
      el.onclick = () => {
        const id = el.getAttribute('data-cap-id');
        const target = capabilities.find(c => c.id === id);
        if (!target) return;
        closeCapabilitiesModal();
        executeCapability(target);
      };
    });
  }

  // 5. Action Execution Sandbox: Strictly verifies permissions, blocks path traversal,
  // and whitelists actions per role
  function executeCapability(cap) {
    if (!cap) return;

    // A. STRICT RBAC CHECK: Role verification
    if (cap.allowedRole !== role) {
      console.error(`[Security Violation] Blocked unauthorized attempt to execute "${cap.id}" (required: ${cap.allowedRole}, active: ${role})`);
      if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
        window.CarepointDemo.showToast(`Security Violation: Access to ${cap.allowedRole} capabilities is strictly prohibited.`, false);
      }
      return;
    }

    // B. DOM ELEMENT ACTION (On-Page Scope)
    if (cap.action.startsWith('dom:')) {
      const domId = cap.action.replace('dom:', '');
      const targetEl = document.querySelector(`[data-cp-dom-id="${domId}"]`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetEl.classList.remove('carepoint-search-highlight');
        void targetEl.offsetWidth; // trigger reflow
        targetEl.classList.add('carepoint-search-highlight');
        setTimeout(() => {
          targetEl.classList.remove('carepoint-search-highlight');
        }, 2500);
        if (typeof targetEl.focus === 'function') {
          setTimeout(() => targetEl.focus(), 300);
        }
        if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
          window.CarepointDemo.showToast(`Focused on: ${cap.title}`, true);
        }
      }
      return;
    }

    // C. URL NAVIGATION SANDBOX: Prevent Path Traversal & Cross-Portal Hopping
    if (cap.action.startsWith('url:')) {
      const rawUrl = cap.action.replace('url:', '');
      const lower = rawUrl.toLowerCase();

      // Block malicious protocols (javascript:, data:, vbscript:, file:)
      if (lower.startsWith('javascript:') || lower.startsWith('data:') || lower.startsWith('vbscript:') || lower.startsWith('file:')) {
        console.error(`[Security Violation] Blocked dangerous protocol in navigation URL: ${rawUrl}`);
        if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
          window.CarepointDemo.showToast('Security Alert: Malicious URL protocol blocked.', false);
        }
        return;
      }

      // Restrict navigation strictly to within the authorized portal
      const unauthorizedPortals = ['admin', 'staff', 'parent', 'gate', 'sysadmin'].filter(p => p !== role);
      const triesCrossPortalHop = unauthorizedPortals.some(p => {
        return lower.includes(`/${p}/`) || lower.includes(`..${p}`) || lower.startsWith(`${p}/`);
      });

      if (triesCrossPortalHop) {
        console.error(`[Security Violation] Blocked unauthorized cross-portal navigation to: ${rawUrl}`);
        if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
          window.CarepointDemo.showToast(`Access Denied: You are not authorized to traverse to external portal resources.`, false);
        }
        return;
      }

      window.location.href = rawUrl;
      return;
    }

    // D. CUSTOM ACTION AUTHORIZATION WHITELIST
    const ALLOWED_CUSTOM_ACTIONS = {
      staff: ['custom:switch-class', 'custom:duty'],
      parent: ['custom:switch-ward'],
      admin: ['custom:lockdown'],
      gate: ['custom:focus-token', 'custom:nfc-tap', 'custom:code-amber'],
      sysadmin: ['custom:probe-sync']
    };

    const roleAllowedActions = ALLOWED_CUSTOM_ACTIONS[role] || [];
    if (cap.action.startsWith('custom:')) {
      if (!roleAllowedActions.includes(cap.action)) {
        console.error(`[Security Violation] Role "${role}" is not authorized to invoke custom action "${cap.action}"`);
        if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
          window.CarepointDemo.showToast(`Security Violation: Unauthorized execution of ${cap.action} blocked.`, false);
        }
        return;
      }
    }

    // Execute authorized custom actions
    if (cap.action === 'custom:switch-class') {
      if (typeof window.openSwitchClassModal === 'function') {
        window.openSwitchClassModal();
      }
    } else if (cap.action === 'custom:duty') {
      if (typeof window.openStaffDutyModal === 'function') {
        window.openStaffDutyModal();
      }
    } else if (cap.action === 'custom:lockdown') {
      if (typeof window.openCarepointSafeActionModal === 'function') {
        window.openCarepointSafeActionModal({
          title: 'Activate Campus Emergency Lockdown',
          subtitle: 'Ghana NaSIA Security Protocol - Level 4 Emergency Protocol',
          warning: 'This action will immediately restrict all 4 campus perimeter turnstiles, summon campus security coordinators, and dispatch urgent SMS alerts to all registered parents.',
          actionLabel: 'Confirm Emergency Lockdown',
          isDestructive: true,
          onConfirm: () => {
            window.location.href = `${relRoot}admin/${pfx}dashboard.html#lockdown-active`;
          }
        });
      }
    } else if (cap.action === 'custom:code-amber') {
      if (typeof window.openCarepointSafeActionModal === 'function') {
        window.openCarepointSafeActionModal({
          title: 'Trigger Security Code Amber Alert',
          subtitle: 'Perimeter Security Incident Response',
          warning: 'This will temporarily halt gate turnstiles and notify the Headmaster or Headteacher of an unresolved identity match.',
          actionLabel: 'Confirm Code Amber',
          isDestructive: false,
          onConfirm: () => {
            if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
              window.CarepointDemo.showToast('Security Code Amber triggered. Coordinator notified.', false);
            }
          }
        });
      }
    } else if (cap.action === 'custom:focus-token') {
      const inp = document.getElementById('token-input');
      if (inp) {
        inp.scrollIntoView({ behavior: 'smooth' });
        inp.focus();
      } else {
        window.location.href = `${relRoot}gate/${pfx}scan.html#token-form`;
      }
    } else if (cap.action === 'custom:nfc-tap') {
      const nfcBtn = document.getElementById('quick-rfid-demo');
      if (nfcBtn) {
        nfcBtn.click();
      } else {
        if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
          window.CarepointDemo.showToast('Simulated NFC Wristband scan verified! Gate opened.', true);
        }
      }
    } else if (cap.action === 'custom:probe-sync') {
      const refBtn = document.getElementById('btn-refresh');
      if (refBtn) {
        refBtn.click();
      } else {
        if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
          window.CarepointDemo.showToast('Cluster probe synchronized. 4/4 nodes operating at 14ms latency.', true);
        }
      }
    } else if (cap.action === 'custom:switch-ward') {
      if (typeof window.switchWard === 'function') {
        window.switchWard('ama');
      } else {
        window.location.href = `${relRoot}parent/${pfx}dashboard.html#ward`;
      }
    }
  }

  // Backdrop and Escape close
  backdrop.onclick = closeCapabilitiesModal;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !container.classList.contains('hidden')) {
      closeCapabilitiesModal();
    }
    // Global Ctrl+K / Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (container.classList.contains('hidden')) {
        openCapabilitiesModal();
      } else {
        closeCapabilitiesModal();
      }
    }
  });

  // Inject header trigger button if not present
  function injectHeaderTrigger() {
    if (document.getElementById('carepoint-capabilities-btn')) return;

    const headerRight = document.querySelector('header .flex.items-center:last-child, header > div > .flex.items-center:last-child');
    if (headerRight) {
      const btn = document.createElement('button');
      btn.id = 'carepoint-capabilities-btn';
      btn.type = 'button';
      btn.className = 'hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-primary text-xs font-semibold transition-all border border-outline-variant/30 cursor-pointer shadow-2xs mr-2';
      btn.title = `Explore ${roleTitle} Capabilities (Ctrl+K)`;
      btn.innerHTML = `
        <span class="material-symbols-outlined text-[16px] text-primary">search</span>
        <span>Find in ${escapeHtml(roleTitle.split(' ')[0])}</span>
        <kbd class="px-1.5 py-0.5 rounded bg-surface-container-lowest text-[10px] font-mono font-bold text-on-surface-variant border border-outline-variant/40">Ctrl K</kbd>
      `;
      btn.onclick = openCapabilitiesModal;
      headerRight.prepend(btn);
    }
  }

  injectHeaderTrigger();

  // Delegated click listener for any element with data-open-capabilities
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('#carepoint-capabilities-btn, [data-open-capabilities], .carepoint-capabilities-trigger');
    if (trigger) {
      e.preventDefault();
      e.stopPropagation();
      openCapabilitiesModal();
    }
  });

  // Expose globally
  window.openCarepointCapabilitiesModal = openCapabilitiesModal;
  window.closeCarepointCapabilitiesModal = closeCapabilitiesModal;

  console.log(`[Carepoint Security] Sandboxed Capabilities Discovery initialized for: ${role} on page ${activePage} (Ctrl+K ready)`);
}

// =============================================================================
// CAREPOINT SAFE ACTION ENGINE (Two-Step Confirmation for High-Stakes Actions)
// Prevents accidental emergency lockdowns, fee overwrites, or destructive actions
// =============================================================================

export function initCarepointSafeActionEngine() {
  if (typeof document === 'undefined') return;

  let backdrop = document.getElementById('carepoint-safe-action-backdrop');
  let container = document.getElementById('carepoint-safe-action-container');

  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'carepoint-safe-action-backdrop';
    backdrop.className = 'fixed inset-0 bg-primary/70 backdrop-blur-xs z-[120] hidden transition-opacity duration-200';
    document.body.appendChild(backdrop);
  }

  if (!container) {
    container = document.createElement('div');
    container.id = 'carepoint-safe-action-container';
    container.className = 'fixed inset-0 z-[121] flex items-center justify-center p-4 overflow-y-auto hidden';
    document.body.appendChild(container);
  }

  function closeSafeActionModal() {
    backdrop.classList.add('hidden');
    container.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function openSafeActionModal({
    title = 'Confirm Critical Action',
    subtitle = 'Safety & Operational Verification',
    warning = 'Are you sure you want to proceed with this high-impact action?',
    actionLabel = 'Confirm Action',
    cancelLabel = 'Cancel & Keep Normal',
    isDestructive = true,
    onConfirm = null
  }) {
    const sTitle = escapeHtml(title);
    const sSubtitle = escapeHtml(subtitle);
    const sWarning = escapeHtml(warning);
    const sActionLabel = escapeHtml(actionLabel);
    const sCancelLabel = escapeHtml(cancelLabel);

    container.innerHTML = `
      <div class="bg-surface-container-lowest rounded-2xl max-w-md w-full p-6 shadow-2xl border ${isDestructive ? 'border-red-200' : 'border-amber-200'} flex flex-col gap-5 text-on-surface">
        <div class="flex items-start gap-3">
          <div class="w-12 h-12 rounded-2xl ${isDestructive ? 'bg-red-100 text-secondary' : 'bg-amber-100 text-amber-800'} flex items-center justify-center shrink-0 shadow-xs">
            <span class="material-symbols-outlined text-[26px]">${isDestructive ? 'security' : 'warning'}</span>
          </div>
          <div>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${isDestructive ? 'bg-red-50 text-secondary border border-red-200' : 'bg-amber-50 text-amber-800 border border-amber-200'} uppercase tracking-wide">
              Security Verification
            </span>
            <h3 class="font-headline-sm text-lg font-bold text-primary mt-1">${sTitle}</h3>
            <p class="text-xs text-on-surface-variant">${sSubtitle}</p>
          </div>
        </div>

        <div class="p-3.5 rounded-xl ${isDestructive ? 'bg-red-50/70 border border-red-200/60' : 'bg-amber-50/70 border border-amber-200/60'} text-xs text-on-surface leading-relaxed">
          <p class="font-medium">${sWarning}</p>
        </div>

        <div class="flex flex-col gap-2 pt-2 border-t border-surface-container-high">
          <button id="carepoint-confirm-safe-action" type="button" class="w-full py-3 px-4 rounded-xl ${isDestructive ? 'bg-secondary hover:bg-secondary-container text-on-secondary' : 'bg-primary hover:bg-primary-container text-on-primary'} font-label-md text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]">
            <span class="material-symbols-outlined text-[18px]">verified</span>
            <span>${sActionLabel}</span>
          </button>
          <button id="carepoint-cancel-safe-action" type="button" class="w-full py-2.5 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-xs font-semibold transition-colors cursor-pointer">
            ${sCancelLabel}
          </button>
        </div>
      </div>
    `;

    backdrop.classList.remove('hidden');
    container.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    document.getElementById('carepoint-cancel-safe-action').onclick = closeSafeActionModal;
    document.getElementById('carepoint-confirm-safe-action').onclick = () => {
      closeSafeActionModal();
      if (typeof onConfirm === 'function') {
        onConfirm();
      }
    };
  }

  backdrop.onclick = closeSafeActionModal;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !container.classList.contains('hidden')) {
      closeSafeActionModal();
    }
  });

  // Intercept high-stakes button clicks automatically (Capture phase to prevent accidental premature execution)
  document.addEventListener('click', (e) => {
    // Check if event was intentionally bypassed after modal confirmation
    if (e.target.closest('[data-safe-bypass="true"]')) return;

    // 1. Amber alert button at gate
    const amberBtn = e.target.closest('#amber-alert-btn');
    if (amberBtn && !amberBtn.hasAttribute('data-safe-bypass')) {
      e.preventDefault();
      e.stopImmediatePropagation();
      openSafeActionModal({
        title: 'Trigger Security Code Amber Alert',
        subtitle: 'Perimeter Security Incident Protocol',
        warning: 'This will temporarily halt gate turnstiles and dispatch an immediate incident summon to the Security Coordinator and Headmaster or Headteacher.',
        actionLabel: 'Confirm Code Amber Alert',
        isDestructive: false,
        onConfirm: () => {
          amberBtn.setAttribute('data-safe-bypass', 'true');
          amberBtn.click();
          setTimeout(() => amberBtn.removeAttribute('data-safe-bypass'), 600);
          if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
            window.CarepointDemo.showToast('Security Code Amber alert broadcasted. Gate turnstiles paused.', false);
          }
        }
      });
      return;
    }

    // 2. Emergency Lockdown buttons
    const lockdownBtn = e.target.closest('button[onclick*="alert.html"], [data-action="lockdown"], [data-safe-action="lockdown"]');
    if (lockdownBtn && !lockdownBtn.hasAttribute('data-safe-bypass')) {
      e.preventDefault();
      e.stopImmediatePropagation();
      openSafeActionModal({
        title: 'Activate Campus Emergency Lockdown',
        subtitle: 'Level 4 Statutory Emergency Protocol',
        warning: 'This will immediately lock all 4 campus perimeter gates, secure turnstiles, and alert local law enforcement and parents. This is for confirmed campus security emergencies only.',
        actionLabel: 'Confirm Emergency Lockdown',
        isDestructive: true,
        onConfirm: () => {
          window.location.href = '../gate/alert.html';
        }
      });
      return;
    }

    // 3. Sysadmin Emergency Bypass buttons
    const bypassBtn = e.target.closest('button');
    if (bypassBtn && bypassBtn.textContent && bypassBtn.textContent.includes('Emergency Bypass') && !bypassBtn.hasAttribute('data-safe-bypass')) {
      e.preventDefault();
      e.stopImmediatePropagation();
      openSafeActionModal({
        title: 'Activate Emergency Infrastructure Bypass',
        subtitle: 'SysOps Tier 0 Emergency Override',
        warning: 'Bypassing cluster gateway rules disables automated fraud checks and route verification. All transactions will be logged in high-priority tamper-evident audit storage.',
        actionLabel: 'Confirm Emergency Bypass',
        isDestructive: true,
        onConfirm: () => {
          if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
            window.CarepointDemo.showToast('Tier 0 Emergency Bypass authorized. Audit ticket #SEC-BYP-9901 generated.', true);
          }
        }
      });
      return;
    }

    // 4. Generic data-safe-action elements
    const genericSafeEl = e.target.closest('[data-safe-action]');
    if (genericSafeEl && !genericSafeEl.hasAttribute('data-safe-bypass')) {
      e.preventDefault();
      e.stopImmediatePropagation();
      const title = genericSafeEl.getAttribute('data-safe-title') || 'Confirm Critical Action';
      const subtitle = genericSafeEl.getAttribute('data-safe-subtitle') || 'High-Stakes Operation Safety Gate';
      const warning = genericSafeEl.getAttribute('data-safe-warning') || 'Are you sure you want to execute this operation? This will modify campus state.';
      const actionLabel = genericSafeEl.getAttribute('data-safe-label') || 'Confirm & Proceed';
      const isDestructive = genericSafeEl.getAttribute('data-safe-destructive') === 'true';

      openSafeActionModal({
        title,
        subtitle,
        warning,
        actionLabel,
        isDestructive,
        onConfirm: () => {
          genericSafeEl.setAttribute('data-safe-bypass', 'true');
          genericSafeEl.click();
          setTimeout(() => genericSafeEl.removeAttribute('data-safe-bypass'), 600);
        }
      });
      return;
    }
  }, true);

  window.openCarepointSafeActionModal = openSafeActionModal;
  window.closeCarepointSafeActionModal = closeSafeActionModal;

  console.log('[Carepoint] Safe Action Engine initialized with 2-step verification.');
}


// =============================================================================
// CAREPOINT YOUTUBE-STYLE SKELETON LOADING ENGINE
// High-performance GPU-accelerated wave shimmer with zero cumulative layout
// shift (CLS = 0), universal icon/avatar/card/text support, micro-transitions,
// and developer/user preview simulation across all portals.
// =============================================================================

export function initCarepointSkeletonEngine() {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;

  // 1. Ensure CSS Stylesheet / Injected Fallback
  ensureSkeletonStyles();

  // 2. Identify Current Portal Role & Form Factor
  const currentPath = window.location.pathname.toLowerCase();
  let role = (window.__CAREPOINT_HUD__ && window.__CAREPOINT_HUD__.role) || '';
  if (!role) {
    if (currentPath.includes('sysadmin')) role = 'sysadmin';
    else if (currentPath.includes('admin')) role = 'admin';
    else if (currentPath.includes('staff')) role = 'staff';
    else if (currentPath.includes('parent')) role = 'parent';
    else if (currentPath.includes('gate')) role = 'gate';
    else if (currentPath.includes('public')) role = 'public';
    else role = 'portal';
  }
  const isMobile = (window.__CAREPOINT_HUD__ && window.__CAREPOINT_HUD__.isMobile) ||
                   currentPath.includes('mobile-') ||
                   window.innerWidth < 768;

  // 3. Create or Reference the YouTube-Style Overlay
  let overlay = document.getElementById('carepoint-page-skeleton-overlay');
  if (!overlay) {
    overlay = buildSkeletonOverlay(role, isMobile);
    document.body.appendChild(overlay);

    // Initial progressive page load shimmer:
    // Display briefly so user sees YouTube-style shimmer without jarring flash, then fade out smoothly
    const initialDuration = 320;
    setTimeout(() => {
      hideSkeletonOverlay(overlay);
    }, initialDuration);
  }

  // 4. Global API for Programmatic Control & Inspection
  window.CarepointSkeleton = {
    role,
    isMobile,
    isSimulating: false,
    show() {
      let el = document.getElementById('carepoint-page-skeleton-overlay');
      if (!el) {
        el = buildSkeletonOverlay(role, isMobile);
        document.body.appendChild(el);
      }
      el.classList.remove('hidden');
      el.style.opacity = '1';
      el.style.visibility = 'visible';
    },
    hide() {
      const el = document.getElementById('carepoint-page-skeleton-overlay');
      if (el) hideSkeletonOverlay(el);
    },
    toggle() {
      const el = document.getElementById('carepoint-page-skeleton-overlay');
      if (el && !el.classList.contains('hidden') && el.style.opacity !== '0') {
        this.hide();
      } else {
        this.show();
      }
    },
    simulate(durationMs = 1200) {
      this.isSimulating = true;
      this.show();
      if (window.CarepointDemo && typeof window.CarepointDemo.showToast === 'function') {
        window.CarepointDemo.showToast('YouTube-Style Skeleton Loading Active (CLS: 0, 60fps)', true);
      }
      setTimeout(() => {
        this.hide();
        this.isSimulating = false;
      }, durationMs);
    },
    createShimmerElement(type = 'line', extraClasses = '', styles = {}) {
      const el = document.createElement('div');
      el.className = `carepoint-skeleton ${type ? 'carepoint-skeleton-' + type : ''} ${extraClasses}`.trim();
      Object.assign(el.style, styles);
      return el;
    },
    renderYouTubeCard(targetContainer) {
      if (!targetContainer) return;
      const card = document.createElement('div');
      card.className = 'carepoint-skeleton-card';
      card.innerHTML = `
        <div class="carepoint-skeleton carepoint-skeleton-media mb-3"></div>
        <div class="flex items-start gap-3 mt-2">
          <div class="carepoint-skeleton carepoint-skeleton-circle carepoint-skeleton-avatar-md"></div>
          <div class="flex-1">
            <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-75 mb-2"></div>
            <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-50 mb-1"></div>
            <div class="carepoint-skeleton carepoint-skeleton-line-sm carepoint-skeleton-w-25"></div>
          </div>
        </div>
      `;
      targetContainer.appendChild(card);
      return card;
    },
    renderKpiCard(targetContainer) {
      if (!targetContainer) return;
      const card = document.createElement('div');
      card.className = 'carepoint-skeleton-kpi';
      card.innerHTML = `
        <div class="flex items-center justify-between">
          <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-lg"></div>
          <div class="carepoint-skeleton carepoint-skeleton-badge"></div>
        </div>
        <div class="carepoint-skeleton carepoint-skeleton-title carepoint-skeleton-w-50 mt-1"></div>
        <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-75"></div>
      `;
      targetContainer.appendChild(card);
      return card;
    },
    renderTableRows(targetContainer, count = 3) {
      if (!targetContainer) return;
      for (let i = 0; i < count; i++) {
        const row = document.createElement('div');
        row.className = 'carepoint-skeleton-table-row';
        row.innerHTML = `
          <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
          <div class="flex-1">
            <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-50 mb-1"></div>
            <div class="carepoint-skeleton carepoint-skeleton-line-sm carepoint-skeleton-w-25"></div>
          </div>
          <div class="carepoint-skeleton carepoint-skeleton-badge"></div>
        `;
        targetContainer.appendChild(row);
      }
    },
    applyMicroShimmer(el, durationMs = 220) {
      if (!el) return;
      el.classList.add('carepoint-view-loading');
      setTimeout(() => el.classList.remove('carepoint-view-loading'), durationMs);
    }
  };

  // 5. Global Keyboard Shortcut: Ctrl + Shift + S or Cmd + Shift + S
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'S' || e.key === 's')) {
      e.preventDefault();
      window.CarepointSkeleton.simulate(1400);
    }
  });

  // 6. Micro-Shimmer Pulse on Interactive Tab / View Switches
  document.addEventListener('click', (e) => {
    const tabTrigger = e.target.closest(
      'button[role="tab"], .carepoint-soft-tab-group button, [data-tab], [data-view], .tab-btn'
    );
    if (!tabTrigger) return;
    const mainArea = document.querySelector('main, #main-content, .portal-view-container, [role="main"]') || tabTrigger.closest('section, .carepoint-soft-card');
    if (mainArea && !mainArea.classList.contains('carepoint-view-loading')) {
      window.CarepointSkeleton.applyMicroShimmer(mainArea, 240);
    }
  }, true);

  console.log('[Carepoint] YouTube-Style Skeleton Engine active. Press Ctrl+Shift+S to simulate.');
}

function hideSkeletonOverlay(el) {
  if (!el) return;
  el.style.opacity = '0';
  el.style.transition = 'opacity 0.28s cubic-bezier(0.4, 0, 0.2, 1)';
  setTimeout(() => {
    el.classList.add('hidden');
    el.style.visibility = 'hidden';
  }, 290);
}

function ensureSkeletonStyles() {
  if (document.getElementById('carepoint-skeleton-injected-styles')) return;
  const hasRule = Array.from(document.styleSheets).some(sheet => {
    try {
      return Array.from(sheet.cssRules || []).some(rule => rule.selectorText && rule.selectorText.includes('.carepoint-skeleton'));
    } catch (e) {
      return false;
    }
  });
  if (!hasRule) {
    const style = document.createElement('style');
    style.id = 'carepoint-skeleton-injected-styles';
    style.textContent = `
      @keyframes carepoint-skeleton-shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      .carepoint-skeleton {
        display: inline-block;
        position: relative;
        overflow: hidden;
        background-color: #e6eaf0 !important;
        background-image: linear-gradient(90deg, rgba(230,234,240,0.8) 0%, rgba(255,255,255,0.95) 50%, rgba(230,234,240,0.8) 100%) !important;
        background-size: 200% 100% !important;
        animation: carepoint-skeleton-shimmer 1.4s cubic-bezier(0.4,0,0.2,1) infinite !important;
        border-radius: 8px;
        pointer-events: none !important;
        transform: translateZ(0);
      }
      .carepoint-skeleton-circle { border-radius: 9999px !important; aspect-ratio: 1/1; }
      .carepoint-skeleton-icon { display: inline-flex !important; width: 24px; height: 24px; border-radius: 6px !important; }
      .carepoint-skeleton-line { height: 12px; border-radius: 4px; margin-bottom: 8px; display: block; }
      .carepoint-skeleton-title { height: 20px; border-radius: 6px; margin-bottom: 12px; display: block; }
      .carepoint-skeleton-w-25 { width: 25% !important; }
      .carepoint-skeleton-w-50 { width: 50% !important; }
      .carepoint-skeleton-w-75 { width: 75% !important; }
      .carepoint-skeleton-w-full { width: 100% !important; }
      .carepoint-skeleton-card { background: #fff; border-radius: 16px; padding: 20px; border: 1px solid rgba(0,0,0,0.05); }
      .carepoint-skeleton-media { width: 100%; aspect-ratio: 16/9; border-radius: 12px; }
      #carepoint-page-skeleton-overlay {
        position: fixed; inset: 0; z-index: 999998; background: #f7f9ff; display: flex; flex-direction: column;
        overflow: hidden; opacity: 1; pointer-events: all; transition: opacity 0.28s ease, visibility 0.28s ease;
      }
      #carepoint-page-skeleton-overlay.hidden { opacity: 0; pointer-events: none; visibility: hidden; }
    `;
    document.head.appendChild(style);
  }
}

function buildSkeletonOverlay(role, isMobile) {
  const overlay = document.createElement('div');
  overlay.id = 'carepoint-page-skeleton-overlay';
  overlay.setAttribute('aria-hidden', 'true');

  if (isMobile) {
    overlay.innerHTML = `
      <!-- Mobile Top Bar Skeleton -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 20px;background:#ffffff;border-bottom:1px solid #e2e8f0;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
          <div class="carepoint-skeleton carepoint-skeleton-title" style="width:110px;margin-bottom:0;"></div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
          <div class="carepoint-skeleton carepoint-skeleton-circle carepoint-skeleton-avatar-md"></div>
        </div>
      </div>

      <!-- Mobile Content Area -->
      <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:16px;">
        <!-- Greeting Header -->
        <div style="background:#ffffff;border-radius:16px;padding:16px;border:1px solid rgba(0,0,0,0.05);">
          <div class="carepoint-skeleton carepoint-skeleton-title carepoint-skeleton-w-50"></div>
          <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-75"></div>
        </div>

        <!-- Quick Action Pills Row -->
        <div style="display:flex;gap:8px;overflow-x:hidden;">
          <div class="carepoint-skeleton carepoint-skeleton-chip" style="width:80px;"></div>
          <div class="carepoint-skeleton carepoint-skeleton-chip" style="width:95px;"></div>
          <div class="carepoint-skeleton carepoint-skeleton-chip" style="width:85px;"></div>
          <div class="carepoint-skeleton carepoint-skeleton-chip" style="width:75px;"></div>
        </div>

        <!-- KPI 2-Column Grid -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div class="carepoint-skeleton-kpi" style="padding:16px;">
            <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
            <div class="carepoint-skeleton carepoint-skeleton-title carepoint-skeleton-w-50 mt-1"></div>
            <div class="carepoint-skeleton carepoint-skeleton-line-sm carepoint-skeleton-w-75"></div>
          </div>
          <div class="carepoint-skeleton-kpi" style="padding:16px;">
            <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
            <div class="carepoint-skeleton carepoint-skeleton-title carepoint-skeleton-w-50 mt-1"></div>
            <div class="carepoint-skeleton carepoint-skeleton-line-sm carepoint-skeleton-w-75"></div>
          </div>
        </div>

        <!-- YouTube-Style Feed Card -->
        <div class="carepoint-skeleton-card">
          <div class="carepoint-skeleton carepoint-skeleton-media" style="margin-bottom:12px;"></div>
          <div style="display:flex;gap:12px;">
            <div class="carepoint-skeleton carepoint-skeleton-circle carepoint-skeleton-avatar-md"></div>
            <div style="flex:1;">
              <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-75"></div>
              <div class="carepoint-skeleton carepoint-skeleton-line-sm carepoint-skeleton-w-50"></div>
            </div>
          </div>
        </div>

        <!-- Data List Rows -->
        <div class="carepoint-skeleton-card" style="padding:12px 16px;">
          <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.04);">
            <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
            <div style="flex:1;">
              <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-50"></div>
              <div class="carepoint-skeleton carepoint-skeleton-line-xs carepoint-skeleton-w-25"></div>
            </div>
            <div class="carepoint-skeleton carepoint-skeleton-badge"></div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;padding:10px 0;">
            <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
            <div style="flex:1;">
              <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-66"></div>
              <div class="carepoint-skeleton carepoint-skeleton-line-xs carepoint-skeleton-w-33"></div>
            </div>
            <div class="carepoint-skeleton carepoint-skeleton-badge"></div>
          </div>
        </div>
      </div>

      <!-- Mobile Bottom Nav Skeleton -->
      <div style="display:flex;align-items:center;justify-content:space-around;padding:12px;background:#ffffff;border-top:1px solid #e2e8f0;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
          <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
          <div class="carepoint-skeleton carepoint-skeleton-line-xs" style="width:28px;"></div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
          <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
          <div class="carepoint-skeleton carepoint-skeleton-line-xs" style="width:28px;"></div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
          <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
          <div class="carepoint-skeleton carepoint-skeleton-line-xs" style="width:28px;"></div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
          <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
          <div class="carepoint-skeleton carepoint-skeleton-line-xs" style="width:28px;"></div>
        </div>
      </div>
    `;
  } else {
    // Desktop Layout (YouTube / Modern Portal Dashboard)
    overlay.innerHTML = `
      <!-- Desktop Top Nav Header Skeleton -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 28px;background:#ffffff;border-bottom:1px solid #e2e8f0;height:68px;">
        <div style="display:flex;align-items:center;gap:16px;">
          <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
          <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-lg"></div>
          <div class="carepoint-skeleton carepoint-skeleton-title" style="width:140px;margin-bottom:0;"></div>
        </div>
        <div style="width:40%;max-width:480px;">
          <div class="carepoint-skeleton carepoint-skeleton-btn carepoint-skeleton-w-full" style="height:38px;"></div>
        </div>
        <div style="display:flex;align-items:center;gap:14px;">
          <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
          <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
          <div class="carepoint-skeleton carepoint-skeleton-circle carepoint-skeleton-avatar-md"></div>
        </div>
      </div>

      <!-- Desktop Main Layout with Sidebar -->
      <div style="display:flex;flex:1;overflow:hidden;">
        <!-- Sidebar Skeleton -->
        <div style="width:240px;background:#ffffff;border-right:1px solid #e2e8f0;padding:24px 16px;display:flex;flex-direction:column;gap:16px;flex-shrink:0;">
          <div style="display:flex;align-items:center;gap:12px;padding:8px;">
            <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
            <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-66" style="margin-bottom:0;"></div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;padding:8px;">
            <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
            <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-50" style="margin-bottom:0;"></div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;padding:8px;">
            <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
            <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-75" style="margin-bottom:0;"></div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;padding:8px;">
            <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
            <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-50" style="margin-bottom:0;"></div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;padding:8px;">
            <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
            <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-66" style="margin-bottom:0;"></div>
          </div>
          <div style="margin-top:auto;padding:12px;border-top:1px solid rgba(0,0,0,0.05);display:flex;align-items:center;gap:10px;">
            <div class="carepoint-skeleton carepoint-skeleton-circle carepoint-skeleton-avatar-sm"></div>
            <div style="flex:1;">
              <div class="carepoint-skeleton carepoint-skeleton-line-sm carepoint-skeleton-w-75"></div>
              <div class="carepoint-skeleton carepoint-skeleton-line-xs carepoint-skeleton-w-50"></div>
            </div>
          </div>
        </div>

        <!-- Main Content Area -->
        <div style="flex:1;overflow-y:auto;padding:16px 24px;display:flex;flex-direction:column;gap:12px;">
          <!-- Header and Action Pills -->
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div>
              <div class="carepoint-skeleton carepoint-skeleton-title" style="width:200px;margin-bottom:4px;"></div>
              <div class="carepoint-skeleton carepoint-skeleton-line" style="width:140px;margin-bottom:0;"></div>
            </div>
            <div style="display:flex;gap:8px;">
              <div class="carepoint-skeleton carepoint-skeleton-btn" style="width:90px;height:30px;"></div>
              <div class="carepoint-skeleton carepoint-skeleton-btn" style="width:110px;height:30px;"></div>
            </div>
          </div>

          <!-- 4-Card KPI Grid -->
          <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:10px;">
            <div class="carepoint-skeleton-kpi">
              <div class="flex items-center justify-between">
                <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
                <div class="carepoint-skeleton carepoint-skeleton-badge"></div>
              </div>
              <div class="carepoint-skeleton carepoint-skeleton-title carepoint-skeleton-w-50 mt-1"></div>
              <div class="carepoint-skeleton carepoint-skeleton-line-sm carepoint-skeleton-w-75"></div>
            </div>
            <div class="carepoint-skeleton-kpi">
              <div class="flex items-center justify-between">
                <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
                <div class="carepoint-skeleton carepoint-skeleton-badge"></div>
              </div>
              <div class="carepoint-skeleton carepoint-skeleton-title carepoint-skeleton-w-50 mt-1"></div>
              <div class="carepoint-skeleton carepoint-skeleton-line-sm carepoint-skeleton-w-75"></div>
            </div>
            <div class="carepoint-skeleton-kpi">
              <div class="flex items-center justify-between">
                <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
                <div class="carepoint-skeleton carepoint-skeleton-badge"></div>
              </div>
              <div class="carepoint-skeleton carepoint-skeleton-title carepoint-skeleton-w-50 mt-1"></div>
              <div class="carepoint-skeleton carepoint-skeleton-line-sm carepoint-skeleton-w-75"></div>
            </div>
            <div class="carepoint-skeleton-kpi">
              <div class="flex items-center justify-between">
                <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
                <div class="carepoint-skeleton carepoint-skeleton-badge"></div>
              </div>
              <div class="carepoint-skeleton carepoint-skeleton-title carepoint-skeleton-w-50 mt-1"></div>
              <div class="carepoint-skeleton carepoint-skeleton-line-sm carepoint-skeleton-w-75"></div>
            </div>
          </div>

          <!-- Dual Block Layout: YouTube Media Feed + Data Table -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <!-- YouTube-Style Media Content Card -->
            <div class="carepoint-skeleton-card">
              <div class="carepoint-skeleton carepoint-skeleton-title carepoint-skeleton-w-33 mb-3"></div>
              <div class="carepoint-skeleton carepoint-skeleton-media mb-3"></div>
              <div style="display:flex;gap:14px;align-items:flex-start;">
                <div class="carepoint-skeleton carepoint-skeleton-circle carepoint-skeleton-avatar-lg"></div>
                <div style="flex:1;">
                  <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-75 mb-2"></div>
                  <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-50 mb-1"></div>
                  <div class="carepoint-skeleton carepoint-skeleton-line-sm carepoint-skeleton-w-25"></div>
                </div>
              </div>
            </div>

            <!-- Table Rows Card -->
            <div class="carepoint-skeleton-card">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
                <div class="carepoint-skeleton carepoint-skeleton-title carepoint-skeleton-w-33" style="margin-bottom:0;"></div>
                <div class="carepoint-skeleton carepoint-skeleton-chip" style="width:70px;"></div>
              </div>
              <div class="carepoint-skeleton-table-row">
                <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
                <div style="flex:1;">
                  <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-66 mb-1"></div>
                  <div class="carepoint-skeleton carepoint-skeleton-line-sm carepoint-skeleton-w-33"></div>
                </div>
                <div class="carepoint-skeleton carepoint-skeleton-badge"></div>
              </div>
              <div class="carepoint-skeleton-table-row">
                <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
                <div style="flex:1;">
                  <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-50 mb-1"></div>
                  <div class="carepoint-skeleton carepoint-skeleton-line-sm carepoint-skeleton-w-25"></div>
                </div>
                <div class="carepoint-skeleton carepoint-skeleton-badge"></div>
              </div>
              <div class="carepoint-skeleton-table-row">
                <div class="carepoint-skeleton carepoint-skeleton-icon carepoint-skeleton-icon-md"></div>
                <div style="flex:1;">
                  <div class="carepoint-skeleton carepoint-skeleton-line carepoint-skeleton-w-75 mb-1"></div>
                  <div class="carepoint-skeleton carepoint-skeleton-line-sm carepoint-skeleton-w-50"></div>
                </div>
                <div class="carepoint-skeleton carepoint-skeleton-badge"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  return overlay;
}
