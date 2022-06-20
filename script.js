// Learn
console.clear();

// 02. Variable Declarations - const vs let vs const

// Problem 04

function profile() {
    fName: 'VedaGna';
    lName: 'Yarasu';
}
profile.fName = 'Gnapika';
console.log(profile.fName);

/* 
01. Even through an object is declared with const, yiou can still mutate its properties
02. You can't ressign a value like an empty object to the profile variable 
03. profile= {} */