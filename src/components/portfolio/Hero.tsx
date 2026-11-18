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
    <div className="relative mx-auto h-[390px] w-full max-w-[350px] sm:h-[430px] sm:max-w-[390px]">
      <div className="absolute right-2 top-5 h-28 w-28 rounded-full border-[14px] border-uiux/20 sm:h-32 sm:w-32" />
      <div className="absolute bottom-8 left-0 h-36 w-36 rounded-[42%_58%_64%_36%] bg-uiux/90 sm:h-44 sm:w-44" />
      <div className="absolute bottom-0 right-0 h-44 w-44 rounded-[58%_42%_36%_64%] bg-qa/90 sm:h-52 sm:w-52" />
      <div className="absolute inset-x-8 bottom-0 top-4 rotate-3 rounded-[160px_160px_28px_28px] border border-line/90 bg-paper shadow-[0_24px_60px_rgba(26,26,34,0.16)]" />
      <div className="absolute inset-x-11 bottom-3 top-9 overflow-hidden rounded-[145px_145px_24px_24px] border-[5px] border-white bg-[#dfe7ea] shadow-xl">
        <img
          src="/Prabu_photo.jpeg"
          alt="Naveen Prabu P"
          className="h-full w-full object-cover object-[50%_38%]"
        />
      </div>
      <div className="absolute bottom-5 left-2 z-10 rounded-full border border-line bg-paper px-4 py-2 shadow-lg sm:left-0">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-qa" />
        <span className="text-xs font-semibold text-ink">UI/UX + QA</span>
      </div>
      <div className="absolute right-0 top-0 z-10 grid grid-cols-3 gap-1.5 rounded-xl border border-line bg-paper p-3 shadow-md" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} className={`h-1.5 w-1.5 rounded-full ${index % 3 === 0 ? "bg-uiux" : index % 3 === 1 ? "bg-qa" : "bg-line"}`} />
        ))}
      </div>
      <div className="absolute right-1 top-24 z-10 hidden rounded-lg border border-line bg-paper/95 px-3 py-2 shadow-md sm:block">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-qa text-[10px] font-bold text-white">✓</span>
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-wider text-muted">Quality</p>
            <p className="text-xs font-semibold text-ink">Test ready</p>
          </div>
        </div>
      </div>
      <div className="absolute left-[-8px] top-28 z-10 hidden rounded-lg border border-line bg-paper/95 p-2.5 shadow-md sm:block" aria-hidden="true">
        <div className="flex items-end gap-1.5">
          {[12, 18, 10, 22, 16].map((height, index) => (
            <span
              key={index}
              className={`w-2 rounded-t-sm ${index === 3 ? "bg-uiux" : "bg-qa/70"}`}
              style={{ height }}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
