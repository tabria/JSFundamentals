function biggest(input){
    let biggest = Number.NEGATIVE_INFINITY;
    for(let i of input){
        for(let k of i){
            biggest = k > biggest ? k : biggest;
        }
    }

    console.log(biggest);
}

biggest([[20, 50, 10], [8, 33, 145]]);