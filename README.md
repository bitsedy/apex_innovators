# apex_innovators

Carepoint Community School — Campus Operating System & Multi-Portal Architecture.

## Overview

A unified school operations and stakeholder engagement platform built for Carepoint Community School, adhering to Ghana NaSIA accredited school safety and operational protocols.

### Portals & Systems

- **Public Site & Admissions**: Responsive community web standard, application wizards, and fee schedule (`prototype/public/`).
- **Parent & Guardian Portal**: Academic performance, student welfare, attendance, and pickup pass verification (`prototype/parent/`).
- **Staff Operations Portal**: Teacher daily control center, attendance taking, gradebook, class scheduler, and approvals (`prototype/staff/`).
- **Executive Administration**: Institutional decisions, admissions review, fee reconciliation, and campus analytics (`prototype/admin/`).
- **Gate Security & Kiosk**: Fast 2-factor QR dismissal scanner, hardware telemetry, custody verification, and turnstile controls (`prototype/gate/`).
- **SysAdmin & Ops Core**: Role provisioning, feature flags, audit logging, and integrations telemetry (`prototype/sysadmin/`).

## Architectural Highlights

- **Soft Simple UI**: Clutter-free design system with rounded pill action controls, low cognitive load, and clean card hierarchy.
- **Single Canonical Controller**: Responsive navigation drawer with seamless desktop docked layout, zero backdrop blur, and isolated mobile overlay support.
- **Safe Action Engine**: Protected two-step confirmation dialogs for high-stakes operational commands.
- **Capabilities Discovery**: Quick system action navigator (`Ctrl + K`).

## Tech Stack

- **Tooling**: Vite, Tailwind CSS, Alpine.js
- **Typography & Icons**: Plus Jakarta Sans, Google Material Symbols Outlined
- **Runtime**: Node.js
