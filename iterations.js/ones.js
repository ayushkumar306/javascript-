//for
for(let index=0;index<=10;index++){
    const element =index
    if(element==5){
        //console.log("5 is best number")
    }
    //console.log(element)
}


for(let i=1;i<=10;i++){
    //console.log(`Outer loop value:${i}`)
   for(let j=1;j<=10;j++){
    //console.log(`Inner loop value ${j}and inner loop ${i}`)
    // console.log(i+'*'+j+'='+i*j)
   }
}

let myarray=["flash","batman","superman"]
//console.log(myarray.length)
for(let index=0;index<myarray.length-1;index++){
    const element=myarray[index]
    //console.log(element)
}

//break & continue
for(let index=0;index<=20;index++){
    console.log(index)
    if(index===5){
        //console.log('Detected 5')
        break
    }
    //console.log(`vlue of i is $(index)`)
    
}
for(let index=0;index<=20;index++){
    console.log(index)
    if(index===5){
        console.log('Detected 5')
        continue
    }
    console.log(`vlue of i is $(index)`)

}