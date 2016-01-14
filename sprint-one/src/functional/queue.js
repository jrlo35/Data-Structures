var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var newCount=0;
  var oldCount=0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[newCount]=value;
    newCount+=1;
    
  };

  someInstance.dequeue = function(){
    var result=storage[oldCount];
    delete storage[oldCount];
    oldCount++;
    return result;
  };

  someInstance.size = function(){
    if(oldCount > newCount){
      return 0;
    }
    return newCount - oldCount;

  };

  return someInstance;
};

