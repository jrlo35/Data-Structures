var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);//prototype chain? Queue.prototype
  someInstance.storage = {};
  someInstance.oldCount = 0;
  someInstance.newCount = 0;
  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(value){
	this.storage[this.newCount] = value;
	this.newCount++;
};

queueMethods.dequeue = function(){
	var result = this.storage[this.oldCount];
	delete this.storage[this.oldCount];
	this.oldCount++;
	return result;
};

queueMethods.size = function(){
	if(this.oldCount > this.newCount){
		return 0;
	}
	return this.newCount - this.oldCount;


};





