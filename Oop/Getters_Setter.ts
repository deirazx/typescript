// class Usr {
//   public name: string;
//   public age: number;
// }
// const user3 = new Usr();
// user3.name = "Dheeraj";
// user3.age = 17;
// console.log(user3.name);
// console.log(user3.age);


class Usr {
  private _name: string = "Dheeraj";

  set Name(name: string) {
    if (name.length < 3) {
      console.error("Name must be at least 3 characters long");
      return;
    }
    this._name = name;
  }

  get Name(): string {
    return this._name;
  }
}

const user3 = new Usr();
user3.Name = "Riya";
console.log(user3.Name); // Output: Riya