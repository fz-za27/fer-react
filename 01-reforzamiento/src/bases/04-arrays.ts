
const myArray: number[] = [1, 2, 3, 4, 5, 6]
// const myArray: (number | string)[] = [1, 2, 3, 4, 5, 6]

// myArray.push(+'10')
// myArray.push(11)
// console.log(myArray)

// for (const myNumber of myArray) {
//   console.log(myNumber + 1)
// }



// const myArray2 = [...myArray] // forma 1
const myArray2 = structuredClone(myArray)

myArray2.push(7)
// myArray2.push('hola mundo')
console.log({myArray, myArray2})