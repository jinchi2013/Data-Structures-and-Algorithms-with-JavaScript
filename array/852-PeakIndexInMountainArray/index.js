/**
 * 
 * Let's call an array A a mountain if the following properties hold:

  A.length >= 3
  There exists some 0 < i < A.length - 1 such that 
  A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]

  Given an array that is definitely a mountain, return any i such that 
  A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

  Example 1:

  Input: [0,1,0]
  Output: 1
  Example 2:

  Input: [0,2,1,0]
  Output: 1
  Note:

  3 <= A.length <= 10000
  0 <= A[i] <= 10^6
  A is a mountain, as defined above.

 * 
 * 
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let start = 0;
  let end = A.length-1;
  
  while(start < end){
      let middle = start + Math.floor((end - start) / 2)
      if(A[middle]<A[middle+1]){
          start = middle + 1;
      }else{
          end = middle;
      }
  }
  
  return start;
};

console.log(peakIndexInMountainArray([0, 1, 10, 20, 10, 0]))
