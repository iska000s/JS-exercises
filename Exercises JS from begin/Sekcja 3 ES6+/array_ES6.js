const arr1 = Array.of(2, 5, 6, "sd", {a: 3});       //- powstanie tablica

const arr2 = Array.from("Test");     // - łańcuch znaków na poszczególne znaki T e s t

const arr3 = Array.from([1, 2, 3, 4, 5]);  //- zwróci też tablicę, więc samo to użycie nie mam sensu, ale pozwoli na użycie funkcji jak niżej

const arr4 = Array.from([1, 2, 3, 4, 5], (a) => a*2);  //- wykonanie funkcji na każdym elemencie z tablicy

const arr5 = Array.from([1, 2, 3, 4, 5], function (a) {
    return a * this.value;
}, {value: 4});  //- wykonanie funkcji na każdym elemencie z tablicy

const arr6 = [1, 4, 6, 2, 5];
console.log(arr6.fill(100));         //zmiana wszystkich elementów tablicowych na wartość "100"
console.log(arr6 .fill(0, 2));         //zmiana wszystkich elementów tablicowych od ineksu 2 na wartość "0"
console.log(arr6 .fill(9, 1, 4));         //zmiana wszystkich elementów tablicowych od ineksu 1 do 4 (bez 4) na wartość "9"

//zwraca pierwsze wystąpienie w tablicy
console.log(arr6.find(v => v < 10));    //zwróci pierwszy element tablicy, spełniający ten warunek
console.log(arr6.findIndex(v => v > 8));        //zwróci index pierwszego eleemntu spełniającego warunek

//skopiowanie danego elementu z jednego miejsca na inne
const arr7 = [4, 1, 6, 3, 6];
console.log(arr7.copyWithin(1, 3))          //argument pierwszy tzw target - od tego indexu włącznie nadpiszą się wartości i kolejne indexy, tyle indexów ile zajmją skopiowane elementy, a reszta zostanie przepisana
                                        // argument drugi tzw end- od którego indexu do końca mają być skopiowane wartości
                                        //4, 3, 6, 3, 6      - 4 bez zmian, 3 i 6 skopiowane, 3 i 6 przepisane (bo zajęły tylko dwa indexy)

console.log([3, 5, 23, 9, 67, 6].copyWithin(1, 3, 4))    //skopiowanie i podmiana wyłącznie kilku wartości (argument pierwszy to target - który index ma być podmieniony, argument dwa to start - który index ma być skopiowany do argumentu target, argument trzeci to end - index do którego występują elementy, które będą kopiowane)
                                                        // end to jest wartość indexu, ale bez niego (czyli można przyjąć, że weźmie wcześniejszy element)
                                                     //[3, 9, 23, 9, 67, 6]

console.log([3, 5, 23, 9, 67, 6].copyWithin(1, 3, 4))  



//entries, keys, values

const arrTest = [4, 45, "test", 23, {}];
for (let c of arrTest.values()) console.log(c);     // pętla for zwróci wartości tablicy
for (let c of arrTest.keys()) console.log(c);       // pętla for zwróci indexy
for (let c of arrTest.entries()) console.log(c);       // pętla for zwróci tablicę dla każdego elementu z informacją o indexie i wartości- [index, wartość]
for (let [key, value] of arrTest.entries()) console.log(key, value);       // pętla for zwróci dla każdego elementu informację o indexie i wartości- index, wartość (już nie w tablicy)


