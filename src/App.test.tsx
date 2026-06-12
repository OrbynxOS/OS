import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("shows the welcome page after a successful login", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText(/^username$/i), "msaqib");
    await user.type(screen.getByLabelText(/^password$/i), "thankstoraoof");
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    expect(screen.getByRole("heading", { name: /welcome, msaqib/i })).toBeInTheDocument();
  });
});
