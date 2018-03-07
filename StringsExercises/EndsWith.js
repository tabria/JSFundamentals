function endChecker(text, needle){
    console.log(text.length == text.lastIndexOf(needle) + needle.length);
}

endChecker("This sentence ends with fun?", "fun?");