import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SignInPage } from "./sign-in";

describe("SignInPage", () => {
  it("renders the sign-in form with username and password fields", () => {
    render(<SignInPage showAnimatedHero={false} />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByLabelText(/^username$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /google/i })).not.toBeInTheDocument();
  });

  it("renders custom title and description", () => {
    render(
      <SignInPage
        showAnimatedHero={false}
        title={<span>Custom Title</span>}
        description="Custom school description"
      />,
    );

    expect(screen.getByText("Custom Title")).toBeInTheDocument();
    expect(screen.getByText("Custom school description")).toBeInTheDocument();
  });

  it("calls onSignIn when the form is submitted", async () => {
    const user = userEvent.setup();
    const onSignIn = vi.fn((event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    });

    render(<SignInPage showAnimatedHero={false} onSignIn={onSignIn} />);

    await user.type(screen.getByLabelText(/^username$/i), "msaqib");
    await user.type(screen.getByLabelText(/^password$/i), "thankstoraoof");
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    expect(onSignIn).toHaveBeenCalledTimes(1);
  });

  it("displays an error message when provided", () => {
    render(
      <SignInPage
        showAnimatedHero={false}
        error="Invalid username or password. Please try again."
      />,
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Invalid username or password. Please try again.",
    );
  });

  it("toggles password visibility", async () => {
    const user = userEvent.setup();
    render(<SignInPage showAnimatedHero={false} />);

    const passwordInput = screen.getByLabelText(/^password$/i);
    expect(passwordInput).toHaveAttribute("type", "password");

    await user.click(screen.getByRole("button", { name: /show password/i }));
    expect(passwordInput).toHaveAttribute("type", "text");

    await user.click(screen.getByRole("button", { name: /hide password/i }));
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("renders animated hero panel when enabled", () => {
    render(<SignInPage brandName="OrbynexOS" />);

    expect(
      screen.getByRole("region", { name: /animated characters/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("OrbynexOS").length).toBeGreaterThanOrEqual(1);
  });
});
