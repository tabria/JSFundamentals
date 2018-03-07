function modifyValue(num){
    const border = 5;
    const modifier = 9;
    function sumNumber(num){
        return num.toString().split("").map(Number).reduce((a, b) => a + b, 0);
    }

    while(true){
        let sum = sumNumber(num);
        let numLength = num.toString().length;
        if (sum/numLength > border){
            break;
        }
        num += "" + modifier;
    }

    console.log(num);
}

modifyValue(583);