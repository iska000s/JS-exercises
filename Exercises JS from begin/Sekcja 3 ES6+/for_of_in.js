const tab = [1, 23, 3, 4, 5, 66, 7];
for(let v of tab){
    console.log(v);
}

const str = "text";
for(let s of str) console.log(s);

const map1 = new Map();
map1.set("test", {id: 1, content: "text"});
map1.set({car: "bmw"}, {topSpeed: 200});

console.log(map1.get("test"));


for (const entry of map1){
    console.log(entry);    //
}


const divElements = document.querySelectorAll("div");

console.log(divElements);

for (let d of divElements){
    d.innerHTML = "test"
    console.log(d)
}


console.clear();

const arr = [12, 32, 33];
delete arr[1];
for (let i of arr) console.log(i);   // 12, undefined, 33
for (let j in arr) console.log(j);  // 0, 2


const text = "text";

for (const s of text) console.log(s);
for (const t in text) console.log(t);


console.clear();

const obj = {
    a: 10,
    txt: "text",
    print: function(){}
};

for (const key in obj) console.log(key);
