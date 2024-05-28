
//FUNKCJE STRZAŁKOWE 

// const numbers = (...test) => console.log(test);
// numbers(1, 2, 3, 4);

const obj = {
    aa: 33,
    bb: 21,
}

// 1
const num = (...test) => {
    return {
        test,
        a: 12,
        b: 13,
    }
}
console.log(num(obj));

//2
const number = (test) => {
    return {
        ...test,
        a: 12,
        b: 13,
    }
}
console.log(number(obj));

//3
const numb = (test) => ({...test, a: 12, b: 24})
console.log(numb(obj))



// FUNKCJE KONSTRUUJĄCE
console.clear();

//1

function Newspaper (title) {
    this.title = title;
    this.adverts = [];

    this.addAdvert = function(name, page){
        this.adverts.push({
            name: name,
            page: page
        });
        this.adverts.sort((a, b) => a.page - b.page);
    };
        
    this.printAdverts  = function(){
        for (let i = 0; i < this.adverts.length; i++){
            const a = this.adverts[i];
            console.log(title, `Advert ${i+1}: `, a.name, ", Page: ", a.page);
        }
    }
}
const magazine = new Newspaper("It world");
console.log(magazine);

magazine.addAdvert("Computer", 4);
magazine.addAdvert("Lapt", 6);
magazine.addAdvert("Phone", 1);
magazine.printAdverts();

const magazineBeauty = new Newspaper("Your beauty");
magazineBeauty.addAdvert("Eyes", 1);
magazineBeauty.addAdvert("How to lost weight", 4);
magazineBeauty.addAdvert("Your choise", 2);
magazineBeauty.addAdvert("Only this week", 5);
magazineBeauty.printAdverts();



// ćw

// zmienna przed konstruktorem
let color = "black";

function Car (brand, model){
    if (this instanceof Car == false){
        // wywołano kbez new
        return new Car(brand, model);
    }

    this.color = "red";
    this.brand = brand;
    this.model = model;

    this.printInfo = function (){
        console.log(this.brand, this.color, this.model);
        // color bez wskazania na ten konstruktor, wskazuje na color poza konstruktorem
        console.log(this.brand, color, this.model);
    }
}

// js leci pokolei więc zmieniamy "color" zanim wywołamy
color = "yellow";

// błędnie wywołane bez "new"
let car1 = Car("Ford", "Mustang");
car1.printInfo();



// ćw
// enumeracja obiektu property enumeration 
console.clear();


const object = {
    a: 12,
    b: "txt",
    printData: function() {
        console.log(this.a, this.b)
    },
    arr: [1, 3, 4],
    arr2: [
        {
            aa: 11, 
            bb: 22, 
            cc: 33
        },
        {
            dd: 44, 
            ee: 55
        },
        [111, 333, 444]
    ]
};

// console.log(object.arr2[2][2]);
// console.log(object.arr2[1].dd);

// PRZEGLĄDANIE OBIEKTU
for (const prop in object.arr2){
    console.log(prop, object.arr2[prop]);
    // console.log(object.arr2[prop])
    // console.log(object.arr2)
}

console.clear();
//gettery i settery
// ćw


const truck = {
    _brand: null,
    _model: null,
    _topSpeed: 0,

    set brand(newBrand){
            this._brand = newBrand;
    },
    get brand(){
        return this._brand;
    },

    set model(newValue){
        this._model = newValue
    },
    get model(){
        return this._model;
    },

    set topSpeed(newSpeed){
        if(newSpeed > 0){
            this._topSpeed = newSpeed;
        } else {
            console.log("Speed too low");
        }
    },
    get topSpeed(){
        return this._topSpeed;
    }
}

truck.brand = "Fiat";
truck.model = "xc323";
truck.topSpeed = -150;

console.log(truck.topSpeed, truck.brand, truck.model);


console.clear();

// obiekty window

// setTimeout(function(){
//     console.log("After timeout");
// }, 800);


// let i = 0;
// let intervalId = setInterval(() => {
//     if(i < 2){
//         console.log(i);
//         i++
//     } else{
//         // console.log("koniec czasu");
//      console.log("koniec czasu");
//     }
// }, 1000);


// window.alert("hello world");
// let userInput = prompt("Podaj swoje imię");
// console.log("Imię użytkownika: ", userInput)


console.clear();

//testy


let y = 10;
if (1 == 1){
    
    // console.log(y);
    // temporal dead zone:
    let y = 20;
}

console.clear();


// PRYMITYWY JAKO OBIEKTY
// 1. liczby

let numPrym = 32.2434;
let numPrym2 = new Number(323.432);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.parseInt("4234234234.2323233")+100);
console.log(Number.parseFloat("4234234234.322323332")+100);
console.log(Number.isInteger(4234234234));
console.log(Number.isInteger("4234234234.322323332"));
console.log(Number.isInteger(4234234234.322323332));

let a = -1 / 0;
console.log(a);
console.log(Number.isFinite(a));
console.log(Number.isFinite(1));

console.log(Math.round(12.343));    // zaokrąglenie
console.log(Math.ceil(12.343));  // zaokrąlenie do gówy
console.log(Math.floor(12.843)); // zaokrąglenie do dołu

console.log(Math.random());  // od 0 do 1 (bez 1 i 0) 
console.log(Math.random()*5);  // od 0 do 5 (bez 5 i 0)
console.log(123.42424242.toFixed(1))
console.log(123.42424242.toFixed(2))
console.log(123.42424242.toFixed(3))

console.log(Math.sqrt(16));
console.log(Math.trunc(16.2323));


console.clear();

//2. łańcuchy znaków

let str = "Hello World";
console.log(str);
str = str.toUpperCase();
console.log(str);
console.log(str.toLowerCase());
console.log(str.toLocaleLowerCase());

console.log(str.charAt(0));
console.log(str.charCodeAt(0));

str = "a b c d e f g"
console.log(str.split(" "));    // tablica elementów podzielona spacjami

const data = "1 2 3 4 5".split(" "); 
console.log(data);
let result = data.join("|")     // połączenie elementów do łańcucha znaków
console.log(result);

str = "A B C D E B B B";
str = str.replace("B", "test");     // zamiana elementów ale tylko jednego, czyli na końcu B już nie zmieni
console.log(str);

str = str.replace(/B/g, "TEST");       // wyrażenie regularne - zmieni wszystkie B
console.log(str);

str ="0123456789";
console.log(str.substring(2));  // chcrmy pobrać od drugiego elementu łańcucha
console.log(str.substring(2, 6));  

let txt = "Kasia lubi jak śmieje się Kasia w głosy";
console.log(txt.indexOf("Kasia", 2));  
console.log(txt.indexOf("Kasię", 2));  // -1

let txt2 = txt.substring(txt.lastIndexOf("Kasia"));
console.log(txt2);

// let d = 0;
// let c = 0;

let array = [
    {d: 3, c: "cc"},
    {d: 1, c: "ff"}];

array.sort((a, b) => a.d - b.d);




// this.addAdvert = function(name, page){
//     this.adverts.push({
//         name: name,
//         page: page
//     });
//     this.adverts.sort((a, b) => a.page - b.page);
// };
    







