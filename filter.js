var filter = function(arr, fn) {
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
return filteredArr;
};
console.log(
    filter([1,2,3,4,5], function(n) {
        return n % 2 === 0;
    })
);
console.log(
    filter([10,15,20,25], function(n, i) {
        return i % 2 === 0;
    })
);
