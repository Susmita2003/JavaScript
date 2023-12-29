// const user1={
//     name:"Hitesh",
//     "fullname": "Hitesh Choudhary",
//     age :18,
//     location:"jaipur",
//     email:"hitesh....@com",
//     isLoggedIn:false,
//     lastLoggedIn:["mon","sat"]
// }
// //access the data (1)
// console.log(user1.email);
// //or (2)
// console.log(user1["email"]);
// //but in some case we have to use way (2) bcs "fullname" is a string ,so,we cannot access the string by(.),it have to access by ("")
// console.log(user1["fullname"]);

//const sym=Symbol("key1")
const sym2=Symbol("key2")

const user={
    name:"sathi",
    //sym:"mykey1", //here  the sym datatype prints a String...
    //so we have to convert the datatype to object then it print object--->
    [sym2]:"mykey2",
    age:13,
    email:"hitesh@gmail.com"
}
// console.log(user.sym);
// console.log( typeof user.sym);

//for getting input as object--->
// console.log(user[sym2]);
// console.log( typeof user.sym2);

// user.email="hitesh@chatgpt.com"
// Object.freeze(user) //fixed the value,,, not changed later
// user.email="hitesh@microsoft.com"
// console.log(user);

//function declaration
user.greeting=function(){
    console.log("hello");
}
console.log(user.greeting());
 console.log(user.greeting);

//string interpulation-->
//if we access the value in object key's
user.greetingtwo=function(){
    console.log(`hello,${this.name}`);
}
 console.log(user.greetingtwo);
console.log(user.greetingtwo());


