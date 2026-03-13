// function check(num1,num2){
    // if(num>0){
    //     console.log(`the ${num} is positive.`);
    // }else if(num==0){
    //     console.log(`the ${num} is zero`)
    // }
    // else{
    //     console.log(`the ${num} is positive.`);
    // }

    // if(num%2==0){
    //     console.log(`the ${num} is even.`);
    // }else {
    //     console.log(`the ${num} is odd.`);
    // }

// if(num1>num2){
//     console.log(`the ${num1} is greater.`);
// }else if(num1==num2){
//     console.log(`both ${num1} and ${num2} are equal.`);
// }else{
//     console.log(`the ${num2} is greater.`);
// }

// }

// console.log(check(3,7));

const prompt = require('prompt-sync')(); 
// const grade=parseInt(prompt("enter the marks: "));
// // let gradeint=parseInt(grade,10)
// function gradecheck(grade){
//     if(grade>=85){
//         console.log("Grade A");
//     }else if(grade>=65){
//         console.log("Grade B");
//     }else if(grade>=40){
//         console.log("grade C");
//     }else{
//         console.log("FAIL");
//     }
// }

// gradecheck(grade);


//ticket price:
// const age=parseInt(prompt("enter the your age: "));
// function check(age){
//     if(age<=12){
//            console.log("your ticket price is 5.");
//     }else if(age<=18 && age>=12){
//         console.log("your ticket price is 10");
//     }else if(age<=60 && age>=18){
//         console.log("your ticket price is 20.");
//     }else if(age>=60){
//         console.log("ticket price is 15.");
//     }
// }

// check(age);


//leap year:
// var year =prompt("enter the current years:");
// if(year%4===0&&(year%100!==0||year%400===0)){
//     console.log(year+" is a leap year.");
// }else{
//     console.log(year+" is not leap year.");
// }


// let purchaseamnt=prompt("enter the amount: ");

// function check(purchaseamnt){
//     let discount;
//     if(purchaseamnt>=100){
//          discount=20;
//     }else if(purchaseamnt>=50 && purchaseamnt<100){
//         discount=10;
//     }
//     else{
//         discount=0;
//     }
//     console.log("Discount: "+discount);
// }

// check(purchaseamnt);


//greet based on time:
// var currentdate= new Date();
// var currtime=currentdate.getHours();
// function check(currtime){
//     if(currtime<=12){
//         console.log("good mornign user!");
//     }else if(currtime>=12 && currtime<=16){
//         console.log("good afternoon user!");
//     }else if(currtime>=16 &&currtime<=19){
//         console.log("good evening");
//     }else if(currtime>19 && currtime <=4){
//         console.log("good night user!")
//     }
// }

// check(currtime);


//bmi:
// let weight=prompt("enter your weight: ");
// let height=prompt("enter your height: ");
// let BMI=weight/(height*height);
// let category;
// function check(BMI){
//     if(BMI<=18.5){
//        category = "Underweight";
//     }else if(BMI<=24.9){
//         category = "Normal weight";
//     }else if(BMI<=29.9){
//         category = "Overweight";
//     }else{
//         category="OBESE";
//     }
//    console.log("BMI: "+BMI.toFixed(2));//tofixed(2) limits the number of decimal to 2;
// console.log("Category: "+category);
// }
 
// check(BMI);



var guessnum=prompt("enter the number: ")
var truenum=6;
if(guessnum==truenum){
    console.log("congo! you won.")
}else if(guessnum<truenum){
    console.log("think heigher!");
}else {
    console.log("think lower");
}