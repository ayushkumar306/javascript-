let a=50
if(true){
    let a=10
    const b =20
    var c=30
    //console.log("INNER:",a)
}
//console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username="monu"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
//one()
if(true){
    const username="monu"
    if(username==="monu"){
        const website="youtube"
        //console.log(username+website)
    }
    //console.log(website)
}
//console.log(username)


function addOne(num){
    return num+1
}
addOne(5)

const addTwo=function(num){
    return num+2
}
addTwo(5)