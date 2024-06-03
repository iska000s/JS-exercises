
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

const obj = c => ({c});
var result2 = obj("jeden dwa trzy");
console.log(result2);

const obj2 = c => ({txt: c});
var result3 = obj2("jeden dwa trzy");
console.log(result3);

const obj3 = c => {return {txt: c}};
var result4 = obj3("1 2 3");
console.log(result4);


[1, 2, 3, 4, 5].forEach((el) => console.log(el));

const tab1 = [1, 2, 3, 4, 5].map((el) => el*2);
console.log(tab1);

const tab2 = [1, 2, 3, 4, 5, 6].map(el => el*3).filter(el => el >10);
console.log(tab2);

// NIE WYKOTRZYSTAMY FUNKCJI STRZAŁKOWEJ JAKO KONSTRUKTORA
// funkcja zadziała:
const Bar1 = function (a, b) {
    console.log(a+b);
}
let barNr1 = new Bar1(1, 2);
// nie zadziała arrow f.:
const Bar2 = (a, b) => {
    console.log(a-b);
}
// const barNr2 = new Bar2(1, 2);

// F. ARROW NIE WYKORZYSTAMY TEŻ Z "ARGUMENTS"
// zadziała funkcja:
const argTest1 = function () {
    console.log(arguments)
};
argTest1(1, 2, 3, 4, 5, 6);

// nie zadiała z "arguments"
const argTest2 = () => {
    console.log(arguments)
};
// argTest2(1, 2, 3, 4, 5, 6);
// tu zadziała, bo może zastosować operator REST
const argTest3 = (...params) => {
    console.log(params)
};
argTest3(1, 2, 3, 4, 5, 6);


// F. ARROW MA ZAKRES LEKSYKALNY "THIS" - czyli wynikający z kodu

// this użyje window
let objTest = {
    data: "hello",
    foo: function(){
        setTimeout(function(){
         console.log("TEST1", this);  
        }, 1000);
    }
}

objTest.foo();

//strzałkowa wsaże na nasz obiekt
let objTest2 = {
    data: "hello",
    foo: function(){
        setTimeout( () => {
         console.log("TEST2", this);  
        }, 1000);
    }
}

objTest2.foo();

// console.clear();

