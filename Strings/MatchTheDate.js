function matchDate(input){
    let result = [];
    let pattern = /\b([0-9]{1,2})\s*-\s*([A-Z][a-z]{2})\s*-\s*([0-9]{4})\b/g;
    for(let i=0; i<input.length; i++){
        while(match = pattern.exec(input[i])){
            result.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    }
    console.log(result.join("\r\n"));
}

matchDate(["1-Jan- 1999 is a valid date.", "So is 01-July- 2000.", "I am an awful liar, by the way – Ivo, 28-Sep- 2016."]);