function lastIndexOf (array, num) {
  var i = 0;
  var len = array.length;
    for (i = len; i >= 0; i--) {
      if (array[i] === num) {
      return i;
    }
  }
return -1;
}