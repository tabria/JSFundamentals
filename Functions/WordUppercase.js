function wordUpperCase(input){

    let upperCaseString = input.toUpperCase();
    let words = extractWords();
    words = words.filter(e => e!="");
    return words.join(", ");
    function extractWords(){
        return upperCaseString.split(/\W+/);
    }
}

console.log(wordUpperCase("Hello boeld aslsdj asl"));