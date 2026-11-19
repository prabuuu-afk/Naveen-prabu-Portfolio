import { domains, type Domain } from "@/data/content";

const Domains = ({ onPick }: { onPick: (d: Domain) => void }) => (
  <section id="domains" aria-labelledby="domains-h" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 md:py-20">
    <h2 id="domains-h" className="font-display text-3xl font-semibold">Design, testing, and visual identity</h2>
    <p className="mt-2 max-w-2xl text-muted">Creating digital experiences, visual identities, and testing that products work reliably.</p>
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {(Object.keys(domains) as Domain[]).map((k, index) => {
        const d = domains[k];
        return (
          <article
            key={k}
            className={`domain-card reveal rounded-2xl border-t-4 bg-white p-6 shadow-sm ${d.border}`}
            data-reveal
            style={{ "--reveal-delay": `${index * 60}ms` }}
          >
            <h3 className={`font-display text-2xl font-semibold ${d.text}`}>{d.label}</h3>
            <p className="mt-2 text-muted">{d.blurb}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
              {d.focus.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
            <a href="#projects" onClick={() => onPick(k)} className={`mt-6 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${d.solid}`}>
              See {d.short} projects
            </a>
          </article>
        );
      })}
    </div>
  </section>
);

export default Domains;
