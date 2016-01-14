var Queue = function(){
  
  var someInstance={};
  someInstance.storage={};
  someInstance.newCount=0;
  someInstance.oldCount=0;
  extend(someInstance,queueMethods)
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var extend=function(to,from){
  for(var key in from){
    to[key]=from[key];
  }
}

var queueMethods = {};//why not in queue methods

queueMethods.enqueue=function(value){
  this.storage[this.newCount]=value;
  this.newCount++;
};

queueMethods.dequeue=function(){
  var result=this.storage[this.oldCount];
  delete this.storage[this.oldCount];
  this.oldCount++;
  return result;
};
queueMethods.size=function(){
  if(this.oldCount>this.newCount){
    return 0;
  }
  return this.newCount-this.oldCount;
};

