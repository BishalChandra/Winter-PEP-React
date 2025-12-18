var once = function(fn) {
    let called = false;

    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
        return undefined;
    };
};
console.log(once(function(a, b) { return a + b; })(2, 3)); // 5