// //  console.log("variables in js act as named container for storing data vales. essential for holding information that can be accessed and modified later in a PerformanceNavigationTiming. declared using let.const and var");
// //  console.log("we mostle use let and const introduced in ES6(2015) over the older var keyboard due to better scoping rules.")


// //  //let//
// //  console.log("block scoped,can be reassigned a new value later, preferred way to declare a variable whose value might change.")
// //  let count=1;
// //  count=2//value can be updated


// //  //const
// //  console.log("block scoped,read only,initializer is required when declaring a const variable.")
// //  const pi=3.14;
// // //  pi=3.14//cause and error


// // //var//
// // //var was the original way to declare variable in js before es6 and it has some unique behavior and querks.
// // //function scope=their scope is limited to the function in which they ware created.
// // //hoisted= they are moved to the top of their containing function or global scope during the compilation phase, their assignments remain in place.

// // function varEXample(){
// //     if(true){
// //         var x=14;
// //     }
// //  console.log(x);
// // }

// // console.log(x)//undefined (hoisted but not initialized)

// // //let
// // //let was introduced in ECMAScript 2015(ES6) and offer block-level scoping
// // //variables declared with let are not hoisted to the top of their scope and they only accessible within the block they are defined in.

// // function letExample(){
// //     if(true){
// //         let y=20;
// //     }
// //     console.log(y);//reference error
// // }


// // //const
// // //also introduced in ES6 and has similar block-level scoping as let.
// // //cannot reassigned ,must be initialized upon declaration.

// // function constExample(){
// //     const z=30;
// //     console.log(z);
// // }


// //practical:

// function variableExamples(){
//     //using let for reassignable variables
//     let counter=0;
//     counter=1;
//     console.log(counter); //1

//     //using const for constants
//     const pi=3.14159;

//     //pi=3.14 //error: assignment to const varaibles
//     console.log(pi);

//     //using var (not recommended)
//     if(true){
//         var age=25;
//     }
//     console.log(age); //25(function-scoped)
// }

// variableExamples();

// //console.log(counter); //referenceError: counter is not defined
// //console.log(pi); //reference: pi is not defined
// //console.log(age); //25 (still accessible, not block-scoped)

// //notes:- always start with const if needed then later change into let.



//global scope: access from anywhere in the program.
//ex: outside of all fucntion and block
//js ekywords: var,let,const

//function scope: only within the function
//ex:inside the fucntion body
//ex: var,let,const

//block scoped: only within the specific block
//ex:inside the {} of loops or if statement 
//ex: let const

//question: why let/const are coming into global and in fucntion also.
//-both are blocked scoped(limited to {}) but if it declared outside any fucntion or block they become global


//whatis TDZ(Temporal Dead Zone):

document.writes("it is used to store data in program which we used later")
document.write("think of its as a containerthat holds a vallue.")
let a=21;
// a=variablename
// 21=stored value

//why varaible is used:
document.writes("variables allow us to store and reuse data.")
let name="Noova"
console.log(name)
console.log("it is case senstivive")



//types of variables in javascript:
console.log("var-old method,function/global scope 2.let=block scope,es6 released 3.const=const value")


//letvaraibale:
console.log("allow value to be changed")
console.log("let can be re-declared")
let age=20;
age=21;
console.log(age)


//const varaible:
console.log("means the value cannot change.")
const country="india";
console.log("country");


//var varaibles:
console.log("can be redeclared")
console.log("it is outdated andhas scope problems")
console.log("moderns js uses let and const")
//suggestion:
console.log("always prefer to use const and if needed later change then convert it to let.")


//variables naming
console.log("rules: cannot start with numbers,no space allowed,use meaningful names.")