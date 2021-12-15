const calc = function(firstNumber, secondNumber, mathExpression){
    switch (mathExpression) {
        case "+":
            return firstNumber + secondNumber;                
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            return firstNumber / secondNumber;
    };
};

//example

let calculate = calc(5,6,"-");
console.log(calculate);