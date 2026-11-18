import { site, domains } from "@/data/content";
import ResumeButtons from "./ResumeButtons";

const Hero = () => (
  <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr] md:py-28">
    <div>
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted">
        <span className={domains.uiux.text}>UI/UX Design</span> + <span className={domains.qa.text}>Software Testing</span>
      </p>
      <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">{site.name}</h1>
      <p className="mt-3 font-display text-xl text-ink sm:text-2xl">{site.role}</p>
      <p className="mt-5 max-w-xl text-base leading-7 text-muted">{site.intro}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper hover:opacity-90">View projects</a>
        <a href="#contact" className="inline-flex rounded-full border border-ink px-5 py-3 text-sm font-semibold hover:bg-ink hover:text-paper">Get in touch</a>
      </div>
      <div className="mt-6"><ResumeButtons /></div>
    </div>
    <div aria-hidden="true" className="relative mx-auto hidden h-64 w-64 md:block">
      <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-uiux opacity-90" />
      <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-qa opacity-90 mix-blend-multiply" />
    </div>
  </section>
);

export default Hero;
