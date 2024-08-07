const url = "https://swapi.dev/api";

// fetch(url)
// .then(response => response.json())
// .then(heightPerson)
// .then(() => console.log("TEST"))
// .catch( err => {
//     console.log('Błąd!', err);
//    });
   

// fetch(url, {
// method: "GET",
// // body: JSON.stringify(),
// headers: {
//     "Content-Type": "application/json"
// }
// })
// .then(response => response.json())
// .then(heightPerson)
// .then(() => console.log("TEST"))
// .catch( err => {
//     console.log('Błąd!', err);
// });
   


// function heightPerson(data){
//     let height = Number(data.height);
//     let hat = 10;
//     let sum = height + hat;
//     console.log(`Person 1 - ${data.name}, height with a hat: ${sum}`);
//     console.log("Person 1 - information: ", data);
// }


const newPerson = {
    name: "Basia",
    height: 165,
}

fetch(url, {
    method: "POST",
    body: JSON.stringify(newPerson),
    headers: {
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => {
    console.log(newPerson);
    console.log(data);
})
.catch(error => {
    console.log(error);
});