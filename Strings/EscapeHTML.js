function escape(input){

    let result = "<ul>\r\n";
    for (let line of input){
        result += `<li>${symbolsEscape(line)}</li>\r\n`;
    }
    function symbolsEscape(text){
        let symbolsToEscape = {"&":"&amp;", "'":"&#39;", "\"":"&quot;", "<":"&lt;", ">":"&gt;"};
        for(let symbol in symbolsToEscape){
            text = text.replace(new RegExp(symbol, "g"), symbolsToEscape[symbol]);
        }
        return text;
    }
    result+="</ul>";
    console.log(result);
}


function unescape(input){
    input = input.replace(/(<.*?>)+/g, " ").trim();
    let text = input.split("\n");
    text.shift();
    text = text.map(e => e.trim());
    for(let i =0; i<text.length; i++){
        text[i] = text[i].replace(/&copy;/g, "c");
    }



    console.log(text.join(", "));
}

unescape(`<table>
<tr><th>first name</th><th>last name</th></tr>
<tr><th>Edsger</th><th>Dijkstra</th></tr>
<tr><th>Martin &copy;</th><th>Fowler</th></tr>
</table>`);


escape(["<b>unescaped text</b>", "normal text"]);