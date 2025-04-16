import { describe, test, expect } from "@jest/globals";
import { redirect } from "./router";

describe("Router tests", () => {
  test("redirect to /test", () => {
    redirect("/test", "");
    expect(window.location.pathname).toBe("/test");
  });

  test("Render route /test", () => {
    redirect("/test", "test");
    expect(document.querySelector("body")?.textContent).toBe("Test");
  });
});
