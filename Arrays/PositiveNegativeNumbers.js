function orderNumbers(input){
    let result = [];
    for (let element of input){
        if (element < 0){
            result.unshift(element);
        } else {
            result.push(element);
        }
    }

    console.log(result.join("\r\n"));
}

orderNumbers([7, -2, 8, 9]);