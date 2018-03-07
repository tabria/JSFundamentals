function print(input){
    let delimiter = input[input.length-1];
    let array = input.slice(0, input.length-1);
    console.log(array.join(delimiter));
}

print(["One", "Two", "Three", "Four", "Five", "-"]);