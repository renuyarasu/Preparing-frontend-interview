// Learn
console.clear();

// 02. Variable Declarations - const vs let vs const

// Const Declarations 

function addNumbers() {
    const a = 10;
    const b = 20;
    const flag = true;
    if (flag) {
        const sum = a + b;
        console.log('Inside: ', sum);
    }
    console.log('Outside: ', sum);
}
addNumbers();