//REST PARAMETR

const testRest = (...para) => {
    console.log(para);
}

testRest(1, 2, 3, 4, 5);

// musimy pamiętać jak go ustawiamy względem innychc argumentów funkcji
const foo = (a, b, ...params) => {
    console.log(a, b, params);
}

foo(1, 3, 23, 4, 56);



// SPREAD OPERATOR

//rozbicie tablicy
function foo2(a, b, c, ...ele){
    console.log(a, b, c, ele);
}


const tab = [1, 2, 3, 4, 5, 6];

foo2(...tab);

// łączenie tablic i jej rozbicie
const tab2 = [11, 22, ...tab, 33, 44];
console.log(tab2);
console.log(...tab2);

// rozbicie stringa
const name = "Ania";
const chars = [...name];
console.log(chars);

//łączenie obj i rozbicie elementów obj

const basicObj = {
    a: "Ola",
    b: 23,
}
console.log(...basicObj.a);

let secondObj = {
    c: 77,
    d: "test",
    ...basicObj,
    e: 32,
}
console.log(secondObj);


// praktyka - dodawanie nowych elementów

let tasksList = [
{ name: "Task 1", completed: false },
{ name: "Task 2", completed: false },
{ name: "Task 3", completed: false },
{ name: "Task 4", completed: false },
];

tasksList.push({ name: "Task 5", completed: false });

const newTasksList = [...tasksList, { name: "Task 6", completed: false },]
console.log(newTasksList);



