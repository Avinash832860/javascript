a1=["avinash","nagireddy","apple","apple","orange"]
a2=[];
a3=[];
let count=0
for(let i=0;i<=a1.length-1;i++){
    if (!a2.includes(a1[i])){
        a2.push(a1[i])
        count=count+1
    }
    }
console.log(a2)
console.log(a3)
console.log(count)
// var number=2
// function sample(){
//     var number=1
//     console.log(number)
// }
// sample()
// console.log(number)
// if(true){
//     let number=3
//     console.log(number)
// }

// function outer() {
//   let a = 10;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }
// outer(); // Output: 10

// let a={
//     a:"avinash",
//     "avi":1
// }
// console.log(typeof(a))

