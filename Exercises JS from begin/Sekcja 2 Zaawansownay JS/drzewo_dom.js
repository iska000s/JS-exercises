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