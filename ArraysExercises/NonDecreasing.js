function extractNonDecreasing(input){
    let maxNumber = Number.NEGATIVE_INFINITY;
    let result = [];
    for(let i in input){
        if (input[i] >= maxNumber){
            result.push(input[i]);
            maxNumber = input[i];
        }
    }
    console.log(result.join("\r\n"));
}

extractNonDecreasing([1,3,8,4,10,12,3,2,24]);