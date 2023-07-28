//loops

// while loop
let i = 1

while(i <= 5){
    console.log("Print this 5 times")
    i++
}

//for loop
 for(let i = 1; i <= 5; i++){
    console.log("Print this 5 times")
 }


let cars = ["Toyota", "Skoda", "Ford"]

for(let i = 0; i < cars.length; i++){
    console.log(cars[i])
 }

for(let car of cars){
    console.log(car)
 }

cars.forEach(car => console.log(car))