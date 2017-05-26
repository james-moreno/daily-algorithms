// Given 4 parameters (p1, p2, p3, p4), print the multiples of param 1, starting at param2, to param3. One exception:
// if a multiple is equal to param4, then skip (don't print) that one. Do this using a while.

function printCertainMultiples(mult, min, max, exc) {
  var i = min;
  while(i <= max) {
    if(i % mult === 0 && i != exc){
      console.log(i);
    }
    i++;
  }
}

printCertainMultiples(3, 2, 16, 9);
