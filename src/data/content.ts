export type Domain = "uiux" | "qa" | "graphic";

export const site = {
  name: "Naveen prabu P",
  role: "UI/UX Designer & Software Tester",
  intro: "UI/UX Designer & Software Tester",
  about: "B.Tech IT student interested in Software Testing & Quality Assurance and UI/UX Design. Skilled in Selenium with Python, Jira, Figma, Photoshop and Canva, with hands-on experience in test automation, web application testing, and interactive prototyping. Aspiring to build reliable and user-friendly digital experiences while learning and growing every day!",
};

export const domains = {
  uiux: {
    label: "UI/UX Design",
    short: "UI/UX",
    blurb: "I design clean, intuitive, and user-friendly digital experiences, focusing on visual consistency, usability, and interactive prototypes.",
    focus: ["Mobile App UI Design", "Wireframing & Prototyping", "Visual Design & Consistency"],
    solid: "bg-uiux text-white",
    soft: "bg-uiux/10 text-uiux",
    text: "text-uiux",
    border: "border-uiux",
  },
  qa: {
    label: "Software Testing / QA",
    short: "Testing / QA",
    blurb: "I focus on ensuring software quality through structured testing, defect identification, and automation using Selenium with Python.",
    focus: ["Manual & Functional Testing", "Test Automation", "Defect Tracking & Documentation"],
    solid: "bg-qa text-white",
    soft: "bg-qa/10 text-qa",
    text: "text-qa",
    border: "border-qa",
  },
  graphic: {
    label: "Graphic Design",
    short: "Graphic Design",
    blurb: "Creating clear visual identities and polished graphic design work.",
    focus: ["Logo Design", "Visual Identity", "Graphic Composition"],
    solid: "bg-uiux text-white",
    soft: "bg-uiux/10 text-uiux",
    text: "text-uiux",
    border: "border-uiux",
  },
} as const;

export const resumes = [
  { domain: "uiux" as Domain, label: "Download UI/UX Resume", href: "/resumes/Naveen_Prabu_UIUX_Resume_.pdf", filename: "Naveen_Prabu_UIUX_Resume.pdf" },
  { domain: "qa" as Domain, label: "Download Software Testing Resume", href: "/resumes/Naveen_Prabu_QA_Resume_.pdf", filename: "Naveen_Prabu_QA_Resume.pdf" },
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

export const projects: Project[] = [
  {
    id: "spotify-android-ui-clone",
    domain: "uiux",
    name: "Spotify Android UI Clone",
    summary: "Designed a Spotify-inspired Android application interface in Figma, recreating the visual layout and user experience with multiple screens, including Splash, Sign Up, Home, Search, and Music Player.",
    role: "UI/UX Designer – independently designed the screens, organized layouts, created reusable UI elements, and developed an interactive prototype.",
    tools: ["Figma", "Auto Layout", "Frames", "Clip Content", "Typography", "Color Systems", "Interactive Prototyping", "Screen Transitions"],
    image: "/Spotify_project.png",
    imageAlt: "Spotify Android UI Clone project",
    outcome: "Created a multi-screen interactive prototype demonstrating application navigation and user flows.",
    link: "https://www.figma.com/design/yPLwtdY8OCGMvuCQGrD0Lo/Spotify-clone?node-id=39-2&t=zjcHPNiAsMCNOLbc-1",
    linkLabel: "View Figma prototype",
  },
  {
    id: "zesto-food-delivery-app",
    domain: "uiux",
    name: "ZESTO – Food Delivery App",
    summary: "Designed an 18-screen food delivery mobile application prototype covering the complete user journey, from onboarding and restaurant discovery to cart, payment, and order tracking.",
    role: "UI/UX Designer – created application screens, organized UI elements, maintained design consistency, and connected screens through interactive navigation flows.",
    tools: ["Figma", "UI Design", "Interactive Prototyping", "Screen Transitions", "Typography", "Color Systems", "Layout Design", "Frames", "Layers"],
    image: "/Zesto_project.png",
    imageAlt: "ZESTO food delivery app project",
    outcome: "Created an interactive 18-screen prototype demonstrating the end-to-end food ordering workflow.",
    link: "https://www.figma.com/design/tLBXyk9z070XM3vL5fuNjv/ZESTO---Food-Delivery-App?node-id=0-1&t=gJxcdbI6KSB5kHXs-1",
    linkLabel: "View Figma prototype",
  },
  {
    id: "college-tech-hub-logo",
    domain: "graphic",
    name: "College Tech Hub Logo Design",
    summary: "Designed a logo for the college's Tech Hub, focusing on creating a visual identity for the technical community.",
    role: "Graphic Designer – independently designed and delivered the final logo.",
    tools: ["Graphic Design", "Visual Design"],
    image: "/SIET_tech_hub.png",
    imageAlt: "College Tech Hub logo design",
    outcome: "Completed and delivered the final logo within a 2-hour deadline.",
    link: "https://drive.google.com/file/d/1K3dQ5eEE7DtiLMzZPjzctvy0IBOxf10d/view?usp=drive_link",
    linkLabel: "View logo",
  },
  {
    id: "parabank-selenium-automation",
    domain: "qa",
    name: "ParaBank Selenium Automation Framework",
    summary: "Developed a Selenium automation suite using Python for ParaBank, a demo banking web application. Automated seven modules: Login, Registration, Fund Transfer, Bill Payment, Accounts Overview, Find Transactions, and Profile Update.",
    role: "Independent QA Automation Tester – developed separate automation scripts for each module, implemented dynamic waits, designed assertions, and investigated automation failures.",
    tools: ["Python", "Selenium WebDriver", "XPath", "Explicit Waits", "Custom Dynamic Waits", "Assertions", "Git", "GitHub"],
    outcome: "Successfully executed and documented test runs for all seven modules. Resolved element ID mismatches and timing-related issues.",
    link: "https://github.com/prabuuu-afk/ParaBank-Selenium-Automation-Framework",
    linkLabel: "View on GitHub",
  },
  {
    id: "orangehrm-manual-testing",
    domain: "qa",
    name: "OrangeHRM Manual Testing Project",
    summary: "Performed manual testing of the Login module of OrangeHRM, an HR management web application. Designed 20 test scenarios and 10 detailed test cases covering functional, negative, edge-case, and UI testing.",
    role: "QA Tester – designed test scenarios and test cases, executed test cases, compared actual and expected results, reported defects, and prepared a formal test summary report.",
    tools: ["Jira", "Google Sheets", "Brave Browser", "Functional Testing", "Negative Testing", "Edge-Case Testing", "UI Testing", "Defect Reporting"],
    outcome: "Recorded a 100% test case pass rate in the test summary report and documented a security enhancement recommendation.",
    link: "https://github.com/prabuuu-afk/OrangeHRM-Manual-Testing-Project",
    linkLabel: "View on GitHub",
  },
  {
    id: "katomaran-tichi-qa",
    domain: "qa",
    name: "Katomaran QA Technical Assignment – Tichi App",
    summary: "Performed end-to-end manual testing of a job-platform application as part of a 48-hour QA internship assignment. Created and executed 41 test cases across Sign Up, Sign In, and Forgot Password modules.",
    role: "QA Tester – independently designed test cases, performed functional and exploratory testing, identified defects, and documented bug reports with reproduction steps and screenshots.",
    tools: ["Jira", "Functional Testing", "Exploratory Testing", "Negative Testing", "Test Case Design", "Defect Reporting", "Screenshot Evidence"],
    outcome: "Achieved an 80.5% test case pass rate and independently identified 8 defects, including an email validation bypass and password rule enforcement gaps.",
    link: "https://github.com/prabuuu-afk/Katomaran_QA_Drive_Tasks",
    linkLabel: "View on GitHub",
  },
];

export const contacts = [
  { label: "Email", kind: "email", value: "naveenprabupanneer@gmail.com", display: "naveenprabupanneer@gmail.com" },
  { label: "LinkedIn", kind: "url", value: "https://www.linkedin.com/in/naveen-prabu-p-8b4a78413/", display: "Naveen Prabu P" },
  { label: "GitHub", kind: "url", value: "https://github.com/prabuuu-afk", display: "prabuuu-afk" },
];
