function sum(n, k){
    let result = [1];

    for (let i=1; i<n; i++){
        let start = Math.max(0, i-k);
        let sumPreviousK = result.slice(start, i).reduce((a, b) => a + b, 0);
        result.push(sumPreviousK);
    }
    console.log(result.join(" "));
}

sum(9, 5);