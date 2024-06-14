
// MAP - kiedy wielokrotnie dodajemy lub usuwamy coś, to lepiej użyć map, bo np jak do jakiegoś obiektu dodajemy wielokrotnie elementy to nie są tak zoptymalizowane, więc lepiej użyć wtedy mapy

// możliwość przechowywania danych w postacji kluczy i wartości
//kluczami mogą być nietylko prymitywy, ale również obiekty

const map1 = new Map(); // - stworzenie mapy

// pierwsze to nazwa klucza, drugie wartości
// map.set(nazwa klucza, wartość)   - dodanie elementów do mapy

map1.set("a1", 1);
map1.set(10, {test: "text"});

// pobranie elementu za pomocą .get i nazwy klucza
// map.get(klucz mapy)

console.log(map1.get(10));  //{test: "text"};

//map.size     - sprawdzenie wielkości mapy (ile mapa ma w sobie elementów czyli klucza+wartości)
console.log(map1.size);         //wielkość mapy //2


// dodanie obiektu do mapy
const apple = {name: "Apple"};
map1.set(apple, {name: "apple"});
console.log(map1.get(apple));    //{name: "apple"}

// kasowanie elementu za pomocą nazwy klucza
// map1.delete(nazwa klucza);
map1.delete(10);

// sprawdzenie czy istnieje dany element w mapie
// map1.has(nazwa klucza)      - sprawdzenie czy istnieje dany klucz w mapie
console.log(map1.has(10));     //false bo usunęliśmy go

//keys() - używaliśmy również w pętli for of

//values()- używaliśmy również w pętli for of

//map.entries()   - iteratorr zwróci

const iterator1 = map1.entries();

let result = iterator1.next();
while(!result.done){
    console.log(result.value);
    result = iterator1.next();
}

// not a number też będzie wyświetlone jako nan jako klucz
map1.set(NaN, 99);


// key i value
for (const [key, value] of map1){
    console.log("map1: " + key + " " + value);
}


// wyświetlenie mdwóch tablic z tablicy dwuwymiarowej
const map2 = new Map[["key1", 8], ["key2", 99]];
map1.forEach(function(key, value){
    console.log(key, value)
});


//połączenie dwóch map w jedną mapę map3
const map3 = new Map([...map1, ...map2]);
map3.forEach(function(key, value){
    console.log(key, value)
});




const set1 = new Set ();            //stworzenie nowego Set
set1.add(2);                        // - dodanie 
set1.add(Nan);
set1.add({a: 21});
set1.add("text");


set1.delete(2) ;                //kasowanie wartości
set1.has(2);                    // sprawdzenie czy istnieje taka wartość
set1.clear();                   // kasowanie wszystkiego w Set
set1.size;                      // sprawdzenie ile ma elementów Set

for(const item of set1){        // przejście pętlą po wszystkich elementach "item"
    console.log(item);
}


//tablica na podstawie mapy
const arr = Array.from(set1);

let arr2 = [...set1]                    //tablica powstała z elementów set
const set2 = new Set([...set1], 10, 23, 43)     //- przekazujemy elementy set i dodajemy nowe









