//const arr1=[0,1,2,3,4,5]
// const arr2=["shaktimaan","nagraaj"]
// const arr3=new Array(1,2,3,4,5)
// console.log(arr1[4]);

//array methods
// arr1.push(6)
// arr1.push(7)
// arr1.pop() //()-->last value will remove
// arr1.unshift(9)//add in first
// arr1.shift()//remove the adding element
// console.log(arr1.includes(9)); //9 is in the array or not????? ---->here we get boolean output
// console.log(arr1.indexOf(9));
// console.log(arr1);


//array to string convertion---->
// const arr2=arr1.join()
// console.log(arr1);
// console.log(arr2);
// console.log(typeof arr2);


//***********slice and splice***************/
// const arr1=[0,1,2,3,4,5]
// console.log("A" ,arr1);
// const arr2=arr1.slice(1,3)
// console.log("slice_result",arr2);
// console.log("B",arr1);
// const arr3=arr1.splice(1,3)
// console.log("splice_result",arr3);
// console.log("C",arr1);

const marvel_heros=["Thor","Ironman","Spiderman"]
const dc_heros=["Superman","Flash","batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3]);
console.log(marvel_heros[3][2]);

//concat operator
marvel_heros.concat(dc_heros)
console.log(marvel_heros);

// // like a complete array
const allheros=marvel_heros.concat(dc_heros)
console.log(allheros);

// //concat or spread operator
// const allnewheros=marvel_heros.concat(dc_heros)
// console.log(allnewheros);

// const arrx=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const newarr=arrx.flat(Infinity)
// console.log(newarr);

//questions--->
//isArray,from,of methods---->

//"SAthi" is array or not???? (isArray)
// console.log(Array.isArray("Sathi"));

// //Convert the string "SAthi" into An array?? (from)
// console.log(Array.from("sathi"));

// //interview questions  (from)
// console.log(Array.from({name:"Sathi"}));

// (of)  
// let score1=100
// let score2=200
// let score3=300
// console.log(Array.of(score1,score2,score3));


