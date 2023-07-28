const obj1 = {
    firstName: "Joe",
    lastName: "Doe",
    demoObject:{
        age: 40,
        petName: "Alexander",
    },
}

const objString = JSON.stringify(obj1);

const obj2 = JSON.parse(objString);

//const obj2 = obj1;

//obj1.firstName = "Kim";
//
obj2.demoObject.age = 42;
// obj2.lastName = "Seok";

// // console.log(obj1);
// // console.log(obj2);

// const obj3 ={...obj1};

// obj3.lastName = "Jin";

console.log(obj2);