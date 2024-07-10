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
});
