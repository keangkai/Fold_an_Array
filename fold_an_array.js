function foldArray(array, runs)
{
  var Array = array.slice();
  var EndArray = []
  
  while (Array.length > 1) {
    EndArray.push(Array[0] + Array[Array.length-1]);
    Array = Array.slice(1, Array.length-1);
    }
  if(Array.length > 0){
  EndArray.push(Array[0]); 
  }
  if(runs > 1){
    return foldArray(EndArray, runs-1)
  }
  return EndArray;
}

var Array = array.slice();
  var EndArray = []
  var temp;
  
  while (Array.length > 1) {
    temp = Array[0] + Array[Array.length-1]
    EndArray.push(temp);
    Array = Array.slice(1, Array.length-1);
    }
  if(Array.length > 0){
    EndArray.push(Array[0]); 
  }
  if(runs > 1){
    return foldArray(EndArray, runs-1)
  }
  return EndArray;

  foldArray([1, 2, 3, 4, 5], 1);