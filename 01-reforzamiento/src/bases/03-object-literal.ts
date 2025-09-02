interface Person {
  firstName: string
  lastName: string
  age: number

  address?: Address
}

interface Address {
  postalCode: string
  city: string
}

const ironman: Person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    postalCode: 'ABC123',
    city: 'New Yok',
  }
}

console.log(ironman)

// const spiderman = {...ironman} // forma 1
// const spiderman = structuredClone(ironman) // forma 2

// spiderman.firstName = 'Peter'
// spiderman.lastName = 'Parker'
// spiderman.age = 90
// spiderman.address.city = 'Costa Rica'

// console.log({ironman, spiderman})