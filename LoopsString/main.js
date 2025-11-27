// Loops

const str1 = "";
const str2 = '';
const str3 = ``;
const str4 = new String("String");

console.log(str4);

console.log(str4[0]);

let str6 = "";

for (const letter of str4) {
    str6 = str6.concat(letter);

    const isLetterL = "S".includes(letter);
    if (isLetterL) {
        console.log(letter, "!!!!");
    }
}

console.log(str6);


const isUserAdmin = true;

if (isUserAdmin) {
    console.log("user is Admin");
} else {
    console.log("user is not Admin");
}


// Завдання 

const str7 = "JavaScript";

for (const letterJS of str7) {
    console.log(letterJS)
}

const str9 = "This is the message";
const letterToCount = "i";

let counter = 0;

for (const letter of str9) {
    const isLetterToCount = letterToCount.includes(letter);


    if (isLetterToCount) {
        counter = counter + 1;
    }

}

console.log(counter);