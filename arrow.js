//using arrow function in Array to find min value

const findMin = (arr) => Math.min(...arr);

let numbers = [10, 5, 2, 20, 8];

console.log("Minimum value is:", findMin(numbers));