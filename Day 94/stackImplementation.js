//creates a stack
let stack = function(){
	//two variables of the stack
	this.count = 0; //keeps track of the count of the stack
  this.storage = {}; //empty object


  //adding the  value on to the end of the stack
  this.push = function(value){
    this.storage[this.count] = value;
    this.count++;
  }

  //removes and returns the value at the end of the stack
  this.pop = function(){
    if(this.count === 0){
      return undefined;
    }
      this.count--;
      const result = this.storage[this.count];
      //removes the top element and returns it
      delete this.storage[this.count];
      return result;
  }

  //to know the size of the stack
  this.size = function(){
    return this.count;
  }

  //peek() - returns the value top of the stack i.e which is at the end of the stack
  this.peek = function(){
    return this.storage[this.count-1]; 
  }
}
let myStack = new stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());