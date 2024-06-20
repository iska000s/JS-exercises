function test1(v){
    if (typeof v === "undefined") v=23;
    console.log(v);
}


// ES6
function test2(a, b = 44, c = {a: 3}){
    console.log(a, b, c);
}

test2(10);


//domyslne + destrukturyzacja
console.dir("TEST 3:");

function test3([a = 1, b = 2] = []){
// function test3({a = 1, b = 2} = {}){
    console.log(a, b);
}

test3([]);
test3();
// test3({});
test3([20, 90]);

console.dir("TEST 4:");

function test4([a = 1, b = 2] = [500]){
        console.log(a, b);
    }
    
    test4([]);
    test4();            //500, 2
    test4([20, 90]);
    
    
    // domyślne parametry w przypadku obiektów

    
console.dir("TEST 5:")
function test5({a = 1, b = 2}){
    console.log(a, b);
}

test5([]);
test5({});
// test5();         //błąd
test5({a: 20, b: 90});  //pamiętajmy, że w desstrukturyzacji obiektu muszą się pokrywać argumenty
test5({a: 200});  
test5({b: 200});  


console.dir("TEST 6:")
function test6({a = 1, b = 2} = {}){
    console.log(a, b);
}

// test5([]);
// test5({});
test6();                 //1, 2
test6({})               //1, 2
test6({a: 100})          //100, 2   
test6({a: 100, b:200})   //100, 200
test6({b: 100, a:200})   //w obiekcie możemy zamieniać kolejność, ale nie nazwy, w tablicy kolejność musi być taka sama


console.dir("TEST 7:")
function test7({a = 1, b = 2} = {a: 30}){
    console.log(a, b);
}

test7();                //30, 2
test7({})               //1, 2
test7({a: 100})          //100, 2   
test7({b: 300})          //1, 300
test7({a: 100, b:200})   //100, 200
test7({b: 100, a:200})   //w obiekcie możemy zamieniać kolejność, ale nie nazwy, w tablicy kolejność musi być taka sama
