function drawSquare(num){
    let n = Number(num);
    let end = n === 2 ? 1 : 3;
    let square ="";
    for(let k = 1; k<=end; k++){
        square += "+" + "-".repeat(n-2) + "+" + "-".repeat(n-2) + "+\r\n";
        if (k < 3) {
            let cycleEnd = (num - 3)/ 2;
            for(let i = 1; i<=cycleEnd; i++){
                square+="|" + " ".repeat(n-2) + "|" + " ".repeat(n-2) + "|\r\n";
            }
        }
    }
    console.log(square);
}


drawSquare(5);