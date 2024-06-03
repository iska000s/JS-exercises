
// różne zapisy funkcji, funkcje strzałkowe

const arrow = a => console.log(a);
const arrow2 = function (a, b){
    console.log(a, b);
}
const arrow3 = (a, b) => console.log(a+b);

arrow(20);
arrow2(2, 40);
arrow3(3, 4);

let test = (a,b) => {return a+b};
let test2 = (a, b) => a+b;

console.log(test(9, 0), test2(0, 20));


const splitStr = str => str.split(" ");
var result = splitStr("jeden dwa trzy");
console.log(result);



// console.clear();

