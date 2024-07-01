//skraca do wartości całkowitej daną licznę
console.log(Math.trunc(3.8))        //3

//pokaże czy dodatnia (zwraca 1), czy ujemna (-1), czy 0 (0)
console.log(Math.sign(3))          //1
console.log(Math.sign(-3))          //-1
console.log(Math.sign(0))          //0

//pierwiastek sześcienny
console.log(Math.cbrt(8))          //2

//logarytmy
console.log(Math.log2(2))          //logarytm z podstawą 2 //1
console.log(Math.log10(10))          //logarytm z podstawą 10 //1



console.log(Number.EPSILON)         //epsilon;
console.log(Number.MAX_SAFE_INTEGER)         //maksymalne wartości dla bezpiecznej liczby całkowitej
console.log(Number.MIN_SAFE_INTEGER)         //minimalne wartości dla bezpiecznej liczby całkowitej

// Number.isInteger()  - czy jest to liczba całkowita
console.log(Number.isInteger(10))  //true
console.log(Number.isInteger(10.23))  //false
console.log(Number.isSafeInteger(10.23))  //true - czy jest to bezpieczna liczba całkowita
console.log(Number.isSafeInteger(10234234234234))  //false
console.log(Number.isSafeInteger(10234234234234))  //false



console.log(isFiniteI(10/1))        //czy jest to liczba skończona //true

console.log(isNaN(NaN))             //czy jest to not a number //true
