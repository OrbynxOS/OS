import { describe, expect, it } from "vitest";
import { validateCredentials } from "./auth";

describe("validateCredentials", () => {
  it("returns true for valid credentials", () => {
    expect(validateCredentials("msaqib", "thankstoraoof")).toBe(true);
  });

  it("returns false for invalid credentials", () => {
    expect(validateCredentials("msaqib", "wrong")).toBe(false);
    expect(validateCredentials("wrong", "thankstoraoof")).toBe(false);
  });
});
