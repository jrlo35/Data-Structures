

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.edges= {};
}
// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
	this.edges[node] = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){

  return this.edges[node] === node;
  /*var bool = false;
  for(var i = 0; i < this.storage.length; i++){
  	if(this.storage[i] === node){
  		bool = true;
  	}

  }
  return bool;*/
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
	if(this.edges[node]===node){
	  delete this.edges[node];
	}
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
	var bool = false;
	for(var key in this.edges){
		if(key === fromNode){
			if(this.edges[key] === toNode){
				bool = true;
			}
		}
	}

	for(var j in this.edges){
		if(j === toNode){
			if(this.edges[j] === fromNode){
				bool = true;
			}
		}
	}
return bool;
};


//------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
	this.edges[fromNode] = toNode;
	this.edges[toNode] = fromNode;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
	for(var key in this.edges){
		if(key === fromNode){
			if(this.edges[key] === toNode){
				delete this.edges[key];
			}
		}
	}

	for(var j in this.edges){
		if(j === toNode){
			if(this.edges[j] === fromNode){
				delete this.edges[j];
			}
		}
	}
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
	///////////////////////////////
	//Cannot get callback to work//
	//////////////////////////////
	for(var i in this.edges){
		console.log("i", this.edges[i]);
	    cb(this.edges[i], i, this.edges);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



