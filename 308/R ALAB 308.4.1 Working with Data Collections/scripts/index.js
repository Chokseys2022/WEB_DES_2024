// **********************************************
// R-ALAB 308.4.1: Working with Data Collections
// **********************************************

// *****************************
// Part 1: Refactoring Old Code
// *****************************

let str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let rows = str.split("\n");
console.log(rows);

const parsed = rows.map((row) => row.split(",")); //,map method to get a nested array
console.log(parsed);

const name = parsed[0][0];
console.log(name);
//
// *******************************
//Part 2: Expanding Functionality
// *******************************

let str1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26";
let rows1 = str1.split("\n"); // Splitting the string into rows
let arr = []; // Initializing the array

for (let i = 0; i < rows1.length; i++) {
  let columns = rows1[i].split(","); // Splitting each row into columns
  arr.push(columns); // Adding the columns as a sub-array
}

// Log each sub-array individually
arr.forEach((subArray) => {
  console.log("Here is the sub array", subArray);
});

// **************************
// Part 3: Transforming Data
// **************************
// let newArr = [
//   ["ID", "Name", "Occupation", "Age"],
//   ["42", "Bruce", "Knight", "41"],
//   ["57", "Bob", "Fry Cook", "19"],
//   ["63", "Blaine", "Quiz Master", "58"],
//   ["98", "Bill", "Doctors Assistant", "26"]
// ];

// let header= newArr[0];
// let rows=newArr.slice(1);
// let result=[];

// for (let x=0; x< rows.length; x++){
//   let row=rows[x];
//   let obj ={};
//   for(let y=0; y<header.length; y++){
//      obj[header[y]]=row[y];
//   }
//    result.push(obj);
//   }
// console.log("The new object is;",result);

// *************************************
//Part 4: Sorting and Manipulating Data
// *************************************
// let people = [
//     { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//     { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//     { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//     { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
//   ];

//   let cleanedArr=people.sort((x,y)=> x.id-y.id);

//   cleanedArr.pop();

//   cleanedArr.splice(1,0, {id: "48", name: "Barry", occupation: "Runner", age: "25" });

//   cleanedArr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

//   console.log("Here is the array after modifying data:",cleanedArr);

//   // Calculating average age:

//   let groupPeople = [
//     { id: "42", name: "Bruce", occupation: "Knight", age: 41 },
//     { id: "48", name: "Barry", occupation: "Runner", age: 25 },
//     { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 },
//     { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 },
//     { id: "7", name: "Bilbo", occupation: "None", age: 111 }
//   ];

//   let sum = 0;
//   let count = 0;

//   for (let x = 0; x < groupPeople.length; x++) {
//     sum += groupPeople[x].age;
//     count++;
//   }
//   let avgAge = sum / count;

//   console.log("Average age of this group is:", avgAge);

// ********************
// Part 5: Full Circle
// ********************
// let dataToCsv = [
//   { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//   { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//   { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//   { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" },
// ];

// let dataBacktoCsv = "";

// If we want to show the headers in the csv output:
// dataBacktoCsv += Object.keys(dataToCsv[0]).join(',') + '\n';

// for (let i = 0; i < dataToCsv.length; i++) {
//   let row = dataToCsv[i];
//   dataBacktoCsv += Object.values(row).join(",") + "\n";
// }
// console.log(dataBacktoCsv);

// let myString = JSON.stringify(dataBacktoCsv);
// console.log("Here is the output back in csv format:", myString);

// ******************************************END OF CODE******************************************************
