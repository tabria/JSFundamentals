function calculator(a, b, operator){

    let calculate = function (a, b, operator){
        return operator(a, b);
    };

    let add = function(a, b){
        return a + b;
    };
    let subtract = function (a, b) {
        return a - b;
    };
    let multiply = function (a, b) {
        return a * b;
    };
    let divide = function(a, b){
        return a / b;
    }

    switch(operator){
        case "+" : return calculate(a, b, add);
        case "-" : return calculate(a, b, subtract);
        case '*' : return calculate(a, b, multiply);
        case "/" : return calculate(a, b, divide);
    }
}

console.log(calculator(2, 4, "+"));