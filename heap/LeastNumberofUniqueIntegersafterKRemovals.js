/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 var findLeastNumOfUniqueInts = function(arr, k) {
  const map = new Map()

  for (let n of arr) {
      if (!map.has(n)) {
          map.set(n, 0)
      }
      map.set(n, map.get(n) + 1)
  }

  const counts = Array.from(map.values()).sort((a, b) => a - b)
  let res = counts.length // if k equals Zero, res would be length of counts
  for (let n of counts) {
      if (k >= n) {
          k = k - n
          res--
      }
  }

  return res
};