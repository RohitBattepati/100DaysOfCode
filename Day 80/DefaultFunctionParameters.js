/*

DEFAULT FUNCTION PARAMETERS

Below is the example explaining how easy it is write default parameters in ES6

*/

//Using JavaScript

function rohit(name, greeting){
	name = (typeof name !== 'undefined') ? name: 'Tony';
    greeting = (typeof greeting !== 'undefined') ? greeting: 'Hey';

	return `${greeting} ${name}!`;

rohit(); //Hey Tony!




//Using ES6 

function rohit(name = 'Tony' , greeting='Hey'){
	return `${greeting} ${name}!`;
}

rohit();  //Hey Tony!