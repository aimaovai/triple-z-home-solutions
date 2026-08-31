type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
};

export function PageHero({ eyebrow, title, subtitle, image, alt }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold text-primary-foreground md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-primary-foreground/75">{subtitle}</p>
      </div>
    </section>
  );
}
