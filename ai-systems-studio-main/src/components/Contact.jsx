import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle, MapPin, Check, ArrowRight } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: "hello@nova-systems.ai" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/nova" },
  { icon: Github, label: "GitHub", value: "github.com/nova" },
  { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 010-2024" },
  { icon: MapPin, label: "Location", value: "Remote — Global" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    }, 900);
  };

  return (
    <section id="contact" className="section-y relative">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 80% 0%, rgba(242,133,0,0.1), transparent 60%)",
        }}
      />
      <div className="container-x relative grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="inline-flex items-center rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            Contact
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl text-balance">
            Let's build something intelligent.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Tell me about the system you want to build. I'll get back within 24 hours with a plan.
          </p>

          <ul className="mt-10 space-y-3">
            {contactItems.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.li
                  key={c.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass flex items-center gap-4 rounded-2xl p-4 shadow-soft"
                >
                  <div
                    className="grid h-10 w-10 place-items-center rounded-xl"
                    style={{ background: "rgba(58,90,64,0.1)", color: "#3A5A40" }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{c.label}</div>
                    <div className="truncate text-sm font-medium">{c.value}</div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Right form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-6 shadow-soft sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your full name" />
            <Field label="Email" name="email" type="email" placeholder="you@company.com" />
            <Field label="Company" name="company" placeholder="Company name" />
            <Field label="Project Type" name="type" placeholder="Voice AI, Automation…" />
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project…"
              className="w-full resize-none rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-[color:#F28500]/50 focus:ring-4 focus:ring-[color:#F28500]/10"
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading || sent}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-medium text-white transition-all disabled:opacity-90"
            style={{
              background: "linear-gradient(135deg,#F28500,#ff9a2e)",
              boxShadow: "0 20px 40px -20px rgba(242,133,0,0.55)",
            }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.span
                  key="sent"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="flex items-center gap-2"
                >
                  <Check className="h-4 w-4" /> Message sent
                </motion.span>
              ) : loading ? (
                <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  Sending…
                </motion.span>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="flex items-center gap-2"
                >
                  Send Message <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-[color:#F28500]/50 focus:ring-4 focus:ring-[color:#F28500]/10"
      />
    </div>
  );
}
