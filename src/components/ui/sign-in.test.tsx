import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SignInPage } from "./sign-in";

describe("SignInPage", () => {
  it("renders the sign-in form with email and password fields", () => {
    render(<SignInPage showAnimatedHero={false} />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument();
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

  it("calls onSignIn with form data when submitted", async () => {
    const user = userEvent.setup();
    const onSignIn = vi.fn((event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    });

    render(<SignInPage showAnimatedHero={false} onSignIn={onSignIn} />);

    await user.type(screen.getByLabelText(/email address/i), "student@school.edu");
    await user.type(screen.getByLabelText(/^password$/i), "secret123");
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    expect(onSignIn).toHaveBeenCalledTimes(1);
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

  it("invokes callback handlers for secondary actions", async () => {
    const user = userEvent.setup();
    const onGoogleSignIn = vi.fn();
    const onResetPassword = vi.fn();
    const onCreateAccount = vi.fn();

    render(
      <SignInPage
        showAnimatedHero={false}
        onGoogleSignIn={onGoogleSignIn}
        onResetPassword={onResetPassword}
        onCreateAccount={onCreateAccount}
      />,
    );

    await user.click(screen.getByRole("button", { name: /continue with google/i }));
    await user.click(screen.getByRole("button", { name: /reset password/i }));
    await user.click(screen.getByRole("button", { name: /create account/i }));

    expect(onGoogleSignIn).toHaveBeenCalledTimes(1);
    expect(onResetPassword).toHaveBeenCalledTimes(1);
    expect(onCreateAccount).toHaveBeenCalledTimes(1);
  });

  it("renders animated hero panel when enabled", () => {
    render(<SignInPage brandName="OrbynexOS" />);

    expect(
      screen.getByRole("region", { name: /animated characters/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("OrbynexOS").length).toBeGreaterThanOrEqual(1);
  });
});
