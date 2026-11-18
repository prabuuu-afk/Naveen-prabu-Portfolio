import { useState } from "react";
import SiteHeader from "@/components/portfolio/SiteHeader";
import Hero from "@/components/portfolio/Hero";
import Domains from "@/components/portfolio/Domains";
import Projects, { type Filter } from "@/components/portfolio/Projects";
import { About, Resumes, Contact, Footer } from "@/components/portfolio/Info";

const Index = () => {
  const [filter, setFilter] = useState<Filter>("all");
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
