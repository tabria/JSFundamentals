function evenPositionElementsFinder(input){

    let result = [];
    for(let i in input){
        if (i % 2 === 0){
            result.push(input[i]);
        }
    }
    console.log(result.join(" "));
}

evenPositionElementsFinder([20, 30, 40]);