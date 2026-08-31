import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { business, images, navLinks } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-5">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={images.logo}
            alt="Triple Z Home Solutions logo"
            className="h-12 w-12 rounded-md object-contain"
            width={48}
            height={48}
          />
          <span className="hidden font-display text-lg font-extrabold uppercase leading-none tracking-tight text-navy sm:block">
            Triple Z
            <span className="block text-[0.62rem] font-bold tracking-[0.22em] text-muted-foreground">
              Home Solutions
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="text-sm font-semibold text-charcoal/80 transition-colors hover:text-navy"
              activeProps={{ className: "text-navy underline decoration-accent decoration-2 underline-offset-8" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-navy md:flex"
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden />
            {business.phone}
          </a>
          <Link
            to="/contact"
            className="hidden rounded-lg bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground shadow-card transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-navy lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 font-semibold text-charcoal last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-lg bg-accent px-4 py-3 text-center font-bold text-accent-foreground"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
