describe("Any", function () {
  it("should support in typescript", function () {
    const person: any = {
      id: 1,
      name: "Mustofa Adny",
      age: 21,
    };

    person.age = 31;
    person.address = "Indonesia";
    console.info(person);
  });
});
