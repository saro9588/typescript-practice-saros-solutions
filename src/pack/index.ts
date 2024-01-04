// (**) Pack consecutive duplicates of list elements into sublists. Solutions

// If a list contains repeated elements they should be placed in separate sublists.
// NON DESTRUCTIVE - the original array is NOT modified

// Example:  [1,1,1,2,3,3,1,1,5,6,6,6,6] -> [[1,1,1], [2],[3,3],[1,1],[5], [6,6,6,6]]

// start by defining the function:
// export function pack.... Good Luck!

// function pack<T>(arr: T[]): T[][] {
//   return arr.reduce((acc: T[][], val: T, index: number) => {
//     if (index === 0 || val !== arr[index - 1]) {
//       acc.push([val]); // Start a new sublist with the current element
//     } else {
//       acc[acc.length - 1].push(val); // Add consecutive repeated elements to the current sublist
//     }
//     return acc;
//   }, []);
// }

function pack(arr: any[]) {
  let newArrs = [[]];
  arr.forEach((val, i) => {
    if (i === 0 || val !== arr[i - 1]) {
      newArrs.push(val);
    } else {
      arr[arr.length - 1].push(val);
    }
  });
  return newArrs;
}

let array: any = [1, 1, 1, 2, 3, 3, 1, 1, 5, 6, 6, 6, 6];
console.log(pack(array));
