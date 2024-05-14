// console.log("TESTOWANIE FUNKCJI CZASU:")

// const timeoutID = setTimeout(function () {
//     console.log("Zadzaiłało po 5 sekundach od uruchomienia");
// }, 5000);

// const intervalID = setInterval(function () {
//     console.log ("Działa co sekungę");
// }, 1000);


// // clearTimeout()
// // clearInterval()

// const intervalHi = setInterval(function (){
//     console.log("Hi");
// }, 10000);

// const timeoutHello = setTimeout(() => {
//     console.log("Hello, JS Rulers")
// }, 4000);



// let i = 0;
// const interval = setInterval(() => {
//     i++;
//     console.log(i);
//     if (i >= 10) {
//         clearInterval(interval);
//     }
// }, 1000);

// let n = 5;
// let i = 0;
// const countHello = setInterval(function (){
//     i++;
//     console.log(`Hello ${i}`);
//     if (i >= 5){
//         clearInterval(countHello);
//     }
// }, 1000);

let r = 2;
let j = r;
const timeoutEnd = setTimeout(() => {

    console.log("Koniec czasu.");
    
    const intervalReturn = setInterval(function(){

    console.log(`Powrót do zadań za ${j}`)
    j--;
    if (j < 0){
        clearInterval(intervalReturn);
    }
}, 1000);

}, 2000);