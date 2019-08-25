function DoubleLinkList(){
    this.head = null;
    this.count = 0;
}
DoubleLinkList.prototype.size = function(){
    return this.count;
}
DoubleLinkList.prototype.isEmpty = function(){
    return this.count == 0;
}
DoubleLinkList.prototype.add = function(value){
    let node = new NodeDouble(value)
    if(this.head == null){
        this.head = node;
    } 
    else{
        var currentElement = this.head;
        while(currentElement.next != null){
            currentElement = currentElement.next;    
        }
        currentElement.next = node;
        node.previous = currentElement;

    }
    this.count++;
}
DoubleLinkList.prototype.addInFrond = function(value){
    let node = new NodeDouble(value);
    if(this.head == null){
        this.head = node;
    }
    else{
        var currentElement = this.head;
        currentElement.previous = node;
        node.next = currentElement;
        
    }
    this.count++;
}
DoubleLinkList.prototype.addAfter = function(value,position){
    let node = new NodeDouble(value);
    if(this.head == null){
       this.head = node;;
    }
    else{
        let currentElement = this.head;
        while(currentElement.next != null && currentElement.value != position){
            currentElement = currentElement.next;
        }
        node.next = currentElement.next;
        currentElement.next.previous = node;
        currentElement.next = node;
        node.previous = currentElement;
        
    }
    this.count++;
}
DoubleLinkList.prototype.addAt = function(value, index){
    let node = new Node(value);
    let currentElement = this.head;
    let previousElement = null;
    let currentIndex = 0;
    
    if(index == 0){
        node.next = currentElement;
        this.head = node;
    }
    else{
        while(currentIndex < index){
            currentIndex++;
            previousElement = currentElement;
            currentElement = currentElement.next;
        }
        node.next = currentElement;
        node.previous = previousElement;
        previousElement.next = node;
        currentElement.previous = node;

    }
    this.count++;
}
DoubleLinkList.prototype.removeLast = function(){
   if(this.head == null){
       return "Nothing to remove";
   }
   else{
       let currentElement = this.head;
       while(currentElement.next != null){
           currentElement = currentElement.next;
  
       }
       currentElement.previous.next = null;
   }
   this.count--;
}
DoubleLinkList.prototype.removeElementByValue = function(value){
 let currentElement = this.head;
 if(this.head == null){
     return "Nothing to remove";
 } 
 else{
     while(currentElement.next != null && currentElement.value != value){
         currentElement = currentElement.next;
     }
     currentElement.next.previous = currentElement.previous;
     currentElement.previous.next = currentElement.next;
 }
 this.count--;
}
DoubleLinkList.prototype.indexOf = function(element){
    var index = -1;
    let currentElement = this.head;
    while(currentElement){
        index++;
        if(currentElement.value == element){
           return index;
        }
        currentElement = currentElement.next;
    }
    return -1;
}



let doubleLinkList = new DoubleLinkList();
doubleLinkList.add(1);
doubleLinkList.add(2);
doubleLinkList.add(3);
console.log(doubleLinkList);
// console.log(doubleLinkList);
// doubleLinkList.addInFrond(4);
// console.log(doubleLinkList);
// doubleLinkList.addAfter(4,2);
// console.log(doubleLinkList);
// doubleLinkList.removeLast();
console.log(doubleLinkList);
console.log(doubleLinkList.indexOf(3));
// console.log(doubleLinkList.addAt(5,1));
// console.log(doubleLinkList);
// doubleLinkList.addAfter(7,2);
// console.log(doubleLinkList);
doubleLinkList.removeElementByValue(2);
console.log(doubleLinkList);
console.log(doubleLinkList.size());