const inputField: HTMLInputElement = document.getElementById("username") as HTMLInputElement;

// console.log(inputField.value);

const button: HTMLInputElement = document.getElementById("btn") as HTMLInputElement;

button.addEventListener("click", () => {
  const value = inputField.value
  if (value.trim() == "") {
    alert("Please enter a name")
  } else {
    console.log(value.toLocaleLowerCase());
  }
})