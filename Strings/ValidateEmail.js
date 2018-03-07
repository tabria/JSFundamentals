function validate(input){
    let pattern =/^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/;
    console.log(pattern.test(input) ? "Valid" : "Invalid");
}

validate("invalid@emai1.bg");