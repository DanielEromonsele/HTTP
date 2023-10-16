console.clear();

class Nodes{
    public val: number;
    public next: Nodes|null|any;

    constructor(val: number){
        this.val = val;
        this.next = null;
    }
}

class LinkList {
    public head: Nodes|null|any;
    public tail: Nodes|null|any;
    public length: number;

    constructor(){
        this.head= null;
        this.tail= null;
        this.length= 0;
    }
        //PUSH
        addTail(val: number){
            let node  = new Nodes(val);

            if (!this.head) {
                this.head = node;
                this.tail = this.head;
                // This should run when the linklist is empty.
            }else{
                this.tail.next = node;
                this.tail = node
            }
            this.length++;
            return this;
            // Prints out the members of the list
        } 
    

        // UNSHIFTS
        addHead(val: number){
            let node = new Nodes(val);

            if (!this.head) {
                this.head = node;
                this.tail = null;
            }else{
                this.head = node;
                node.next = this.head;
            }
        this.length++;
        return this;
        }


        //POP
        removeTail(){
            if(!this.head){
                return undefined;
            }else{
                let current = this.tail;
                let nextTail = current;

                while (current.next) {
                    this.tail = nextTail
                    this.tail.next = null
                }

                this.length--;
                return current;
                // Prints out the specific members of the list
            }
        } 

        // SHIFT
        removeHead(){
            if (!this.head) {
                return undefined;
            }else{
                let current = this.head;
                let newHead = current

                while (current.next) {
                    this.head = newHead;
                    this.head.next = null
                }

                this.length--;
                return current;
            }
        }

        get(index: number){
            if (index < 0 || index >= this.length) {
               return "Out Of Range" 
            }else{
                let loop: number = 0;
                let current  = this.head;

                while(loop !== index){
                    current = current.next;
                    loop++
                }
                return current
            }
        }

        set(index: number, val: number){
            let node = this.get(index);
            if (node) {
                node.val = val;
                return true
            }else{
                return false
            }
        }

        insert(index: number, val: number){
            let node = new Nodes(val)

            if(index < 0 || index > this.length) return "Out of Range"
            if (index === 0) return !!this.addHead(val);
            if (index === this.length) return !!this.addTail(val);

            let prev = this.get(index - 1);
            let temp = prev.next;

            prev.next = node;
            node.next = temp;

            this.length++;
            return true;
        }
        remove(index: number){

            if(index < 0 || index > this.length) return "Out of Range"
            if (index === 0) return !!this.removeHead();
            if (index === this.length) return !!this.removeTail();

            let prev = this.get(index - 1);
            let temp = prev.next;

            prev.next = temp.next;

            this.length--;
            return true;
        }
};

let linklist = new LinkList();
// We don't pass any value into the linklist because the constructor doesn't have any parameters.


linklist.addTail(3);
linklist.addTail(6);
linklist.addTail(9);
linklist.addTail(12);
// linklist.addHead(90)


console.clear();
// console.log("Nodes removed from the list is",linklist.removeHead());
console.log("get Nodes by position in the list",linklist.get(2));
console.log("get Nodes by position in the list",linklist.set(0, 77));
console.log("get Nodes by position in the list",linklist.remove(1));
console.log("Total Nodes in the list",linklist.length);
console.clear()
console.log(linklist);












