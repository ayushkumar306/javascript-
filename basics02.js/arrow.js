const user={
    username:"mnu",
    price:999,

    welcomeMessge:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }
}
//user.welcomeMessge()
//username="sam"
//user.welcomeMessge()
//console.log(this)
//function chai(){
  //  let username="rinku"
    //console.log(this)
//}
//chai()

//const cai=function(){
   // let username="rohit"
   /// console.log(this.username)
//}
//chai()
//undefined
const chai=()=>{
    let username="rohit"
    console.log(this.username)
}
//chai()

//arrow function () =>{}

const addTwo=(nums1,nums2)=>{
    return nums1+nums2
}
//console.log(addTwo(3,4))

//implicit return
const addTwo1=(nums1,nums2)=>nums1+nums2
console.log(addTwo1(3,4))
const addTwo2=(nums1,nums2)=>(nums1+nums2)
console.log(addTwo2(3,4))

