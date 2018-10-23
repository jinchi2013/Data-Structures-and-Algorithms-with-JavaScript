// Reverse a linked list
function reverseLList (head) {
    var cur = head,
        next;

    head = null;
    while(cur) {
        next = cur.next;
        cur.next = head;

        if(next) {
            head = cur;
            cur = next;
        } else {
            return cur;
        }
    }

    return null;
}
