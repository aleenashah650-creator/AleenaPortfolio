import { Sparkles, Linkedin, Github, Twitter } from "lucide-react";
import { navLinks } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-white/60 backdrop-blur">
      <div className="container-x py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2">
              <div
                className="grid h-8 w-8 place-items-center rounded-xl"
                style={{ background: "linear-gradient(135deg,#3A5A40,#A3B18A)" }}
              >
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-display text-base font-semibold">
                Nova<span style={{ color: "#F28500" }}>.</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              AI No-Code / Low-Code Systems Engineer. Turning ideas into intelligent systems that scale.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Navigate</div>
              <ul className="mt-4 space-y-2 text-sm">
                {navLinks.slice(0, 5).map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-foreground/70 transition-colors hover:text-foreground">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">More</div>
              <ul className="mt-4 space-y-2 text-sm">
                {navLinks.slice(5).map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-foreground/70 transition-colors hover:text-foreground">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Connect</div>
              <div className="mt-4 flex items-center gap-3">
                {[Linkedin, Github, Twitter].map((I, i) => (
                  <a
                    key={i}
                    href="#"
                    className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white/80 text-foreground/70 transition-all hover:-translate-y-0.5 hover:text-[color:#F28500]"
                  >
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Nova Systems. All rights reserved.</div>
          <div>Crafted with intention. Powered by AI.</div>
        </div>
      </div>
    </footer>
  );
}
