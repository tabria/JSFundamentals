function sumColumnsAndRows(input){
    let sum = 0;
    let isMagic = true;
    if (input.length>0){
        sum = input[0].reduce((a, b) => a + b, 0);

        for(let i=0; i<input.length; i++){
            if (input[i].reduce((a, b) => a + b, 0) != sum){
                isMagic = false;
                break;
            }
            if (calculateColumnSum(input, i) != sum){
                isMagic = false;
                break;
            }
        }
    }

    function calculateColumnSum(array, column){
        let columnSum = 0;
        for(let k = 0; k<array.length; k++){
            columnSum += array[k][column];
        }
        return columnSum;
    }

    console.log(isMagic);
}

sumColumnsAndRows([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);