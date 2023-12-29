//object de-structuring
const course={
    coursename:"js",
    price:999,
    courseteacher:"hitesh",
}
const {courseteacher}=course
console.log(courseteacher);

//or we can write--->
const {courseteacher:teacher}=course
console.log(teacher);

//API later discuss
//here the values come from backend

//JSON declaration ,,,here have no object
// {
//     "name":"hitesh",
//     "coursename":"js",
//     "price":"free"
// }

