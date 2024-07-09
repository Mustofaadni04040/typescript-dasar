import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
  it("should return hello adny", function () {
    expect(sayHello("adny")).toBe("Hello adny");
  });
});
