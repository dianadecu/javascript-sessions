console.log("Hello 1");
setTimeout(function(){
    console.log("Hello 2")
    console.log("Hello 4")
}, [1000])
console.log("Hello 3")

let i = 0
const interval = setInterval(function(){
    console.log(i);
    i++;
    // if(i === 5){
    //     clearInterval(interval);
    // } 
}, [1000])

setTimeout(function() {
    clearInterval(interval);
}, [5000])

setInterval(function(){
    console.log(Math.random())
}, [1000]) 

