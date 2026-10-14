export interface NavItem {
  id: string;
  label: string;
}
export interface Project {
  title: string;
  description?: string;
  tags: string[];
  href: string;
}
export interface Job {
  period: string;
  role: string;
  company: string;
}
export interface Social {
  label: string;
  href: string;
}

export const profile = {
  name: "Aishwarya Borke",
  city: "India",
  email: "aishwaryaborke4@gmail.com",
  emailLabel: "mail",
  resumeHref: "/Aishwarya_Borke_Frontend_Developer.pdf",
  intro:
    "Frontend developer with 3+ years of experience building responsive, user-focused web apps, primarily in fintech. Looking to join a team using React or Next.js to create impactful products.",
  about:
    "I build responsive, accessible interfaces for fintech and business products. I work closely with designers and backend developers, review code carefully, and care about how a page feels on every device and browser.",
};

export const nav: NavItem[] = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/aishwaryaborke4" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aishwaryaborke/" },
];

export const featured: Project = {
  title: "Personal Portfolio",
  description:
    "Developed a responsive, multi-page personal portfolio using React, TypeScript, and Tailwind CSS, featuring Home, About, Portfolio, Services, and Contact sections with a clean, modern, and user-friendly design.",
  tags: ["React", "REST APIs"],
  href: "#",
};

export const codeLines = [
  [
    { text: "const ", color: "text-pink-400" },
    { text: "skills ", color: "text-white" },
    { text: "= {", color: "text-muted" },
  ],
  [
    { text: "  languages", color: "text-slate-200" },
    { text: ": [", color: "text-muted" },
  ],
  [
    {
      text: '    "JavaScript", "TypeScript", "HTML5", "CSS3",',
      color: "text-sky-300",
    },
  ],
  [{ text: "  ]", color: "text-muted" }],
  [
    { text: "  frameworks", color: "text-slate-200" },
    { text: ": [", color: "text-muted" },
  ],
  [
    {
      text: '    "React.js", "Next.js", "SvelteKit", "Tailwind CSS",',
      color: "text-sky-300",
    },
  ],
  [{ text: '    "SCSS",', color: "text-sky-300" }],
  [{ text: "  ]", color: "text-muted" }],
  [
    { text: "  state", color: "text-slate-200" },
    { text: ": [", color: "text-muted" },
    {
      text: '"Redux", "Redux Toolkit", "Context API"',
      color: "text-sky-300",
    },
    { text: "]", color: "text-muted" },
  ],
  [
    { text: "  api", color: "text-slate-200" },
    { text: ": [", color: "text-muted" },
    {
      text: '"REST APIs", "Axios", "Fetch API"',
      color: "text-sky-300",
    },
    { text: "]", color: "text-muted" },
  ],
  [
    { text: "  design", color: "text-slate-200" },
    { text: ": [", color: "text-muted" },
    {
      text: '"Webflow", "GSAP", "Responsive Design"',
      color: "text-sky-300",
    },
    { text: "]", color: "text-muted" },
  ],
  [
    { text: "  tools", color: "text-slate-200" },
    { text: ": [", color: "text-muted" },
    {
      text: '"Git", "GitHub", "VS Code", "npm", "Vite"',
      color: "text-sky-300",
    },
    { text: "]", color: "text-muted" },
  ],
  [
    { text: "  standards", color: "text-slate-200" },
    { text: ": [", color: "text-muted" },
    {
      text: '"WCAG", "SEO", "Cross-browser"',
      color: "text-sky-300",
    },
    { text: "]", color: "text-muted" },
  ],
  [{ text: "};", color: "text-muted" }],
];

export const experience: Job[] = [
  {
    period: "Aug 2022 — May 2026",
    role: "Frontend Developer",
    company: "Open Financial Technologies, Bengaluru",
  },
  {
    period: "Aug 2021 — Jan 2022",
    role: "HTML Developer",
    company: "Keynote Design Solutions",
  },
];

export const heroCode = [
  [
    { text: "const ", color: "text-[#D4F55A]" },
    { text: "developer ", color: "text-muted" },
    { text: "= {", color: "text-muted" },
  ],
  [
    { text: "  name:", color: "text-muted" },
    { text: '"Aishwarya Borke,"', color: "text-white" },
  ],
  [
    { text: "  role:", color: "text-muted" },
    { text: '"Front-End Developer,"', color: "text-white" },
  ],
  [
    { text: "  skills:", color: "text-muted" },
    { text: " [", color: "text-muted" },
    { text: '"React", "Next.js",', color: "text-white" },
  ],
  [{ text: '    "TypeScript", "JavaScript",', color: "text-white" }],
  [
    { text: '    "HTML", "CSS",', color: "text-white" },
    { text: " ]", color: "text-muted" },
  ],
  [
    { text: "  openToWork:", color: "text-muted" },
    { text: " true", color: "text-[#D4F55A]" },
  ],
  [{ text: "};", color: "text-muted" }],
];
