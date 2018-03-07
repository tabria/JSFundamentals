function extractKNumbers(input){
    let k = input.splice(0,1);

    console.log(input.slice(0, k[0]).join(" "));
    console.log(input.slice(input.length-k[0], input.length).join(" "));
}

extractKNumbers([2, 7, 8, 9]);