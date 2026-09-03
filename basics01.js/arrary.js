const myArr=[0,1,2,3,4,5]
const myHeros=["Superman","Batman","Wonder Woman","Flash"]
console.log(myArr)
//console.log(myHeros)
//console.log(myArr[3])
//console.log(myHeros[2])
//myArr.push(6)
//console.log(myArr)
//console.log(myArr.length)
//myArr.pop()
//myArr.unshift(0)
//myArr.shift()

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));

const newArr=myArr.join()
//console.log(newArr);
//console.log(typeof newArr);

//slice,splice
console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log("C" ,myArr);
console.log(myn2);