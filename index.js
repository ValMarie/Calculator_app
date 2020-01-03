const calculator = {
    displayValue: '0',
    firstInputValue: null,
    secondInputValue: null,
    operator: false,
};

var display = document.getElementById('calculator_display');
    display.value = document.innerHTML;

 var keys = document.addEventListener('click', e=>{
    keys = e.target;
      if(e.target.matches('button')){
             alert('button clicked')
        }
 });
// var keys = function button_click(){
//     keys.getElementById('calculator_keys');
// };
var key_action = keys.dataset;
    if (!key_action){
        console.log ('number keys')
    };

    if (key_action === add||
        key_action === subtract ||
        key_action === multiply ||
        key_action === divide) {
            console.log ('operator keys')
    };

    if (key_action === decimal){
        console.log ('decimal')
    };

    if (key_action === clear) {
            console.log ('reset')
    };

    if (key_action === equals){
            console.log (result)
    };
        


   



