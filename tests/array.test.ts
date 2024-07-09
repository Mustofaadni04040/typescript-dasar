describe("Array", function () {
  it("should same with javascript", function () {
    const names: string[] = ["Mustofa", "Adny"];
    const values: number[] = [1, 2];

    console.log(names);
    console.log(values);
  });

  it("should suppoer readonly array", function () {
    const hobbies: ReadonlyArray<string> = ["Mustofa", "Adny"];
    console.info(hobbies);

    // hobbies[0] = "Muss"; error
  });

  it("should support tuple", function () {
    const person: readonly [string, string, number] = ["Mustofa", "Adny", 21];

    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);

    // person[0] = "Muss"; error
  });
});
