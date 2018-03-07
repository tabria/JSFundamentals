function splitter(text, delimiter){
    console.log(text.split(delimiter).join("\r\n"));
}

splitter("One-Two-Three-Four-Five", "-");