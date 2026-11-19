import { useEffect, useState } from "react";
import { site } from "@/data/content";

const links = [
  { href: "#domains", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#resumes", label: "Resumes" },
  { href: "#contact", label: "Contact" },
];

const linkCls = "nav-link relative rounded px-3 py-2 text-sm font-medium text-ink";

const SiteHeader = () => {
  const [activeHref, setActiveHref] = useState("#top");

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .concat(document.querySelector("#top"))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      setActiveHref(visible.target.id === "top" ? "#top" : `#${visible.target.id}`);
    }, { rootMargin: "-20% 0px -65% 0px", threshold: [0.01, 0.1, 0.25] });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
  <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
      <a href="#top" className="font-display text-lg font-semibold">{site.name}</a>
      <nav aria-label="Primary" className="hidden md:flex">
        {links.map((l) => (<a key={l.href} href={l.href} className={`${linkCls}${activeHref === l.href ? " is-active" : ""}`}>{l.label}</a>))}
      </nav>
      <details className="relative md:hidden">
        <summary className="cursor-pointer list-none rounded border border-line px-3 py-2 text-sm font-medium">Menu</summary>
        <nav aria-label="Mobile" className="absolute right-0 mt-2 flex w-48 flex-col rounded-xl border border-line bg-paper p-2 shadow-lg">
          {links.map((l) => (<a key={l.href} href={l.href} className={`${linkCls}${activeHref === l.href ? " is-active" : ""}`}>{l.label}</a>))}
        </nav>
      </details>
    </div>
  </header>
  );
};

export default SiteHeader;
