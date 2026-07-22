import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { navLinks } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`glass flex w-full max-w-[1280px] items-center justify-between rounded-full px-4 py-2.5 transition-all sm:px-6 ${
          scrolled ? "shadow-soft" : ""
        }`}
        style={{
          background: "rgba(255,255,255,0.55)",
          border: "1px solid rgba(255,255,255,0.6)",
        }}
      >
        <a href="#home" className="flex items-center gap-2 pl-1">
          <div
            className="grid h-8 w-8 place-items-center rounded-xl"
            style={{ background: "linear-gradient(135deg,#3A5A40,#A3B18A)" }}
          >
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-display text-base font-semibold tracking-tight">
            Aleena Shah<span style={{ color: "#F28500" }}>.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/60 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg,#F28500,#ff9a2e)",
              boxShadow: "0 10px 30px -10px rgba(242,133,0,0.5)",
            }}
          >
            Let's Build AI Systems
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-full bg-white/60 lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass absolute inset-x-4 top-20 rounded-3xl p-6 shadow-soft lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm hover:bg-white/60"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full px-5 py-3 text-center text-sm font-medium text-white"
                style={{ background: "linear-gradient(135deg,#F28500,#ff9a2e)" }}
              >
                Let's Build AI Systems
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
