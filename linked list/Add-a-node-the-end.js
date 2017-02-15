var Node = function(data) {
    this.data = data;
    this.next = null;
};

function addToTheEnd(head, data) {
    if(!data) {
        return;
    }

    if(!head ) {
        head = new Node(data);
        return head;
    }

    if(!head.next) {
        head.next = new Node(data);
    }

    var cur = head;
    while(cur.next !== null) {
        cur = cur.next;

        if(cur.next === null) {
            cur.next = new Node(data);

            return head;
        }
    }
}

var newHead = {
    data: 1,
    next: {
        data: 2,
        next: null
    }
};

var result = addToTheEnd(newHead, 3);
console.log(result);