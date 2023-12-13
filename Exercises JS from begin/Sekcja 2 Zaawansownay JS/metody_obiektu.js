// ĆWICZENIA METOD, THIS ITP
console.log("Hi, let's do the exercises using JS methods");

// METODY, THIS
console.log("1) METODY OBIEKTU, THIS")

let phone = {
    brand: "sony",
    model: "xperia",
    connect: function(contact){
        console.log("Połącznie z: ", contact);
    },
    getInfo: function () {
        console.log(this.brand, this.model);
    }
};

phone.connect("Kasia");
phone.getInfo();