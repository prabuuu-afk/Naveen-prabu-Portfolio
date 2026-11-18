// ============================================================
// EDIT THIS FILE to add your real details.
// Anything in [square brackets] is a placeholder and is shown on the
// site exactly as written until you replace it.
// ============================================================

export type Domain = "uiux" | "qa";
export const isPlaceholder = (v: string) => v.trim().startsWith("[");

export const site = {
  name: "[Your Name]",
  role: "UI/UX Designer & Software Tester",
  intro: "[Add one or two sentences on how you combine design thinking with testing discipline.]",
  about: "[Write 2–3 sentences about your background and what you enjoy working on.]",
};

export const domains = {
  uiux: {
    label: "UI/UX Design",
    short: "UI/UX",
    blurb: "[Add a one-line description of your UI/UX work.]",
    focus: ["[Add focus area]", "[Add focus area]", "[Add focus area]"],
    solid: "bg-uiux text-white",
    soft: "bg-uiux/10 text-uiux",
    text: "text-uiux",
    border: "border-uiux",
  },
  qa: {
    label: "Software Testing / QA",
    short: "Testing / QA",
    blurb: "[Add a one-line description of your testing work.]",
    focus: ["[Add focus area]", "[Add focus area]", "[Add focus area]"],
    solid: "bg-qa text-white",
    soft: "bg-qa/10 text-qa",
    text: "text-qa",
    border: "border-qa",
  },
} as const;

// Put your two PDFs in /public/resumes/ with EXACTLY these file names.
export const resumes = [
  { domain: "uiux" as Domain, label: "Download UI/UX Resume", href: "/resumes/uiux-resume.pdf", filename: "UIUX-Resume.pdf" },
  { domain: "qa" as Domain, label: "Download Software Testing Resume", href: "/resumes/software-testing-resume.pdf", filename: "Software-Testing-Resume.pdf" },
];

export type Project = {
  id: string;
  domain: Domain;
  name: string;
  summary: string;
  role: string;
  tools: string[];
  image?: string; // e.g. "/projects/my-shot.png" (file in /public/projects/)
  imageAlt?: string;
  outcome?: string; // only add if documented
  link?: string; // live project / case study / prototype
  linkLabel?: string;
};

// Replace these placeholder entries with your real projects. Copy a block to add more.
export const projects: Project[] = [
  { id: "uiux-1", domain: "uiux", name: "[UI/UX project name]", summary: "[Short summary of the project.]", role: "[Your role and contributions]", tools: ["[Tool or method]"] },
  { id: "uiux-2", domain: "uiux", name: "[UI/UX project name]", summary: "[Short summary of the project.]", role: "[Your role and contributions]", tools: ["[Tool or method]"] },
  { id: "qa-1", domain: "qa", name: "[Testing project name]", summary: "[Short summary of the project.]", role: "[Your role and contributions]", tools: ["[Tool or method]"] },
  { id: "qa-2", domain: "qa", name: "[Testing project name]", summary: "[Short summary of the project.]", role: "[Your role and contributions]", tools: ["[Tool or method]"] },
];

export const contacts = [
  { label: "Email", kind: "email", value: "[Your Email]" },
  { label: "LinkedIn", kind: "url", value: "[Your LinkedIn URL]" },
  { label: "GitHub", kind: "url", value: "[Your GitHub URL]" },
];
