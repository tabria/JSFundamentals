function extractor(str){
    let result = [];
    let pattern =/\b[_][A-Za-z0-9]+\b/g;
    let match = pattern.exec(str);
    while(match){
        result.push(match[0].replace("_", ""));
        match = pattern.exec(str);
    }

    console.log(result.join(","));
}

extractor("The _id and _age variables are both integers");