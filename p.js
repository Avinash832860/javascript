a1=["avinash","nagireddy","apple","apple","orange"]
a2=[]
for(let i=0;i<=a1.length;i++){
    if (!a2.includes(a1[i])){
        a2.push(a1[i])
    }
    }
console.log(a2)