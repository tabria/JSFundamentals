function inside(input){

    let box = {xMin:10, xMax:50, yMin:20, yMax:80, zMin:15, zMax:50};

    for (let i = 0; i < input.length; i+=3) {
         let point = {x:Number(input[i]), y:Number(input[i+1]), z:Number(input[i+2])};
         let isXInside = (point.x >= box.xMin && point.x <= box.xMax);
         let isYInside = (point.y >= box.yMin && point.y <= box.yMax);
         let isZInside = (point.z >= box.zMin && point.z <= box.zMax);

         if (isXInside && isYInside && isZInside){
             console.log("inside");
         }else {
             console.log("outside");
         }
    }
}


inside([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);