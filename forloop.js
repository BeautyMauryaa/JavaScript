// let arr1=[1,2,3,4,5];
// let arr2=[1,2,3,4,5];
// let sum1=0;
// let sum2=0;
// for(let i=0;i<arr1.length;i++){
//         sum1+=arr1[i];
// }
// for(let j=0;j<arr2.length;j++){
//    sum2+=arr2[j];
// }

// let result=sum1+sum2;
// console.log(result);

const prompt = require('prompt-sync')(); 
//Using a for loop print all even numbers up to and including n. Don’t include 0.
// let num=prompt("enter the num: ");
// for(let start=2;start<=num;start++){
//     if(start%2==0){
//  console.log(start);
//     }
// }


//print inr reverse order:
// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// for(let end=arr.length-1;end>=0;end--){
//     console.log(arr[end]);
// }




// let arr1=[4,6,7];
// let arr2=[8,1,9];
// let sumarr=[];
// for(let i=0;i<arr1.length;i++){
//     sumarr.push(arr1[i]+arr2[i]);
// }
// console.log(sumarr);




// let str1="javascript";
// let arr1=str1.split("");
// for(let i=0;i<arr1.length;i++){
//     if((i+1)%2==0){
//         arr1[i]="Z";
//     }
// }
// str1=arr1.join("");
// console.log(str1);

// let str1="javascript";//string r immutable so we have to convert this into array.
// let arr=str1.split("");
// for(let i=0;i<=arr.length;i++){
//     if((i+1)%2==0){
//         arr[i]="Z";
//     }
// }
// str1=arr.join("");
// console.log(str1);

// let str1="don't know why";
// let arr=str1.split("");
// for(let i=0;i<=arr.length;i++){
//     if(arr[i]=="y"){
//         console.log("yes");
//     }
// }



// let n2=prompt("enter the num: ");
// let result=1;
// if(n2===0||n2===1){
//     console.log("1");
// }
// for(let i=1;i<=n2;i++){
//     result*=i;
// }
// console.log(result);


// //guessing game:
// let pin = 7040;
// let n=4;
// for(let i=1;i<=n;i++){
//     let output=prompt("enter your number: ");
//     if(pin!=output){
//         console.log("Ops! that was wrong.");
//     }else{
//         console.log("congo! you won.");
//         // break;
//         return ;
//     }
// }
// console.log("better luck nxt time!");

//palindrome:
let str1=prompt("enter your string: ");
// let arr1=str1.split(" ");
// for(let i=0;i<arr1.length;i++){
//     for(let j=arr1.length;j>=0;j--){
//         if(arr1[i]==arr1[j]){
//             console.log("yes the string is palindrome.");
//         }else{
//             console.log("string is not palindrome.");
//         }
//     }
// }

// let str=str1.reverse();
let reverse=str1.split("").reverse().join();//because reverse() only work with array thats why firstly convert to array then reverse then join.

if(str1==reverse){
    console.log("yes palindrome");
}else{
    console.log("not plaindrome");
}