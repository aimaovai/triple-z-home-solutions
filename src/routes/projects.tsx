import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { images, projectCategories, projects } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Project Gallery | Triple Z Home Solutions Houston" },
      {
        name: "description",
        content:
          "Browse real Triple Z Home Solutions projects across Houston: lighting, kitchen upgrades, TV mounting, custom shelving, closets, and repairs.",
      },
      { property: "og:title", content: "Project Gallery | Triple Z Home Solutions Houston" },
      { property: "og:description", content: "Real handyman and remodeling work completed across the Houston area." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  const [active, setActive] = useState("All");
  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work we've finished around Houston"
        subtitle="Lighting, kitchens, mounting, storage, and repairs — photographed on the day we handed them back."
        image={images.projectShelving}
        alt="Custom shelving project completed by Triple Z Home Solutions"
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap gap-2.5">
          {projectCategories.map((category) => {
            const isActive = category === active;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-card text-navy hover:border-accent"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <figure
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">{project.category}</p>
                <h2 className="mt-1.5 text-lg font-bold text-navy">{project.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
                {project.location ? (
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground/80">
                    {project.location}
                  </p>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="mx-auto max-w-4xl px-5">
          <p className="eyebrow">Before &amp; after</p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy md:text-4xl">Drag to see the difference</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Same room, same afternoon. Slide the handle to compare where we started with how we left it.
          </p>
          <div className="mt-8">
            <BeforeAfter
              before={images.projectCollage}
              beforeAlt="Room before the Triple Z upgrade"
              after={images.projectAccentWall}
              afterAlt="Room after the Triple Z upgrade"
            />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
