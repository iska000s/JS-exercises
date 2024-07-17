const url = "https://swapi.dev/api/people/1/";

fetch(url)
.then(response => response.json())
.then(heightPerson)
.then(() => console.log("TEST"))

function heightPerson(data){
    let height = Number(data.height);
    let hat = 10;
    let sum = height + hat;
    
    console.log(sum, data);
}
