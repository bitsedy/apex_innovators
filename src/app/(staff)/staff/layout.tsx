"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCarepointStore } from "@/store/useCarepointStore";

export default function StaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  if (pathname.includes("/login")) {
    return <>{children}</>;
  }

  const navItems = [
    { label: "Dashboard", href: "/staff", icon: "grid_view", exact: true },
    { label: "Attendance", href: "/staff/attendance", icon: "fact_check", exact: false },
    { label: "Gradebook", href: "/staff/gradebook", icon: "menu_book", exact: false },
    { label: "Health & Welfare", href: "/staff/health", icon: "medical_services", exact: false },
    { label: "Approvals Engine", href: "/staff/approvals", icon: "verified", badge: "3", exact: false },
    { label: "Timetable & Plans", href: "/staff/timetable", icon: "calendar_month", exact: false },
  ];

  const mobileNavItems = [
    { label: "Home", href: "/staff", icon: "dashboard", exact: true },
    { label: "Attendance", href: "/staff/attendance", icon: "how_to_reg", exact: false },
    { label: "Gradebook", href: "/staff/gradebook", icon: "assignment_turned_in", exact: false },
    { label: "Welfare", href: "/staff/health", icon: "health_and_safety", exact: false },
    { label: "Timetable", href: "/staff/timetable", icon: "schedule", exact: false },
  ];

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface">
      {/* Mobile Backdrop when drawer is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-primary/20 backdrop-blur-xs z-45 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Academic Sidebar (Desktop & Mobile Drawer) */}
      <aside
        className={`fixed left-0 top-0 bottom-0 h-screen max-h-screen w-72 bg-surface-container-lowest z-50 flex flex-col shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-r border-outline-variant/30 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Header with Crest, Title, Motto, Badge, and Top-Right Close Button */}
        <div className="shrink-0 p-4 border-b border-surface-container-high/70 flex flex-col gap-2 relative bg-surface-container-lowest">
          <div className="flex items-center justify-between gap-2">
            <Link href="/staff" className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary font-headline-sm font-bold shadow-xs shrink-0">
                C
              </div>
              <div className="min-w-0">
                <div className="font-headline-sm text-base text-primary font-bold leading-tight tracking-tight truncate">
                  Carepoint
                </div>
                <div className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold truncate">
                  Community School
                </div>
              </div>
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-primary hover:text-secondary hover:bg-secondary/10 transition-all cursor-pointer shrink-0"
              type="button"
              aria-label="Collapse Navigation Sidebar"
              title="Collapse Sidebar"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
          <div className="flex items-center justify-between pt-0.5">
            <span className="font-label-sm text-[10px] tracking-widest text-secondary font-bold">
              MIND • HEART • HANDS
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-high rounded-full w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span className="font-label-sm text-[10px] text-on-surface-variant font-bold tracking-wider">
              STAFF OPERATIONAL PORTAL
            </span>
          </div>
        </div>

        {/* Academic Operations Links (Scrollable middle, flex-1 min-h-0) */}
        <div className="flex-1 min-h-0 overflow-y-auto px-3 py-3">
          <div className="font-label-sm text-[11px] uppercase tracking-wider text-outline px-2 mb-1.5 font-bold">
            Academic Operations
          </div>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors font-label-lg text-label-lg ${
                    isActive
                      ? "bg-primary-container text-on-primary font-bold shadow-xs"
                      : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[20px]">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-label-sm font-label-sm font-bold">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Active Class Assignment Box (Docked at bottom, shrink-0, comfortably padded with breathing room) */}
        <div className="shrink-0 p-3 mx-3 mb-3 rounded-xl bg-surface-container-low flex flex-col gap-1 border border-surface-container-high/80 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider font-bold">
              My Class
            </span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>Active
            </span>
          </div>
          <div className="font-headline-sm text-base text-primary font-bold leading-tight">Sunflower Class</div>
          <div className="font-body-sm text-xs text-on-surface-variant">
            Basic 2 • Academic Lead
          </div>
          <button
            className="mt-1.5 w-full py-1.5 px-3 rounded-lg bg-surface-container-lowest hover:bg-primary hover:text-on-primary text-primary text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs active:scale-[0.98] border border-outline-variant/20"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">swap_horiz</span>
            <span>Change Class</span>
          </button>
        </div>
      </aside>

      {/* Main Layout Area */}
      <div className={`w-full flex flex-col min-h-screen transition-all duration-300 ${isSidebarOpen ? "lg:pl-72" : "pl-0"}`}>
        {/* Fixed Topbar */}
        <header className={`fixed top-0 ${isSidebarOpen ? "lg:left-72" : "left-0"} right-0 h-16 bg-surface/85 backdrop-blur-xl z-40 shadow-[0_1px_8px_rgba(0,0,0,0.04)] px-space-lg flex items-center justify-between border-b border-outline-variant/20 transition-all duration-300`}>
          <div className="flex items-center gap-space-md">
            {!isSidebarOpen && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-1.5 rounded-lg text-primary hover:bg-surface-container-high transition-colors flex items-center justify-center cursor-pointer"
                title="Open Sidebar"
                aria-label="Open Sidebar"
              >
                <span className="material-symbols-outlined text-[24px]">menu</span>
              </button>
            )}
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-low rounded-full">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                Campus: On-Duty (Main Block)
              </span>
            </div>
            <div className="hidden md:inline-flex items-center gap-1.5 px-space-sm py-1 bg-surface-container-low rounded-full text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              <span className="font-label-sm text-label-sm font-medium">
                Term 1, 2026/2027
              </span>
            </div>
          </div>

          <div className="flex items-center gap-space-md">
            <button
              onClick={() => useCarepointStore.getState().openNotificationCenter()}
              className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors cursor-pointer"
              title="Open Notifications"
              aria-label="Notifications"
              type="button"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-secondary text-on-secondary text-[10px] font-bold flex items-center justify-center">
                3
              </span>
            </button>
            <div className="h-8 w-px bg-surface-container-highest"></div>
            <div className="flex items-center gap-space-sm">
              <div className="text-right hidden sm:block">
                <div className="font-label-lg text-label-lg text-on-surface leading-snug">
                  Mrs. Beatrice Abbey
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">
                  Basic 2 Sunflower Lead
                </div>
              </div>
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover shadow-sm"
                src="https://lh3.googleusercontent.com/aida/AEtjO1UcOOFjMJZVJ59Yh3L8LzZiUZO0hEp_GwwTgvCtTnWZfJagO3-7TaJ4bxUgdy1S0Qh8tAD2MH6qGl39TQi65jkrsFxWRv-PuCoY4nMUoIztIr-M-TCSylx_ZDc-MCAG1QUpd-D-vnuiKsvstaH_9Jq_M2glwv__1QoKqT23MMd4t5D_zr35wty3UKyOV57GvEWnMEmNaQqzHhM6qGSpm3xSDR4xv5NwnsbzLg4MTkwc1oa_otpV5DwCDA_KcraFD6DtOcNBhDHiNQ"
              />
              <Link
                href="/staff/login"
                className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                title="Clock-Out / Sign Out"
              >
                <span className="material-symbols-outlined text-[20px]">logout</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Content Viewport */}
        <main className="relative pt-20 w-full px-space-lg pb-24 lg:pb-space-xl bg-surface flex-1">
          {children}
        </main>
      </div>

      {/* Mobile Staff Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(1,21,73,0.06)] border-t border-outline-variant/20">
        <div className="flex justify-around items-center h-16 px-space-xs">
          {mobileNavItems.map((tab) => {
            const isActive = tab.exact
              ? pathname === tab.href
              : pathname.startsWith(tab.href);

            return (
              <Link
                key={tab.label}
                href={tab.href}
                className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] py-1 transition-colors ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                <span className="material-symbols-outlined text-[22px]">
                  {tab.icon}
                </span>
                <span className="font-label-sm text-label-sm">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
