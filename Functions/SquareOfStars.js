function squareStart(num){
    let n = Number(num);
    let star = "* ";
    let square = "";

    for(let i=1; i<=num; i++){
        square += star.repeat(num).trim();
        square += "\r\n";
    }

    console.log(square);
}

squareStart(4);