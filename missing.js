let arr = [1,2,4,5];
let n = 5;
let expectedSum = n*(n+1)/2;
let actualSum = arr.reduce((a,b)=>a+b,0);
console.log("Missing number:", expectedSum - actualSum);
