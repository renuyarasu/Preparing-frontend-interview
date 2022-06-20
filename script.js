// Learn
console.clear();

// 02. Variable Declarations - var vs let vs const

// Variable Declarations 

function addNumbers() {
    var a = 10;
    var b = 20;
    var flag = true;
    if (flag) {
        var sum = a + b;
        console.log('Inside: ', sum);
    }
    console.log('Outside: ', sum);
}
addNumbers();