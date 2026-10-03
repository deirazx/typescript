type User = {
  name: string;
  age: number;
}

type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
}

const user: ReadOnlyUser = {
  name: "John Doe",
  age: 30
}

// type OptionalUser = {
//   [key in keyof User]?: User[key];
// }

// const user: OptionalUser = {
//   name: "John Doe",
//   age: 30
// }

type BooleanUser = {
  [key in keyof User]: boolean;
}

const booleanUser: BooleanUser = {
  name: true,
  age: false
}