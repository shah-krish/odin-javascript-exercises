const removeFromArray = function(arr, arg) {
    for(let i =0; i<arr.length; i++){
        if(arr[i] == arg){
            arr.splice(i,1);
        }
       
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
