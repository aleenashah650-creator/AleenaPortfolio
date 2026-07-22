import { motion } from "framer-motion";
import { Briefcase, Cpu, Building2, Trophy } from "lucide-react";

const cards = [
  { icon: Briefcase, label: "Experience", value: "5+ years", desc: "Shipping production AI systems" },
  { icon: Cpu, label: "Technologies", value: "18+", desc: "Across the modern AI stack" },
  { icon: Building2, label: "Industries", value: "12", desc: "Retail, hospitality, finance, health" },
  { icon: Trophy, label: "Achievements", value: "50+", desc: "Systems live in production" },
];

export default function About() {
  return (
    <section id="about" className="section-y relative">
      <div className="container-x grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div
            className="pointer-events-none absolute -inset-6 rounded-[40px] blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(163,177,138,0.35), transparent 70%)" }}
          />
          <div className="glass relative overflow-hidden rounded-3xl p-8 shadow-soft">
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md"
                  style={{
                    background: i % 5 === 0
                      ? "#F28500"
                      : i % 3 === 0
                      ? "#A3B18A"
                      : i % 2 === 0
                      ? "rgba(58,90,64,0.15)"
                      : "rgba(218,215,205,0.6)",
                    opacity: 0.2 + (i % 7) * 0.1,
                  }}
                />
              ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white via-white/70 to-transparent" />

            <div className="relative mt-6 rounded-2xl border border-border/60 bg-white/80 p-4">
              <div className="font-mono text-[11px] text-muted-foreground">// systems.architecture</div>
              <div className="mt-2 flex items-center justify-between">
                <div className="text-sm font-semibold">Agent Orchestration Layer</div>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                  running
                </span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-4/5 rounded-full" style={{ background: "linear-gradient(90deg,#3A5A40,#A3B18A)" }} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right content */}
        <div>
          <span className="inline-flex items-center rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            About Me
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Systems that think, act, and scale.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            I am an AI No-Code / Low-Code Systems Engineer specializing in intelligent automations, AI agents, voice systems,
            workflow orchestration, and scalable business solutions. My expertise lies in transforming complex operational
            processes into seamless AI-powered experiences using tools like n8n, VAPI, OpenAI, Supabase, and modern automation
            ecosystems.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cards.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-5 shadow-soft"
                >
                  <div
                    className="grid h-9 w-9 place-items-center rounded-xl"
                    style={{ background: "rgba(58,90,64,0.1)", color: "#3A5A40" }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-display text-2xl font-semibold">{c.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.desc}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
