//PART 1:MATH PROBLEMS

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//Check if all numbers are divisible by 5. Cache the result in a variable.

const divN1By5 = n1 % 5 === 0;
console.log(divN1By5);

const divN2By5 = n2 % 5 === 0;
console.log(divN2By5);

const divN3By5 = n3 % 5 === 0;
console.log(divN3By5);

const divN4By5 = n4 % 5 === 0;
console.log(divN4By5);

console.log("The four numbers are divisble by 5");

//Check if the first number is larger than the last. Cache the result in a variable.

const n5 = n1 > n4;
console.log("Is the first number is larger than the last:", n5);

//Subtract the first number from the second number.

const result = ((n2 - n1) * n3) % n4;
console.log(`The result of the arithmetic chain is: ${result}`);

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

const num = 100;
const isOver25 = num <= 25;
console.log(isOver25);
