// CLASS JS

class Car{
    constructor (name, year) {
        this.name = name;
        this.year = year;
    }
    print() {
        console.log(this.name, this.year);
    }
}

const car1 = new Car("toyota", "2002");
car1.print();



// 
let Animal = class {
    constructor(name){
        this.name = name;
    }
    getName = () => {return this.name};
}


const animal1 = new Animal("dog");
console.log(animal1.getName());


let Dog = class BasicDog {          //klasa nazwana przypisana do zmiennej
}


let Cat = class  {                  //klasa nienazwana przypisana do zmiennej
}


// settery i gettery

animal1.age = 10;
console.log(animal1.age);

// chcemy sprawdzić czy jakaś wartość nie będzie ustawiona oponiżej zera - setInterval


// 
let Animal2 = class {
    constructor(name){
        this.name = name;
        this._age = 1;
    };
    getName = () => {return this.name};
    set age (value){
    if(value > 0) this._age = value         //nie można użyć tej samej nazwy "age" - bo się zapętli, więc przyjęto, że z podkreśleniem
};
};