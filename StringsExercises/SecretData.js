function hideData(input){
    let namePattern = /\*[A-Z][a-zA-Z]*(?=\s|\t|$)/g;
    let phonePattern = /\+[0-9\-]{10}(?=\s|\t|$)/g;
    let idPattern = /\![A-Za-z0-9]+(?=\s|\t|$)/g;
    let basePattern = /\_[A-Za-z0-9]+(?=\s|\t|$)/g;

    for(let i=0; i<input.length; i++){
        console.log(input[i]
            .replace(namePattern, m => '|'.repeat(m.length))
            .replace(phonePattern, m => '|'.repeat(m.length))
            .replace(idPattern, m => '|'.repeat(m.length))
            .replace(basePattern, m => '|'.repeat(m.length))
        )
    }
}

hideData(["Agent *Ivankov was in the room when it all happened.",
    "The person in the room was heavily armed.",
        "Agent *Ivankov had to act quick in order.",
        "He picked up his phone and called some unknown number.",
        "I think it was +555-49-796",
    "I can't really remember...",
    "He said something about \"finishing work\" with subject !2491a23BVB34Q and returning to Base _Aurora21",
"Then after that he disappeared from my sight."]);