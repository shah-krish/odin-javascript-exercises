const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let low = 0;
    let high = str.length-1;
    while(low<high){
        if(str[low] == " "){
            low++;
        }
        else if(str[high] == " "){
            high --;
        }
        else if(str[low]!=str[high]){
            return false;
        }
        else{
            low++;
            high --;
        }
       
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
