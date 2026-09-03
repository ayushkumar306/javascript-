const marvel_heros=["thor","ironman","hulk","spiderman","captain america"];
const dc_heros=["batman","superman","flash","wonder woman","aquaman"];
console.log(marvel_heros);
//marvel_heros.push("black widow");
//console.log(marvel_heros[3][1]);

//const newHeros=marvel_heros.concat(dc_heros);
//console.log(newHeros);

const newHeros=[...marvel_heros,...dc_heros];
//console.log(newHeros);

const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=anotherArr.flat(2);
console.log(real_another_array);

console.log(Array.isArray("ayush"));
console.log(Array.from("ayush"));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));