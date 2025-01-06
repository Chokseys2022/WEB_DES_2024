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
