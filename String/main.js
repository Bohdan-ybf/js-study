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

const string5 = "I know Interpolation Interpolation";

const username2 = "Andriy";

string5.replace("Interpolation", username2);

console.log(string5.replace("Interpolation", username2)); // "I know Andriy"

console.log(string5.replaceAll("Interpolation", username2)); // "I know Andriy"

// Завдання

const adminText = `Hello, I am an Admin`;
const userText = `Hello, I an a User`;

console.log(adminText.replace("Admin", "User")); // "Hello, I am a User"
console.log(userText.replace("User", "Admin")); // "Hello, I am an Admin"

const string6 = "I am a String";

console.log(string6.indexOf("a"));

// Завдання

const strName1 = "Hello";
const strName2 = "World";

const text3 = "Hello, my name is Bohan. Hello, hello, hello!";

console.log(text3.replaceAll(strName1, strName2)); // "World, my name is Bohan. World, world, world!"


const name3 = "Bohdan Yaronnyi";
const age3 = 26;
const slills = "JS, HTML, CSS";

const bio = `My name is ${name3}. I am ${age3} years old. My skills are: ${slills}.`;

console.log(bio); // "My name is Bohdan Yaronnyi. I am 26 years old. My skills are: JS, HTML, CSS."