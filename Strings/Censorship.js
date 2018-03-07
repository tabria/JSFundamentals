function censor(text, input){
    input.forEach(e => text = text.split(e).join("-".repeat(e.length)));
    console.log(text);
}

censor("roses are red, violets are blue", [", violets are", "red"]);