let a = 123;
let b = NaN;
console.log(typeof a);
console.log(typeof b);
console.log(b);


let c = "";

if(c){
    console.log("THIS IS TRUTHY");
}else{
    console.log("THIS IS FALSY")
}

//FALSY VALUES: false, 0, "", null, undefined, NaN
//TRUTHY VALUES: everything is truthy

const arrow = () => "GIVEN STRING"; //same as return

console.log(arrow());

function greet(firstName = "Jon", lastName = "Snow"){
    console.log(`Hello ${firstName} ${lastName}`)
}

greet();
greet("Joe", "Doe");
greet("John");