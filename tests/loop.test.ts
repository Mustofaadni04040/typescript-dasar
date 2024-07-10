describe("Loop", function () {
  it("should support in typescript", function () {
    const names: string[] = ["Mustofa", "Adny"];

    for (let i = 0; i < names.length; i++) {
      console.info(names[i]);
    }

    for (const index in names) {
      console.log(names[index]);
    }

    for (const name of names) {
      console.info(name);
    }
  });

  it("should support while loop", function () {
    let counter: number = 0;

    while (counter < 10) {
      console.info(counter);
      counter++;
    }
  });

  it("should support do while loop", function () {
    let counter: number = 0;

    do {
      console.info(counter);
      counter++;
    } while (counter < 10);
  });

  it("should support break and continue", function () {
    let counter: number = 0;

    do {
      counter++;

      if (counter == 10) {
        break;
      }
      if (counter % 2 == 0) {
        continue;
      }

      console.info(counter);
    } while (true);
  });
});
