type Emp = {
  id: number;
  name: string;
  email: string;
  pass: string;
}

type OmittedEmp = Omit<Emp, "pass">;

const e1: OmittedEmp = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com"
}

console.log(e1);
