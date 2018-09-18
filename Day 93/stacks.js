// this is our stack
var letters = []; 

var word = "racecar"

var reverseWord = "";


//inserting words into the stack
for (var i = 0; i<word.length; i++){

	letters.push(word[i]);
}

//popping off letters in reverse order
for(var i = 0; i<word.length; i++){
	reverseWord += letters.pop();
}

if(reverseWord === word){
	console.log("Given word is a palindrome");
}else{
	console.log("Word is not a palindrome");
}