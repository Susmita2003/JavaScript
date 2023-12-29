// /*var*/ let c=300
// if(true){
//     let a=10
//     const b=20
//     /*var*/ c=30
// }
// console.log(c);


//print the outside value of a
// let a=300
// if(true){
//     let a=10
//     const b=20
// }
// console.log(a);


//print the inner value of a
// let a=300
// if(true){
//     let a=10
//     const b=20
//     console.log(`inner:${a}`);
// }
// console.log(a);

//nested scope 1 :(
// function one(){
//     const username="hitesh"

//     function two(){
//         const website="yt"
//         console.log(username);
//     }
//     //console.log(website);
//     two()
// }
// one()


//nested scope 2 
// if (true){
//     const username="hitesh"

//     if(username==="hitesh"){
//         const website="  yt"
//         console.log(username+website);
//         console.log(username);  //it will print hitesh
//     }
//     //console.log(website); becs log is outside of the scope
// }
// //console.log(username);


//console log hosting 
//function declaration 1-->
// console.log(addone(5)) //we can write here or
// function addone(num){
//     return num+1
// }
// //console.log(addone(5)) //write here


// //function declaration 2-->
// //console.log(addtwo(6)) //don't print here.. we can't  write here
// const addtwo=function(num){
//     return num+3
// }
// console.log(addtwo(6))  //we have to write here always for function 2 declaration


