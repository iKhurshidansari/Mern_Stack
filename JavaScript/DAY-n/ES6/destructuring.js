//arrays and object se data bahar nikalna is destructuring

var a = [1,2,3];
var [b,c,d,e] = a;
console.log(b,c,d,e);


// var obj = {name: "harsh", age: 24};
// var{age} = obj;
// console.log(age);


var a = [1,2,3];
var [b,,c] = a;
console.log(b,c);
