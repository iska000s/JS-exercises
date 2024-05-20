
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

function Newspaper (title) {
    this.title = title;
    this.adverts = [];
    // this.newAdvert = function (page, title, txt){
    //     this.page = page,
    //     this.title = title,
    //     this.txt = txt,
    //     console.log("Nowy artykuł: ", this.page, this.title, this.txt);
    // }

    this.addAdvert = function(name, page){
        this.adverts.push({
            name: name,
            page: page
        });
        }
        
    this.printAdverts  = function(){
        
        for (let i = 0; i < this.adverts.length; i++){
            const a = this.adverts[i];
            console.log("Advert: ", a.name, a.page);
        }
       
    }

    
}



const magazine = new Newspaper("It world");
console.log(magazine);

magazine.addAdvert("Computer", 4);
magazine.addAdvert("Lapt", 6);
magazine.addAdvert("Phone", 1);
magazine.printAdverts();


// JAK ARTYKUŁY USTAWIĆ W KOLEJNOŚCI "PAGE"????????????
// MOŻE SORTOWANIEM, ALE NIE WYCHODZI MI
// this.adverts.sort(this.page);
// może ifem?
