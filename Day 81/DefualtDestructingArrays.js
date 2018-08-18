function createGrid([width=5 , height=5]){
	return 	`Generate Grid ${width} * ${height}`;
}

createGrid([]); // Generate Grid 5 * 5 
createGrid([2,5]); // Generate Grid 2 * 5
createGrid(); // throws error because createGrid is expecting atleast one argument


/* 
Now lets write the same function adding DEFAULT array , so that we can still 
return if just 

createGrid();

is called.

*/

function createGrid([width=5 , height=5] = [] ){
	return `Generate Grid ${width} *  ${height}`
}

createGrid();