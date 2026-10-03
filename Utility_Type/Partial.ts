type User = {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UpdatedUser = Partial<User>;

const u1: UpdatedUser = {
  id: 1,
  name: "John Doe"
}

console.log(u1);
