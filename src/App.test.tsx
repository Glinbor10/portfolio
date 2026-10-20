import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    // Avoid hitting the real GitHub API during tests; GithubActivity should
    // fail soft into its "error" state and render the static fallback copy.
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.reject(new Error("network disabled in tests"))),
    );
  });

  it("renders the hero name", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: /Guillermo Linares/ })).toBeInTheDocument();
  });

  it("lists Housely among the projects", () => {
    render(<App />);
    expect(screen.getByText("Housely")).toBeInTheDocument();
  });
});
