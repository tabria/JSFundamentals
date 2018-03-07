function checkStart(text, needle){
    let regexp = new RegExp(`^${needle}`);
    console.log(regexp.test(text));

    console.log(text.indexOf(needle) > -1);
}

checkStart("How have you been?","How");