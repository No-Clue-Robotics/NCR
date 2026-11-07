# No Clue Robotics (NCR #30647) — Official Website

Official static web platform for **No Clue Robotics (N.C.R — FTC Team #30647)**, Indonesia's first independent, community-based youth robotics organization competing in the **FIRST® Tech Challenge (FTC) DECODE™ 2025–2026** season.

> *"We believe that creativity doesn't always start with a plan, sometimes it starts with curiosity, randomness, and mistakes. No Clue, No Limit."*

---

## Overview

Founded in November 2025 in Cimanggis, Depok, West Java (under the **Yayasan Indonesia FIRST Robotik** ecosystem), **No Clue Robotics (#30647)** unites **11 high school students across different schools and cities** with **3 experienced robotics mentors**.

Unlike conventional school-bound robotics clubs, NCR operates on an open-community model—combining competitive robotics engineering with open STEM outreach, hands-on workshops, and digital technology education.

### Verified Track Record (FTC Nusantara Championship 2025–2026)
- **Inspire Award — 2nd Winner**: Recognized for overall excellence across engineering design, technical portfolio documentation, team collaboration, and community outreach at Universitas Indonesia.
- **Winning Alliance — 1st Team Selected (`#30647`)**: Seeded **#3 in Qualification Rounds** and selected as the **First Pick** partner by Alliance 1 Captain (`#17517 ULT`), winning the championship playoffs (including a **253 – 100** victory in Playoff Match 11 with **0 fouls**).

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/) (exclusively)

---

## Key Features & Sections

- **Bilingual Support (`ID` / `EN`)**: Defaults to **Bahasa Indonesia (`ID`)** with an instant toggle to **English (`EN`)** in the navigation bar for international and Houston sponsorship outreach.
- **Hero Showcase**: Interactive viewport switching between live FTC field action photography, the full squad award portrait, and the custom 3D CAD assembly of Robot `#30647`.
- **About NCR**: Editorial narrative (*Beyond School Boundaries*), Vision & 4 Mission Pillars toward Golden Indonesia 2045, official Pit Banner philosophy quote, and verified leadership roster.
- **FTC `#30647` Engineering Inspector**: Interactive 3D CAD & physical hardware inspector (*Isometric CAD*, *Field Action*, *Rear Drivetrain & Sponsor Panel CAD*, and *Actual Pit Hardware*), alongside subsystem breakdowns for **Mechanical & 3D CAD**, **Electrical & REV Control Hub**, and **Autonomous Vision & TeleOp (*"In Code We Trust"*)**.
- **Journey, Achievements & Programs**: Photographic proof of the *Inspire Award 2nd Winner* and *Winning Alliance* honors, a 4-phase engineering roadmap, and NCR's 4 community impact programs.
- **Authentic Photography Gallery**: Category-filterable visual archive (`Robot & Engineering`, `FTC Arena`, `Awards & Squad`, `Pit & Workshop`) with a keyboard-accessible Lightbox modal.
- **Partnership & Contact**: Overview of negotiable sponsorship tiers (*Bronze*, *Silver*, *Gold*), 3D CAD sponsor livery preview, and verified contact channels.

---

## Project Structure

```text
ncr_web/
├── public/
│   └── assets/
│       ├── cad/            # 3D CAD renders of Robot #30647
│       ├── logos/          # Official NCR #30647 & FIRST Tech Challenge DECODE logos
│       └── photos/         # Web-optimized competition, robot, and workshop photography
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar.tsx, Footer.tsx
│   │   ├── sections/       # Hero, About, Ftc, Journey, Gallery, Contact sections
│   │   └── ui/             # NcrLogo.tsx, SectionHeader.tsx
│   ├── data/
│   │   └── ncrData.ts      # Strongly-typed bilingual (ID/EN) content & telemetry data
│   ├── styles/
│   │   └── index.css       # Tailwind v4 theme tokens & restrained glassmorphism utilities
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites
- **Node.js** `>= 20.x`
- **pnpm** `>= 9.x`

### Installation & Local Development

```bash
# Install dependencies
pnpm install

# Start the development server at http://localhost:5173
pnpm run dev
```

### Type Checking & Production Build

```bash
# Run TypeScript type checks
pnpm run lint

# Build production bundle into dist/
pnpm run build

# Preview production build locally
pnpm run preview
```

---

## Official Contact & Links

- **Organization**: No Clue Robotics (N.C.R — FTC Team `#30647`)
- **Foundation**: Yayasan Indonesia FIRST Robotik
- **Workshop Location**: Jl. RTM No. 16, Kel. Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451, Indonesia
- **Lead Mentor**: Muhammad Taufiq (`+62 858-9366-5329`)
- **Team Captain**: Kyara Zahra
- **Secretary & Treasurer**: P. Sahyayodha
- **Email**: [nocluerobotics@gmail.com](mailto:nocluerobotics@gmail.com)
- **Website**: [https://www.nocluerobotics.club](https://www.nocluerobotics.club)
- **TikTok**: [@nocluerobotics30647](https://www.tiktok.com/@nocluerobotics30647)
- **Instagram**: [@nocluerobotics](https://www.instagram.com/nocluerobotics)
- **YouTube**: [@nocluerobotics](https://youtube.com/@nocluerobotics)
- **GitHub**: [No-Clue-Robotics](https://github.com/No-Clue-Robotics)

---

*FIRST® and FIRST® Tech Challenge are registered trademarks of For Inspiration and Recognition of Science and Technology (FIRST).*
