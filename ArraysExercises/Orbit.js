function starGenerator(input){
    let cols = Number(input[0]);
    let rows = Number(input[1]);
    let star = {x:Number(input[2]), y:Number(input[3])};
    let starValue = 1;
    let result = [];
    let step = 0;

    for(let i=0;i<rows;i++) {
        let rs = [];
        for(let j=0;j<cols;j++) {
            rs.push(0);
        }
        result.push(rs);
    }

    result[star.x][star.y] = starValue;

    while(true){
        starValue++;
        step++;
        let startRow = star.x-step;
        let endRow = star.x + step;
        let startCell = star.y-step;
        let endCell = star.y + step;
        for(let k =startRow; k<=endRow; k++){
            if (k>=0 && k<rows){
                for(let n=startCell; n<=endCell; n++){
                    if (n>=0 && n<cols){
                        if ((k == startRow || k==endRow) || (n == startCell || n==endCell)){
                            result[k][n]=starValue;
                        }
                    }
                }
            }
        }
        if (endRow > rows){
            break;
        }
    }

    console.log(result.map(row => row.join(" ")).join("\r\n"));
}


starGenerator([5, 5, 2, 2]);