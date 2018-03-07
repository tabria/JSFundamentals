function printBill(input){
    let result = [];
    let sum = 0;
    for(let i=0; i<input.length; i++){
        if (i % 2 == 0){
            result.push(input[i]);
        } else {
            sum += Number(input[i]);
        }
    }

    console.log(`You purchased ${result.join(", ")} for a total sum of ${sum}`)
}


function printFunc(input){

    let items = input.filter((e, i)=> i % 2 == 0);
    let sum = input.filter((e, i)=> i % 2 !=0).map(Number).reduce((a, b) => a+b);
    console.log(`You purchased ${items.join(", ")} for a total sum of ${sum}`)

}

printBill(["Beer Zagorka", "2.65", "Tripe soup", "7.80","Lasagna", "5.69"]);
printFunc(["Beer Zagorka", "2.65", "Tripe soup", "7.80","Lasagna", "5.69"]);