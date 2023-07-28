 //functions 

 import {printAge, customer} from "./printHelper.js";

 //first method
 function helloOne(){
    console.log("Hello")
 }

 helloOne();

//second method 
//anonimous method
(function(){
    console.log("Hello")
})();

//method assigned to variable 
const helloTwo = function(){
    console.log('Hello two')
}
console.log(helloTwo)
helloTwo()

//third method
//(() => {console.log('Hello again')})()

let helloThree = () => {console.log('Hello again')}
helloThree();

//functions with parameters
function printName(name){
    console.log("My name is "+ name)
}

printName("Joe Doe");


let names = ["Mihai", "Ion", "Marcel"]
//print names using for loop

for(let i = 0; i< names.length; i++){
    printName(names[i])
}

for(let name of names){
    printName(name)
}

//functions with return 
 function multiplyByTwo(number){
    let result = number * 2;
    return `${result}`;
 }

console.log(multiplyByTwo(4));
let result = multiplyByTwo(3);
console.log(result+1);

printAge(15);

//let customer = new Customer_Details()
customer.printFirstName("Joe")
customer.printLastName("Doe")