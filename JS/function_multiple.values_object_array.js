// //...num1 --->called rest operator or spread operator
 //pass multiple values in function
// function price (...num1){
//     return num1
// }
// console.log(200,400,500,2000);

//what is the value of num1 ????  //interview ques***
// function price (val1,val2, ...num1){
//     return num1
// }
// console.log(price(100,400,500,2000));


//pass object in a function
//first obj create--->
// const user={
//     username:"hitesh",
//     price:199,
// }
//finally function create-->
// function passobj(/*user*/ anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// passobj(user)


//pass array in a function
//first obj create--->
const arr=[200,400,500,800]
//finally function create-->
function returnval(getarray){
    return getarray[2]
}
console.log(returnval(arr));
console.log(returnval([200,400,500,800]));


