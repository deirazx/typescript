interface User {
  id: number;
  name: string;
  email: string
}

async function getUser(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users: User[] = await res.json();
  const collection: any[] = []

  // console.log(users);
  users.forEach((user) => {
    console.log(user.name);
    collection.push(user)
  })
  return collection

}

getUser()