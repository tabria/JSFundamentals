function count(needle, text){
    let startIndex = text.indexOf(needle);
    let count = 0;
    while(startIndex > -1){
        count++;
        startIndex = text.indexOf(needle, startIndex +1);
    }
    console.log(count);
}

count("ma", "Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.");