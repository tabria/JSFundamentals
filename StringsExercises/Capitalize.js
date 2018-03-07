function capitalize(text){
    let arr = text.split(/\s+/).filter(e=> e !== "");
    for(let i =0; i<arr.length; i++){
        let firstLetter = arr[i].substr(0,1).toUpperCase();
        let restStr = arr[i].substr(1).toLowerCase();
        arr[i] = firstLetter +  restStr;
    }
    console.log(arr.join(" "));
}

capitalize("Capitalize these words");