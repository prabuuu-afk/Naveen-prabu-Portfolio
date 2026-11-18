import { site } from "@/data/content";

const links = [
  { href: "#domains", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#resumes", label: "Resumes" },
  { href: "#contact", label: "Contact" },
];

const linkCls = "rounded px-3 py-2 text-sm font-medium text-ink hover:text-uiux";

const SiteHeader = () => (
  <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
      <a href="#top" className="font-display text-lg font-semibold">{site.name}</a>
      <nav aria-label="Primary" className="hidden md:flex">
        {links.map((l) => (<a key={l.href} href={l.href} className={linkCls}>{l.label}</a>))}
      </nav>
      <details className="relative md:hidden">
        <summary className="cursor-pointer list-none rounded border border-line px-3 py-2 text-sm font-medium">Menu</summary>
        <nav aria-label="Mobile" className="absolute right-0 mt-2 flex w-48 flex-col rounded-xl border border-line bg-paper p-2 shadow-lg">
          {links.map((l) => (<a key={l.href} href={l.href} className={linkCls}>{l.label}</a>))}
        </nav>
      </details>
    </div>
  </header>
);

export default SiteHeader;
