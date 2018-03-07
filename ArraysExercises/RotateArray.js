function rotate(input){
    let cycles = Number(input[input.length-1]);
    input.pop();
    cycles = input.length < cycles ? cycles % input.length : cycles;
    for(let i =0; i<cycles; i++){
        input.unshift(input[input.length-1]);
        input.pop();
    }
    console.log(input.join(" "));
}

rotate([1, 2, 3, 4, 9]);