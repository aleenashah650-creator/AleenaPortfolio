import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";
import { certifications } from "../data/site";

export default function Certifications() {
  const featured = certifications.find((c) => c.featured);
  const rest = certifications.filter((c) => !c.featured);

  return (
    <section id="certifications" className="section-y relative">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            Certifications
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Verified. Recent. Battle-tested.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-6 md:auto-rows-[minmax(180px,auto)]">
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              whileHover={{ y: -6 }}
              className="group relative col-span-1 flex flex-col overflow-hidden rounded-3xl p-8 shadow-soft md:col-span-3 md:row-span-2"
              style={{
                background: "linear-gradient(135deg, rgba(58,90,64,0.08), rgba(163,177,138,0.15))",
                border: "1px solid rgba(58,90,64,0.12)",
              }}
            >
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-40 blur-3xl transition-opacity duration-700 group-hover:opacity-80"
                style={{ background: "radial-gradient(circle, rgba(242,133,0,0.4), transparent 70%)" }}
              />
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" style={{ color: "#3A5A40" }} />
                <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "#3A5A40" }}>
                  Featured
                </span>
              </div>
              <div className="mt-8 font-display text-sm font-medium text-muted-foreground">{featured.org}</div>
              <div className="mt-1 font-display text-3xl font-semibold text-balance">{featured.name}</div>
              <div className="mt-auto flex flex-wrap items-center gap-4 pt-8 text-xs text-muted-foreground">
                <span>Completed {featured.date}</span>
                <span className="font-mono">ID: {featured.id}</span>
                <span
                  className="ml-auto inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium text-white"
                  style={{ background: "#3A5A40" }}
                >
                  <ShieldCheck className="h-3 w-3" /> Verified
                </span>
              </div>
            </motion.div>
          )}

          {rest.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.7 }}
              whileHover={{ y: -4 }}
              className="group relative col-span-1 flex flex-col justify-between rounded-3xl border border-border/60 bg-white/70 p-6 shadow-soft backdrop-blur-xl transition-shadow hover:shadow-[0_30px_60px_-30px_rgba(242,133,0,0.25)] md:col-span-3 lg:col-span-3"
            >
              <div className="flex items-start justify-between">
                <div
                  className="grid h-10 w-10 place-items-center rounded-xl"
                  style={{ background: "rgba(58,90,64,0.1)", color: "#3A5A40" }}
                >
                  <Award className="h-4 w-4" />
                </div>
                <span className="text-[10px] text-muted-foreground">{c.date}</span>
              </div>
              <div className="mt-6">
                <div className="text-xs font-medium text-muted-foreground">{c.org}</div>
                <div className="mt-1 font-display text-lg font-semibold">{c.name}</div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-[10px] text-muted-foreground">
                <span className="font-mono">{c.id}</span>
                <span className="inline-flex items-center gap-1 text-emerald-600">
                  <ShieldCheck className="h-3 w-3" /> verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
