const data = 123;

//eksporty nazwane 
export function getData() {
    return data;
};

export let testValue = "test";

export function add(a, b) {
    return a + b;
}



export function multiply (a, b){
    return a*b;
}

export default  {
    getData: getData,
    value: "Hello World",
};

 
