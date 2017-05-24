// Print all integer multiples of 5, from 512 to 4096. Afterward, log how many there were.

var testMin = 512;
var testMax = 4096;

function printAndCount(min, max) {
  var count = 0;
  for (var i = min; i <= max; i++) {
    if(i % 5 === 0) {
      console.log(i);
      count++;
    }
  }
  console.log('Number of integer multiples of 5: ' + count);
}

printAndCount(testMin, testMax);
