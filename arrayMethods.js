const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]

arr = [1, 2, 3];
console.log(arr.pop()); // Output: 3
console.log(arr); // Output: [1, 2]

const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr1.concat(arr2)); // Output: [1, 2, 3, 4]

arr = [1, 2, 3];
console.log(arr.indexOf(2)); // Output: 1

arr = [1, 2, 3];
console.log(arr.reverse()); // Output: [3, 2, 1]

arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4)); // Output: [2, 3, 4]

arr = [3, 2, 1];
console.log(arr.sort()); // Output: [1, 2, 3]

arr = [1, 2, 3];
arr.forEach(function (element) {
  console.log(element);
});
// Output: 1
//         2
//         3
