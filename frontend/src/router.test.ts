import {
  describe,
  test,
  expect,
  beforeEach,
  jest,
  afterEach,
} from "@jest/globals";
import { redirect } from "./router";

describe("Router tests", () => {
  let win: jest.SpiedFunction<() => void>;

  beforeEach(() => {
    win = jest.spyOn(window, "window", "get");
    document.body.innerHTML = "";
    history.pushState({}, "", "/");
  });
  afterEach(() => {
    win.mockRestore();
  });

  test("redirect to /test", () => {
    redirect("/test");
    expect(window.location.pathname).toBe("/test");
  });

  test("Render route /test", () => {
    redirect("/test");
    expect(document.querySelector("body")?.textContent).toBe("Stats");
  });
});
