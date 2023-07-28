// function sum(...arguments){
//     return arguments.reduce((total, el) => {total + el});
// }

// sum(1, 2, 3);

function raceResults(gold, silver, ...everyoneElse){
    console.log(`Gold goes to ${gold}`);
    console.log(`Siver goes to ${silver}`);
    console.log(`And thanks to everyone else: ${everyoneElse}`);
}

raceResults(123, 99, 55, 42, 39);

let hello = "HELLO";
hello = "HCLLO";
console.log(hello.length);

let msg = "I Am King  ";
let yellMsg = msg.toUpperCase();
console.log(yellMsg);
let whisper = msg.toLowerCase();
console.log(whisper);
let trimmed = msg.trim();
console.log(trimmed);

let message = "catdog"
let cat = message.indexOf("cat");
console.log(cat);
let dog = message.indexOf("dog");
console.log(dog);

let str = "superrobotmonkeyteamhyperforcego";
console.log(str.slice(5,10));

let annoyingLaugh = "teehee so funny! teehee!";
console.log(annoyingLaugh.replace("teehee", "haha"));