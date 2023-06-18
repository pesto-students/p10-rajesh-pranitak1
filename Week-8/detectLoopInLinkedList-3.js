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


    hasLoop(head) {
        if (!head || !head.next) {
            return false;
        }
    
        let slow = head;
        let fast = head;
    
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
    
            if (slow === fast) {
            return true;
            }
        }
    
        return false;
    }
    
}

var linkedList = new LinkedList();

linkedList.append(12)
linkedList.append(20)
linkedList.append(22)
linkedList.append(30)
linkedList.append(32)
linkedList.append(22)

linkedList.print() //***********print*************
                   // 12 20 22 30 32 
console.log(linkedList.hasLoop(linkedList.head))

// Time complexity  - O(n)
// Space complexity - O(1)
