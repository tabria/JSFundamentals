function extract(input){
    let result = [];
    let pattern = /[w]{3}\.[A-Za-z0-9\-]+(\.[a-z]+)+/;
    for(let i=0; i<input.length; i++){
        let text = input[i];
        let match = pattern.exec(text);
        if (match){
            result.push(match[0]);
        }
    }

    console.log(result.join("\r\n"));
}

extract(["Join WebStars now for free, at www.web-stars.com", "You can also support our partners:","Internet - www.internet.com","WebSpiders - www.webspiders101.com","Sentinel - www.sentinel.-ko"]);