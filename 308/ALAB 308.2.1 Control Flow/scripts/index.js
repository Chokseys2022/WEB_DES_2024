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
