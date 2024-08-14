// const url = "https://api.chucknorris.io/jokes/random";

// window.onload = function (){
//     let div = document.querySelector("#joke");
//     setInterval(function() {
//         getJoke(function(data) {
//             console.log(data);
//             div.innerHTML = data.value;
//         });
//     }, 2000);
// }

// function getJoke (callback){
//     fetch(url)
//     .then(response => response.json())
//     .then(callback);
// }



const url2 = "https://api.chucknorris.io/jokes/random";

window.onload = function (){
    let div2 = document.querySelector("#joke");
    getJoke2(function(data){
        console.log(data);
        div2.innerHTML = data.value;
    });
}

function getJoke2 (callback){
        fetch(url2)
        .then(response => response.json())
        .then(callback);
}