// Learn
console.clear();

// Global/ Function Scope
const a = 10;
function example() {
    const b = 20;
    function inner() {
        const c = 30;
        console.log(a, b, c);
    }
    inner()
}
example(); // 10 20 30
