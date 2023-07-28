const scores = [123, 100, 80, 61, 30, 11];

// const gold = score[0];
// const silver = score [1];
// const bronze =  score[2];

const[gold, silver, bronze, ...everyoneElse] = scores;
console.log(everyoneElse);


const user ={
    email: "user@mail.com",
    firstName: "Joe",
    lastName:"Doe",
    city: "Seoul", 
    age: 25
};


function fullName(user){
    const {firstName = "Joe", lastName = "Doe"} = user;
    return `${firstName} ${lastName}`;z
}
 
console.log(fullName(user));
// const email = user.email;
// const city = user.city;

//const {age = "undisclosed" } = user;
//console.log(user);