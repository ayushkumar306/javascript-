let myName="monu"
console.log(myName.trueLength)

let myHeros=["thor","spiderman"]
let heroPower={
    thor:"hmmer",
    spiderman:sling,

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spidermn}`)

    }
}
Object.prototype.monu=function(){
    console.log(`monu is present in all objects`)
}
Array.prototype.heymonu=function(){
    console.log(`monu say hello`)
}
//heroPower.monu()
//myHeros.monu()
//myHeros.heymonu()
//heroPower.heymonu()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"monu".trueLength()
"iceTea".trueLength()