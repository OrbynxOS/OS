import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LoginPage } from "./LoginPage";

describe("LoginPage", () => {
  it("renders OrbynexOS branding and school-focused copy", () => {
    render(<LoginPage />);

    expect(screen.getAllByText("OrbynexOS").length).toBeGreaterThanOrEqual(2);
    expect(
      screen.getByText(/students, teachers, and families/i),
    ).toBeInTheDocument();
  });

  it("renders the animated hero panel on the right", () => {
    render(<LoginPage />);

    expect(
      screen.getByRole("region", { name: /animated characters/i }),
    ).toBeInTheDocument();
  });
});
