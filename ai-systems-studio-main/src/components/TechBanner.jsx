import { techLogos } from "../data/site";

export default function TechBanner() {
  const items = [...techLogos, ...techLogos];
  return (
    <section aria-label="Technologies" className="relative border-y border-border/60 bg-white/40 py-8 backdrop-blur">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-14 px-8">
          {items.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-muted-foreground"
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "#A3B18A" }}
              />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
