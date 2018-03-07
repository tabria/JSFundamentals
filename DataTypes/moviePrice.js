function moviePrice(inputInfo){
    let movieTitle = inputInfo[0].toLowerCase();
    let day = inputInfo[1].toLowerCase();

    let theGodFatherPrices = {monday:12, tuesday:10, wednesday:15, thursday:12.5, friday:15,saturday:25, sunday:30};
    let schindlersListPrices = {monday:8.50, tuesday:8.50, wednesday:8.50, thursday:8.50, friday:8.50,saturday:15, sunday:15};
    let casablancaPrices = {monday:8, tuesday:8, wednesday:8, thursday:8, friday:8,saturday:10, sunday:10};
    let theWizardOfOzPrices = {monday:10, tuesday:10, wednesday:10, thursday:10, friday:10,saturday:15, sunday:15};

    switch(movieTitle){
        case "the godfather":
            return theGodFatherPrices[day] === undefined ? "error" : theGodFatherPrices[day];
        case "schindler's list":
            return schindlersListPrices[day] === undefined ? "error" : schindlersListPrices[day] ;
        case "casablanca":
            return casablancaPrices[day] === undefined ? "error" : casablancaPrices[day];
        case "the wizard of oz":
            return theWizardOfOzPrices[day] === undefined ? "error" : theWizardOfOzPrices[day];
        default:
            return "error";
    }
}

console.log(moviePrice(["The Godfather", "Sofia"]));