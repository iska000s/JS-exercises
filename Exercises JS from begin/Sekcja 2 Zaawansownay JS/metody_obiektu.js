

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


// 

let animal = {
    name: "Żelka",
    age: 5,
    type: "pies",
    info: function(){
        console.log("To zwierzę to", this.type, `ma ${this.age} lat i nazywa się ${this.name}` )
    }
}

animal.info();

// 
console.clear();


let school = {
    name: "Zespół szkół numer 2",
    city: "Krakow",
    students: [ ],
    addStudents: function(name, surname){
        return this.students[this.students.length] = {
                name: name,
                surname: surname,
            }
    },
    showStudents: function (){
            if(this.students.length <= 0){
                console.log("Szkoła nie ma jeszcze studentów");
            } else{
                console.log(`Lista studentów "${this.name}": `);
                for (let i = 0; i < this.students.length; i++){
                console.log(`${i+1}.`, this.students[i].name, this.students[i].surname);
            }
        }
    },
    showStudentsByName: function(name){
        console.log(`Studenci z listy o imieniu "${name}": `);
        for (let i = 0; i < this.students.length; i++){
            if(this.students[i].name == name){
                console.log(this.students[i].name, this.students[i].surname)
            }
        }  
    },
    geetNumStudents: function(){
        console.log(`Liczba studentów: ${this.students.length}`);
    },
    resetStudents: function(){
        this.students = [];
        console.log("Zresetowano bazę studentów", this.students, "Aby dodać nowych studentów użyj metody addStudents");
    },
    getStuSameName: function(){
        console.log("Studenci z powtarzającym się imieniem:");

        for (let i = 0; i < this.students.length; i++){
        for (let j = 0; j < this.students.length; j++){
            if(this.students[i].name == this.students[j].name && i !== j){
                console.log(`Studenci z powtarzającym się imieniem "${this.students[i].name}": `, this.students[i].name, this.students[i].surname)
            }
        }
        }  
    }

}

school.addStudents("Ewa", "Nej");
school.addStudents("Krystian", "Chowak");
school.addStudents("Ewa", "Brul");

school.showStudents();
school.showStudentsByName("Ewa");
school.geetNumStudents();
school.resetStudents();

school.addStudents("Ewa", "Król");
school.addStudents("Przemek", "Suchenek");
school.addStudents("Ola", "Lis");
school.addStudents("Ewa", "Welnes");

school.showStudents();
school.getStuSameName();
