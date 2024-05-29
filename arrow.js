// const calculate= (num1,op,num2) =>{
//     if(op=='+'){
//         console.log(num1 + num2);
//     }
//     else if(op=='-'){
//         console.log(num1- num2);
//     }
//     else if(op=='/'){
//         console.log(num1 / num2);
//     }
//     else if(op=='*'){
//         console.log(num1 * num2);
//     }
//     else if(op=='%'){
//         console.log(num1 % num2);
//     }
//     else{
//         console.log('invalid operator');
//     }
// }
// calculate(20,'%',10);

//spread and arrow function

const nums=[2,4,5,6]
const sum=(num1,num2,num3) =>console.log(num1 + num2 + num3);
sum(...nums);