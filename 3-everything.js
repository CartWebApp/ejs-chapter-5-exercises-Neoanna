function every(array, test) {
  var n = 0


  if(array[n] < 10){
    return true;
  } else (array[n] > 10);{
    return false;
  }


  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true
