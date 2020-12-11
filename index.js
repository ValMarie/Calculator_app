let buttons = document.querySelectorAll("button");
let numberKey = document.querySelectorAll(".number_key");
let operatorKey = document.querySelectorAll(".operator_key");
let deleteKey = document.querySelector("#delete");
let resetKey = document.querySelector("#reset");
let equalsKey = document.querySelector("#calculate");
let functionKey = document.querySelectorAll("#function_keys");
let previousDisplayedNumber = document.querySelector("#previousDisplay");
let currentDisplayedNumber = document.querySelector("#currentDisplay");

class Calculator  {
    constructor (previousDisplayedNumber, currentDisplayedNumber){
        this.previousDisplayedNumber = previousDisplayedNumber;
        this.currentDisplayedNumber = currentDisplayedNumber;
        this.resetDisplay()
        this.clearAllDisplay();
    };

    clearAllDisplay(){
    // clears all display on the screen
        this.previousNumber = "";
        this.currentNumber = "";
        this.operator = "";
    }

    resetDisplay(){
        // resets display on the screen
            this.previousNumber = "";
            this.currentNumber = "0"; 
            this.operator = "";
            this.previousDisplayedNumber.innerText = "";
    }

    appendNumber(number){
    // adds number input on display when button is clicked
        if (number === "." && this.currentNumber.includes(".")) return;
        if (this.currentNumber === "0" && !this.currentNumber.includes("."))
            return this.currentNumber =  this.currentNumber + number.toString();
        // // if (this.calculate >= "0") return number
        this.currentNumber = this.currentNumber + number.toString();
    }

    deleteNumber(){
    // deletes numbers inputted from behind        
        this.currentNumber = this.currentNumber.toString().slice(0, -1)
        if (this.currentNumber === "") return  this.resetDisplay()
    }

    chooseOperator(operator){
    // selects the operator function without appending to display
    if (this.previousNumber !== "") {
        this.calculate()
        }
        this.operator = operator;
        this.previousNumber = this.currentNumber;
        this.currentNumber = "";
    }

    calculate(){
    // compute the input and displays
        let calculations
        let pre_value = parseFloat(this.previousNumber);
        let curr_value = parseFloat(this.currentNumber);
        if (isNaN(pre_value) || isNaN(curr_value)) return

        switch (this.operator) {
            case "+":
                calculations = pre_value + curr_value;
                break;
            case "-":
                calculations = pre_value - curr_value;
                break;
            case "x":
                calculations = pre_value * curr_value;
                break;
            case "/":
                calculations = pre_value / curr_value;
                break;

            default:
                return;
                }
        
        this.operator = "";
        this.previousNumber = " ";
        this.currentNumber = calculations;
    }

    upDateDisplay(){
    // updates every action or function displayed
        this.currentDisplayedNumber.innerText = this.currentNumber;
        if(this.operator != ""){
            this.previousDisplayedNumber.innerText = this.previousNumber + this.operator + this.currentNumber.toLocaleString("en");
        }
        
    }
};

let myCalculator = new Calculator (previousDisplayedNumber, currentDisplayedNumber)

numberKey.forEach(button => {
   button.addEventListener("click", () => {
       myCalculator.appendNumber(button.innerText)
       myCalculator.upDateDisplay();
   })
});

operatorKey.forEach(button => {
    button.addEventListener("click", () => {
        myCalculator.chooseOperator(button.innerText)
        myCalculator.upDateDisplay();
    })
 });

 equalsKey.addEventListener("click", () => {
     myCalculator.calculate();
     myCalculator.upDateDisplay();
 });

 resetKey.addEventListener("click", () => {
    myCalculator.resetDisplay();
    myCalculator.upDateDisplay();
});

resetKey.addEventListener("dblclick", () => {
    myCalculator.clearAllDisplay();
    myCalculator.upDateDisplay();
});

deleteKey.addEventListener("click", () => {
    myCalculator.deleteNumber();
    myCalculator.upDateDisplay();
});
