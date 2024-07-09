describe("Union", function () {
  it("should support union type", function () {
    let sample: string | number | boolean = "Mustofa Adny";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  it("should render union type typeOf correctly", function () {
    function proccess(value: number | string | boolean) {
      if (typeof value === "number") {
        return value + 2;
      } else if (typeof value === "string") {
        return value.toUpperCase();
      } else {
        return !value;
      }
    }

    expect(proccess(1)).toBe(3);
    expect(proccess("mustofa")).toBe("MUSTOFA");
    expect(proccess(true)).toBe(false);
  });
});
