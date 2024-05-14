
let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
let arr2 = [];

function distFromAverage () {
    for (let i = 0; i < arr.length; i ++){
        sum += arr[i];
    }
    console.log(`Suma tablicy pierwotnej: ${sum}`);

    for (let i = 0; i < arr.length; i ++){
        arr2[i] = arr[i] - sum;
    }
    
    return arr2;
}

distFromAverage(arr);
console.log(arr2);
