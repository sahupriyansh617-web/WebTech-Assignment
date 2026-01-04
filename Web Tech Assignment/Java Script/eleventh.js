let secretNumber = 7; 
let guess = 10;     

if (guess === secretNumber) {
  console.log("🎉 Correct! You guessed the number!");
} else if (guess > secretNumber) {
  console.log("Too High! Try a smaller number.");
} else {
  console.log("Too Low! Try a bigger number.");
}
