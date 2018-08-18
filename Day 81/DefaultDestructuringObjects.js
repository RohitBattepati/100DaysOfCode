function createSundae({scoops =1, toppings = ['Hot Fudge']}){
        
    const scoopText  = scoops === 1 ? 'scoop' : 'scoops' ;
    return `Your Sudnae has ${scoops} ${scooptext} with ${toppings.join(' and ')} toppings.`

}

createSundae({});  //Your sundae has 1 scoop with Hot Fudge toppings.
createGrid(); // throws error


/* 
Now lets write the same function adding DEFAULT object , so that we can still 
return if just 

createGrid();

is called.

*/

function createSundae({scoops =1, toppings = ['Hot Fudge']} = {}){
        
    const scoopText  = scoops === 1 ? 'scoop' : 'scoops' ;
    return `Your Sudnae has ${scoops} ${scooptext} with ${toppings.join(' and ')} toppings.`

}

createGrid(); // //Your sundae has 1 scoop with Hot Fudge toppings.