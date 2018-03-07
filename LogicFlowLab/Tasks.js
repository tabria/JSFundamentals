'use strict';

//task 1
function multiplyTwoNumbers(num1, num2){

    return num1 * num2;
}

console.log(multiplyTwoNumbers(2, 2.25));


//task 2
function bottleBoxFitter(bottlesCount, boxCapacity){
    return Math.ceil(bottlesCount/boxCapacity);
}

console.log(bottleBoxFitter(20, 5));

//task 3
function leapYear(year){
    if ( (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        return "yes";
    }
    return "no";
}

console.log(leapYear(1980));

//task4
function calculateCircleArea(radius){
    let area = Math.PI * Math.pow(radius, 2);
    console.log(area);
    let roundArea = area.toFixed(2);
    console.log(roundArea);
}
calculateCircleArea(5);

//task5
function calculateTriangleArea(sideA, sideB, sideC){
    let semiPerimeter = (sideA + sideB + sideC)/ 2;
    return Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
}

console.log(calculateTriangleArea(2, 3.5, 4));

//task6
function calculateCone(baseRadius, coneHeight){

    let coneArea = Math.PI * baseRadius * (baseRadius + Math.sqrt(Math.pow(coneHeight, 2) + Math.pow(baseRadius, 2)));
    let coneVolume = (Math.PI * Math.pow(baseRadius, 2) * coneHeight)/3;

    console.log(coneVolume.toFixed(4));
    console.log(coneArea.toFixed(4));
}

calculateCone(3, 5);


//task7
function numChecker(num){
    let numType = "invalid";
    let result = num % 2;
    if (result == 0){
        numType = "even";
    } else if (result == Math.round(result)){
        numType = "odd";
    }
    console.log(numType);
}

numChecker(1.5);


//task8
function veggieFruitIdentifier(thing){
    switch(thing){
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
        case "peach":
            console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "onion":
        case "garlic":
        case "parsley":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
            break;
    }
}

veggieFruitIdentifier("tomato");


//task9
function numberColorAlter(n){
    let list = "<ul>\r\n";
    for(let i = 1; i<=n ; i++){
        let color = i % 2 !=0 ? "green" : "blue";
        list += `<li><span style="color:${color}">${i}</span></li>\r\n`;
    }
    list += "</ul>";
    return list;
}


//task10

function chessboardDraw(num){

    let chessboard="<div class=\"chessboard\">\r\n";
    for(let row=1; row<=num; row++){
        chessboard += "<div>\r\n";
        let color = row % 2 ==0 ? "white" : "black";
        for(let col=1; col<=num; col++ ){
            chessboard += `<span class=\"${color}\"></span>\r\n`;
            color = color=="black" ? "white" : "black";
        }
        chessboard +="</div>\r\n";
    }
    chessboard +="</div>\r\n";
    console.log(chessboard);
}


//task11
function binaryLog(n){
    for(let x of n){
        console.log(Math.log2(x));
    }
}

binaryLog([1024, 1048576, 256, 1, 2]);


//task12
function isPrime(n){
    let prime = true;
    let sqrtPrime = Math.sqrt(n);
    for(let i=2; i<=sqrtPrime; i++){
        if (n % i == 0){
            prime = false;
            break;
        }
    }
    prime = n <= 1 ? false : prime;
    return prime;
}

console.log(isPrime(7));