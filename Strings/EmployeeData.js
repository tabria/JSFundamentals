    function printEmployee(input){
        let result = [];
        for(let i=0; i<input.length; i++){

            let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - (([a-zA-Z0-9\-]+[ ]*)+)$/;
            let match = pattern.exec(input[i]);
            if (match){
                result.push(`Name: ${match[1].trim()}`);
                result.push(`Position: ${match[3].trim()}`);
                result.push(`Salary: ${match[2].trim()}`);
            }
        }
        console.log(result.join("\r\n"));
    }

printEmployee(["Isacc - 1000 - CEO", "Ivan - 500 - Employee", "Peter - 500 - Employee"]);