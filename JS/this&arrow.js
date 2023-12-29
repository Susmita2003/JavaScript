// //(this) -->current context accessing

// const user={
//     username:"hitesh",
//     price:999,
//     welcomemsg:function(){
//         console.log(`${this.username} ,welcome!!!!`);
//          console.log(this); //current values of the scope will print
//     }
// }
// // user.welcomemsg
// // user.welcomemsg()

// // //context change
// // user.username="sam"
// // user.welcomemsg()
// console.log(this);

// function chai(){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()

// const chai=function (){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()


//arrow function----> () =>
// const chai=()=>{
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()

//others way
// const chai2=()=>{
//     let username="hitesh"
//     console.log(this);
// }
// chai2()

//add two nums with arrow function--->
// const add=(num1,num2)=>{
//     return num1+num2
// }
// console.log(add(3,4))

// //implict return (without return)
// const add2=(num1,num2)=> num1+num2
// console.log(add2(3,4))

// //others way
// //implict return (without return)
// const add3=(num1,num2)=> (num1+num2)
// console.log(add3(3,4))


//object return
const add4=(num1,num2)=> ({username:"hitesh"})
console.log(add4())