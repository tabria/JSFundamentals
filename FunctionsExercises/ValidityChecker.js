function validityChecker(input){
    let point0 = {x:0, y:0};
    let pointA = {x:Number(input[0]), y:Number(input[1])};
    let pointB = {x:Number(input[2]), y:Number(input[3])};


    printResult(pointA, point0);
    printResult(pointB, point0);
    printResult(pointA, pointB);

    function isValidDistance(x, y){
        let distance = Math.sqrt(x*x + y*y);
        return Number.isInteger(distance) ? "valid" : "invalid";
    }
    function printResult(pointOne, pointB){
        let x = pointOne.x - pointB.x;
        let y = pointOne.y - pointB.y;
        console.log(`{${pointOne.x}, ${pointOne.y}} to {${pointB.x}, ${pointB.y}} is ${isValidDistance(x, y)}`);
    }
}

validityChecker([3, 0, 0, 4]);