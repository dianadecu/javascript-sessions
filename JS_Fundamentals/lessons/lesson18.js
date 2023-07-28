let color;

function displayColor(newColor, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        color = newColor
        console.log(color);
        resolve();
        }, delay);
    });
}

async function rainbow(){
    displayColor("brown", 1000);
    await displayColor("green", 500);
    console.log("THIS SHOWS AFTER GREEN");
    await displayColor("yellow", 500);
    await displayColor("blue", 500);
    console.log("THIS SHOWS AFTER BLUE");
    await displayColor("pink", 500);
    await displayColor("purple", 500);
}

console.log("This runs first");

rainbow().then(() => {
    console.log("Colors have been shown");
});

//console.log("Colors have been shown");//se afiseaza dupa executia functiei rainbow

// displayColor("green", 1000).then(() => {
//     return displayColor("blue", 500);
// })
// .then(() => {
//     return displayColor("yellow", 500);
// })
// .then(() => {
//     return displayColor("pink", 500);
// });


// function displayColor(newColor, delay, doNext){
//     setTimeout(()=> {
//         color = newColor;
//         console.log(color);
//         doNext && doNext();
//         }, delay)
// }


