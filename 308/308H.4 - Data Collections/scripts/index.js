let movies = [ 'Spaceballs', 'The Sting', 'Alien' ];
let moviesCopy = ["Home alone",...movies,"Speed"];
console.log(moviesCopy)

const colors = ['red', 'green', 'blue'];
let color = colors[1];
console.log(color)


const car = {
	color: "blue",
	hp: 4000,
	year: 1989
}

console.log(car.year)

//or

console.log(car["year"])

const vehicle = {
	color: "blue",
	hp: 4000,
	year: 1989,
	"active registration": true
}

console.log(vehicle["active registration"]); 

const borough = {
	name: "Brooklyn",
	name: "The Bronx",
    name: "The Bronx1",
    name: "The Bronx2",
    name: "The Bronx3"

}

console.log(borough);




vehicle.color = "red"; // changing an existing property value
vehicle.make = "Audi"; // adding a new key:value pair
delete vehicle["active registration"]; // removing an existing property

console.log(vehicle);

for (const key in vehicle) {
	console.log(vehicle[key]);
}

const vehicle1 = {
	color: "blue",
	year: 1989,
	make: "Audi",
	engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2
	}
}

console.log(vehicle1.engine.size);


let myMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];
let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

console.log(myMovies !== yourMovies);

const mogwai  = {};

mogwai.name = 'Gizmo';
console.log(mogwai)

const obj = {
	salutation: 'hi',
	count: 4
}

if (obj.salutation === "hi") {
	console.log('ok');
}

for (let i = 0; i < obj.count; i++) {
	console.log(i);
}

const obj1 = {
	something: 'whatt',
   
}

if (obj1.something) {
	console.log('ok');
}

if (obj1.anotherthing){
	console.log('ok');
} else {
	console.log("that property doesn't exist");
}

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

// Use .map() to create an array of names
const names = users.map(user20222 => user20222.name);

console.log(names); // Output: ['Alice', 'Bob', 'Charlie']


const fruits = ['apple', 'banana', 'cherry'];

// Use .map() with the element and its index
const fruitList = fruits.map((fruit, index) => `${index + 1}: ${fruit}`);

console.log(fruitList); 
// Output: ['1: apple', '2: banana', '3: cherry']
