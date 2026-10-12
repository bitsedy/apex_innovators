"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
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
    pathname.startsWith("/#contact");

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface flex flex-col">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">

        {/* Main Navbar */}
        <div className="h-20 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-4">
            <Link className="flex items-center gap-3 group" href="/">
              <div className="w-11 h-11 rounded-xl bg-primary text-on-primary flex items-center justify-center font-headline-sm font-bold shadow-sm transition-transform group-hover:scale-105">
                <span className="material-symbols-outlined text-secondary-fixed">school</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">
                    Carepoint
                  </span>
                  <span className="font-label-sm text-label-sm bg-tertiary text-tertiary-fixed px-2 py-0.5 rounded-full uppercase tracking-wider font-bold text-[10px]">
                    Community School
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest text-[10px] font-bold">
                  MIND • HEART • HANDS
                </span>
              </div>
            </Link>

            {/* Navigation links - Strictly max 4 items on the bar with dropdown */}
            <nav className="hidden lg:flex items-center gap-6 h-full">
              {primaryNavLinks.map((link) => {
                const isActive = link.exact
                  ? pathname === link.href
                  : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`h-full flex items-center font-label-lg text-label-lg transition-colors ${
                      isActive
                        ? "text-primary font-bold border-b-2 border-primary"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
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
                  className={`h-full flex items-center gap-1 font-label-lg text-label-lg transition-colors ${
                    isAboutActive
                      ? "text-primary font-bold border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  <span>About Us</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:rotate-180 text-on-surface-variant group-hover:text-primary">
                    expand_more
                  </span>
                </Link>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-[72px] right-0 sm:left-1/2 sm:-translate-x-1/2 w-80 bg-surface-container-lowest/98 backdrop-blur-xl border border-outline-variant/30 rounded-2xl shadow-2xl p-2.5 flex flex-col gap-1 transition-all duration-200 z-50 ${
                    aboutDropdownOpen
                      ? "opacity-100 visible translate-y-0 pointer-events-auto"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
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
            </nav>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <Link
                className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg font-label-lg text-label-lg text-primary bg-surface-container-low hover:bg-surface-container hover:text-primary transition-colors font-medium"
                href="/admissions/apply#status"
              >
                <span className="material-symbols-outlined text-[18px] mr-1.5 text-secondary">fact_check</span>
                Check Status
              </Link>
              <Link
                className="inline-flex items-center px-5 py-2.5 rounded-lg font-label-lg text-label-lg bg-secondary text-on-secondary hover:bg-secondary-container transition-colors shadow-sm font-bold"
                href="/admissions/apply"
              >
                Apply Now
              </Link>
              <Link
                href="/login"
                className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary flex items-center justify-center transition-colors"
                title="Portal Sign-In Hub"
              >
                <span className="material-symbols-outlined text-xl">login</span>
              </Link>
              <button
                type="button"
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-low text-primary hover:bg-surface-container transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                <span className="material-symbols-outlined text-[24px]">menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface/98 backdrop-blur-2xl border-b border-surface-container-high px-6 py-4 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
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
                  <span className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}>
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
        )}
      </header>

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-1">
        {children}
      </main>

      {/* Institutional Footer */}
      <footer className="w-full bg-surface-container-low text-on-surface pt-space-xl pb-space-lg border-t border-outline-variant/30 mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-lg pb-space-xl">
            <div className="lg:col-span-2 flex flex-col gap-space-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center font-headline-sm font-bold shadow-sm">
                  <span className="material-symbols-outlined text-secondary-fixed">school</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    Carepoint Community School
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-bold text-[10px]">
                    MIND • HEART • HANDS
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                Nurturing confident, principled learners from early childhood through junior secondary education with well-rounded academic rigor and character formation.
              </p>
              <div className="flex flex-col gap-1 text-on-surface-variant font-body-sm text-body-sm">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    location_on
                  </span>{" "}
                  Carepoint Boulevard, Community Edu District, Accra, Ghana
                </span>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    phone_in_talk
                  </span>{" "}
                  +233 (0) 24 123 4567 / +233 (0) 20 765 4321
                </span>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    mail
                  </span>{" "}
                  admissions@carepoint.edu.gh
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-space-sm">
              <span className="font-label-lg text-label-lg text-primary uppercase tracking-wider font-bold">
                Academic Tiers
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <Link className="hover:text-primary transition-colors" href="/admissions/apply">
                    Creche &amp; Daycare (6m - 2y)
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="/admissions/apply">
                    Nursery Division (N1 - N2)
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="/admissions/apply">
                    Kindergarten (KG1 - KG2)
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="/admissions/apply">
                    Primary / Basic (B1 - B6)
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="/admissions/apply">
                    Junior High School (JHS1 - JHS3)
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-space-sm">
              <span className="font-label-lg text-label-lg text-primary uppercase tracking-wider font-bold">
                Admissions
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <Link className="hover:text-primary transition-colors" href="/admissions/apply">
                    Admission Guidelines
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="/admissions/apply">
                    Online Application Portal
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="/admissions/apply">
                    Track Application Status
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="/admissions/apply">
                    Tuition &amp; Financial Policy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="/admissions/apply">
                    Book Campus Visit
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-space-sm">
              <span className="font-label-lg text-label-lg text-primary uppercase tracking-wider font-bold">
                Stay Connected
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Receive term schedules, open day alerts, and student enrichment newsletters.
              </p>
              <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input
                    className="w-full px-3 py-2 text-body-sm bg-surface-container-lowest text-on-surface rounded-lg outline outline-1 outline-outline-variant focus:outline-2 focus:outline-primary placeholder:text-outline"
                    placeholder="Enter parent email"
                    type="email"
                  />
                  <button
                    className="mt-2 w-full py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors font-bold shadow-xs"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="pt-space-md border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
              <span>
                Certified by National Schools Inspectorate Authority (NaSIA) &amp; Ghana Ministry of Education
              </span>
            </div>
            <span>© 2026 Carepoint Community School. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
