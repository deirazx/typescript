"use strict";
const inputField = document.getElementById("username");
// console.log(inputField.value);
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    const value = inputField.value;
    if (value.trim() == "") {
        alert("Please enter a name");
    }
    else {
        console.log(value.toLocaleLowerCase());
    }
});
