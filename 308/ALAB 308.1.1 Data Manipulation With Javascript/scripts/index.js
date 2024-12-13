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

//PART 2: PRACTICAL MATH

/*The distance of the trip, in total, is 1,500 miles.

Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.*/

//How many gallons of fuel will you need for the entire trip?

const dist = 1500;
const fuelEffeciency55Miles = 30;
const fuelNeeded = dist / fuelEffeciency55Miles;
console.log(`You will need ${fuelNeeded} gallons of fuel for the trip.`);

//Will your budget be enough to cover the fuel expense?
const fuelBudget = 175;
const fuelCostPerGal = 3;

//How long will the trip take, in hours?*/
//const dist = 1500;
const speed = 55;
const speed1 = 60;
const speed2 = 75;

const time = dist / speed;
const time1 = dist / speed1;
const time2 = dist / speed2;

console.log(`The trip will take approximately ${time} hours.`);
console.log(`The trip will take approximately ${time1} hours`);
console.log(`The trip will take approximately ${time2} hours`);

//PART 3:FUTURE EXPLORATION
