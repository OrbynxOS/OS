import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { LoginPage } from "./LoginPage";

describe("LoginPage", () => {
  it("renders OrbynexOS branding and school-focused copy", () => {
    render(<LoginPage onLoginSuccess={vi.fn()} />);

    expect(screen.getAllByText("OrbynexOS").length).toBeGreaterThanOrEqual(2);
    expect(
      screen.getByText(/students, teachers, and families/i),
    ).toBeInTheDocument();
  });

  it("renders the animated hero panel on the right", () => {
    render(<LoginPage onLoginSuccess={vi.fn()} />);

    expect(
      screen.getByRole("region", { name: /animated characters/i }),
    ).toBeInTheDocument();
  });

  it("accepts valid credentials and calls onLoginSuccess", async () => {
    const user = userEvent.setup();
    const onLoginSuccess = vi.fn();

    render(<LoginPage onLoginSuccess={onLoginSuccess} />);

    await user.type(screen.getByLabelText(/^username$/i), "msaqib");
    await user.type(screen.getByLabelText(/^password$/i), "thankstoraoof");
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    expect(onLoginSuccess).toHaveBeenCalledWith("msaqib");
  });

  it("shows an error for invalid credentials", async () => {
    const user = userEvent.setup();

    render(<LoginPage onLoginSuccess={vi.fn()} />);

    await user.type(screen.getByLabelText(/^username$/i), "wrong");
    await user.type(screen.getByLabelText(/^password$/i), "wrong");
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Invalid username or password. Please try again.",
    );
  });
});
