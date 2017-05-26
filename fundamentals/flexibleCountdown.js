// Based on earlier 'countdown by fours', given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum,
// using a for loop e.g. for 2, 9, 3, print 9, 6, 3 ( on successive lines).

function multiPrint(lowNum, highNum, mult) {
  for (var i = lowNum; i <= highNum; i++) {
    if(i % mult === 0){
      console.log(i);
    }
  }
}

multiPrint(1, 30, 5);
