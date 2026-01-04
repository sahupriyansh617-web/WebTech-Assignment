

let num = Number(prompt("Enter a number:"));
if (isNaN(num)) {
  console.log("Please enter a valid number");
} else {
  if (num % 2 === 0) {
    console.log(num + " is Even");
  } else {
    console.log(num + " is Odd");
  }
}

