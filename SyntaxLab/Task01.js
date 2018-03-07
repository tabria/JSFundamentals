function sumNumbers(a, b, c) {
    let sum = a + b + c;
    console.log(sum);
}

sumNumbers(1, 2, 3);
//task1

function sumVat(n) {
    let sum =0;
    for(let num of n){
        sum+=num;
    }
    console.log('sum = ' + sum);
    console.log('VAT = ' + sum*0.2);
    console.log('total = ' + sum*1.20);
}

sumVat([1.20, 2.60, 3.50]);
//task2

function countLetters(word, letter){
    let count = 0;
    for(let n=0; n<word.length; n++){
        if (word[n] == letter){
            count++;
        }
    }
    return count;
}

console.log(countLetters("1", "1"));
//task 3

function filterByAge(minAge, nameA, ageA, nameB, ageB){
    let personA = {name: nameA, age: ageA};
    let personB = {name: nameB, age: ageB};
    if (personA.age >= minAge) console.log(personA);
    if (personB.age >= minAge){
        console.log(personB);
    }
}

filterByAge(24, "koko", 15, "boko", 28);
//task 4

function concatNumber(n){
    let concat ="";
    for(let i=1; i<=n; i++){
        concat += i;
    }
    return concat;
}

console.log(concatNumber(11));
//task5


function calculateArea(w, h, W, H){
    let [s1, s2, s3] = [w*h, W*H, Math.min(w,W) * Math.min(h, H)];
    return s1 + s2 - s3;
}

console.log(calculateArea(2, 4, 5, 2));

//task6

function calculateNextDay(year, month, day){
    let date = new Date(year, month-1, day);
    let dayInMilliseconds = 1000 * 60 * 60 * 24;
    let nextDate = new Date(date.getTime() + dayInMilliseconds);
    return nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + "-" + nextDate.getDate();
}

console.log(calculateNextDay(2018, 1, 7));

//task 7

function distance(xPointA, yPointA, xPointB, yPointB){

    let PointA = {x:xPointA, y:yPointA};
    let PointB = {x:xPointB, y:yPointB};

    let xDistance = Math.pow(PointA.x - PointB.x, 2);
    let yDistance = Math.pow(PointA.y - PointB.y, 2);
    let distance = Math.sqrt(xDistance + yDistance);

    return distance;
}

console.log(distance(2, 4, 5, 0));