const url = "https://api.chucknorris.io/jokes/random";

window.onload = function (){
    let div = document.querySelector("#joke");
    setInterval(function() {
        getJoke(function(data) {
            console.log(data);
            div.innerHTML = data.value;
        });
    }, 2000);
}

function getJoke (callback){
    fetch(url)
    .then(response => response.json())
    .then(callback);
}