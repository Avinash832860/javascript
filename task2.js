let fruits=["apple","Banana","Orange","custardapple","dragonfruit",
    "Blackberry","Bluberry"
]
for(let i=0;i<fruits.length;i++){
    if(fruits[i]==="Orange"){
        fruits.splice(i + 1, 0, "Watermelon")
    }
}
console.log("The Watermelon is updated in the list "+fruits)