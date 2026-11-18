import { Download } from "lucide-react";
import { resumes, domains } from "@/data/content";

const ResumeButtons = () => (
  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
    {resumes.map((r) => (
      <a
        key={r.href}
        href={r.href}
        download={r.filename}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${domains[r.domain].solid} hover:opacity-90`}
      >
        <Download size={16} aria-hidden="true" />
        {r.label}
      </a>
    ))}
  </div>
);

export default ResumeButtons;
