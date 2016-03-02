/*
Linked List
Implement a linked-list
*/


var LinkedList = function (initialValue) {
     // Write your code here
   this.head = null;
   this.tail = null;
 };


var Node = function(val){
 var node = {};
   node.value = val;
   node.next = null;
 return node;
};

LinkedList.prototype.addToTail= function(val){
// create new node

 // if no head, point head and tail to new node
 if(this.head === null){
   this.head = addNode;
   this.tail = addNode;
 }

 // if there is a head, point tail to new node
 // point tail's next property to the new node
 else {
   this.tail.next = addNode;
   this.tail = addNode;
 }
};


LinkedList.prototype.removeHead = function(){
 // if head pointer is null, return null
 if(this.head === null){
   return null;
 }

 // if head exists save the value of the head node to a var
 // point the head to the current head's 'next' node
 // delete the current head
 // return the var with the original saved head value
 else {
   var val = this.head.value;
   var temp = this.head;
   this.head = this.head.next;
   delete temp;
   return val;
 }
};
