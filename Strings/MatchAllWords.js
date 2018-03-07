function matchAll(input){
    console.log(input.match(/\w+/g).join("|"));
}

matchAll("_(Underscores) are also word characters");