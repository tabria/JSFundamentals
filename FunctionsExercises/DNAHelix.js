function generateHelix(input){
    let cycles = Number(input);
    let letters = ["A","T","C","G","T","T","A","G","G","G"];
    let result ="";
    let countStars = 2;
    let dashCount = 0;
    let letterCount = 0;
    let isReversed = false;

    for(let i=0; i<cycles; i++){

        if (dashCount === 0){
            countStars =2;
            result += createRowSymbols(countStars, letterCount, dashCount, letters);
            dashCount = 2;
        } else if (dashCount === 2){
            isReversed = countStars === 0;
            countStars = 1;
            result += createRowSymbols(countStars, letterCount, dashCount, letters);
            dashCount = isReversed ? 0 : 4;
        } else if (dashCount === 4){
            countStars = 0;
            result += createRowSymbols(countStars, letterCount, dashCount, letters);
            dashCount = 2;
        }

        letterCount = letters.length-1 === letterCount + 1 ? 0 : letterCount + 2;
    }

    function createRowSymbols(countStars, letterCount, dashCount, letters){
        let star = "*";
        let dash ="-";
        return `${star.repeat(countStars)}${letters[letterCount]}${dash.repeat(dashCount)}${letters[letterCount+1]}${star.repeat(countStars)}\r\n`;
    }

    console.log(result);
}


generateHelix(10);