const PI = 3.1415;
const radius = 5;
const gardenArea = PI * radius * radius; .
const spaceForPlant = 0.8;
const startingPlants = 20;
const growthRate = 2;
const maxCapacity = gardenArea / spaceForPlant;
const plantCount = startingPlants * growthRate;

//after 1 week
const plantCount1wk = startingPlants * growthRate;
console.log(`Plant count after 1 week is: ${plantCount}`);
if (plantCount > 0.8 * maxCapacity) {
  console.log("Action: Prune to prevent overcrowding.");
} else if (plantCount >= 0.5 * maxCapacity) {
  console.log("Action: Monitor the growth rate.");
} else {
  console.log("Action: Plant more to use available space.");
}

//after 2 weeks
const plantCount2wk = plantCount1wk * growthRate;
console.log(`Plant count after 2 weeks is: ${plantCount2wk}`);
if (plantCount2wk > 0.8 * maxCapacity) {
  console.log("Action: Prune to prevent overcrowding.");
} else if (plantCount2wk >= 0.5 * maxCapacity) {
  console.log("Action: Monitor the growth rate.");
} else {
  console.log("Action: Plant more to use available space.");
}
console.log("Action: Plant more to use available space.");

//after 3 weeks
const plantCount3wk = plantCount2wk * growthRate;
console.log(`Plant count after 3 week is: ${plantCount3wk}`);
if (plantCount3wk > 0.8 * maxCapacity) {
  console.log("Action: Prune to prevent overcrowding.");
} else if (plantCount3wk >= 0.5 * maxCapacity) {
  console.log("Action: Monitor the growth rate.");
} else {
  console.log("Action: Plant more to use available space.");
}
