
// ZADANIE 1 - ZMIENNE GLOBALNE I LOKALNE
const name = "Asia";
if(name === "Asia"){
    let name = "Ola";
    console.log(name);
}
console.log(name);

// ZADANIE 2 FUNCTION

function multiply (a, b){
    let result = a * b;
    return result;
    // console.log(result);
}

// let firstOption = multiply(3, 10);
// let secondOption = multiply(120, 56);
// let thirdOption = multiply(1234, 1234);
// console.log(`Wynik 1: ${firstOption},`,  `Wynik 2: ${secondOption},`, `Wynik 3: ${thirdOption}`);
console.log(`Wynik 1: ${multiply(3, 10)},`,  `Wynik 2: ${multiply(120, 56)},`, `Wynik 3: ${multiply(1234, 1234)}`);

// ZADANIE 3 RETURN

function averageValue(a, b, c, d){
    let result = (a + b + c + d)/4;
    return result;
}

console.log("WYNIK 1: ", averageValue(2, 4, 8, 10), ", WYNIK 2: ", averageValue(30, 60, 90,120), ", WYNIK 3: ", averageValue(5, 10, 15, 20));

// ZADANIE 4 OBIEKT Z FUNKCJI

function createTv(brand, screenSize, color) {
    if (color = "white" && color != "black" && color != "silver"){
        return null;
    }
    
    const tv = {
        brand: brand,
        screenSize: screenSize,
        color: color
    }
    return tv;
}

const tv1 = createTv("Sony", 42, "black");
const tv2 = createTv("Sharp", 32, "white");
const tv3 = createTv("Lenovo", 50, "silver");
const tv4 = createTv("Lenovo", 42, "green");

console.log(tv1, tv2, tv3, tv4)



// ZADANIE 5 FUNCTION EXPRESSION - WYRAŻENIA FUNKCYJNE

let multiplication = function (a, b){
    return a * b;
}

console.log(multiplication(3, 6));

const test = multiplication(10, 25);

console.log(test);

// CALLBACK

function greatThan6(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(i<6){
            callback(arr[i])
        }
    }
}

arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// zapis 1 - funkcja wyciągnięta poza argument
function show(number){
    console.log(number);
}

greatThan6(arr1, show);

// zapis 2 - funkcja rozpisana jako argument
greatThan6(arr1, function(number2){
    console.log(number2);
});

// PRZEKAZANIE DANYCH DO FUNKCJI PRZEZ WARTOŚCI I PRZEZ REFERENCJE

function info (num, obj){
    console.log(`wejściowe dane: ${num},`, obj);
    // 20 + obiekt
    num = 10;
    console.log(num);
    // 10
    // obj = {z: 3};
    // obj = {o: 40, i: 20};
    // console.log(obj);
    // {o: 40, i: 20}

}

const d = 20;
let color = {dark: "black", shine: "yellow"};
color = {first: "white"};
info(d, color)
console.log(color)

// zadanie referencje - przekazanie danych

function multiplyRef (){
    let newArr = [];

    for(let i = 0; i < arguments.length; i ++){
        newArr[i] = arguments[i]*3
    }
    console.log(newArr);
}
multiplyRef(1,2,3,4,5,6,7);


function multiplyRef2 (arr){
    for(let i = 0; i < arr.length; i ++){
        arr[i] *= 3
    }
    console.log(arr);
}
newArr = [1,2,3,4,5,6,7];
multiplyRef2(newArr);


// spread operator

function createComputer(cpu, gpu, ram, disk){
    return{
        cpu: cpu,
        gpu: gpu,
        ram: ram,
        disk: disk
    };
}

let computer = createComputer("amd", "nvidia", "32gb", "1tb");
console.log(computer);

function createLaptop(objComputer){
    return{
        ...objComputer,
        type: "laptop",
        weight: 2.5,
    }
}

console.log(createLaptop(createComputer()));
console.log(createLaptop(computer));

let samsung = createLaptop(computer);
console.log(samsung);

function createTV(objPar){
    return{
        ...objPar,
        price: "2000 zł"
    };
}

let newTV = createTV(["samsung", "mic", "100"]);
console.log(newTV);

let newTV2 = createTV(computer);
console.log(newTV2);


// typeof

function createUser (name, contact){
    let user = {
        name: name,
        email: null,
        telephone: null
    }
    if(typeof contact == "string"){
        user.email = contact;
    }
    else if (typeof contact == "number"){
        user.telephone = contact;
    }
    else{
        user.contact = "podano niepoprawne dane kontaktowe";
    }
    return user;
}

let users = {
    user1 : {
        name: "Basia",
        contact: 323244
    },
    user2 : {
        name: "Tomek",
        contact: 2323n
    }
}


console.log(createUser("Ola", "ola@example.com"));
console.log(createUser("Kasia", 938238293));

console.log(createUser(users.user2.name, users.user2.contact));
console.log(createUser(users.user1.name, "nie podano"));

users.user3 = createUser("Bartek", 232323284);
console.log(users.user3);

users.user1 = createUser(users.user1.name, users.user1.contact);
console.log(users.user1);
