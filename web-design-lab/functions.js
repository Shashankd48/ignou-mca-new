// const first = () => {
//    let name = "Shashank Dubey";

//    const second = () => {
//       console.log(name);
//       return "End of Shashank";
//    };
//    return second;
// };

// console.log(first()());

// (function () {
//    console.log("Imidiate function");
// })();

// abc();

// // const abc = () => {};

// function abc() {}

// console.log(abc);

a = 10;
console.log(a);

let abc = "Hello, world!";

var a = "a";

console.log(a);

const array = ["a", "b", "c", "d", "e"];

const nums = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
];

const names = array.reduce((acc, value) => acc.concat(value), array);

console.log(names);

console.log(
   nums.reduce((acc, value) => {
      return acc + value;
   })
);

const text =
   "Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum amet";
const words = text.toLowerCase().split(/\s+/);

const wordFrequency = words.reduce((accumulator, word) => {
   console.log(accumulator);
   if (accumulator[word]) {
      accumulator[word] += 1;
   } else {
      accumulator[word] = 1;
   }
   return accumulator;
}, {});

console.log(wordFrequency);
