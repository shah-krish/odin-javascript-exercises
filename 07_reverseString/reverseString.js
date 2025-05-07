const reverseString = function(str) {
    const arr = str.split("");
    arr.reverse();
    let ans = arr.join("");
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
