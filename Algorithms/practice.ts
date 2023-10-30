class Noded {
    public val: number;
    public next: Node|null|any;
    
    constructor(val:number){
        this.val = val;
        this.next = null;
    }
}

class Linklist{
    public head: Noded|null|any;
    public tail: Noded|null|any;
    public length: number;


    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    addTail(val: number){
        let node = new Noded(val);

        if(!this.head){
            this.head = node;
            this.tail = this.head
        }else{
            this.tail.next = node;
            this.tail = node
        }
        this.length++;
        return this;
    }

    addHead(val: number){
        let node = new Noded(val);

        if(!this.head){
            this.head = node;
            this.tail = null;
        }else{
            this.head = node;
            node.next = this.head
        }
        this.length++
        return this
    }

    removeTail(val: number){
        let node = new Noded(val);

        if (!this.head) {
            return undefined;
        }else{
            let current = this.tail;
            let newTail = current;

            while(current.next){
                this.tail = newTail;
                this.tail.next = null

            }
            this.length--
            return current
        }
    }
}