const sumAll = function(num1, num2) {
    if(num1<num2){
        let answer = 0;
        for(let i = num1; i<=num2; i++){
            answer+=i;
        }
        return answer;
    }
};

// Do not edit below this line
module.exports = sumAll;
