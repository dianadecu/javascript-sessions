// function increment(i){
//     return i++;
// }

// function increment(i){
//     return ++i;
// }
// console.log(increment(3));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function(numbers){
    console.log(numbers*numbers);
})

const square = numbers.map(function(numbers){
    return numbers*numbers*numbers;
});

console.log(square);

const odds = numbers.filter(function(n){
    return n % 2 === 1;
})

console.log(odds);

const even = numbers.filter(function(n){
    return n % 2 === 0;
})

console.log(even);

const words = ["dog", "dig", "log", "bag", "wag"]

const condition1 = words.every((word) => {
    return word.length === 3;
});

console.log(condition1);


const condition2 = words.some((word) => {
    return word.length === 3;
});

console.log(condition2);

const arr = [3, 5, 7, 9, 11]

const sum = arr.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
})

console.log(sum);


const array = [1, 0, -3, 11, 20]

const min = array.reduce((accumulator,currentVal) =>{
    if(accumulator>currentVal){
        return currentVal;
    }else{
        return accumulator;
    }
});

console.log(min);

const max = array.reduce((accumulator,currentVal) =>{
    if(accumulator<currentVal){
        return currentVal;
    }else{
        return accumulator;
    }
});

console.log(max);

