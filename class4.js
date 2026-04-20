let newArray=[1,2,3,4,5,6]
console.log(newArray)
newArray.push(7)   //it will the add the element at the end of the array
console.log(newArray)
newArray.pop()    //it will the add the element at the end of the array
console.log(newArray)
newArray.shift()  //removes the first elements
console.log(newArray)
newArray.unshift(100) //adding elements at the starting of the array
console.log(newArray)

for(let i=0 ;i<newArray.length;i++){
    console.log(newArray[i])
    console.log(i)
}

var v="avinash"
var rev=""
for(let i=v.length-1;i>=0;i--){
    // console.log(v[i])
    rev=rev+v[i]
}
console.log(rev)

let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
    fact *= i;
}
console.log(fact);

let numbers = [1, 2, 3, 4, 5, 6];
numbers.sort()
console.log(numbers[numbers.length-2]) 
let maxNum = numbers[0];
let secondnumber=numbers[0]
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
        secondnumber=maxNum;
        maxNum = numbers[i];
    }else if(numbers[i]<maxNum && numbers[i]>maxNum)
        secondnumber=numbers[i]
}
console.log(maxNum)
console.log("---secondlargest"+secondnumber);
