function generateMatrix(rows, columns) {
    let total = rows*columns;
    let result= [];

    for(let i=0;i<rows;i++) {
        let rs = [];
        for(let j=0;j<columns;j++) {
            rs.push(0);
        }
        result.push(rs);
    }

    let row=0;
    let col=0;
    let step = 0;
    for(let i=0;i<total;){
        while(col+step<columns){
            i++;
            result[row][col]=i;
            col++;

        }
        col--;
        row++;

        while(row+step<rows){
            i++;
            result[row][col]=i;
            row++;
        }
        row--;
        col--;

        while(col>=step){
            i++;
            result[row][col]=i;
            col--;
        }
        col++;
        row--;
        step++;

        while(row>=step){
            i++;
            result[row][col]=i;
            row--;
        }
        row++;
        col++;
    }
    console.log(result.map(row=>row.join(" ")).join("\r\n"));
}

generateMatrix(5, 5);