function range(start, end, step){
  var series = [];
  if( start === null || end === null || step === null || end < start || step < 0 ){
    series = [];
  } else {
    for(var i = start; i <= end; i = i + step){
      series.push(i);
    }
  }
  return series;
}