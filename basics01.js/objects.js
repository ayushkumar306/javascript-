//singletone
const tinderUser=new Object()
//const tinderUser={}  //non-singleton object
//console.log(tinderUser)
tinderUser.id="1234bc"
tinderUser.name="monu"
const regularUser={
    email:"some@gmil.con",
    fullname:{
        userfullnme:{
            firstname:"monu",
            lstname:"singh"
        }
    }
}
//console.log(regularUser.fullname.userfullnme.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
//console.log(obj3)

const users=[
    {
        id:1,
        email:"G@gmil.com"
    },
    {
         id:1,
        email:"G@gmil.com"
    },
    {
         id:1,
        email:"G@gmil.com"
    }
]
users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
