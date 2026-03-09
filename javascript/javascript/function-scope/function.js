//function declaration(or statement)
//traditional way..
function add(a,b){
    return a+b;
};

//function expression: 
//define a function as part of an expression, often assigned to a variable
//only called after the line where they are defined.


const sum=function(a,b){
    return a+b;
};

console.log(sum(2,4))