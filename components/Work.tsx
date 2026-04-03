import type { Project } from "@/lib/github";

function formatUpdatedAt(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

interface WorkProps {
  projects: Project[];
}

const Work = ({ projects }: WorkProps) => {
  return (
    <section
      id="projects"
      className="flex w-full max-w-6xl flex-col gap-5 rounded-3xl border border-white/12 bg-black/40 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 md:bg-white/10"
    >
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/55">
          Works / Projects
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <p className="max-w-2xl text-sm leading-6 text-white/70">
              Projects I have built and I am working on.
            </p>
          </div>
          <a
            href="https://github.com/Rohit-Pujari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cyan-300 transition-colors hover:text-cyan-200"
          >
            View all on GitHub →
          </a>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.length === 0 && (
          <div className="rounded-2xl border border-white/12 bg-white/14 p-5 text-sm leading-6 text-white/70 md:col-span-2 xl:col-span-3 md:bg-white/10">
            Project data is temporarily unavailable. Check back shortly.
          </div>
        )}

        {projects.map((project) => (
          <article
            key={project.id}
            className="flex min-h-56 flex-col justify-between rounded-2xl border border-white/12 bg-white/14 p-4 transition-colors hover:bg-white/18 sm:min-h-64 sm:p-5 md:bg-white/11 md:hover:bg-white/14"
          >
            <div className="space-y-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1">
                  <h3 className="text-base font-semibold sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Updated {formatUpdatedAt(project.updatedAt)}
                  </p>
                </div>
                <span className="w-fit shrink-0 rounded-full bg-white/8 px-2.5 py-1 text-xs text-white/70">
                  ★ {project.stars}
                </span>
              </div>

              <p className="text-sm leading-6 text-gray-300">
                {project.description}
              </p>

              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 transition-colors hover:text-cyan-200"
              >
                Repository →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
