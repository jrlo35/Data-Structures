var Queue = function(){
  
  var someInstance={};
  someInstance.storage={};
  someInstance.newCount=0;
  someInstance.oldCount=0;
  someInstance.enqueue=queueMethods.enqueue;
  someInstance.dequeue=queueMethods.dequeue;
  someInstance.size=queueMethods.size;
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  
};

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

