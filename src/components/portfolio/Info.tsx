import { site, contacts } from "@/data/content";
import ResumeButtons from "./ResumeButtons";

const wrap = "mx-auto max-w-6xl scroll-mt-20 px-5 py-16 md:py-24";

export const About = () => (
  <section id="about" aria-labelledby="about-h" className={wrap}>
    <h2 id="about-h" className="font-display text-3xl font-semibold">About</h2>
    <p className="mt-4 max-w-2xl leading-7 text-muted">{site.about}</p>
  </section>
);

export const Resumes = () => (
  <section id="resumes" aria-labelledby="resumes-h" className="scroll-mt-20 bg-ink py-16 text-paper md:py-20">
    <div className="mx-auto max-w-6xl px-5">
      <h2 id="resumes-h" className="font-display text-3xl font-semibold">Resumes</h2>
      <p className="mb-6 mt-2 text-paper/80">Choose the resume that matches the role.</p>
      <ResumeButtons />
    </div>
  </section>
);

export const Contact = () => (
  <section id="contact" aria-labelledby="contact-h" className={wrap}>
    <h2 id="contact-h" className="font-display text-3xl font-semibold">Contact</h2>
    <ul className="mt-6 space-y-3">
      {contacts.map((c) => {
        const href = c.kind === "email" ? `mailto:${c.value}` : c.value;
        return (
          <li key={c.label}>
            <a
              href={href}
              {...(c.kind === "url" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex min-h-11 w-full items-center gap-2 rounded-md px-2 text-uiux underline underline-offset-4 touch-manipulation hover:bg-uiux/10"
            >
              <span className="w-24 font-semibold text-ink">{c.label}</span>
              <span>{c.display}</span>
            </a>
          </li>
        );
      })}
    </ul>
  </section>
);

export const Footer = () => (
  <footer className="border-t border-line py-8 text-center text-sm text-muted">
    © {new Date().getFullYear()} {site.name}
  </footer>
);
