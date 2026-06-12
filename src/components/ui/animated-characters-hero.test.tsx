import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AnimatedCharactersHero } from "./animated-characters-hero";

describe("AnimatedCharactersHero", () => {
  it("renders brand name and decorative footer links", () => {
    render(<AnimatedCharactersHero brandName="OrbynexOS" />);

    expect(screen.getByText("OrbynexOS")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("exposes an accessible region for the animation panel", () => {
    render(<AnimatedCharactersHero />);

    expect(
      screen.getByRole("region", { name: /animated characters/i }),
    ).toBeInTheDocument();
  });
});
