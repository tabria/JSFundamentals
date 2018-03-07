function sortArray(input){
    input.sort(function(a, b) {
        if (a.length == b.length){
            let m = a.toLowerCase() - b.toLowerCase();
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
        return a.length - b.length;
    });
    console.log(input.join("\r\n"));
}

//sortArray(["alpha","beta","gamma"]);
sortArray(["test", "Deny", "omen", "Default"]);