// Print Multiples of 6 up to 60,000, using a while loop.

var num = 0;

while( num < 60001) {
  if(num % 6 === 0){
    console.log(num);
  }
  num++;
}
