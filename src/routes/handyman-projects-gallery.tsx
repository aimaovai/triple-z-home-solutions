import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/handyman-projects-gallery")({
  beforeLoad: () => {
    throw redirect({ to: "/projects" });
  },
});
