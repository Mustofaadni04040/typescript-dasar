describe("Optional Pramater", function () {
  it("should support undefined and null", function () {
    function sayHello(name?: string | null) {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello");
      }
    }
    sayHello("Mustofa");
    const name: string | undefined = undefined;
    console.info(name);
    sayHello(null);
  });
});
