const calculator = {
    displayValue: 0,
    firstInputValue: Number,
    secondInputValue: Number,
    _operator: false,
    get operator() {
        return this._operator;
    },
    set operator(value) {
        this._operator = value;
    },
};


var display = document.getElementById('calculator_display');
    display.innerHTML = calculator.displayValue;
    console.log (display.innerHTML);
    
var number1 = document.getElementsByClassName('number_key');
    number1.display.innerHTML = calculator.firstInputValue;
    console.log (number1.value);
    
var number2 = document.getElementsByClassName('number_key');
    number2.innerHTML = calculator.secondInputValue;
    console.log (number2.innerHTML);

var add = document.getElementById('operator_add');
    

var keys = document.getElementById('calculator_keys');
    //  keys.innerHTML = display.displayValue;

        console.log ('number keys');
    
        
        
    
        
        // ||
        //     key_action.value == subtract ||
        //     key_action.value == multiply ||
        //     key_action.value == divide) {
        //         console.log ('operator keys');
        // }
    
        // if (key_action == decimal){
        //     console.log ('decimal');
        // }
    
        // if (key_action == clear) {
        //         console.log ('reset')
        // };
    
        // if (key_action == equals){
        //         console.log (result)
        // };
          
        // }
//  });

      

// if ({
//     reset = calculator.displayValue
// })
   
        


   




// var keys = document.addEventListener('click', e=>{
//     keys = e.target;
//       if(e.target.matches('button')){}