describe("If Statement", function () {
  it("should support in typescript", function () {
    const exampValue = 90;

    if (exampValue > 80) {
      console.info("Good");
    } else if (exampValue > 60) {
      console.info("Normal");
    } else {
      console.info("Bad");
    }
  });

  it("should support ternary operator", function () {
    const exampValue = 90;
    const result = exampValue >= 70 ? "Good Job" : "Try Again Next Time";
    console.info(result);
  });

  it("should support switch statement", function () {
    function sayHello(name: string): string {
      switch (name) {
        case "Mustofa":
          return "Hello Mustofa";
        case "Adny":
          return "Hello Adny";
        default:
          return "Hello Guest";
      }
    }
    console.info(sayHello("Mustofa"));
    console.info(sayHello("Adny"));
    console.info(sayHello("Joko"));
  });
});
