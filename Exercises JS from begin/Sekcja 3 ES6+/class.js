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

        if (Animal2.count === undefined) Animal2.count = 0;
        Animal2.count++;    
    };

    getName = () => {return this.name};
    
    set age (value){
    if(value > 0) this._age = value         //nie można użyć tej samej nazwy "age" - bo się zapętli, więc przyjęto, że z podkreśleniem
    };
    
    get age(){
    return this._age;
    }
  
    
//statyczne metody - static - moga byc wywołane bez potrzeby wywołania nowej instacjij za pomocą new
    static getNewAnimal (){
        return new Animal2("Default animal");        
    }

    static getAnimal2Count(){
        return Animal2.count;
    }
};

const animal2 = new Animal2("Tiger");
console.log(animal2.getName());

animal2.age = -20;
console.log(animal2.age);

const animal3 = Animal2.getNewAnimal();
console.log(animal3.getName());             //"Default animal"
console.log(animal3.age);                   //1 - nie podaliśmy, więc poda domyślną


console.log(Animal2);
console.dir(Animal2);

console.log(Animal2.getAnimal2Count());


//  extends i super








