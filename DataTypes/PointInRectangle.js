function pointPosition(inputInfo){
    let point = {x:Number(inputInfo[0]), y:Number(inputInfo[1])};
    let rectangle  = {xMin:Number(inputInfo[2]), xMax:Number(inputInfo[3]), yMin:Number(inputInfo[4]), yMax:Number(inputInfo[5])}

    let isXInside = (point.x >= rectangle.xMin) && (point.x <= rectangle.xMax);
    let isYInside = (point.y >= rectangle.yMin) && (point.y <= rectangle.yMax);

    console.log(isXInside && isYInside ? "inside" : "outside");;
}


pointPosition([12.5, -1, 2, 12, -3, 3]);