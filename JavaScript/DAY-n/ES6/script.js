// let and const dono different hai, matlab let makes a variable and const makes a constant
// let and const are similar in few things:
// let and const dono es6 se hai
// let and const dono khud ko window object mein add karte hai
// ..................braces scoped hote hai

// {
//     let a = 12;
// }
// console.log(a);
// this will give error or undefined as we cant access let from outside of braces

// {
//     var a = 12;
// }
// console.log(a);
// this will work fine as we can access var from outside of braces


// {
//     const a = 12; 
// }
// console.log(a);

//const cant be access from outside of the bracket


//ARROW FUNCTIONS
//puraani js mein teen prakar ke functions the, they were:
//functions statement
//function expression
//anonymous function

// nayi js mein ek prakaar ka function h jiske teen roop hai:
// arrow functions
// basic fat arrow functions: 
        var a = () => {};
// fat arrow functions with one parameter:
        var b = () => {};
// arrow function with implicit return:
        var c = ()=>12;
        console.log(c());
        

