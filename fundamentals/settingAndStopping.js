// Swap two variables' valuables

var myNumber = 42;
var myName = 'Jim';

function swapVariables(var1, var2){
  console.log(var1, var2);
  var temp;
  temp = var1;
  var1 = var2;
  var2 = temp;
  console.log(var1, var2);
}

swapVariables(myNumber, myName);
