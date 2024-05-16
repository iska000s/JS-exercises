
//FUNKCJE STRZAŁKOWE 

// const numbers = (...test) => console.log(test);
// numbers(1, 2, 3, 4);

const obj = {
    aa: 33,
    bb: 21,
}

// 1
const num = (...test) => {
    return {
        test,
        a: 12,
        b: 13,
    }
}
console.log(num(obj));

//2
const number = (test) => {
    return {
        ...test,
        a: 12,
        b: 13,
    }
}
console.log(number(obj));

//3
const numb = (test) => ({...test, a: 12, b: 24})
console.log(numb(obj))



// FUNKCJE KONSTRUUJĄCE
console.clear();

//1

function Newspaper (pages, page, title, txt) {
    this.pages = [];
    this.newAdvert = {
        page: this.page,
        title: this.title,
        txt: this.txt,
    }
    this.addAdvert = function(page, obj){
        this.pages.push[page](newAdvert);
        }
    

    this.printAdverts = () => console.log(this.pages);
}



let adv1 = new Newspaper (1, 3, 55, 2);
console.log(adv1);