    //Drzewo dom - ćwiczenia powtarzające

let div = document.getElementById("content");
console.log(div);

div.style.color = "orange";
div.innerHTML = "<b>Hello World</b>";


let liItem = document.querySelector("li.menu-item");
console.log(liItem)
liItem.style.fontWeight = "bold"

let liList = document.querySelectorAll("ul li.menu-item.current");

for (let i = 0; i < liList.length; i++){
  const el = liList[i];
  el.style.color = "red";
}

let li = document.querySelector("ul li.current");
let p = document.createElement("p");
let h1 = document.createElement("h1");
let ul = li.parentElement;

// sprawdzam
// console.log(ul);
// ul.style.color = "violet";


p.innerHTML = "It is link to antother page";
p.innerHTML = "Loading"
p.innerText = "test"


li.appendChild(p);

// li.removeChild(p);

p.className = "paragraf";

let txtPar = document.createElement("div");
let childUL = document.getElementsByName("ul li");

txtPar.innerHTML = "Crossing";

// p.style.fontWeight = "bold";


// click me - ćw

let pClick = document.createElement("p");
pClick.innerHTML = "click me";
document.getElementsByTagName("body")[0].appendChild(pClick);

// document.addEventListener("click", function(event){
//     console.log(event.clientX, event.clientY);
// });

pClick.addEventListener("click", function(event){
    console.log("Kliknięto w przycisk w punkcie: ", event.clientX, event.clientY);
});
// pClick.addEventListener("click", function(event){
//     console.log(event.clientX, event.clientY);
// });

const input = document.querySelector("input");
input.value = "Hello World";

const area = document.querySelector("textarea");
area.value = "content..."

input.addEventListener("input", function(event){
    // console.log(event.target);
    console.log(event.target.value);
})

area.addEventListener("input", (event) => {
    console.log(event.target.value);
})

const parLorem = document.querySelector("#lorem");
console.log(parLorem);

parLorem.addEventListener("click", function(event){
    console.log("Kliknięto w lorem ipsum: ", event.clientX, event.clientY);
});

parLorem.addEventListener("mouseenter", function(event){
    console.log("mouseenter");
});
parLorem.addEventListener("mouseover", function(event){
    console.log("mouseover");
});
parLorem.addEventListener("mouseleave", function(event){
    console.log("mouseleva");
});
parLorem.addEventListener("mouseup", function(event){
    console.log("mouseup");
});
parLorem.addEventListener("mouseout", function(event){
    console.log("mouseout");
});
parLorem.addEventListener("mousemove", function(event){
    console.log("mousemove");
});



// format JSON - JS Object Notation

let data = {
    "user" : {
        "name": "Ola",
        "age": 22,
    }
}
;


// let obj = JSON.parse(data);
// console.log(obj);
// console.log(obj.user.name);

let jsonStr = JSON.stringify(data);
console.log(jsonStr);
console.log(data.user.name);   // pokaże z obiektu
// console.log(jsonStr.user.name); //wystąpi błąd, bo to string


let data2 = `
{
    "user": {
        "name": "Ola",
        "surname": "Kowalska",
        "age": 33,
        "languages": ["JS", "JAVA"],
        "adress": {
            "city": "KRK",
            "street": "wilcza"
        }
    }
}
`;

let objStr = JSON.parse(data2);
console.log(objStr);

console.clear();

