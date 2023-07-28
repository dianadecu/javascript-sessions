// const button = document.querySelector("button")! as HTMLButtonElement
// const input1 = document.getElementById("num1")! as HTMLInputElement
// const input2 = document.getElementById("num2")! as HTMLInputElement
// function add(num1: number, num2: number){
//         return num1+num2;
// }

// button.addEventListener('click', function(){
//     console.log(add(+input1.value,+input2.value));
// });

// console.log("test");


// function add(num1: number, num2: number, result: boolean){
//     if(result){
//     return num1 + num2;
//     }else{
//         return num1-num2;
//     }
// }

// const number1 = 4;
// const number2 = 5;

// const result = add(number1, number2, true);
// console.log("result: ", result)

type test = {
    color: string,
    interior: string
}
const car:{
    name: string,
    year: number,
    options: test[]
    numbers: number[]
    type:[number, string]
} = {
    name: "Skoda",
    year: 2016,
    options:[
        {
        color:"brown",
        interior:"black"
        }
    ],
    numbers: [1, 2],
    type: [1, "car"]
}

console.log(car.name);
interface Hobbies{
    name: string,
    risk: number
}

interface Person{
    name: string,
    age: number,
    hobbies?: Hobbies[], // ? makes it optional 
    greet():void
}

interface Add{
    (num1: number, num2:number): number
}

let add: Add
add = (n1, n2) => {
    return n1+n2;
}

const user: Person = {
    name:"John",
    age: 20, 
    greet(){
        console.log(this.name + " is " + this.age +" years old")
    },
  hobbies:[]
}

user.greet();

const user2: Person = {
    name:"",
    age: 0, 
    greet: function(): void{
        throw new Error("Function not implemented")
    },
  hobbies:[]
}