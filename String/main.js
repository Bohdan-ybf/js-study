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

const letters = "Hello World ";

console.log(letters.repeat(10));

// HW 

const fullName = "Bohdan Yaronnyi";

const name = fullName.slice(0, 6);
const surname = fullName.slice(6);

const capitalizedFullName = name + surname;

console.log(capitalizedFullName); // "Bohdan Yaronnyi"

const string1 = "I am a programmer";

console.log(string1.includes("programmer")); // true

// Завдання 
const sentense2 = "I love JavaScript";

console.log(sentense2.includes("love")); // true
console.log(sentense2.includes("Python")); // false

console.log(string1.startsWith("I am")); // true
console.log(string1.endsWith("programmer")); // true

const string4 = "Hello World";

console.log(string4.concat(" !!!")); // "Hello World !!!"


const str7 = "java";
const str8 = "Script";


console.log(str7.concat(str8)); // "JavaScript"


console.log(str7[0].toUpperCase() + str7.slice(1).concat(str8)); // "JavaScript"

// Interpolation

const language = "JavaScript";

const message = `I love ${language}`

console.log(message); // "I love JavaScript"