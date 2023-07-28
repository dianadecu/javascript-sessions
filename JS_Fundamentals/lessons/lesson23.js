
const arr = [1, 2, 3, 4, 5, 6];

function printer(arr){
    for (let i of arr){
        console.log(i);
    }
    console.log(...arr)
}

printer(arr);


const cats = ["Scottish", "Russian Blue", "Turkysh"];
const dogs = ["Bichon", "Yorkshire"];

//const allPets = cats.concat(dogs); // toate elementele din cats & dogs
const allPets =[...cats, ...dogs];
console.log(allPets);

const feline = {legs:4, family: "Felidae"};
const canine = {isFurry: true, family: "Caninae"};

// const cat = {legs: 3, ...feline, legs: 5, color: "black"};
const cat = {...canine, ...feline};
console.log(cat);


console.log({...[2,4,6,8]});
console.log({..."HELLO"});