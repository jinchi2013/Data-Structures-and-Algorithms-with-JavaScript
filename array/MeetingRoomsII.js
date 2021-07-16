/*
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2

Example 2:

Input: intervals = [[7,10],[2,4]]
Output: 1

Constraints:

    1 <= intervals.length <= 104
    0 <= starti < endi <= 106

*/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var minMeetingRooms = function(intervals) {
  if (intervals.length === 0) return 0
  if (intervals.length === 1) return 1
  intervals.sort((a, b) => {
      return a[0] - b[0]
  })

  var tmp = [] // rooms
  tmp[0] = intervals[0]

  for (let i = 1; i < intervals.length; ++i) {
      const [ns, ne] = intervals[i]
      const mergebleIndex = tmp.findIndex((interval) => {
          const [s, e] = interval
          return e <= ns
      })

      if (mergebleIndex !== -1) {
          tmp[mergebleIndex][1] = ne
      } else {
          tmp.push(intervals[i])
      }
  }

  return tmp.length;
};
