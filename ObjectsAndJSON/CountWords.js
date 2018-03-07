function wordCounter(input){
    let result = {};
    let arr = input[0].split(/[\W]/g).filter(e=>e!=="");
    for(let key of arr ){
        if (!result[key]){
            result[key] = 0;
        }
        result[key]++;
    }
    console.log(JSON.stringify(result));
}

wordCounter(["Far too slow, you're far too slow."]);