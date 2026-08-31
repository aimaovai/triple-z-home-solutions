import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/about-handyman-and-remodel")({
  beforeLoad: () => {
    throw redirect({ to: "/about" });
  },
});
