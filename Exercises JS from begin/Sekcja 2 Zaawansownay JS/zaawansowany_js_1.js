
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