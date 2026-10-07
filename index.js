///combine arrays
// const nums = [1, 2, 3]
// console.log(Math.max(...nums));

// const moreNums = [...nums, 7, 9]
// console.log(moreNums)

// const baseUser = {name: "John Doe"}
// const userRole = {...baseUser, role:"Data Analyst"}
// console.log(userRole);

// console.log(Math.max(...moreNums));

//using rest 
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(2, 4, 6))

//rest in array destructuring
const [first, ...rest] = [10, 20, 30, 40, 50]

console.log(first, ...rest);
