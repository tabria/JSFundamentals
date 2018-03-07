function addRemove(input){
    const ADD = "add";
    const REMOVE = "remove";
    let k = 0;

    let result = [];
   for(let command of input){
       if (command.toLowerCase() === ADD ){
           result.push(++k);
       } else if (command.toLowerCase() === REMOVE ){
           if (result[result.length-1]){
               result.pop();
           }
           ++k;
       }
   }

   if (result.length<1){
       result.push("Empty");
   }

    console.log(result.join("\r\n"));
}

addRemove(["remove", "remove", "remove"]);