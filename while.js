// let num=1
// while(num<=10){
//     console.log(num);
//     num++;
// }

//sum first n natural number:
// let end=50;
// let start=0;
// let sum=0;
// while (start<=end){
//     sum+=start;
//     start++;
// }
// console.log(sum);

const prompt = require('prompt-sync')(); 
//factorial:
// let n=prompt("enter the num: ");
// function factorial(n){
//     if(n===0||n===1){
//       return 1;
//     }
//     let result=1;
//     let i=1;
//     while(i<=n){
//         result*=i;
//         i++;
//     }
//     console.log(result);
// }

// factorial(n);

// let n=prompt("enter the num: ");
// function factorial(n){
//     if(n===0||n===1){
//         return 1;
//     }
//     let result=1;
//     let i=1;
//     while(i<=n){
//        result*=i;
//        i++;
//     }
//     console.log(result);
// }
// factorial(n);

// function fibonacci(num){
//     if(num===1){
//         return 0;
//     }
//     if(num===2){
//         return 1;
//     }
//     let num1=0;
//     let num2=1;
//     let sum;
//     let i=2;
//     while(i<num){
//         sum=num1+num2;
//         num1=num2;
//         num2=sum;
//         i+=1;
//     }
//     return num2;
// }

// console.log("Fibonacci(5): " + fibonacci(15));
// console.log("Fibonacci(8): " + fibonacci(18));


// function fib(num){
//     if(num===1){
//         return 0;
//     }
//     if(num===1){
//         return 1;
//     }

//     let num1=0;
//     let num2=1;
//     let sum;
//     let i=2;
//     while(i<sum){
//         sum=num1+num2;
//         num1=num2;
//         i+=1;
//     }
//     return num2;
// }

// const n=10;
// let n1=0;
// let n2=1;
// let count=1;
// let nextterm;
// while(count<=n){
//    nextterm=n1+n2;
//    n1=n2;
//    n2=nextterm;
//    count++;
// }




//reverse
// let num=prompt("enter the nume");
// let revnum=0;
// while(num>0){
//     const lastdigit=num%10;
//     revnum=((revnum*10)+lastdigit);
//     num=Math.floor(num/10);
// }

// console.log(revnum);


// let num=prompt("enter the num: ");
// let revnum=0;
// while(num>0){
//     const lastdigit=num%10;
//     revnum=((revnum*10)+lastdigit);
//     num=Math.floor(num/10);
// }
// console.log(revnum);

// let num=prompt("enter the num: ");
// let revnum=0;
// while(num>0){
//     const lastdigit=num%10;
//     revnum=((revnum*10)+lastdigit);
//     num=Math.floor(num/10);
// }


let num=prompt("enter num");
let revnum=0;
while(num>=0){
    let lastdigit=num%10;
    revnum=((revnum*10)+lastdigit);
    num=Math.floor(num/10);
}