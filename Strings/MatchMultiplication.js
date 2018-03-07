function manipulate(input){
    let pattern = /([-]?\d+)\s*\*\s*([-]?[\d]*[\.]*[\d]+)/;
    let arr = input.split(";").filter(e=>e!=="");
    for(let i=0; i<arr.length; i++){
        let match = pattern.exec(arr[i]);
        if (match){
            let product = Number(match[1]) * Number(match[2]);
            arr[i] = arr[i].replace(pattern, product);
        }
    }
    console.log(arr.join(";"));
}

manipulate("My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2 * 0.5 (deposit).");