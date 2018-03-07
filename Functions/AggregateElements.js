function aggregateElements(input){
    function aggregate(input, start, func){
        for (let element of input) {
            start = func(start, element);
        }
        return start;
    }

    console.log(aggregate(input, 0, (a, b) => a + b));
    console.log(aggregate(input, 0, (a, b) => a + 1/b));
    console.log(aggregate(input, "", (a, b) => a + b));
}

aggregateElements([10, 20, 30]);