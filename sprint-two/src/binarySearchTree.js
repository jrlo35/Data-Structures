var BinarySearchTree = function(value){
	var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;

  return obj;

};

BinarySearchTree.prototype.insert = function(value){
	var currentNode = this;
	var newNode = BinarySearchTree(value);

	while(currentNode){
		if(value < currentNode.value){
			if(!currentNode.left){
				currentNode.left = newNode;
				break;
			}
			else{
				currentNode = currentNode.left;
			}
		}
		else{
			if(!currentNode.right){
				currentNode.right = newNode;
				break;
			}
			else{
				currentNode = currentNode.right;
			}
		}
	}
};

BinarySearchTree.prototype.contains = function(value){
  var bool=false;
  var currentNode = this;

  while(currentNode){
    if(value < currentNode.value){
   			if(!currentNode.left){
   				return false;
   			}
      	currentNode = currentNode.left;
    }
    else{
    	if(!currentNode.right){
    		return false;
    	}
      currentNode=currentNode.right;
    }
    if(currentNode.value===value){
      bool=true;
      break;
    }
    
  }
  return bool;
};

BinarySearchTree.prototype.depthFirstLog = function(func){
	
	recurse(this);
	function recurse(node){
	    if(node===null){
	      return;
	    }
	    func(node.value);
	    recurse(node.left);
	    recurse(node.right);
	    
	};
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
