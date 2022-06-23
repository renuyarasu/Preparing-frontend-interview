// Learn
console.clear();

// Global/ Function Scope
const a = 10;
function example() {
    const a = 20;
    console.log(a);
}
example();
console.log(a);