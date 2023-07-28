async function hello(){
    //console.log("Hello");
    throw Error("This is a custom error");
    return "Hello";
}

let variable = hello();
variable.then((data) =>{
    console.log("Returned with success: "+ data);
})
.catch((err) => {
    console.log("There has been an error: " + err);
});

//console.log(variable);