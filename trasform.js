var map = function(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }

    return result;
};
console.log(
    map([1,2,3], function(n) {
        return n + 1;
    })
); 

console.log(
    map([1,2,3], function(n, i) {
        return n + i;
    })
);

console.log(
    map([10,20,30], function() {
        return 42;
    })
); 