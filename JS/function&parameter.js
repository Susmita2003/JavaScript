//function
// function name(){
//     console.log("h");
//     console.log("i");
//     console.log("t");
//     console.log("e");
//     console.log("s");
//     console.log("h");
// }
// //name   --->referance
// name()

//add two numbers---->
// function add(num1,num2){
//     console.log(num1+num2);
// }
// add()
//add(3,4)
// add(3,"4")
// add(3,"a")
// add(3,null)


//add(3,4) 
//we can write this add(3,4) to this--->
// const result=add(3,4) //print 8
// console.log("result:",result); //print undefined so we can write--->
// function add(num1,num2){
//     let result=num1+num2
//     return result
// }
// const result=add(3,4)
// console.log("result:",result); 

//another thing-->
// function add(num1,num2){
//     let result=num1+num2
//     console.log("hitesh"); //before return type anything wll print
//     return result //or we can write return num1+num2
//     console.log("hitesh"); //after return type nothing print
// }
// const result=add(3,4)
// console.log("result:",result); 

// function login(username){
//     return `${username} just logged in`
// }
// login() //print nothing
// login("hitesh") //print nothing ...so have to write as line no 42, 43
// console.log(login("hitesh"));
// console.log(login(" "));
// console.log(login()); //important for interview **** 


//to check username undefined or not--->
//not cleared :(
function login(username){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
         return `${username} just logged in`
     }
    console.log(login()); //important for interview


