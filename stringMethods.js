const str = "Hello World";
console.log(str.charAt(1)); // Output: e

const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2)); // Output: Hello World

str = "Hello World";
console.log(str.indexOf("World")); // Output: 6

str = "Hello World";
console.log(str.slice(0, 5)); // Output: Hello

str = "Hello World";
console.log(str.toUpperCase()); // Output: HELLO WORLD

str = "Hello World";
console.log(str.replace("World", "Universe")); // Output: Hello Universe

str = "Hello,World";
console.log(str.split(",")); // Output: ["Hello", "World"]

str = "   Hello World    ";
console.log(str.trim()); // Output: "Hello World"
