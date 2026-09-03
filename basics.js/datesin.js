let myDate=new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toUTCString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);
let myCreatedDate=new Date('2026-08-18');
//console.log(myCreatedDate.toDateString());

let myTimeStamp=Date.now();
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Date.now()/1000);
//console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday:'long'
    
})