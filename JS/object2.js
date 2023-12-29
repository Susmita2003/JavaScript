//declaration
// const user=new Object()
// console.log(user);

//example 
// const user={
//     email:"some@gmail.com",
//     username:{
//         fullname:{
//             firsrname:"Sathi",
//             lastname:"das",
//         }
//     }
// }
// console.log(user);
// console.log(user.username);
// console.log(user.username.fullname);
// console.log(user.username.fullname.firsrname);

//add two objects
// const ob1={
//     1:"a",
//     2:"b",
// }
// const ob2={
//     3:"c",
//     4:"d",
// }
// const ob3={ob1,ob2}
// console.log(ob3); //this is not like an object

// assign operator
//const ob3=Object.assign({},ob1,ob2) //{}--->optional
// console.log(ob3);

//most commonly use and also easy...
//spread operator---->
// const ob3={...ob1,...ob2}
// console.log(ob3);


//for database values-->
//in an array many objects--->
const user=[ //object
    { //array
        id:12,
        email:"xxx@gmail.com",
    },
    { //array
        id:13,
        email:"yyy@gmail.com",
    },
    {// array
        id:14,
        email:"zzz@gmail.com",
    },
]
console.log(user[2]);
console.log(user);
console.log(user[1].id);
