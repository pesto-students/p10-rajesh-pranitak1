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

    reverse() {
        let current = this.head;
        let previous = null;
        while (current) {
            let next_to_current = current.next;
            current.next = previous;
            previous = current;
            current = next_to_current;
        }
        this.head = previous;
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
linkedList.reverse()

linkedList.print() //***********print*************
                   // 32 30 22 20 12 

// Time complexity  - O(n)
// Space complexity - O(1)
