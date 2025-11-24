// String

const str1 = "Hello, World!";

console.log(str1.toUpperCase()); // "HELLO, WORLD!"
console.log(str1.toLowerCase()); // "hello, world!"

// Indexing 

console.log(str1[0]); // "H"
console.log(str1.charAt(7)); // "W"

console.log(str1.slice(0, 5)); // "Hello"

const myName = "bohdan";
 
const nameFromCapital = myName[0].toUpperCase() + myName.slice(1);

console.log(nameFromCapital);

const letters = "Hello World";

console.log(letters.repeat(3));