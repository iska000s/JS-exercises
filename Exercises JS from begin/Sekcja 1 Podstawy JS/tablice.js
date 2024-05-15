// POWTÓRZENIE MATERIAŁÓW  - TABLICE

let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
let arr2 = [];

function distFromAverage () {
    for (let i = 0; i < arr.length; i ++){
        sum += arr[i];
    }
    console.log(`Suma tablicy pierwotnej: ${sum}`);

    for (let i = 0; i < arr.length; i ++){
        arr2[i] = arr[i] - sum;
    }
    
    return arr2;
}

distFromAverage(arr);
console.log(arr2);



let fruits = ["pomarańcza", "banan", "wiśnia"];
console.log(`Pierwszy owoc: ${fruits[1]}`)
console.log(`Ostatni owoc: ${fruits[fruits.length-1]}`)
console.log(fruits);
for (let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}



let numbers = []
numbers[0] = [1, 2, 3, 4];
numbers[1] = [5, 6, 7, 8];
numbers[2] = [9, 10, 11, 12];

numbers = [
[2, 3, 3, 9],
[5, 5, 10, 8],
[9, 1, 13, 12]
];

    console.log(numbers[1][2]);

let students = [
    [3, 5, 6],
    [5, 7, 3]
];

students [1][2] ="ADAM";

console.log(students[1][2]);

const mixedValues = [
    ["Keli", "Walter", "Heriberto"],
    [1, 2, 3, 4, 5, 6]
];


console.log(mixedValues[0][2], mixedValues[1][2], mixedValues[1].length); 

const car = {
    type: "sedan",
    color: "green",
    engine: 2.5,
}

let carDescription = car.type + ", " + car.color + ", " + car.engine;
console.log(carDescription);
