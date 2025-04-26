import { describe, test, expect } from "@jest/globals";
import TrainerModule from ".";

describe("tests for trainer module", () => {
  const trainer = new TrainerModule();
  test("test getText", () => {
    const text = trainer.getText();
    expect(typeof text === "string");
  });
});
