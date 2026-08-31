import { createFileRoute } from "@tanstack/react-router";

const paths = ["/", "/services", "/projects", "/reviews", "/about", "/contact"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) =>
      `  <url><loc>${origin}${p}</loc><changefreq>monthly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(body, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
