// console.log('Your code goes here .. Ayesha');
function add(n1, n2, showResult, phrase) {
    // return n1 + n2;
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2);
console.log(result);
