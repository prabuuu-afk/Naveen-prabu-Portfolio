import { projects, domains, type Domain } from "@/data/content";

export type Filter = "all" | Domain;
const tabs: { id: Filter; label: string }[] = [
  { id: "all", label: "All projects" },
  { id: "uiux", label: "UI/UX Design" },
  { id: "qa", label: "Software Testing / QA" },
];

const Projects = ({ filter, setFilter }: { filter: Filter; setFilter: (f: Filter) => void }) => {
  const shown = projects.filter((p) => filter === "all" || p.domain === filter);
  return (
    <section id="projects" aria-labelledby="projects-h" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 id="projects-h" className="font-display text-3xl font-semibold">Projects</h2>
        <div role="group" aria-label="Filter projects by domain" className="mt-6 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-pressed={filter === t.id}
              onClick={() => setFilter(t.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold ${filter === t.id ? "border-ink bg-ink text-paper" : "border-line bg-paper text-ink hover:border-ink"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {shown.map((p) => {
            const d = domains[p.domain];
            return (
              <article key={p.id} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper">
                {p.image ? (
                  <img src={p.image} alt={p.imageAlt ?? `Screenshot of ${p.name}`} loading="lazy" decoding="async" className="aspect-video w-full object-cover" />
                ) : (
                  <div className={`flex aspect-video items-center justify-center text-sm font-medium ${d.soft}`}>[Add project image]</div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className={`self-start rounded-full px-3 py-1 text-xs font-semibold ${d.solid}`}>{d.label}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{p.summary}</p>
                  <dl className="mt-4 space-y-2 text-sm">
                    <div><dt className="font-semibold">My role</dt><dd className="text-muted">{p.role}</dd></div>
                    <div><dt className="font-semibold">Tools &amp; methods</dt><dd className="mt-1 flex flex-wrap gap-2">{p.tools.map((t, i) => (<span key={i} className="rounded-full border border-line bg-white px-3 py-1 text-xs">{t}</span>))}</dd></div>
                    {p.outcome && <div><dt className="font-semibold">Outcome</dt><dd className="text-muted">{p.outcome}</dd></div>}
                  </dl>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className={`mt-5 inline-flex font-semibold underline ${d.text}`}>
                      {p.linkLabel ?? "View project"}<span className="sr-only"> (opens in a new tab)</span> →
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
