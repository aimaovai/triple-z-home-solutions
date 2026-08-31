import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitQuoteRequest } from "@/lib/quote.functions";
import { serviceCards } from "@/data/site";

const fieldClass =
  "w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/25";

export function QuoteForm({ sourcePage = "contact" }: { sourcePage?: string }) {
  const submit = useServerFn(submitQuoteRequest);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    setError(null);

    try {
      await submit({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          service: String(fd.get("service") ?? ""),
          message: String(fd.get("message") ?? ""),
          company: String(fd.get("company") ?? ""),
          sourcePage,
        },
      });
      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please call us and we'll take care of it.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" aria-hidden />
        <h3 className="mt-4 text-2xl font-extrabold text-navy">Request received</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks — we've got your details and we respond within 24 hours. Need it sooner? Give us a call.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-lg border border-input px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-accent hover:text-accent"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="mb-1.5 block text-sm font-semibold text-charcoal">Name</span>
          <input name="name" required minLength={2} className={fieldClass} placeholder="Jane Doe" />
        </label>
        <label className="block sm:col-span-1">
          <span className="mb-1.5 block text-sm font-semibold text-charcoal">Phone</span>
          <input name="phone" required type="tel" className={fieldClass} placeholder="(713) 555-0199" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-semibold text-charcoal">Email</span>
          <input name="email" required type="email" className={fieldClass} placeholder="you@email.com" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-semibold text-charcoal">What do you need?</span>
          <select name="service" className={fieldClass} defaultValue="">
            <option value="">Select a service</option>
            {serviceCards.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-semibold text-charcoal">Project details</span>
          <textarea
            name="message"
            rows={5}
            className={fieldClass}
            placeholder="Tell us about the space, the timeline, and anything you'd like us to know."
          />
        </label>
      </div>

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {error ? <p className="mt-4 text-sm font-semibold text-destructive">{error}</p> : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-bold text-accent-foreground shadow-card transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
        {status === "sending" ? "Sending…" : "Request My Free Estimate"}
      </button>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        We use your details only to respond to your request. We never sell or share your information.
      </p>
    </form>
  );
}
