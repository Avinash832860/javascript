//Anagram example
//An anagram is a word or phrase formed by rearranging the letters 
//of another word or phrase, using all the original letters exactly once.
// listen → silent
// earth → hear
// secure → rescue
// dusty → study

let firts="listen"
let second="silentee"
let sort1=firts.split('').sort().join("")
let sort2=second.split('').sort().join("")
if (sort1.length===sort2.length){
    if(sort1===sort2){
    console.log("Given words are anagram:"+firts+"-"+second)
}
}else{
    console.log("no")
}