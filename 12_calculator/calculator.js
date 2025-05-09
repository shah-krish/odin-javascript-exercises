const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let ans = 0;
  for(let i = 0; i<arr.length; i++){
    ans=arr[i]+ans;
  }
  return ans;
};

const multiply = function(arr) {
  let ans = 1;
  for(let i = 0; i<arr.length; i++){
    ans=arr[i]*ans;
  }
  return ans;
};

const power = function(base, exp) {
  let ans = 1;
	for(let i = 1; i<=exp; i++){
    ans = base * ans;
  }
  return ans;
};

const factorial = function(num) {
	if(num==0){
    return 1;
  }
  else if(num == 1){
    return 1;
  }
  let ans = 1;
  while(num>0){
    ans = ans*num;
    num--;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
