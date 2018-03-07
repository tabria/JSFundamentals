function sum(input){

    let sum = new Array(2).fill(0);
    for(let i=0; i<input.length; i++){
        if (Number(input[i][i])){
            sum[0] += Number(input[i][i]);
        }
        if (Number(input[i][input.length-1-i])){
            sum[1] += Number(input[i][input.length-1-i]);
        }
    }
    console.log(sum.join(" "));
}

sum(([[20, 40], [10, 60]]));