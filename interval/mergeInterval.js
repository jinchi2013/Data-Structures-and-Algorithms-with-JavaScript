
/**
	Given a collection of intervals, merge all overlapping intervals.

	For example,
	Given [1,3],[2,6],[8,10],[15,18],
	return [1,6],[8,10],[15,18].

	Subscribe to see which companies asked this question.

*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

var merge = function(intervals) {
	// if the length of the intervals is <= 1
	if(intervals.length <= 1) {
		return intervals;
	}

	// first sort the intervals array with start
	intervals.sort(function(a, b) {
		if(a.start > b.start ) return 1;
		if(a.start < b.start ) return -1;

		return 0;
	})

	// now loop throught the intervals array
	var start = intervals[0].start;
	var end = intervals[0].end;
	var result = [];

	intervals.forEach(function(interval) {
		if(interval.start <= end) {
			end = Math.max(end, interval.end);
		} else {
			result.push(new Interval(start, end));
			start = interval.start;
			end = interval.end;
		}
	});

	result.push(new Interval(start, end));

	return result;
}