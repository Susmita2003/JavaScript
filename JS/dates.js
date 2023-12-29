// let mydate=new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate); //important

 //let createddate2=new Date(2023,0,23)
// console.log(createddate2.toDateString());

// let date3=new Date(2023,0,23,5,3)
// console.log(date3.toLocaleString());


//********************time*********************/
// let time=Date.now()
// console.log(time);
// console.log(createddate2.getTime());
// console.log(Date.now()); //---> line (x)
// //in line (x) ,here we get mili second time but we need second time so--->>
// console.log(Date.now()/1000); //here we get decimal value...we don't need this ...so we have to remove decimal value-->
// console.log(Math.floor(Date.now()/1000)); 


let date4=new Date()
// console.log(date4);
// console.log(date4.getMonth());
// console.log(date4.getDay());


date4.toLocaleString('default',{
    weekday:"long",
})