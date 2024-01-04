// (**) Eliminate consecutive duplicates of list elements.

// If a list contains repeated elements they should be replaced with a single copy of the element. The order of the elements should not be changed.

// [1,1,1,2,2,3,3,1,1,6,7,7,7,7] -> [1,2,3,1,6,7]

// start by defining the function:
// export function compress.... Good Luck!

// function compress(arr: any[]): any[] {
//   let newArr: any[] = [];
//   arr.forEach((val, i) => {
//     if (i === 0 || val !== arr[i - 1]) {
//       newArr.push(val);
//     }
//   });
//   return ["Apple", "Orange"];
// }
// let array: number[] = [1, 1, 1, 2, 2, 3, 3, 1, 1, 6, 7, 7, 7, 7];
// const result: number[] = compress(array);
// console.log(compress(array)); //[ 1, 2, 3, 1, 6, 7 ]
