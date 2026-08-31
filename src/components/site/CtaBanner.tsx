import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { business } from "@/data/site";

export function CtaBanner({
  title = "Want results like these?",
  body = "Tell us about your project and we'll get you a clear estimate — usually within 24 hours.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="rounded-2xl bg-navy px-6 py-12 text-center shadow-lift md:px-16">
        <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/75">{body}</p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="w-full rounded-lg bg-accent px-6 py-3.5 font-bold text-accent-foreground shadow-card transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Get a Quote
          </Link>
          <a
            href={business.phoneHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary-foreground/25 px-6 py-3.5 font-bold text-primary-foreground transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
