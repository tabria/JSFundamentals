function count(text, needle){
    let count = 0;
    let pattern = new RegExp(`\\b${needle}\\b`, "gi");
    let match = pattern.exec(text);
    while(match){
        count++;
        match = pattern.exec(text);
    }
    console.log(count);
}

count("There was one. Therefore I bought it. I wouldn’t buy it otherwise.","there");