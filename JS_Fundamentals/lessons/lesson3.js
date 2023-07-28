//objects 

let customer = {
    firstName: "Joe",
    lastName: "Doe",
    age: 31
}

console.log(customer)
customer.age = 57
console.log(customer.age)
customer.occupation = "Engineer"
console.log(customer)
customer["firstName"] =  "John"
console.log(customer.firstName + " " + customer.lastName)


let cars = ["Toyota", "Skoda", "Ford"]
console.log(cars[0])
cars[3] = "VW"
console.log(cars)
cars[0] = "Tesla"
console.log(cars)