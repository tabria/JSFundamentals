function palindrome(input){
    for(let i=0; i<input.length/2; i++){
        if (input[i] !== input[input.length - i -1]){
            return false;
        }
    }
    return true;
}

console.log(palindrome("abba"));
console.log(palindrome("jabba"));