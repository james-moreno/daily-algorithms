// Using a for loop, print multiples of 3 from -300 to 0. Skip -3 and -6

function mostMultiplesOfThree() {
  for (var i = 3; i >= -300; i--) {
    if(i == -3 || i == -6){
      continue;
    }
    else {
      console.log(i);
    }
  }
}

mostMultiplesOfThree();
