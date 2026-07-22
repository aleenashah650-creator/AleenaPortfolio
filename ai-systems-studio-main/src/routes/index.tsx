import { createFileRoute } from "@tanstack/react-router";
import Home from "../pages/Home";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "AI Systems Engineer — Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of an AI No-Code / Low-Code Systems Engineer specializing in voice agents, automations, and RAG systems.",
      },
    ],
  }),
});
