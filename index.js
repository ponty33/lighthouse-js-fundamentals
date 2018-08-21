function lastIndexOf(array, num) {
  var i = 0;
  var length = array.length;
  for (i = length; i >= 0; i--) {
    if (array[i] === num) {
      return i;
    }
  }
  return -1
}

