import { Employee, Manager } from "../src/employee";
import { Seller } from "../src/seller";

describe("Interface", function () {
  it("should support in typescript", function () {
    const seller: Seller = {
      id: 1,
      name: "Mustofa Adny",
      nib: "1234567890",
      npwp: "1234567890",
    };
    console.info(seller);
  });

  //function interface
  it("should support function interface", function () {
    interface addFunction {
      (value1: number, value2: number): number;
    }

    const add: addFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  // indexable interface
  it("support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Mustofa", "Adny"];

    expect(names[0]).toBe("Mustofa");
    console.info(names);
  });

  it("support indexable interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      names: "Mustofa",
      address: "Indonesia",
    };

    expect(dictionary["names"]).toBe("Mustofa");
    expect(dictionary["address"]).toBe("Indonesia");
  });

  // extending interface : melanjutkan ke interface lainnya
  it("should support extend interface", function () {
    const employee: Employee = {
      id: "1",
      name: "Mustofa",
      division: "IT",
    };
    console.info(employee);

    const manager: Manager = {
      id: "1",
      name: "Adny",
      division: "IT",
      numberOfEmployees: 10,
    };
    console.info(manager);
  });

  // interface function
  it("should render interface function", function () {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const person: Person = {
      name: "Mustofa",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };
    console.info(person.sayHello("Adny"));
  });
});
