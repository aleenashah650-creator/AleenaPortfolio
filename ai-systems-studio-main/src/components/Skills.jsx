import { motion } from "framer-motion";
import { skillCategories } from "../data/site";

export default function Skills() {
  return (
    <section id="skills" className="section-y relative">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(218,215,205,0.4), transparent 60%)",
        }}
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            Skills
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            A modern, opinionated stack.
          </h2>
          <p className="mt-4 text-muted-foreground">Deep expertise across the tools that ship real AI systems.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.7 }}
              className="rounded-3xl border border-border/60 bg-white/70 p-6 shadow-soft backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">{cat.name}</h3>
                <span className="text-xs text-muted-foreground">{cat.skills.length} tools</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-medium text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-[color:#F28500]/40 hover:text-[color:#F28500]"
                  >
                    {s.name}
                  </span>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1 flex justify-between text-[11px] text-muted-foreground">
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary/70">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg,#3A5A40,#A3B18A)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
