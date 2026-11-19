import { useEffect, useState } from "react";
import SiteHeader from "@/components/portfolio/SiteHeader";
import Hero from "@/components/portfolio/Hero";
import Domains from "@/components/portfolio/Domains";
import Projects, { type Filter } from "@/components/portfolio/Projects";
import { About, Resumes, Contact, Footer } from "@/components/portfolio/Info";

const Index = () => {
  const [filter, setFilter] = useState<Filter>("all");
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!revealElements.length) return;

    document.documentElement.classList.add("reveal-ready");

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px" });

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [filter]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Domains onPick={setFilter} />
        <Projects filter={filter} setFilter={setFilter} />
        <About />
        <Resumes />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
