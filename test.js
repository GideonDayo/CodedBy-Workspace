import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = createInterface({ input, output });

console.log("Welcome to the Node demo!");

const name = await rl.question("What is your name? ");
const ageInput = await rl.question("How old are you? ");
const age = Number(ageInput);

if (isNaN(age)) {
  console.log(`Nice to meet you, ${name}! That's not a real age though.`);
} else if (age >= 18) {
  console.log(`Hi ${name}, you are an adult at ${age} years old.`);
} else {
  console.log(`Hi ${name}, you are ${18 - age} years away from being an adult.`);
}

rl.close();
