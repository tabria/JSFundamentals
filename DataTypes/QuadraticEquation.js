function quadratic(numA, numB, numC){

    let a= Number(numA);
    let b = Number(numB);
    let c = Number(numC);

    let d = Math.pow(b, 2) - 4 * a * c;
    if (d>0){
        let x1 = (((b * -1) + Math.sqrt(d) ) / (2 * a));
        let x2 =(((b * -1) - Math.sqrt(d)) / (2 * a));

        if (x1 > x2){
            console.log(x2);
            console.log(x1);
        } else {
            console.log(x1);
            console.log(x2);
        }

    } else if(d==0){
        console.log(((b * -1) / (2 * a)));
    } else {
        console.log("No");
    }
}


quadratic(5, 2, 11);
