function aggregate(input){
    let arr = input.join("").split("|").filter(e=>e !="");
    let result =[];
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if (i % 2 == 0){
            result.push(arr[i].trim())
        } else {
            sum += Number(arr[i].trim());
        }
    }
    console.log(result.join(", "));
    console.log(sum);
}

aggregate(["| Sofia | 300", "| Veliko Tarnovo | 500", "| Yambol | 275"]);