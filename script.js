// Learn
console.clear();

// 02. Variable Declarations - const vs let vs const

// Hoisting: Hoisting means moving variable declarations to the top of their scope. 
// Ex: 01 -  Variable Declarations

function hoist() {
    console.log(name);
    var name;
}
hoist();