// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a for loop.

function positiveNumbers(){
  var max = 2016;
  while(max > 0) {
    console.log(max);
    max -= 4;
  }
}

positiveNumbers();
