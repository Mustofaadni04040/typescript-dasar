describe("Object", function () {
  it("should support in typescript", function () {
    const person: { id: string; name: string; hobbies?: string[] } = {
      // optional hobbies
      id: "1",
      name: "Mustofa Adny",
    };
    console.info(person);

    person.id = "2";
    person.name = "Adny Mustofa";
    console.info(person);
  });
});
