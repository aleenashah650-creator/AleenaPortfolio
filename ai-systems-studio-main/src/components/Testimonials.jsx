import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-y relative">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            Testimonials
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Loved by operators.</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.9 }}
              whileHover={{ y: -4 }}
              className="relative rounded-3xl border border-border/60 bg-white/80 p-8 shadow-soft backdrop-blur-xl"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-secondary" />
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" style={{ color: "#F28500" }} />
                ))}
              </div>
              <p className="mt-5 text-base leading-relaxed text-foreground/85">"{t.review}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="grid h-11 w-11 place-items-center rounded-full font-semibold text-white"
                  style={{ background: "linear-gradient(135deg,#3A5A40,#A3B18A)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
