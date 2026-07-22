import { motion } from "framer-motion";
import { Sparkles, Mic, MessageCircle, Workflow, Database, Compass } from "lucide-react";
import { services } from "../data/site";

const iconMap = { Sparkles, Mic, MessageCircle, Workflow, Database, Compass };

export default function Services() {
  return (
    <section id="services" className="section-y relative">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            Services
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
            Everything you need to ship AI into production.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six focused practices, one senior engineer, delivered end-to-end.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Sparkles;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 0.8 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-white/70 p-7 shadow-soft backdrop-blur-xl transition-shadow hover:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.12)]"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, rgba(242,133,0,0.35), transparent 70%)" }}
                />
                <motion.div
                  whileHover={{ rotate: -6, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="grid h-12 w-12 place-items-center rounded-2xl"
                  style={{ background: "linear-gradient(135deg, rgba(58,90,64,0.12), rgba(163,177,138,0.2))", color: "#3A5A40" }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>

                <div className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-foreground/70 transition-colors group-hover:text-[color:#F28500]">
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
