function convert(input){
    let table = "<table>\r\n";
    let personsScore = JSON.parse(input);
    table+="<tr>";
    for (let key of Object.keys(personsScore[0])){
        table += `<th>${escapeHTML(key)}</th>`;
    }
    table += "</tr>\r\n";
    for (let person of personsScore){
        table +="<tr>";
        for (let personKey of Object.keys(person)){
            table+= `<td>${escapeHTML(person[personKey])}</td>`;
        }
        table += "</tr>\r\n";
    }
    table+= "</table>";

    console.log(table);

    function escapeHTML(str){
        let escapeChars = {"&":"&amp;","'":"&#39;", "\"":"&quot;", "<":"&lt;", ">":"&gt;"};
        for (let symbol in escapeChars){
            str = str.toString().replace(new RegExp(symbol, "g"), escapeChars[symbol]);
        }
        return str;
    }
}

convert('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');