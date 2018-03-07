function concatReverse(input){
    let joinStr = input.join("");
    let arr = Array.from(joinStr);
    arr.reverse(arr);
    console.log(arr.join(""));
}

concatReverse(['I', 'am', 'student']);