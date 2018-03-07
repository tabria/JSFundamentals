function table(n){
    let num = Number(n);
    let table = "<table border=\"1\">\r\n";

    for(let i = 0; i<=num; i++){
        let printI = i===0 ? "x" : i;
        table += `<tr><th>${printI}</th>`;
        for(let k = 1; k<=num; k++){
            if (printI === "x") {
                table += `<th>${k}</th>`;
            } else {
                table += `<td>${printI*k}</td>`;
            }

        }
        table += "</tr>\r\n";
    }
    table+="</table>";
    return table;
}

console.log(table(5));