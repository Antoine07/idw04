
const numbers = [101, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log( numbers.reduce((acc, curr) => {
    if( curr % 2 === 1) return acc + curr;

    return acc;
}, 0));

console.log( numbers.reduce((acc, curr) => (curr % 2) === 0 ? acc : acc + curr, 0 ) );