// Arithmetic Operators
// Addition
const a = 10 + 2; // = 12

// Subtraction
const b = 5 - 3; // = 2

// Multiplication
const c = 3 * 2; // = 6

// Division
const d = 4 / 2; // = 2

// Modulo
const e = 6 % 2; // = 0

// Complex Expressions
const f = 2 * 3 + 4 / 6; // = 6.6666666667

// PEMDAS
const g = (3 + 2) * 4; // = 20

// Power
const h = 2 ** 3; // = 8

// Square Root
const i = Math.sqrt(9); // = 3

// let j = 10;
// j = j + 1; // Can add more than 1 if necessary
// j += 1; // Can add more than 1 if necessary
// j++; // Increments by 1 last.
// ++j; // Increments by 1 first.

/**
 * j2 = j // = 10
 * j = j + 1; // = 11
 */
// const j2 = j++;
// console.log("J2: ", j2); // = 10
// console.log("J++: ", j); // = 11

/**
 * j = j + 1; // = 11
 * j3 = j; // = 11
 */
// const j3 = ++j;
// console.log("J3: ", j3); // = 11
// console.log("++J: ", j); // = 11

// j = j - 1; // Can subtract more than 1 if necessary
// j -= 1; // Can subtract more than 1 if necessary
// j--; // Subtracts by 1 last.
// --j; // Subtracts by 1 first.

// j = j * 1;
// j *= 1;
// j** // NOT VALID

// j = j / 1;
// j /= 1;
// j// // NOT VALID

// j = j % 1;
// j %= 1;
// j%% // NOT VALID

// Comparison Operators

/**
 * Hey, is 10 less than 5?
 * No, it isn't. false.
 */
const k = 10 < 5; // = false
console.log("Hey, is 10 less than 5?:", k);

/**
 * Hey, is 5 greater than 25?
 * No, it isn't. false.
 */
const l = 5 > 25; // = true
console.log("Hey, is 5 greater than 25?:", l);

/**
 * Hey, is 42 less than or equal to 42?
 * Yes, it is. true.
 */
const m = 42 <= 42; // = true.
console.log("Hey, is 42 less than or equal to 42?:", m);

/**
 * Hey, is 56 greater than or equal to 78?
 * No, it isn't. false.
 */
const n = 56 >= 78; // = false.
console.log("Hey, is 56 greater than or equal to 78?: ", n);

/**
 * Hey, is 128 equal to 128?
 * Yes, it is. true.
 */
const o = 128 == 128; // = true.
console.log("Hey, is 128 equal to 128?: ", o);

/**
 * Hey, is the number 128 equal the string "128"?
 * Yes, it is. true.
 */
const p = 128 == "128"; // = true.
console.log("Hey, is the number 128 equal the string '128'?:", p);

/**
 * Hey, is the number 56 equal to the number 56 in both value and data type?
 * Yes, it is. true.
 */
const q = 56 === 56; // = true.
console.log("Hey, is the number 56 equal to the number 56 in both value and data type?:", q);

/**
 * Hey, is the number 56 equal to the string "56" in both value and data type?
 * No, it isn't. true.
 */
const r = 56 === "56"; // = false.
console.log("Hey, is the number 56 equal to the string '56' in both value and data type?:", r);

/**
 * Hey, is the number 78 NOT equal to the number 78?
 * No, it isn't 'not equal'. false.
 */
const s = 78 != 78;
console.log("Hey, is the number 78 NOT equal to the number 78?:", s);

/**
 * Hey, is the number 78 NOT equal to the string "78" in both value and data type?
 * Yes, it is 'not equal'
 */
const t = 78 !== "78";
console.log("Hey, is the number 78 NOT equal to the string '78' in both value and data type?:", t);

// Logical Operators

/**
 * Is the number 5 greater than 1 AND
 * is the number 5 less than 10 AND
 * is the number 6 less than 3 AND
 * is the number 21 equal to the number 56 in both value and data type?.
 * Yes, it is. true.
 */

// const u = 5 > 1 && 5 < 10 && 6 < 3 && 21 === 56; // = false.
// console.log(
//     `Hey, is the number 5 greater than 1 AND
//      is the number 5 less than 10 AND
//      is the number 6 less than 3 AND
//      is the number 21 equal to the number 56 in both value and data type?.`, u);

/**
 * Hey, the string '5' equal to the number 5 OR is the number 21 less than the number 18?
 * Yes, it is. true.
 */

// const v = "5" == 5 || 21 < 18; // = true.
// console.log("Hey, the string '5' equal to the number 5 OR is the number 21 less than the number 18?:", v);

/**
 * Hey, the string 'five' equal to the number 5?
 * No, it isn't, false.
 */

// const w = "five" == 5;
// console.log("Hey, the string 'five' equal to the number 5?:", w);