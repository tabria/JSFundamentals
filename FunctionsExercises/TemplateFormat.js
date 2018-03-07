function quiz(input){

    let quiz = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<quiz>\r\n";
    for (let i = 0; i < input.length; i+=2) {
        quiz += `<question>\r\n${input[i]}\r\n</question>\r\n`;
        quiz += `<answer>\r\n${input[i+1]}\r\n</answer>\r\n`;
    }
    quiz +="</quiz>";
    console.log(quiz);
}

quiz(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
);