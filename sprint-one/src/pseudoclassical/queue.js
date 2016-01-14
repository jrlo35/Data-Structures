var Queue = function() {
  this.storage={};
  this.newCount=0;
  this.oldCount=0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


Queue.prototype.enqueue=function(value){
  this.storage[this.newCount]=value;
  this.newCount++;
}

Queue.prototype.dequeue=function(){
  var result=this.storage[this.oldCount];
  delete this.storage[this.oldCount];
  this.oldCount++;
  return result;
}

Queue.prototype.size=function(){
  if(this.oldCount>this.newCount){
    return 0;
  }
  return this.newCount-this.oldCount;
}

