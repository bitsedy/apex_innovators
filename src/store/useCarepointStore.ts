import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Applicant {
  id: string;
  referenceNumber: string;
  wardName: string;
  dob: string;
  classApplyingFor: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string;
  relationship: string;
  status: "Pending" | "More Info Needed" | "Approved" | "Rejected";
  submittedAt: string;
}

export interface AuthorizedGuardian {
  name: string;
  relationship: string;
  phone: string;
  pin: string;
  isPrimary: boolean;
  photoUrl?: string;
}

export type Student = Ward;

export interface Ward {
  id: string;
  name: string;
  studentId: string;
  class: string;
  dob: string;
  admissionDate: string;
  attendanceRate: number;
  photoUrl: string;
  guardians: AuthorizedGuardian[];
  healthAlerts: string[];
}

export interface PickupLogEntry {
  id: string;
  timestamp: string;
  wardName: string;
  guardianName: string;
  relationship: string;
  staffName: string;
  status: "Released" | "Denied" | "Flagged";
  notes?: string;
}

export interface ApprovalItem {
  id: string;
  type: "admission" | "health" | "timetable" | "pickup" | "change_request";
  title: string;
  submittedBy: string;
  submittedAt: string;
  priority: "Urgent" | "High" | "Normal";
  status: "Pending" | "Approved" | "Rejected";
  summary: string;
  recommendation: string;
}

export interface NotificationItem {
  id: string;
  headline: string;
  category: "Health" | "Attendance" | "Academics" | "Safety" | "Notice";
  time: string;
  isUnread: boolean;
  priority?: "urgent" | "normal";
  details: {
    student?: string;
    classRoom?: string;
    sender: string;
    fullMessage: string;
    actionLabel?: string;
    actionHref?: string;
  };
}

interface CarepointState {
  // Current active role
  activeRole: "public" | "parent" | "staff" | "gate" | "admin" | "principal" | "sysadmin";
  setActiveRole: (role: CarepointState["activeRole"]) => void;

  // Notification center drawer
  isNotificationCenterOpen: boolean;
  openNotificationCenter: () => void;
  closeNotificationCenter: () => void;
  toggleNotificationCenter: () => void;
  notifications: NotificationItem[];
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;

  // Teacher clock-in state
  isTeacherClockedIn: boolean;
  clockInTime: string | null;
  clockIn: () => void;

  // Gate scanner & alerts
  isMismatchAlertActive: boolean;
  triggerMismatchAlert: () => void;
  clearMismatchAlert: () => void;
  pickupLogs: PickupLogEntry[];
  recordPickup: (entry: Omit<PickupLogEntry, "id" | "timestamp">) => void;

  // Admissions
  applicants: Applicant[];
  submitAdmission: (data: Omit<Applicant, "id" | "referenceNumber" | "status" | "submittedAt">) => string;
  updateApplicantStatus: (id: string, status: Applicant["status"]) => void;

  // Children / Students
  wards: Ward[];

  // Unified Approvals
  approvals: ApprovalItem[];
  decideApproval: (id: string, status: "Approved" | "Rejected", comment?: string) => void;

  // Reset demo
  resetDemoData: () => void;
}

const INITIAL_APPLICANTS: Applicant[] = [
  {
    id: "app-1",
    referenceNumber: "CP-2026-9041",
    wardName: "Kofi Owusu",
    dob: "2018-05-14",
    classApplyingFor: "Primary 2",
    guardianName: "Kwame Owusu",
    guardianPhone: "+233 24 111 2233",
    guardianEmail: "k.owusu@gmail.com",
    relationship: "Father",
    status: "Pending",
    submittedAt: "Today at 08:30 GMT",
  },
  {
    id: "app-2",
    referenceNumber: "CP-2026-8820",
    wardName: "Ama Serwaa",
    dob: "2016-11-20",
    classApplyingFor: "Primary 4",
    guardianName: "Abena Serwaa",
    guardianPhone: "+233 20 444 5566",
    guardianEmail: "abena.s@yahoo.com",
    relationship: "Mother",
    status: "Pending",
    submittedAt: "Yesterday at 14:15 GMT",
  },
];

const INITIAL_WARDS: Ward[] = [
  {
    id: "ward-1",
    name: "Akua Mansa",
    studentId: "CP-2024-0042",
    class: "Basic 4A",
    dob: "2015-08-12",
    admissionDate: "2024-09-10",
    attendanceRate: 96.4,
    photoUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&h=200&fit=crop&crop=faces",
    guardians: [
      {
        name: "Dr. Mensah Mansa",
        relationship: "Father",
        phone: "+233 24 555 7788",
        pin: "2468",
        isPrimary: true,
      },
      {
        name: "Eunice Mansa",
        relationship: "Mother",
        phone: "+233 20 888 9900",
        pin: "1357",
        isPrimary: false,
      },
    ],
    healthAlerts: ["Mild Peanut Allergy (EpiPen with nurse)"],
  },
];

const INITIAL_APPROVALS: ApprovalItem[] = [
  {
    id: "apr-1",
    type: "health",
    title: "Asthma Care Plan Notice — Child Akua Mansa",
    submittedBy: "Mr. Ebenezer Abbey (Class Teacher 4A)",
    submittedAt: "10:14 GMT",
    priority: "Urgent",
    status: "Pending",
    summary: "Child had shortness of breath after sports. Given prescribed inhaler at clinic. Teacher recommends parent picks up child early.",
    recommendation: "Send medical note to father for early pickup.",
  },
  {
    id: "apr-2",
    type: "admission",
    title: "New Student Intake: Kofi Owusu (Primary 2)",
    submittedBy: "Admissions Intake Desk",
    submittedAt: "08:30 GMT",
    priority: "Normal",
    status: "Pending",
    summary: "Verified birth certificate, previous school report from Morning Star, immunisation records complete.",
    recommendation: "Approve admission and create student record.",
  },
  {
    id: "apr-3",
    type: "timetable",
    title: "Term 2 Midterm Examination Timetable Revision",
    submittedBy: "Academic Board / Mrs. Boateng",
    submittedAt: "Yesterday",
    priority: "High",
    status: "Pending",
    summary: "Shifted Basic 5 Science Practical to Thursday morning to avoid lab double-booking.",
    recommendation: "Approve and publish to staff and parent dashboards.",
  },
];

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "notif-1",
    headline: "Kofi Mensah: Inhaler Reminder at 11:30 AM",
    category: "Health",
    time: "10m ago",
    isUnread: true,
    priority: "urgent",
    details: {
      student: "Kofi Mensah",
      classRoom: "Basic 2 - Sunflower",
      sender: "School Clinic (Nurse Mary)",
      fullMessage: "Kofi needs 2 puffs of his Ventolin inhaler before physical play or outdoor sports. Please ensure he drinks water afterward. His inhaler is in the clinic cabinet labeled #04.",
      actionLabel: "View Clinic Notes",
      actionHref: "/staff/health",
    },
  },
  {
    id: "notif-2",
    headline: "Morning Class Attendance Register Due",
    category: "Attendance",
    time: "25m ago",
    isUnread: true,
    priority: "normal",
    details: {
      student: "Basic 2 Sunflower (28 Students)",
      classRoom: "Sunflower Class Block A",
      sender: "School Office",
      fullMessage: "Morning attendance register closes at 08:30 AM. 28 students are marked present and 1 student is excused. Please review and confirm final head count.",
      actionLabel: "Take Attendance",
      actionHref: "/staff/attendance",
    },
  },
  {
    id: "notif-3",
    headline: "Term 1 Report Card Marks Ready for Review",
    category: "Academics",
    time: "1h ago",
    isUnread: true,
    priority: "normal",
    details: {
      student: "All Sunflower Students",
      classRoom: "Basic 2 Sunflower",
      sender: "Academic Office",
      fullMessage: "End-of-term continuous assessment marks are compiled. 3 English homework marks are still pending entry before reports can be printed.",
      actionLabel: "Open Gradebook",
      actionHref: "/staff/gradebook",
    },
  },
  {
    id: "notif-4",
    headline: "New Afternoon Pickup Pass Created",
    category: "Safety",
    time: "2h ago",
    isUnread: false,
    priority: "normal",
    details: {
      student: "Kofi Mensah",
      classRoom: "Basic 2 - Sunflower",
      sender: "Father (Dr. Nana Mensah)",
      fullMessage: "A single-day pickup pass has been issued for family driver Kwame Boateng (Vehicle: Toyota Corolla GT-4412-24). Phone: +233 24 555 1234. Security code: 8829.",
      actionLabel: "View Security Log",
      actionHref: "/gate",
    },
  },
  {
    id: "notif-5",
    headline: "Parent Emergency Phone Number Changed",
    category: "Notice",
    time: "Yesterday",
    isUnread: false,
    priority: "normal",
    details: {
      student: "Ama Mensah",
      classRoom: "Nursery 1 - Buttercup",
      sender: "Parent Portal",
      fullMessage: "Mother Mrs. Abena Mensah added a new backup emergency phone number: +233 20 888 9900. All class emergency contacts have been refreshed.",
      actionLabel: "View Student Details",
      actionHref: "/parent",
    },
  },
];

const INITIAL_PICKUP_LOGS: PickupLogEntry[] = [
  {
    id: "log-1",
    timestamp: "12:45 GMT",
    wardName: "Akua Mansa (Basic 4A)",
    guardianName: "Dr. Mensah Mansa",
    relationship: "Father",
    staffName: "Officer Osei",
    status: "Released",
    notes: "Verified QR + 4-digit PIN match.",
  },
];

export const useCarepointStore = create<CarepointState>()(
  persist(
    (set, get) => ({
  activeRole: "admin",
  setActiveRole: (role) => set({ activeRole: role }),

  // Notification center
  isNotificationCenterOpen: false,
  openNotificationCenter: () => set({ isNotificationCenterOpen: true }),
  closeNotificationCenter: () => set({ isNotificationCenterOpen: false }),
  toggleNotificationCenter: () => set((state) => ({ isNotificationCenterOpen: !state.isNotificationCenterOpen })),
  notifications: INITIAL_NOTIFICATIONS,
  markNotificationRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) => (n.id === id ? { ...n, isUnread: false } : n)),
    })),
  markAllNotificationsRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, isUnread: false })),
    })),

  isTeacherClockedIn: false,
  clockInTime: null,
  clockIn: () =>
    set({
      isTeacherClockedIn: true,
      clockInTime: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " GMT",
    }),

  isMismatchAlertActive: false,
  triggerMismatchAlert: () => set({ isMismatchAlertActive: true }),
  clearMismatchAlert: () => set({ isMismatchAlertActive: false }),

  pickupLogs: INITIAL_PICKUP_LOGS,
  recordPickup: (entry) =>
    set((state) => ({
      pickupLogs: [
        {
          id: `log-${Date.now()}`,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " GMT",
          ...entry,
        },
        ...state.pickupLogs,
      ],
    })),

  applicants: INITIAL_APPLICANTS,
  submitAdmission: (data) => {
    const ref = `CP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newApplicant: Applicant = {
      id: `app-${Date.now()}`,
      referenceNumber: ref,
      status: "Pending",
      submittedAt: "Just now",
      ...data,
    };
    const newApproval: ApprovalItem = {
      id: `apr-${Date.now()}`,
      type: "admission",
      title: `Intake Application: ${data.wardName} (${data.classApplyingFor})`,
      submittedBy: "Online Public Admissions",
      submittedAt: "Just now",
      priority: "Normal",
      status: "Pending",
      summary: `Applicant from guardian ${data.guardianName} (${data.guardianPhone}). Documents verified.`,
      recommendation: "Review uploaded bio-data and authorize enrollment.",
    };
    set((state) => ({
      applicants: [newApplicant, ...state.applicants],
      approvals: [newApproval, ...state.approvals],
    }));
    return ref;
  },

  updateApplicantStatus: (id, status) =>
    set((state) => ({
      applicants: state.applicants.map((a) => (a.id === id ? { ...a, status } : a)),
    })),

  wards: INITIAL_WARDS,

  approvals: INITIAL_APPROVALS,
  decideApproval: (id, status, comment) =>
    set((state) => ({
      approvals: state.approvals.map((item) =>
        item.id === id
          ? {
              ...item,
              status,
              summary: comment ? `${item.summary} [Decision Note: ${comment}]` : item.summary,
            }
          : item
      ),
    })),

  resetDemoData: () =>
    set({
      isTeacherClockedIn: false,
      clockInTime: null,
      isMismatchAlertActive: false,
      pickupLogs: INITIAL_PICKUP_LOGS,
      applicants: INITIAL_APPLICANTS,
      approvals: INITIAL_APPROVALS,
    }),
  }),
  {
      name: "carepoint-portal-storage",
      partialize: (state) => ({
        activeRole: state.activeRole,
        isTeacherClockedIn: state.isTeacherClockedIn,
        clockInTime: state.clockInTime,
        isMismatchAlertActive: state.isMismatchAlertActive,
        pickupLogs: state.pickupLogs,
        applicants: state.applicants,
        wards: state.wards,
        approvals: state.approvals,
        notifications: state.notifications,
      }),
    }
  )
);
