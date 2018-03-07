function triangle(n){
    let number = Number(n);
    let star = "*";
    let triangle ="";
    for(let i=1; i<=number; i++ ){
        triangle += star.repeat(i) + "\r\n";
    }
    for(let k=number-1; k>0; k-- ){
        triangle += star.repeat(k) + "\r\n";
    }

    console.log(triangle);
}

triangle(4);