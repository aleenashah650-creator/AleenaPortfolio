import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Mic, Workflow, Database, MessageCircle, Zap } from "lucide-react";
import { heroMetrics } from "../data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.1 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 mesh-bg" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(163,177,138,0.35), transparent 60%)" }}
      />
      <div
        className="pointer-events-none absolute right-0 top-40 h-[400px] w-[400px] rounded-full blur-3xl animate-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(242,133,0,0.22), transparent 70%)" }}
      />

      <div className="container-x relative grid grid-cols-1 gap-14 lg:grid-cols-[6fr_4fr] lg:items-center">
        {/* Left */}
        <div>
          <motion.div
            initial="hidden" animate="show" custom={0} variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#F28500" }} />
            AI • Automation • No-Code • Low-Code
          </motion.div>

          <motion.h1
            initial="hidden" animate="show" custom={1} variants={fadeUp}
            className="mt-6 font-display text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Building intelligent{" "}
            <span className="relative inline-block">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg,#3A5A40,#A3B18A)" }}
              >
                systems
              </span>
            </span>{" "}
            without limits.
          </motion.h1>

          <motion.p
            initial="hidden" animate="show" custom={2} variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-balance"
          >
            I design and deploy AI-powered automations, voice agents, workflows, and enterprise-grade no-code systems using modern AI technologies.
          </motion.p>

          <motion.div
            initial="hidden" animate="show" custom={3} variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg,#F28500,#ff9a2e)",
                boxShadow: "0 20px 40px -20px rgba(242,133,0,0.55)",
              }}
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-white"
            >
              <Calendar className="h-4 w-4" />
              Schedule a Call
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial="hidden" animate="show" custom={4} variants={fadeUp}
            className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {heroMetrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-3xl font-semibold tracking-tight">{m.value}</div>
                <div className="mt-1 text-xs leading-snug text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - Floating dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[520px] lg:mx-0"
        >
          <div
            className="pointer-events-none absolute -inset-8 rounded-[40px] blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(242,133,0,0.25), transparent 70%)" }}
          />

          {/* Main card */}
          <div className="glass relative rounded-3xl p-5 shadow-soft">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">nova-systems.ai</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <MiniCard icon={<Workflow className="h-4 w-4" />} label="n8n Workflow" value="Active" tone="green" />
              <MiniCard icon={<Mic className="h-4 w-4" />} label="VAPI Agent" value="Live" tone="orange" />
              <MiniCard icon={<Database className="h-4 w-4" />} label="Supabase" value="128k rows" tone="neutral" />
              <MiniCard icon={<Sparkles className="h-4 w-4" />} label="OpenAI" value="gpt-4o" tone="neutral" />
            </div>

            <div className="mt-3 rounded-2xl border border-border/60 bg-white/70 p-3 font-mono text-[11px] leading-relaxed">
              <div className="mb-1 flex items-center gap-1.5 text-muted-foreground">
                <Zap className="h-3 w-3" /> POST /api/agent/invoke
              </div>
              <pre className="text-[10.5px] text-foreground/80">{`{
  "agent": "restaurant-ai",
  "channel": "voice",
  "status": "handled",
  "duration_ms": 42180
}`}</pre>
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-2xl border border-border/60 bg-white/70 px-3 py-2">
              <div className="grid h-8 w-8 place-items-center rounded-xl" style={{ background: "#25D366" }}>
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div className="min-w-0 flex-1 text-xs">
                <div className="font-medium">WhatsApp Automation</div>
                <div className="truncate text-muted-foreground">→ Order #4821 confirmed via AI agent</div>
              </div>
              <span className="text-[10px] text-emerald-600">200 OK</span>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-8 top-8 hidden rounded-2xl px-3 py-2 shadow-soft sm:block"
          >
            <div className="flex items-center gap-2 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">99.8% uptime</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-6 bottom-10 hidden rounded-2xl px-3 py-2 shadow-soft sm:block"
          >
            <div className="text-[10px] font-mono text-muted-foreground">calls_handled</div>
            <div className="text-sm font-semibold">2,451 <span className="text-xs font-normal text-emerald-600">+12%</span></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function MiniCard({ icon, label, value, tone }) {
  const tones = {
    green: "bg-[color:#A3B18A]/15 text-[color:#3A5A40]",
    orange: "bg-[color:#F28500]/12 text-[color:#F28500]",
    neutral: "bg-secondary/50 text-foreground",
  };
  return (
    <div className="rounded-2xl border border-border/60 bg-white/70 p-3">
      <div className={`inline-flex h-7 w-7 items-center justify-center rounded-lg ${tones[tone]}`}>
        {icon}
      </div>
      <div className="mt-2 text-[10px] uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="mt-0.5 text-sm font-semibold">{value}</div>
    </div>
  );
}
