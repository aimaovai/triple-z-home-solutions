import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addReview } from "@/lib/reviews.functions";

const fieldClass =
  "w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/25";

export function ReviewDialog({ onSubmitted }: { onSubmitted?: () => void }) {
  const submit = useServerFn(addReview);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState<"idle" | "sending">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    setStatus("sending");
    setError(null);

    try {
      await submit({
        data: {
          name: String(fd.get("name") ?? ""),
          detail: String(fd.get("detail") ?? ""),
          rating,
          quote: String(fd.get("quote") ?? ""),
          company: String(fd.get("company") ?? ""),
        },
      });
      setStatus("idle");
      setOpen(false);
      setRating(5);
      onSubmitted?.();
    } catch (err) {
      setStatus("idle");
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type="button" className="font-bold text-navy underline-offset-4 hover:text-accent hover:underline">
          Add your review
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-extrabold text-navy">Add your review</DialogTitle>
          <DialogDescription>
            Tell other Houston homeowners how the job went. Your review shows up on this page right away.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="grid gap-4">
          <div>
            <span className="mb-1.5 block text-sm font-semibold text-charcoal">Your rating</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                  aria-label={`${value} star${value > 1 ? "s" : ""}`}
                  aria-pressed={rating === value}
                  className="rounded p-0.5 transition-transform hover:scale-110"
                >
                  <Star
                    className={
                      value <= rating ? "h-7 w-7 fill-accent text-accent" : "h-7 w-7 text-muted-foreground/40"
                    }
                    aria-hidden
                  />
                </button>
              ))}
            </div>
          </div>

          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-charcoal">Your name</span>
            <input name="name" required minLength={2} maxLength={80} className={fieldClass} placeholder="Jane D." />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-charcoal">Service &amp; city (optional)</span>
            <input name="detail" maxLength={120} className={fieldClass} placeholder="TV mounting · Katy" />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-charcoal">Your review</span>
            <textarea
              name="quote"
              required
              minLength={10}
              maxLength={1000}
              rows={5}
              className={fieldClass}
              placeholder="Tell us what we did and how it turned out."
            />
          </label>

          <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

          {error ? <p className="text-sm font-semibold text-destructive">{error}</p> : null}

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-bold text-accent-foreground shadow-card transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
            {status === "sending" ? "Posting…" : "Submit Review"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
