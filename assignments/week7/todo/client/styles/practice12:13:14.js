function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) { // base case
      return [startNum];
    } else {
      var code = rangeOfNumbers(startNum, endNum - 1)
    return code;
    } 
  };
  console.log(1,5);