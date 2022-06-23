// Learn
console.clear();
// Closures

function square(num) {
    return num * num;
}

function memoizedSquare() {
    let cache = {};
    return function optimizedSquare(num) {
        if (num in cache) {
            console.log('Returning from cache')
            return cache[num]
        } else {
            console.log('Computing Square')
            const result = square(num)
            cache[num] = result
            return result
        }

    }
}

const memoSquare = memoizedSquare();
console.log(memoSquare(2)); // Computing Square
console.log(memoSquare(2)); // Returning from cache

console.log(memoSquare(5)); // Computing Square
console.log(memoSquare(5)); // Returning from cache