function diagonalAttack(input){

    let matrix = createMatrix(input);
    let diagonalSums = calculateDiagonals(matrix);
    if (diagonalSums[0] == diagonalSums[1]){
        matrix = changeDiagonalsValues(matrix, diagonalSums[0])
    }

    printMatrix(matrix);

    function printMatrix(matrix){
        console.log(matrix.map(row => row.join(" ")).join("\r\n"));
    }

    function changeDiagonalsValues(matrix, sum){
        for(let i=0; i<matrix.length; i++){
            for(let k=0; k<matrix[i].length; k++){
                if (k == i || k == matrix[i].length-1-i){
                    continue;
                }
                matrix[i][k] = sum.toString();
            }
        }
        return matrix;
    }


    function calculateDiagonals(matrix){
        let sumDiagonals = [0, 0];
        for(let i=0; i<matrix.length; i++){
            if (matrix[i][i]){
                sumDiagonals[0] += Number(matrix[i][i]);
            }
            if(matrix[i][matrix[i].length-1-i]){
                sumDiagonals[1] += Number(matrix[i][matrix[i].length-1-i]);
            }
        }
        return sumDiagonals;
    }

    function createMatrix(input){
        let matrix = [];
        for(let i =0; i< input.length; i++){
            matrix.push(input[i].split(/\s+/));
        }
        return matrix;
    }
}

diagonalAttack(['1 2 3',
    '8 9 4',
    '7 6 5']
);