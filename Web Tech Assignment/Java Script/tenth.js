let weight = 68;   
let height = 1.72; 

let bmi = weight / (height * height);

console.log("BMI = " + bmi.toFixed(2));

if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi >= 18.5 && bmi < 24.9) {
  console.log("Normal Weight");
} else if (bmi >= 25 && bmi < 29.9) {
  console.log("Overweight");
} else {
  console.log("Obese");
}
