function all(items){ //parameter = array of items
    //loop through array
    //testing to see if any if item is false
    //after loop return true
    
    for(var i = 0; i < items.length; i++){
        if (items [i] === false){
            return false
            
        }
        

    }
    return true 
}

console.log(all([true,true]))