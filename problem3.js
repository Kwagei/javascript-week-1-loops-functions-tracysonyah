//let arr = [1,5,30,56,3,48,67,44,7,32] write a function that prints 
//the highest number in the array and prints the average of the numbers.
let arr = [1, 5, 30, 56, 3, 48, 67, 44, 7, 32];

function highest_average(nums) {
    highest_num = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(highest_num < nums[i]) {
            highest_num = nums[i];
        }
    }
    console.log(highest_num);
}
highest_average(arr);