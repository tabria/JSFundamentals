function lengthChooser(input){
    let point1 = {x:Number(input[0]), y:Number(input[1])};
    let point2 = {x:Number(input[2]), y:Number(input[3])};
    let point3 = {x:Number(input[4]), y:Number(input[5])};

    let result = [];

    function distance(pointA, pointB){
        let x = pointA.x - pointB.x;
        let y = pointA.y - pointB.y;
        return Math.sqrt(x*x + y*y);
    }

    let distance1 = distance(point1, point2);
    let distance2 = distance(point2, point3);
    let distance3 = distance(point3, point1);

    if ((distance1 <= distance3) && (distance3 => distance2)) {
        let final = distance1 + distance2;
        console.log('1->2->3: ' + final);
    }
    else if ((distance1 <= distance2) && (distance3 < distance2)) {
        let final = distance3 + distance1;
        console.log('2->1->3: '+ final);
    }
    else {
        let final = distance2 + distance3;
        console.log('1->3->2: ' + final);
    }
}


lengthChooser([5, 1, 1, 1, 5, 4]);