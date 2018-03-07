function split(input){
    console.log(input.split(/[ .;(,)]/g).filter(e => e !== "").join("\r\n"));;
}

split("let sum = 4 * 4,b = \"wow\"");