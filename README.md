<div align="center">

# ✦ Tarun Prajapat

### Business Analyst · Data Analyst · Insight Builder

<p>
  A premium 3D portfolio built to present analytical thinking, business analysis practice, and a growing body of data-driven work.
</p>

<p>
  <a href="https://github.com/your-username/tarun-prajapat-portfolio"><img src="https://img.shields.io/badge/GitHub-Portfolio-070A12?style=for-the-badge&logo=github&logoColor=F3C982" alt="GitHub repository" /></a>
  <a href="https://your-live-demo-url.com"><img src="https://img.shields.io/badge/Live%20Demo-Visit-61E7E1?style=for-the-badge&logo=vercel&logoColor=070A12" alt="Live demo" /></a>
  <a href="mailto:your.email@example.com"><img src="https://img.shields.io/badge/Contact-Connect-9C8CFF?style=for-the-badge&logo=gmail&logoColor=FFFFFF" alt="Contact" /></a>
</p>

<p>
  <strong>Designed in midnight navy with champagne, cyan, amethyst, and coral accents.</strong><br />
  Crafted for clarity, interaction, and professional impact.
</p>

</div>

---

## ✦ About the Project

This repository contains the personal portfolio of **Tarun Prajapat**, a fresher focused on **Business Analysis** and **Data Analysis**. The site is designed to communicate more than a list of tools. It presents a working mindset: ask better questions, structure ambiguity, analyze the signal, and communicate a clear next move.

The experience combines a dark editorial interface with animated 3D data visuals, glassmorphic panels, smooth motion, responsive layouts, and structured sections for skills, projects, education, certificates, and contact.

> **Portfolio idea:** Clarity from complexity.

---

## ✧ Why This Portfolio Stands Out

| Area | What it demonstrates |
| --- | --- |
| **3D visual direction** | A persistent Three.js data universe and an interactive analytics core create depth without hiding the content. |
| **Business analysis focus** | Requirement gathering, BRD, FRD, Agile, Scrum, Jira, process mapping, and stakeholder thinking are presented as practical capabilities. |
| **Data analysis focus** | SQL, MySQL, Power BI, Excel, KPI design, dashboarding, and data storytelling are structured around business outcomes. |
| **Interaction design** | Motion, hover depth, animated charts, custom cursor treatment, glass panels, and responsive navigation make the experience feel alive. |
| **Recruiter-friendly structure** | The most important information is easy to scan: positioning, skills, selected work, education, certificates, and contact. |

---

## ✦ Current Sections

- **Hero** — clear positioning, availability status, core 3D visual, and primary calls to action.
- **About** — analytical mindset, working principles, and professional direction.
- **Skills** — analytics, business analysis, and delivery capabilities.
- **Projects** — five practice case studies with outcome-style metrics and visual mini-charts.
- **Working Rhythm** — a concise process from listening to communicating.
- **Education** — academic background and learning direction.
- **Certificates** — credential cards ready for real certificate details.
- **Contact** — email, phone, social links, and a contact form placeholder.

Some project, education, certificate, and contact values are intentionally placeholder content and should be replaced before publishing publicly.

---

## ✦ Tech Stack

### Frontend

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=0B0D12)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=FFFFFF)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=FFFFFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=FFFFFF)

### 3D, Motion, and UI

![Three.js](https://img.shields.io/badge/Three.js-0.186-FFFFFF?style=flat-square&logo=threedotjs&logoColor=000000)
![React Three Fiber](https://img.shields.io/badge/React_Three_Fiber-9-61E7E1?style=flat-square&logo=react&logoColor=070A12)
![Drei](https://img.shields.io/badge/Drei-10-9C8CFF?style=flat-square&logo=three.js&logoColor=FFFFFF)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF9A76?style=flat-square&logo=framer&logoColor=FFFFFF)
![Lucide](https://img.shields.io/badge/Lucide_Icons-FFFFFF?style=flat-square&logo=lucide&logoColor=070A12)

### Analyst Toolkit

![MySQL](https://img.shields.io/badge/MySQL- SQL-4479A1?style=flat-square&logo=mysql&logoColor=FFFFFF)
![Power BI](https://img.shields.io/badge/Power_BI-Dashboarding-F2C811?style=flat-square&logo=powerbi&logoColor=111111)
![Microsoft Excel](https://img.shields.io/badge/Excel-Analysis-217346?style=flat-square&logo=microsoftexcel&logoColor=FFFFFF)
![Agile](https://img.shields.io/badge/Agile-Delivery-F3C982?style=flat-square&logoColor=111111)
![Scrum](https://img.shields.io/badge/Scrum-Collaboration-9C8CFF?style=flat-square&logoColor=FFFFFF)
![Jira](https://img.shields.io/badge/Jira-Planning-0052CC?style=flat-square&logo=jira&logoColor=FFFFFF)

---

## ✦ Getting Started

### Prerequisites

Install the following software before running the project:

- **Node.js LTS**, preferably Node.js 20 or newer.
- **npm**, included with Node.js.
- **Visual Studio Code** or another code editor.
- A modern browser such as Chrome, Edge, Firefox, or Safari.

### Clone the Repository

```bash
git clone https://github.com/your-username/tarun-prajapat-portfolio.git
cd tarun-prajapat-portfolio
```

If you downloaded the repository as a ZIP, extract it and open the folder that contains `package.json`.

### Install Dependencies

```bash
npm install --legacy-peer-deps
```

The project already declares its React, Vite, Tailwind CSS, Three.js, React Three Fiber, Drei, Framer Motion, TypeScript, and icon dependencies in `package.json`.

### Start the Development Server

```bash
npm run dev
```

Open the local URL printed in the terminal. It is usually:

```text
http://localhost:3000
```

### Run a Type Check

```bash
npm run check
```

### Create a Production Build

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

---

## ✦ How the 3D Layer Works

Three.js is used through React Three Fiber so that 3D scenes can be composed with React components.

- `Canvas` creates the Three.js rendering surface.
- `useFrame` updates scene rotation and animation on every frame.
- `Float` adds gentle motion without manually animating every object.
- `OrbitControls` allows the hero scene to respond to pointer interaction.
- `mesh`, `geometry`, `material`, and lights create the analytical core and data universe.

The main implementation lives in:

```text
client/src/pages/Home.tsx
```

The project uses two complementary scenes:

1. **Analytics Core** — the interactive 3D hero centerpiece.
2. **Portfolio Universe** — a subtle full-page network of orbit rings and floating data nodes.

The background universe is intentionally toned down on smaller screens to protect readability and performance.

---

## ✦ Project Structure

```text
.
├── client/
│   ├── index.html
│   └── src/
│       ├── components/
│       │   └── ui/
│       ├── contexts/
│       ├── hooks/
│       ├── lib/
│       ├── pages/
│       │   └── Home.tsx
│       ├── App.tsx
│       ├── index.css
│       └── main.tsx
├── server/
│   └── index.ts
├── shared/
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Important Files

| File | Purpose |
| --- | --- |
| `client/src/pages/Home.tsx` | Main portfolio content, 3D scenes, sections, projects, and interactions. |
| `client/src/index.css` | Color system, typography, responsive layout, motion, glass effects, and 3D depth styling. |
| `client/src/App.tsx` | Application shell, theme provider, route setup, and toast provider. |
| `client/index.html` | Page metadata, title, font imports, and document-level configuration. |
| `package.json` | Scripts and dependency definitions. |

---

## ✦ Customization Guide

### Update Personal Information

Open:

```text
client/src/pages/Home.tsx
```

Replace placeholder values such as:

```text
Dummy College of Technology
Dummy Analytics Academy
tarun.prajapat@example.com
+91 99999 99999
```

Update the LinkedIn and GitHub URLs in the contact section before publishing.

### Update Projects

Find the `projects` array in `Home.tsx` and replace each project with real information. A strong project entry should include:

- The business problem.
- The tools used.
- The analysis or requirement work completed.
- The result or measurable outcome.

### Update Skills

Find the `skillGroups` array and keep the grouping focused. Recommended groups are:

- Analytics and dashboarding.
- Business analysis and requirements.
- Agile delivery and collaboration.

### Update Colors

The premium color system is defined in `client/src/index.css`:

| Role | Current direction |
| --- | --- |
| Base | Midnight navy and near-black |
| Primary accent | Champagne gold |
| Technical accent | Electric cyan |
| Depth accent | Amethyst violet |
| Highlight accent | Coral |
| Text | Warm ivory and cool slate |

Use the existing palette consistently instead of introducing many unrelated colors.

---

## ✦ Content Checklist Before Publishing

- [ ] Replace all dummy project content.
- [ ] Add the real college and school information.
- [ ] Add real certificate names, issuers, dates, and verification links.
- [ ] Replace the placeholder email and phone number.
- [ ] Add real LinkedIn and GitHub profile links.
- [ ] Connect the contact form to Formspree, Resend, EmailJS, or a custom API.
- [ ] Add a real resume PDF and connect the resume button.
- [ ] Add project screenshots or dashboard previews.
- [ ] Replace the placeholder live-demo and repository links in this README.
- [ ] Run `npm run check` and `npm run build` before publishing.

---

## ✦ Deployment Options

This is a Vite-based React frontend and can be deployed to services such as:

- **Vercel**
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

For most platforms, the standard settings are:

```text
Build command: npm run build
Output directory: dist
```

If the platform asks for an install command, use:

```text
npm install --legacy-peer-deps
```

---

## ✦ Performance and Accessibility Notes

The portfolio uses animation deliberately, but the main content remains available without depending on the 3D scenes. The CSS includes a `prefers-reduced-motion` rule for visitors who request reduced motion at the operating-system level.

For a production launch, compress any added images, avoid storing large local media files inside `client/public`, and test the site on both a high-resolution desktop and a mid-range mobile device.

---

## ✦ Roadmap

- [ ] Replace all placeholder content with verified personal information.
- [ ] Add case-study detail pages for the five projects.
- [ ] Add real Power BI dashboard screenshots or embedded previews.
- [ ] Add downloadable resume support.
- [ ] Connect the contact form to a real email workflow.
- [ ] Add project filtering by Business Analysis, SQL, Power BI, and Excel.
- [ ] Add a light motion setting for users who prefer a calmer experience.

---

## ✦ Author

**Tarun Prajapat** is a fresher focused on Business Analysis and Data Analysis. His current toolkit includes SQL/MySQL, Power BI, Excel, Agile, Scrum, Jira, BRD, FRD, requirement gathering, process thinking, and stakeholder-oriented communication.

> Interested in an analyst role, a practical project, or a thoughtful conversation about turning information into action? Reach out through the portfolio contact section.

Replace the links below before publishing:

- LinkedIn: `https://www.linkedin.com/in/your-profile`
- GitHub: `https://github.com/your-username`
- Email: `your.email@example.com`

---

## ✦ License

This portfolio is intended for personal and professional presentation. If you reuse the structure or visual direction, please replace the personal branding, content, and project details with your own work.

---

## References

[1]: https://react.dev/ "React documentation"
[2]: https://vite.dev/ "Vite documentation"
[3]: https://threejs.org/docs/ "Three.js documentation"
[4]: https://r3f.docs.pmnd.rs/ "React Three Fiber documentation"
[5]: https://tailwindcss.com/docs "Tailwind CSS documentation"
[6]: https://www.framer.com/motion/ "Motion for React documentation"
[7]: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs "Node.js getting started guide"

<div align="center">

### Built with curiosity, structure, and a little ✦ motion.

</div>
