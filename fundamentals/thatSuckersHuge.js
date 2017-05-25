// Add odd integers from -300,000 to 300,000 and console.log the final sum. Is there a shortcut?

function oddIntegers(){
  var total = 0;
  for (var i = -300000; i <= 300000; i++) {
    if(i % 2 !== 0) {
      total += i;
    }
  }
  console.log(total);
}

oddIntegers();
