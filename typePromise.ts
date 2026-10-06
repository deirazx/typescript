// const msgPromise: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("hi, friends");
//   }, 2000)
// })

// msgPromise.then((message) => {
//   console.log(message);
// })

// const agePromise: Promise<number> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(30)
//   }, 2000);
// })

// agePromise.then((number) => {
//   console.log(number);
  
// })


// function getUser(): Promise<string>{
//   return new Promise((resolve) => {{
//     setTimeout(() => {
//       resolve("Dheeraj");
//     }, 2000);
//   }})
// }

// async function showUser() {
//   const user = await getUser();
//   console.log(user);
// }


// interface User{
//   id: number;
//   name: string
// }

// function getUser(): Promise<User> {
//   return Promise.resolve({
//     id: 1,
//     name: "Dheeraj"
//   })
// }

// getUser().then((user) => {
//   console.log(user.name);
  
// })

function login(): Promise<string>{
  return new Promise((resolve, reject) => {
    const success = false;

    if (success) {
      resolve("Login fine");
    }else{
      reject("Invalid Username")
    }
  })
}

login().then((msg) => {
  console.log(msg);
  
}).catch((e) => {
  console.log(e);
  
})

