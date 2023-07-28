// function func(){
//     for(let i = 0; i < 5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000)
//     }
// }

function func(){
    let i = 0;
    while(i < 5){
        setTimeout(
            function(){
                console.log(i);
                i++;
            }, 
            [1000]
        );
    }
}
func();

// let i = 4;
// function increment(i){
//     i = i + 1;
//     return i;
// }
// i = increment(i);
// console.log(i);