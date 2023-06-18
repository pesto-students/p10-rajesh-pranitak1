class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }else{
            var current = this.head;
            while(current.next!=null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    print() {
        console.log('***********print*************')
        var current = this.head;
        var listValues = '';
        while (current) {
            listValues += current.value + ' ';
            current = current.next;
        }
        console.log(listValues);
    }


    rotateLinkedList(k) {
        if (!this.head || k === 0) {
            return this.head;
        }

        let curr = this.head;
        let count = 1;

        // Traverse k nodes from the head
        while (count < k && curr) {
            curr = curr.next;
            count++;
        }

        if (!curr || !curr.next) {
            return this.head;
        }

        // Update head and tail
        const newHead = curr.next;
        curr.next = null;

        curr = newHead;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = this.head;

        this.head = newHead; // Update the head of the linked list

        return newHead;
    }
    
}

var linkedList = new LinkedList();

linkedList.append(12)
linkedList.append(20)
linkedList.append(22)
linkedList.append(30)
linkedList.append(32)

linkedList.print() //***********print*************
                   // 12 20 22 30 32 
linkedList.rotateLinkedList(3)

linkedList.print() //***********print*************
                   // 30 32 12 20 22 

// Time complexity  - O(n)
// Space complexity - O(1)
