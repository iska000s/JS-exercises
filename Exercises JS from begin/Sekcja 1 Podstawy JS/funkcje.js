    // ZADANIE 1 - if
    // const result = 12 > 7;

    // if (result){
    //     console.log("12 jest większe od 7");
    // }

    // // ZADANIE 2 - switch

    // let temp = 5;

    // switch(temp){
    //     case -10:
    //     case -5:
    //         console.log("jest zimno");
    //         break;
    //     case 0:
    //         console.log("zamarznie woda");
    //         break;
    //     case 5:
    //         console.log("przedwiośnie");
    //         break;
    //     case 10:
    //         console.log("wiosna");
    //         break;
    //     case temp:
    //         console.log("lato");
    //         break;
    //     default:
    //         console.log("nieznana temperatura");
    // }

    // ZADANIE 3 - pętla while

    // let i = -6;
    // while(i <= 6){
    //     console.log(i);
    //     i++;
    // }

    // let j = 90;
    // while(j >= 75){
    //     console.log(j);
    //     j--;
    // }

    // ZADANIE 4 - while

    // let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    // let a = 0;
    // let sum = 0;
    // while (a < arrayNum.length){        
    //     if(arrayNum[a] > 5){
    //     sum = sum + arrayNum[a];
    //     } 
    //     a++;
    // }
    // console.log(sum);

    // ZADANIE 5 - for

    const arrayNrFor = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];

    let sum = 0;
    
    for(let i = 0; i < arrayNrFor.length; i++){
        if( arrayNrFor[i]>0){
        sum = sum + arrayNrFor[i];
        }
    }

    console.log(sum);
    
    
    if (0) console.log("Nie wykona się");
    if ("") console.log("Nie wykona się");
    if (false) console.log("Nie wykona się");
    if (-0) console.log("Nie wykona się");
    if (NaN) console.log("Nie wykona się");
    if (undefined) console.log("Nie wykona się");
    if (null) console.log("Nie wykona się");
    if (0n) console.log("Nie wykona się");
    if (-0n) console.log("Nie wykona się");
    
    if (true) console.log("Wykona się1");
    if (" ") console.log("Wykona się2");
    if ("ddd") console.log("Wykona się3");
    if (!"") console.log("Wykona się4");
    if ({}) console.log("Wykona się5");
    if ([]) console.log("Wykona się6");
    if (123) console.log("Wykona się7");
    if (!false) console.log("Wykona się8");
    if (-12) console.log("Wykona się8");
    
