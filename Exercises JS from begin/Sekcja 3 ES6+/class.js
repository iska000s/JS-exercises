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


// rozszerzenie klas - jak np się powtarzają pewne obiekty

class Furniture {
    constructor(name){
        this.name = name;
        
        if (Furniture.count === undefined) Furniture.count = 0;
        
        this.id = Furniture.count;
        Furniture.count++;

        this._type = "furniture";
    }

    set type(str){
        if (typeof str === "string") this._type = str;
    }
    get type(){
        return this._type;
    }
    printName() {
        console.log(`Nazwa mebla: ${this.name}`);
    }
}

class Table extends Furniture {
    constructor(name){
        super(name);
        this.type = "table";
    }
    printName() {           //przesłania metodę z Furniture
        super.printName();
        console.log(`Nazwa stołu: ${this.name}`);
    }


}

const table1 = new Table("Blue table");
const wardrobe1 = new Furniture("Wardrobe 1");
const wardrobe2 = new Furniture("Wardrobe 2");
const wardrobe3 = new Furniture(342);

console.log(Furniture.count)
console.log(table1);
console.log(wardrobe1);
console.log(wardrobe2);
table1.printName();
console.log(wardrobe3);
console.log(wardrobe1.type)

wardrobe2.type = "12";
console.log(wardrobe2.type);

wardrobe3.type = 12;            //nie jest stringiem, więc pokaże bazową wartość
console.log(wardrobe3.type);











