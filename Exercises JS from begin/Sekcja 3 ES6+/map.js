
// MAP - kiedy wielokrotnie dodajemy lub usuwamy coś, to lepiej użyć map, bo np jak do jakiegoś obiektu dodajemy wielokrotnie elementy to nie są tak zoptymalizowane, więc lepiej użyć wtedy mapy

// możliwość przechowywania danych w postacji kluczy i wartości


const map1 = new Map();

// pierwsze to nazwa klucza, drugie wartości
map1.set("a1", 1);
map1.set(10, {test: "text"});

// pobranie elementu za pomocą .get i nazwy klucza
console.log(map1.get(10));  //{test: "text"};
console.log(map1.size);         //wielkość mapy //2

const apple = {name: "Apple"};
map1.set(apple, {name: "apple"});
console.log(map1.get(apple));    //{name: "apple"}

// kasowanie elementu
map1.delete(10);

// sprawdzenie czy istnieje dany element w mapie
console.log(map1.has(10));     //false bo usunęliśmy go

//keys() - używaliśmy również w pętli for of

//values()- używaliśmy również w pętli for of

//entries()   - iteratorr

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









