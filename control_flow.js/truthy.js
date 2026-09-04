const userEmail="user@example.com"
//if(userEmail){
   // console.log("user email is valid")
//}else{
 //   console.log("user email is not valid")
//}

//falsy values in javascript
//false,0,-0,BigInt(0)n,null,undefined,NaN,''

//truthy values in javascript
//"0",'false'," ",[],{},function(){}

if(userEmail.length===0){
    console.log("array is empty")
}
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}

//Nullish coalescing operator(??):null undefined
let val1;
//val1=5??10
val1=null??10
//val1=undefined??10
console.log(val1) //5

//ternary operator
//condition?true:false
const iceTeaPrice=100
iceTeaPrice<=80?console.log("less than 80"):console.log("more than 80")
