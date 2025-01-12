let data = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
    { id: 5, name: "e" },
    { id: 6, name: "f" },
];

let idsYouWant = [1,2, 3,4, ,6,5]; // List of IDs you want
let propertyYouWant = "name"; // The property to extract

let res = data
    .filter((item) => idsYouWant.includes(item.id)) // Filter items with matching IDs
    .map((item) => ({ id: item.id, [propertyYouWant]: item[propertyYouWant] })); // Map to desired properties

console.log(res);
