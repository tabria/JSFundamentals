function scoreToHTML(input){
    let table = "<table>\r\n";
    let personsScore = JSON.parse(input);
    table+="<tr>";
    for (let key of Object.keys(personsScore[0])){
        table += `<th>${escapeHTML(key)}</th>`;
    }
    table += "</tr>\r\n";
    for (let person of personsScore){
        table+= `<tr><td>${escapeHTML(person['name'])}</td><td>${Number(person['score'])}</td></tr>\r\n`;
    }
    table+= "</table>";

    console.log(table);

    function escapeHTML(str){
        let escapeChars = {"&":"&amp;","'":"&#39;", "\"":"&quot;", "<":"&lt;", ">":"&gt;"};
        for (let symbol in escapeChars){
            str = str.replace(new RegExp(symbol, "g"), escapeChars[symbol]);
        }
        return str;
    }
}

scoreToHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');