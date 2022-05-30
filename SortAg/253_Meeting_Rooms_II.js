/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var minMeetingRooms = function(intervals) {
    // sort the meeting by start time
    intervals.sort((m1, m2) => {
        const [s1, e1] = m1
        const [s2, e2] = m2
        return s1 - s2
    })
    
    const rooms = [] // each index is a room
    let result = 0
    
    for (let i = 0; i < intervals.length; i++) {
        if (rooms.length === 0) {
            const [s, e] = intervals[i]
            rooms.push(e) // [30] => meaning room 1 has a meeting end at 30
            result++
        } else {
            const [s, e] = intervals[i]
            let needANewRoom = true
            for (let r = 0; r < rooms.length; r++) {
                if (s >= rooms[r]) {
                    // there is no conflict in room r, update the meeting end at room r to e
                    // no need a new room
                    rooms[r] = e
                    needANewRoom = false
                    r = rooms.length // break current loop
                }
            }
            // needANewRoom is still true after above
            if (needANewRoom) {
                rooms.push(e)
                result++
            }
        }
    }
    
    return result
};
