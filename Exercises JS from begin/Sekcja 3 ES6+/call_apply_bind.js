const employee = {
    name: "Ola",
    printInfo: function(surname, city){
        console.log(this.name, surname, city);
    }
}

employee.printInfo("Kowalska", "Paryż");    //Ola Kowalska Paryż

const user1 = {name: "Adam", age: 33};
employee.printInfo.call(user1, "Adamski", "Kraków");   //Adak Adamski Krk



//apply - różni się tylko tym, że możemy przekazać wszystkie argumenty w postaci tablicy

employee.printInfo.apply(user1, ["Adamski", "Wrocław"]);   //Adak Adamski Krk
employee.printInfo.apply(user1, ["Adamski", "Poznań", 23]);   //Adak Adamski Krk //23 nie pokaże, bo nie ma w metodzie

//bind - printinfo z user - na stałe połączone

let userInfo = employee.printInfo.bind(user1, "Piotrowski", "Białystok") //zwrócona zostanie metoda,a właściwie funkcja, która zawsze zostanie wykorzystywana w tej zmiennej
userInfo();             //Adam Piotrowski Białystok
userInfo("Kasia");      //Adam Piotrowski Białystok



