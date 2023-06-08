//Write a function areEvenNumbers that iterates from 1 -100 
//and prints an array containing only the even numbers.
function areNumbers() {
    let arr = []
    for(let i = 1; i <= 100; i++) {
        if(i % 2 === 0) {
            arr += i;
        }
    }
    console.log(arr);
}
areNumbers();