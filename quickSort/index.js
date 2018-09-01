function quicksort(arr){
  //base case
  if(arr.length<=1){ return arr}
  //now find swap position and value
  var swapPosition = Math.floor((arr.length-1)/2),
      swapValue = arr[swapPosition],
      less = [], more = []
  arr = arr.slice(0, swapPosition).concat(arr.slice(swapPosition+1))

  for(var i=0; i<arr.length; i++){
    if(arr[i]< swapValue){
      less.push(arr[i])
    }else{
      more.push(arr[i])
    }
  }
  return (quicksort(less)).concat([swapValue], quicksort(more))
}
