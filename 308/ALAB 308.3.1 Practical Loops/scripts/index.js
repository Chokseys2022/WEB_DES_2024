//***PART 1-Fizz Buzz***

//Accomplish the following:
//Loop through all numbers from 1 to 100.
//If a number is divisible by 3, log “Fizz.”
//If a number is divisible by 5, log “Buzz.”
//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
//If a number is not divisible by either 3 or 5, log the number.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizz buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

//*** Part 2: Prime Time***/

/*Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.
Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. */

let n = 15;

while (true) {
  let isPrimeNum = true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrimeNum = false;
      break;
    }
  }

  if (isPrimeNum) {
    console.log(n);
    break;
  }

  n++;
}

/*Part 3: Feeling Loopy
As a nal task, solve the following practical problem regarding string processing.
Context: A CSV le, or “Comma-Separated Values” le is traditionally used to store tabular data. You
may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets.
While each of these programs save their data in dierent formats to preserve style (e.g., font color or
cell backgrounds), at their core, they are storing CSV data.
CSV data looks like this:
ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz
Master,58\n98,Bill,Doctor’s Assistant,26

Loop through the characters of a given CSV string.
Store each “cell” of data in a variable.
When you encounter a comma, move to the next cell.
When you encounter the “\r\n” sequence, move to the next “row.”
Log each row of data.
You do not need to format the data, the following works well.
console.log(cell1, cell2, cell3, cell4);
There will only be 4 cells per row.
There will be no escaped characters other than “\n”*/

const csvString = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

const rows = csvString.split('\n'); // Split into rows
for (let row of rows) {
    const cells = row.split(','); // Split each row into cells
    console.log(...cells); // Log each cell
}

