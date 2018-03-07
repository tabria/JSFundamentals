function sortNumbers(input){
    let sortedArray = input.sort((a, b) => a-b).slice(0,2);
    console.log(sortedArray.join(" "));
}

sortNumbers([30, 15, 50, 5]);