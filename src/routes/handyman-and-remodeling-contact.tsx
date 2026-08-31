import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/handyman-and-remodeling-contact")({
  beforeLoad: () => {
    throw redirect({ to: "/contact" });
  },
});
