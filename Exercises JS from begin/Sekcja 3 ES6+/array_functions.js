

let Arr = function () { 
    
let arr = [1, 4, 5, 2, 6, 1];

arr.forEach( x => {
    let r = x*2;
    // console.log(r)
});

const arr2 = arr.map(x => x*3);
// console.log(arr2);

const arr3 = arr2.filter(x => x > 10)
// console.log(arr3);

const result2 = arr.reduce( (acc, cur) => acc + cur);


const found = arr.find(el => el > 4);
const found2 = arr.findIndex(el => el > 4);

const numbers = [4, 6, 2, 6, 1];
const info = numbers.every(el => el >= 1);

const atLeastOne = numbers.some(el => el > 7);


console.log("Arr: ", arr);
console.log("Arr2: ", arr2);
console.log("Arr3: ", arr3);
console.log("Reduce: ", result2);
console.log("Found: ", found);
console.log("Found2: ", found2);
console.log("Info: ", info);
console.log("At Least One: ", atLeastOne);
}

console.log(Arr());
export default Arr;