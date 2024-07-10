import { sayHello } from "../src/say-hello";

describe("Function", function () {
  it("should support in typescript", function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Mustofa")).toBe("Hello Mustofa");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("Adny");
  });

  it("should return default value", function () {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Mustofa")).toBe("Hello Mustofa");
  });

  it("should support rest parameter", function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello, ${firstName} ${lastName}`;
      } else {
        return `Hello, ${firstName}`;
      }
    }

    expect(sayHello("Mustofa")).toBe("Hello, Mustofa");
    expect(sayHello("Mustofa", "Adny")).toBe("Hello, Mustofa Adny");
  });

  // function overloading
  it("should support function overloading", function () {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase;
      } else if (typeof value === "number") {
        return value + 2;
      }
    }

    expect(callMe(1)).toBe(3);
    expect(callMe("Mustofa")).toBe("MUSTOFA");
  });

  // function parameter
  it("should support function parameter", function () {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function upperName(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello("Mustofa", upperName)).toBe("Hello MUSTOFA");
  });

  // function parameter anonymous
  it("it should return function parameter anonymous", function () {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    expect(
      sayHello("Mustofa", function (name: string): string {
        return name.toUpperCase();
      })
    ).toBe("Hello MUSTOFA");
  });
});
