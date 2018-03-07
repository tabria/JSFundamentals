function wordCounter(input){
    let result = new Map();
    let arr = input[0].split(/[\W]/g).filter(e=>e!=="").map(e=>e.toLowerCase());
    for(let key of arr ){
        if (!result.get(key)){
            result.set(key, 0);
        }
        let currentCount = result.get(key);
        result.set(key, currentCount + 1 );
    }
    let sortedWords = Array.from(result.keys()).sort();
    sortedWords.forEach( e => console.log(`'${e}' -> ${result.get(e)} times`));
}

wordCounter(["Far too slow, you're far too slow."]);