//merge two arrays [1,2,3] and [4,5,6] using ES6  spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log("Merged array is:", mergedArray);