    // ZADANIE 1 - if
    // const result = 12 > 7;

    // if (result){
    //     console.log("12 jest większe od 7");
    // }

    // // ZADANIE 2 - switch

    // let temp = 5;

    // switch(temp){
    //     case -10:
    //     case -5:
    //         console.log("jest zimno");
    //         break;
    //     case 0:
    //         console.log("zamarznie woda");
    //         break;
    //     case 5:
    //         console.log("przedwiośnie");
    //         break;
    //     case 10:
    //         console.log("wiosna");
    //         break;
    //     case temp:
    //         console.log("lato");
    //         break;
    //     default:
    //         console.log("nieznana temperatura");
    // }

    // ZADANIE 3 - pętla while

    // let i = -6;
    // while(i <= 6){
    //     console.log(i);
    //     i++;
    // }

    // let j = 90;
    // while(j >= 75){
    //     console.log(j);
    //     j--;
    // }

    // ZADANIE 4 - while

    // let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    // let a = 0;
    // let sum = 0;
    // while (a < arrayNum.length){        
    //     if(arrayNum[a] > 5){
    //     sum = sum + arrayNum[a];
    //     } 
    //     a++;
    // }
    // console.log(sum);

    // ZADANIE 5 - for

    const arrayNrFor = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];

    let sum = 0;
    
    for(let i = 0; i < arrayNrFor.length; i++){
        if( arrayNrFor[i]>0){
        sum = sum + arrayNrFor[i];
        }
    }

    console.log(sum);
    
    
    if (0) console.log("Nie wykona się");
    if ("") console.log("Nie wykona się");
    if (false) console.log("Nie wykona się");
    if (-0) console.log("Nie wykona się");
    if (NaN) console.log("Nie wykona się");
    if (undefined) console.log("Nie wykona się");
    if (null) console.log("Nie wykona się");
    if (0n) console.log("Nie wykona się");
    if (-0n) console.log("Nie wykona się");
    
    if (true) console.log("Wykona się1");
    if (" ") console.log("Wykona się2");
    if ("ddd") console.log("Wykona się3");
    if (!"") console.log("Wykona się4");
    if ({}) console.log("Wykona się5");
    if ([]) console.log("Wykona się6");
    if (123) console.log("Wykona się7");
    if (!false) console.log("Wykona się8");
    if (-12) console.log("Wykona się8");


let name = "Asia";

if (name === "Asia"){
    let name = "Anna"   //zmienna lokalna
    console.log(`Zmiana imienia Asia na ${name}`);
} else {
    console.log("błędne imię")
}
console.log(name);


var name3 = "Bolek";

if (name === "Bolek"){
    var name3 = "Przemek"   //var nadpisało globalną
    console.log(`Zmiana imienia Bolek na ${name3}`);
} else {
    console.log("błędne imię")
}
console.log(name3);
    

function multiply (a, b) {
    let multiplication = a * b;
    return multiplication
    // console.log(multiplication);
}


// multiply(3, 10);
// multiply(120, 56);
// multiply(1234, 10);
console.log( multiply(3, 10) );
console.log( multiply(1, 2) );


function checkName (name){
    if(name == "Kasia"){
        return;
    }
    else {
        return "imię się nie zgadza";
    }
}

console.log(checkName("Bolek"));
console.log(checkName("Kasia"));


let arr3 = [1, 2, 3, 4];

function averageValue (){
    let sum = (arr3[0] + arr3[1] + arr3[2] + arr3[3]) / arr3.length
    console.log(sum);
}

averageValue(arr3)



function averageValue2 (a, b, c, d){
    let sum = (a + b + c + d) / 4
    return sum;
}

console.log(averageValue2(1, 5, 5, 5))


function hireEmployee(name, surname) {
    if (name.length < 3) return null;
    if (surname.length < 3) return null;
    if (name.length > 11 || typeof name !== "string") return "Błąd";
    else {
        return name + " " + surname;
    }
    const obj = {
        name: name,
        surname: surname
    };
    // return obj;
}

const employee1 = hireEmployee("Kasia", "Kowalska");
console.log(employee1)


console.clear();


function createPhone (brand, color) {
    if (color !== "white" && color !== "black" && color !== "silver"){
        return brand + " " + color
    } else {
        return "color is too popular";
    }
}

console.log(createPhone("sony", "black"));
console.log(createPhone("sony", "red"));
console.log(createPhone("iPhon", "white"));

let testFunction = function (a, b){
    return a+b;
}
console.log(testFunction(1,5))

let testMultiply = function (a, b){
    return a*b;
}

console.log(testMultiply(3, 6))
let testMultiply2 = testMultiply(2, 3)
console.log(testMultiply2)

console.clear()



function show(txt){
    console.log(txt);
}

function showArr(arr, callback){
    for (let i =0; i < arr.length; i++){
        const num = arr[i];
        callback(num)
    }
}

const tab = [1, 2, 3, 4, 5];
showArr(tab, show)

console.clear()

// zadanie

function greaterThan6(arr, callback) {
    for (let i = 0; i < arr.length; i++){
        // let nr = arr[i];
        // if (nr > 6){
        //     callback(nr)
        // }
        if (arr[i]>6) callback(arr[i]);
    }
}

// function showArrNr (txt){
//     console.log(txt)
// }
let arrNr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// greaterThan6(arrNr, showArrNr);
greaterThan6(arrNr, function(txt2){
    console.log(txt2)
})

console.clear();

function sumAll() {
    let result = 0;
    for (let i=0; i< arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(sumAll(1, 3, 5))

console.clear()


function ref(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] *= 3;
    }
    return arr
}

const arr4 = [1, 2, 3, 4, 5, 6, 7]

console.log(ref(arr4))

console.clear()



function createComputer (cpu, gpu, ram, disk){
    return{
        cpu: "amd",
        gpu: "nvidia",
        ram: "32gb",
        dysk: "1tb"
    }
}

console.log(createComputer());

function createLaptop(obj, type, weight){
    return{
        ...obj,
        type: "laptopo",
        weight: 2.5,
    }
}

console.log(createLaptop(createComputer(), "tablet", 1.5))

console.clear()

function createUser(name, contact){
    let user = {
        name: name,
        telephone: null,
        email: null,
    }

    if(typeof contact == "string"){
         user.telephone = contact;
        }
     else if (typeof contact !== "string"){
        user.email = contact;
    }
    return user;
    }

let user1 = createUser("Pawel", "df");
console.log(user1)