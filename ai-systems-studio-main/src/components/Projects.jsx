import { motion } from "framer-motion";
import { projects } from "../data/site";

export default function Projects() {
  return (
    <section id="projects" className="section-y relative">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground">
              Selected Work
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Projects & case studies.</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Real systems live in production. Below is a snapshot of what they do and the impact they've delivered.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(260px,auto)] grid-cols-1 gap-5 md:grid-cols-6">
          {projects.map((p, i) => {
            const span =
              p.size === "lg"
                ? "md:col-span-4"
                : p.size === "md"
                ? "md:col-span-2"
                : "md:col-span-2";
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.9 }}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl p-6 text-white shadow-soft ${span}`}
                style={{
                  background:
                    "linear-gradient(135deg, #1a1a1a 0%, #232628 60%, #2b2f2c 100%)",
                }}
              >
                {/* subtle particles */}
                <div className="pointer-events-none absolute inset-0 opacity-40">
                  {Array.from({ length: 20 }).map((_, k) => (
                    <span
                      key={k}
                      className="absolute h-1 w-1 rounded-full bg-white/40"
                      style={{
                        top: `${(k * 37) % 100}%`,
                        left: `${(k * 53) % 100}%`,
                        opacity: 0.3 + (k % 5) * 0.1,
                      }}
                    />
                  ))}
                </div>
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, rgba(242,133,0,0.35), transparent 70%)" }}
                />

                <div className="relative flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/70 backdrop-blur">
                    {p.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] text-emerald-300">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    live
                  </span>
                </div>

                <h3 className="relative mt-5 font-display text-2xl font-semibold">{p.title}</h3>
                <p className="relative mt-2 max-w-md text-sm text-white/60">{p.description}</p>

                <div className="relative mt-auto pt-6">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                    <div className="mb-2 flex items-center gap-2 text-[10px] font-mono text-white/50">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                      response.json
                    </div>
                    <pre className="overflow-x-auto text-[11px] leading-relaxed text-white/80 font-mono">
{JSON.stringify(p.json, null, 2)}
                    </pre>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
