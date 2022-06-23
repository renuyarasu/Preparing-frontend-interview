// Learn
console.clear();
// Closures

function memoize(callback) {
    let cache = {}
    return function (...args) {
        const key = args.toString()
        if (key in cache) {
            console.log('Returning from cache')
            return cache[key]
        } else {
            console.log('Computing Square')
            const result = callback(...args)
            cache[key] = result
            return result
        }
    }
}
function add(a, b) {
    return a + b;
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(2, 4)); // Computing Square
console.log(memoizedAdd(2, 4)); // Returning from cache
