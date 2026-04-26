function myFunction(num) {
return num*num;
}
let square=myFunction(5)
console.log(square);

function hello(){
    let a=10,b=20,y=a+b;
    return y;
}
console.log(hello());

function checkbalance(withdrawAmount){
    var balance=10000;
    return balance=balance-withdrawAmount;
}
balanc=checkbalance(100)
console.log(balanc)

function firstnumbers(n){
    for(let i=0;i<=n;i++){
        console.log(i)
    }
}
firstnumbers(10)

//var-redclare and reinstillazation,let-reintillization,const-constant fixed we can't do both;
"use strict";

var count = 10;
count = 20; //

var  count= 30; //

console.log(count)