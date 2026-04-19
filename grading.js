let num =90;  //>=90 -- A+ ,80-89--A,70-79--B,60-69--C,50-59--D,40-49--E,>30--fail
if(num>=90){
    console.log("A+")
}else if(num<=89 && num>=80){
    console.log("A")
}else if(num>=70 && num<=79){
    console.log("B")
}
else if(num>=60 && num<=69){
    console.log("C")
}else if(num>=50 && num<=59){
    console.log("D");
}
else{
    console.log("Fail")
}
