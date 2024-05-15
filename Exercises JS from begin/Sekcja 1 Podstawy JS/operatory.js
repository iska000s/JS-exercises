
// ZADANIE 1 - modulo

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let sum = 0

for(let i=0; i<arr.length; i++){
    if((arr[i] % 2) == 0){
        sum = sum + arr[i];
    }
}
console.log(sum);

// ZADANIE 2 - ternary

let num = 23;
let result = num > 20 ? "większe" : "mniejsze";
console.log(`Liczba ${num} jest ${result} od 20`);

// ZADANIE 3 - operatory porównania

let temp = 20;

if(temp<=0){
    console.log("zimno, ślisko")
} else if (temp<=8){
    console.log("wczesna wiosna");
} else if (temp<25){
    console.log("lato")
} else{
    console.log("Nieznana temperatura")
}

let l = 10;
++l;
l+=10
console.log(++l);


let speed = 300;
let scoor = speed > 200 ? "szybko" : "wolno";
console.log(scoor);

let numb = 23;
let result2 = numb > 20 ? "większe" : "mniejsze";
console.log(result2);
console.log(numb > 0 ? "większe" : "mniejsze")


let emailSent = false;
// czy wysłano email
if (emailSent === true){
    console.log("Wysłano email");
} else {
    console.log("Należy wysłać email");
}

// czy email nie został wysłany
if (emailSent != true){
    console.log("nie wysłano");
} else {
    console.log("wysłlano");
}

// czy email nie został wysłany
if (!emailSent){
    console.log("nie wysłano");
} else {
    console.log("wysłlano");
};


