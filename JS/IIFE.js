// function chai(){
//     console.log(`db connected`);
// }
// chai()


//IIFE function
// 1st () for func definition and 2nd () for execution call [instead of chai()]
//how to write named IIFE????/
(function chai(){
    console.log(`db connected`);
})(); //here ; using must for connecting two functions and () using instead of using chai()

//IIFE function with arrow function--->
//unnamed IFFE--->
( () => {
    console.log(`db 2`);
}) ();

//IIFE function with arrow function,, pass name--->
//simple IFFE with parameter-->
( ( name) => {
    console.log(`db 2 ,${name}`);
}) (`sathi`)


