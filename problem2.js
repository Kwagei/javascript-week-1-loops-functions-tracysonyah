//A list a numbers 1 - 10 is given, write a function that prints the reverse of that that list
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverse_it() {
    reverse_nums = [];
    for(let i = nums.length; i >= 0; i--) {
        reverse_nums += i
    }
    console.log(reverse_nums)
}

reverse_it();


