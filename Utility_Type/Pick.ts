type Person = {
  id: number;
  name: string;
  email: string;
  age: number;
}

type PickedPerson = Pick<Person, "id" | "email">;

const p1: PickedPerson = {
  id: 1,
  email: "jane.doe@example.com"
}

console.log(p1);
