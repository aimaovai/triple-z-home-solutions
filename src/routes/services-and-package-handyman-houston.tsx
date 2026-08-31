import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services-and-package-handyman-houston")({
  beforeLoad: () => {
    throw redirect({ to: "/services" });
  },
});
