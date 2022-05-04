const { log } = require("../lib/index.js");

describe("my first test suite", () => {
  test("my first test", () => {
    expect(1 + 1).toBe(2);
  });

  test("my second test", () => {
    expect(log("hello")).toBe("hello");
  });
});
