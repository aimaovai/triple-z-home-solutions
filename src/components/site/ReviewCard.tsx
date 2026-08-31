import { useState } from "react";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export type ReviewCardData = {
  quote: string;
  name: string;
  detail: string;
  rating: number;
};

const CLAMP_AT = 230;

function Stars({ rating, size }: { rating: number; size: string }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < rating ? `${size} fill-accent text-accent` : `${size} text-muted-foreground/40`}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function ReviewCard({ review }: { review: ReviewCardData }) {
  const [open, setOpen] = useState(false);
  const isLong = review.quote.length > CLAMP_AT;

  return (
    <>
      <blockquote className="flex h-full min-h-[19rem] flex-col rounded-2xl border border-border bg-card p-6 shadow-card">
        <Stars rating={review.rating} size="h-4 w-4" />

        <div className="mt-4 flex-1">
          <p className="text-sm leading-relaxed text-charcoal">
            “{isLong ? `${review.quote.slice(0, CLAMP_AT).trimEnd()}…` : review.quote}”
          </p>
        </div>

        {isLong ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-3 self-start text-sm font-bold text-navy underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Read more
          </button>
        ) : null}

        <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {review.name}
          {review.detail ? ` · ${review.detail}` : ""}
        </footer>
      </blockquote>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-extrabold text-navy">{review.name}</DialogTitle>
            {review.detail ? <DialogDescription>{review.detail}</DialogDescription> : null}
          </DialogHeader>
          <Stars rating={review.rating} size="h-5 w-5" />
          <p className="text-sm leading-relaxed text-charcoal">“{review.quote}”</p>
        </DialogContent>
      </Dialog>
    </>
  );
}
