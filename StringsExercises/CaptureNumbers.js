function capture(input){
    let result = [];
    let pattern = /[0-9]+/gm;
    let str = input.join(" ");
    let match = pattern.exec(str);
    while(match){
        result.push(match[0]);
        match = pattern.exec(str);
    }
    console.log(result.join(" "));
}

capture(["The300 What is that?", "I think it’s the 3rd movie.", "Lets watch it at 22:45"]);