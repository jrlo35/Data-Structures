var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arrayIndex = this._storage.get(i);

   if(this._storage.get(i) === undefined){
     	return this._storage.set(i,[[k,v]]);
    }

    for(var j = 0; j < arrayIndex.length; j++){
	   	if(arrayIndex[j][0] === k){
		     	return arrayIndex[j][1] = v;
   		} else{
	       return arrayIndex.push([k,v]);
	   	} 
	  }    
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var indexArray = this._storage.get(i);
   if(this._storage.get(i) === undefined){
     return null
   }
   else{
     for(var j=0;j<this._storage.get(i).length;j++){
				// i[[k,v], [k,v]]
     			if(indexArray[j][0] === k){
     				return indexArray[j][1];
     			}
     			
     		}
     }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arrayIndex = this._storage.get(i);

    if(this._storage.get(i).length === 1 && arrayIndex[0][0] === k){
       arrayIndex[0][1] = null;
  	}
    else{
        for(var i = 0; i < arrayIndex.length; i++){
            if(arrayIndex[i][0] ===  k){
                delete arrayIndex[i][0];
            }
        }  
    }
 };


/*
 * Complexity: What is the time complexity of the above functions?
 */
