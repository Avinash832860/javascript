let num = 7;
let factors = 0;
if (num > 1) {
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            factors = factors + 1
        }
    }
    if (factors === 2) {
        console.log("given number is prime:" + num)
    } else {
        console.log("it is not a prime number")
    }
}
