//singleton - object.create
//object literls
const mySym=Symbol("Key1")
const JsUser={
    name:"jhon",
    "full name":"jhon doe",
    [mySym]:"myKey1",
    age:18,
    loctaion:"jaipur",
    email:"jhon@example.com",
    isLoggedIn:false,
    lastlogin:["Monday","saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(typeof JsUser .mySym)

//Object.freeze(JsUser)//not change
JsUser.email="monu@example.com"
//console.log(JsUser["email"])
console.log(JsUser)

JsUser.greeting=function(){
    console.log("hello ! how are you")
}
//console.log(JsUser.greeting())
JsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());