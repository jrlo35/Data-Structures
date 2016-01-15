var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.head === null){
        list.head = list.tail = new Node(value);
    }
    else {
      var currentNode = new Node(value);
      list.tail.next = currentNode;
      list.tail = currentNode;
    }
  
  };
 
  list.removeHead = function(){
    var temp = list.head;
    var temp1 = list.head;
    list.head = temp1.next;
    delete temp1;
    return temp.value;
  };

  list.contains = function(target){
    var temp = list.head;

    while (temp.value != target){
      temp = temp.next;
      if(temp === null){
        return false;
      } 
    }
     return true;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
