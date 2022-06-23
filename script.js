// Learn
console.clear();

// Closures

function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;
}
let fn = outer();
fn(); // 1
fn(); // 1
fn(); // 1
fn(); // 1
fn(); // 1
fn(); // 1
fn(); // 1