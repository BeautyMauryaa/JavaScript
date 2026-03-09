console.log("we have two types of datatypes: 1.premitive 2.non-premitive")
console.log("Premitive data types:")
console.log("Seven data types that are premitive:");
console.log("string is expectional means string can be both depends on use for example")
let name="string"//string
let str=new str("Beauty")//here string is working as a object.

//number
let num=21;

//boolean(true/false)
let isLoggedIn=true;

//NULL(SPECIAL VALUE THAT REPRESENTS THE INTENTIONAL ABSENCE OF ANY OBJECT VALUE)
//it is standalone type that has a single value NULL

let data=null;


//undefined
//automatically assigned to variables that have been declared but not assigned a vallue

let city; //value is undefined

//symbol
//a unique and immutable premitive value, often used as an identifier for object properties to avoid naming conflicts(es6)

let id=symbol("uniqueId");

//BigInt:
//storingbig int value ....created by appdending n tothe end of an integer literal

//type conversion:
//js is dynamically typed langauge-means we don't need to specify the data type of variable when we declare it
//data type can be converted later as per need even it is already declared


//for example:
let ans=43;
ans="Thanks for the shrikhand!"

let value=true;
console.log(typeof value);
let numStr="34";
num=Number(numStr);//becomes a number 12
console.log(Boolean(num))


//boolean
//used for logical opeartions and can hold one of only two values
//true(1) and false(0)
//essential for decision making and are often the results of comparision operations
