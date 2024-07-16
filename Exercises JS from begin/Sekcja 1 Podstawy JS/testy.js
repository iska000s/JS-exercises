let passingScore = 50;
const studentScore = 20;

passingScore <= studentScore ? console.log("pass") : console.log("not pass")
if (passingScore <= studentScore){
    console.log("Exam passed")
}else{
    console.log("Exam failed.", `Your score: ${studentScore}`);
};

console.log("NEXT EX:");
let grade = 4;
switch (grade){
    case 6: {
        console.log("A")
        break;
    };
    case 5: {
        console.log("B");
        break
    };
    case 4: {
        console.log("C");
        break;
    };
    case 3: {
        console.log("D");
        break;
    };
}

console.log("NEXT EX:");

let n = 3;
let numbers = [];
for (let i = 1; i < n; i++){
    numbers.push(i);
}

console.log(numbers);

console.log("NEXT EX");

let m = 4;
for (let i = 0; i <= m; i++){
    if (i % 2 ===0){
    console.log(i, "- odd");
    } else {
        console.log(i, "- even");
    };
};

console.log("NEXT EX");

let o = 2;
let array = [];
for (let i = 0; i <= o; i++){
    array.push(i);
}

console.log(array);



