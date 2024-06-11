// DESTRUKTURYZACJA

const [num, name, obj] = [41, "Ania", {b: 6}];
console.log(num);
console.log(name);
console.log(obj);

// w obj muszę dokładnie takie same nazwy parametrów jak w obiekcie, w tablicach nie
const {username, age} = {username: "Ola", age: 30};
console.log(username);
console.log(age)

// mogę przypisać domyślne wartości
const {username2, age2, city = "KRK"} = {username2: "Ola2", age2: 32};
console.log(username2);
console.log(age2)
console.log(city)

//przypisanie domyślnej wartości w tablicy
const [a, b, c, d = 40] = [1, 2, 3];
console.log(d); //40

// pominięcie elementu środkowego z wartością 10
const [f, , h] = [9, 10, 11];
console.log(f);
console.log(h);



// zapis skrócony obiektu zwracanego

// function getUserData (useCity, age){
//     useCity = "Wawa";
//     const street = "Wilcza";
//     age;
//     return {
//         // useCity: city,
//         // street: street,
//         useCity,   //zapis skrócony - nie trzeba = city
//         street,
//         age,
//     };
// };

// const userData1 = getUserData("Krk", 28); //nie zmieni Krk
// console.log(userData1);

// const {useCity, street, age} = getUserData();
// // console.log(useCity, street, age);

function getUserData (){
    const useCity = "Wawa";
    const street = "Wilcza";
    return {
        // useCity: city,
        // street: street,
        useCity,   //zapis skrócony - nie trzeba = city
        street,
    };
};

const userData1 = getUserData();
console.log(userData1);

const {useCity, street} = getUserData();
console.log(useCity, street);




function getUserData2 (useCity2, level){
    // useCity2 = "SKI";
    const street2 = "Piękna";
    return {
        // useCity: city,
        // street: street,
        useCity2,   //zapis skrócony - nie trzeba = city
        street2,
        level,
    };
};

const userData2 = getUserData2("WR", 3);
console.log(userData2);

const {useCity2, street2, level} = userData2;
// const {useCity2, street2, level} = getUserData();
console.log(useCity2, street2, level);


// 

const userDetails = {
    surname: "Kowalski",
    time: "5:30",
    country: "Poland",
}

function printUser({country, surname}){ //destrukturyzacja -- wyciągnięcie z obiektu dwóch argumentów
    console.log(country, surname);
    console.log(country = "Germany", surname);
}

printUser(userDetails);

// destrukturyzacja bardziej skoomplikowanego obj

const employee = {
    name: "Ola",
    id: 32,
    employment: {
        company: "examle.com",
        adress: {
            country: "Poland",
        }
    }
};

const {id, employment:{company}} =employee;
console.log(id, company);


const {employment:{adress:{country}}} =employee;
console.log(country);



// 
const {employment: {adress:{street3 = "Wilcza"}}} = employee;
console.log(street3);

const {employment: {adress:{street3: companyStreet = "Krakowska"}}} = employee;
console.log(companyStreet);



