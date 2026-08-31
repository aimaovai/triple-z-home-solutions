import { useState } from "react";

type BeforeAfterProps = {
  before: string;
  beforeAlt: string;
  after: string;
  afterAlt: string;
};

export function BeforeAfter({ before, beforeAlt, after, afterAlt }: BeforeAfterProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="overflow-hidden rounded-2xl bg-card shadow-lift">
      <div className="relative aspect-[16/10] select-none">
        <img src={before} alt={beforeAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img
            src={after}
            alt={afterAlt}
            className="h-full w-full object-cover"
            style={{ width: `${(100 / position) * 100}%`, maxWidth: "none" }}
            loading="lazy"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-1 bg-accent"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
          aria-hidden
        />
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-navy-deep/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground">
          After
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-navy-deep/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground">
          Before
        </span>
      </div>
      <div className="p-5">
        <label className="block text-sm font-semibold text-charcoal">
          Before / after slider
          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="mt-3 w-full accent-[var(--accent)]"
            aria-label="Reveal the finished result"
          />
        </label>
      </div>
    </div>
  );
}
