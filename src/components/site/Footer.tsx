import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { business, images, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <img
            src={images.logo}
            alt="Triple Z Home Solutions logo"
            className="h-14 w-14 rounded-md bg-background/95 object-contain p-1"
            width={56}
            height={56}
          />
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            Reliable handyman and remodeling services for homes and businesses across the greater Houston area.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Triple Z Home Solutions on Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary-foreground/20 transition-colors hover:border-accent hover:text-accent"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={business.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="Triple Z Home Solutions on TikTok"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary-foreground/20 text-xs font-bold transition-colors hover:border-accent hover:text-accent"
            >
              TT
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-accent">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-accent">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li>
              <a href={business.phoneHref} className="flex items-center gap-2 hover:text-accent">
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                {business.phone}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="flex items-start gap-2 break-all hover:text-accent">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              {business.areas.join(" · ")}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-accent">Hours</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
            {business.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-3">
                <span>{h.days}</span>
                <span className="text-primary-foreground/60">{h.time}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded-lg bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Triple Z Home Solutions LLC. All rights reserved.</p>
          <p>Serving Houston and surrounding communities.</p>
        </div>
      </div>
    </footer>
  );
}
