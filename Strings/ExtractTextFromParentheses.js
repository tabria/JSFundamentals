function extract(text){

    let result = [];
    let openParenthesesIndex = text.indexOf("(");
    while(openParenthesesIndex> -1){
        let closeParenthesesIndex = text.indexOf(")", openParenthesesIndex + 1);
        if (closeParenthesesIndex == -1){
            break;
        }
        if (closeParenthesesIndex < openParenthesesIndex){
            continue;
        }
        let words = text.substring(openParenthesesIndex + 1, closeParenthesesIndex);
        openParenthesesIndex = text.indexOf("(", closeParenthesesIndex + 1);

        result.push(words);
    }
    console.log(result.join(", "));
}

extract("Rakiya (Bulgarian brandy) is home-made liquor (alcoholic drink). It can be made of grapes, plums or other fruits (even apples).");