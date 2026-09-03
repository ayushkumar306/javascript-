function sayMyName(){
    console.log("m")
    console.log("a")
    console.log("n")
    console.log("u")
}
//sayMyName()

//function addTwoNumbers(num1,num2){
//    console.log(num1+num2)
//}
//addTwoNumbers(2,3)
//const result=addTwoNumbers(2,3)
//console.log("Result:",result)
//.show undefined

function addTwoNumbers(num1,num2){
    let result=num1+num2
    return result
    //return num1+num2
}
const result=addTwoNumbers(2,3)
//console.log("Result:",result)

function loginUserMessge(usernme){
    return`${usernme}just logged in`
}
//console.log(loginUserMessge("mnu"))
//console.log(loginUserMessge())//undefined

function  calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400,500))//[ 200, 300, 400, 500 ]

const user={
    username:"mnu",
    price:199
}
function handleObject(nyobject){
    console.log(`username is ${nyobject.username} and price is ${nyobject.price}`)
}
handleObject(user)
handleObject({
    username:"smu",
    price:399
})
const myNewarry=[200,400,100,600]
function returnSecondVlue(getsarry){
    return getsarry[1]
}
console.log(returnSecondVlue(myNewarry));
