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
    recurse(currentNode);
	function recurse(node){
		if(value < node.value){
			if(!node.left){
				node.left = newNode;
				return;
			}
			else{
				recurse(node.left);
			}
		}
		else{
			if(!node.right){
				node.right = newNode;
				return;
				
			}
			else{
				recurse(node.right);
			}
		}
	}

};

BinarySearchTree.prototype.contains = function(value){
  var bool=false;
  var currentNode = this;
  recurse(currentNode);
  function recurse(node){
  
    if(node.value===value){
      bool=true;
      return bool;
   	}
   	else{
   		if(node.left){
   			recurse(node.left)
   		}
   		if(node.right){
   			recurse(node.right)
   		}
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
