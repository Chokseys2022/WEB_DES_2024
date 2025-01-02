
//******** Part 1: Growing Pains ********
// Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
// Here is the information you have been given:
// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// const PI = 3.1415;
// const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.
// Using this information, your objectives are to:
// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

const PI = 3.1415;
const radius = 5;
const gardenArea = PI * radius * radius;
const spaceForPlant = 0.8;
const startingPlants = 20;
const growthRate = 2;

// Maximum plant capacity based on garden area
const maxCapacity = gardenArea / spaceForPlant;

// After 1 week, calculate the updated plant count
const plantCount1wk = startingPlants * growthRate;

console.log(`Plant count after 1 week is: ${plantCount1wk}`);

if (plantCount1wk > 0.8 * maxCapacity) {
  console.log("Action: Prune to prevent overcrowding.");
} else if (plantCount1wk >= 0.5 * maxCapacity) {
  console.log("Action: Monitor the growth rate.");
} else {
  console.log("Action: Plant more to use available space.");
}
// After 2 weeks
const plantCount2wk = plantCount1wk * growthRate;

console.log(`Plant count after 2 weeks is: ${plantCount2wk}`);

if (plantCount2wk > 0.8 * maxCapacity) {
  console.log("Action: Prune to prevent overcrowding.");
} else if (plantCount2wk >= 0.5 * maxCapacity) {
  console.log("Action: Monitor the growth rate.");
} else {
  console.log("Action: Plant more to use available space.");
}

// After 3 weeks
const plantCount3wk = plantCount2wk * growthRate;

console.log(`Plant count after 2 weeks is: ${plantCount3wk}`);

if (plantCount3wk > 0.8 * maxCapacity) {
  console.log("Action: Prune to prevent overcrowding.");
} else if (plantCount3wk >= 0.5 * maxCapacity) {
  console.log("Action: Monitor the growth rate.");
} else {
  console.log("Action: Plant more to use available space.");
}

//******** Part 2: Thinking Bigger ********
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

const PI2 = 3.1415;
const radius2 = '';
const gardenArea2 = PI * radius * radius;
const spaceForPlant2 = 0.8;
const startingPlants2 = 100;
const growthRate2 = 2


//******** Part 3: Errors in Judgement ********
// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.