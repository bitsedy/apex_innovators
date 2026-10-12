"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCarepointStore, NotificationItem } from "@/store/useCarepointStore";

export function NotificationCenter() {
  const {
    isNotificationCenterOpen,
    closeNotificationCenter,
    notifications,
    markNotificationRead,
    markAllNotificationsRead,
  } = useCarepointStore();

  const [activeFilter, setActiveFilter] = useState<"all" | "unread" | "urgent">("all");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  if (!isNotificationCenterOpen) return null;

  const unreadCount = notifications.filter((n) => n.isUnread).length;

  const filteredNotifications = notifications.filter((n) => {
    if (activeFilter === "unread") return n.isUnread;
    if (activeFilter === "urgent") return n.priority === "urgent";
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    // Also mark as read when expanded
    markNotificationRead(id);
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    notifications.forEach((n) => {
      allExpanded[n.id] = true;
    });
    setExpandedIds(allExpanded);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  const isAllExpanded =
    filteredNotifications.length > 0 &&
    filteredNotifications.every((n) => expandedIds[n.id]);

  const getCategoryBadgeClass = (category: NotificationItem["category"]) => {
    switch (category) {
      case "Health":
        return "bg-amber-100 text-amber-900 border-amber-300";
      case "Attendance":
        return "bg-sky-100 text-sky-900 border-sky-300";
      case "Academics":
        return "bg-indigo-100 text-indigo-900 border-indigo-300";
      case "Safety":
        return "bg-emerald-100 text-emerald-900 border-emerald-300";
      default:
        return "bg-surface-container-high text-on-surface border-surface-container-highest";
    }
  };

  return (
    <div className="fixed inset-0 z-[999999] flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-200"
        onClick={closeNotificationCenter}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className="relative w-full max-w-md bg-surface-container-lowest h-full shadow-2xl flex flex-col z-10 border-l border-surface-container overflow-hidden animate-in slide-in-from-right duration-250"
        role="dialog"
        aria-modal="true"
        aria-labelledby="notification-center-title"
      >
        {/* Header */}
        <div className="p-space-md border-b border-surface-container-low bg-surface flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
              </div>
              <h2 id="notification-center-title" className="font-headline-sm text-headline-sm text-primary">
                Notifications
              </h2>
              {unreadCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-bold">
                  {unreadCount} New
                </span>
              )}
            </div>
            <button
              onClick={closeNotificationCenter}
              className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
              aria-label="Close notifications"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Only headlines are shown below. <strong>Click any headline</strong> to read the complete details.
          </p>

          {/* Filter Pills & Quick Actions */}
          <div className="flex items-center justify-between gap-2 pt-1 flex-wrap">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setActiveFilter("all")}
                type="button"
                className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm font-bold transition-all ${
                  activeFilter === "all"
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                All ({notifications.length})
              </button>
              <button
                onClick={() => setActiveFilter("unread")}
                type="button"
                className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm font-bold transition-all ${
                  activeFilter === "unread"
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                Unread ({unreadCount})
              </button>
              <button
                onClick={() => setActiveFilter("urgent")}
                type="button"
                className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm font-bold transition-all ${
                  activeFilter === "urgent"
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                Urgent ({notifications.filter((n) => n.priority === "urgent").length})
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={isAllExpanded ? collapseAll : expandAll}
                type="button"
                className="font-label-sm text-label-sm text-primary hover:underline font-bold"
              >
                {isAllExpanded ? "Collapse All" : "Expand All"}
              </button>
              {unreadCount > 0 && (
                <button
                  onClick={markAllNotificationsRead}
                  type="button"
                  className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:underline"
                >
                  Mark read
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Notification List */}
        <div className="flex-1 overflow-y-auto p-space-md flex flex-col gap-space-sm bg-surface">
          {filteredNotifications.length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center text-center text-on-surface-variant gap-2">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant/40">
                notifications_off
              </span>
              <p className="font-body-md text-body-md font-medium">No notifications in this view</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant/70">
                You are all caught up with school updates!
              </p>
            </div>
          ) : (
            filteredNotifications.map((notif) => {
              const isExpanded = !!expandedIds[notif.id];

              return (
                <div
                  key={notif.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    notif.isUnread
                      ? "bg-surface-container-lowest border-primary/20 shadow-sm"
                      : "bg-surface-container-low/60 border-surface-container hover:bg-surface-container-lowest"
                  }`}
                >
                  {/* Headline Header - CLICK TO EXPAND */}
                  <button
                    onClick={() => toggleExpand(notif.id)}
                    type="button"
                    className="w-full p-space-md text-left flex items-start justify-between gap-space-sm cursor-pointer hover:bg-surface-container/50 transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-start gap- space-sm flex-1 min-w-0">
                      {/* Unread indicator */}
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 mt-2 ${
                          notif.isUnread ? "bg-secondary" : "bg-transparent"
                        }`}
                      />

                      <div className="flex-1 min-w-0">
                        {/* Meta Row */}
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-bold border ${getCategoryBadgeClass(
                              notif.category
                            )}`}
                          >
                            {notif.category}
                          </span>
                          {notif.priority === "urgent" && (
                            <span className="px-1.5 py-0.5 rounded bg-error-container text-error text-[10px] font-extrabold uppercase">
                              Urgent
                            </span>
                          )}
                          <span className="text-[12px] text-on-surface-variant">{notif.time}</span>
                        </div>

                        {/* ONLY HEADLINE SHOWN BY DEFAULT */}
                        <h3 className="font-label-lg text-label-lg text-on-surface font-bold leading-snug">
                          {notif.headline}
                        </h3>

                        {!isExpanded && (
                          <div className="mt-1 flex items-center gap-1 text-[11px] text-primary font-semibold">
                            <span>Tap to view details</span>
                            <span className="material-symbols-outlined text-[14px]">expand_more</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0 p-1 text-on-surface-variant">
                      <span
                        className={`material-symbols-outlined text-[20px] transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </div>
                  </button>

                  {/* INFORMATIVE EXPANDED VIEW - REVEALED ON CLICK */}
                  {isExpanded && (
                    <div className="px-space-md pb-space-md pt-1 border-t border-surface-container-low bg-surface-container-lowest flex flex-col gap-2.5 animate-in fade-in duration-150">
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                        {notif.details.fullMessage}
                      </p>

                      <div className="flex flex-col gap-1 p-2.5 rounded-lg bg-surface-container-low text-xs text-on-surface-variant">
                        {notif.details.student && (
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-on-surface-variant">Student / Class:</span>
                            <strong className="text-on-surface">{notif.details.student}</strong>
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-on-surface-variant">From:</span>
                          <span className="text-on-surface font-semibold">{notif.details.sender}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between gap-2 pt-1">
                        {notif.details.actionLabel && notif.details.actionHref ? (
                          <Link
                            href={notif.details.actionHref}
                            onClick={closeNotificationCenter}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm font-bold transition-colors"
                          >
                            <span>{notif.details.actionLabel}</span>
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                          </Link>
                        ) : (
                          <span />
                        )}

                        <button
                          onClick={() => toggleExpand(notif.id)}
                          type="button"
                          className="px-2.5 py-1 text-xs text-on-surface-variant hover:text-on-surface font-medium"
                        >
                          Close Details
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-surface-container-low bg-surface flex items-center justify-between text-xs text-on-surface-variant">
          <span>Carepoint Notification Center</span>
          <button
            onClick={closeNotificationCenter}
            type="button"
            className="font-bold text-primary hover:underline"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
