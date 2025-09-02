
const person = {
  name: 'tony',
  age: 45,
  key: 'ironman'
}

// const name = person.name
// const age = person.age
// const key = person.key

// const { age, key, name:ironmanName } = person
// console.log({ ironmanName, age, key })



interface Hero {
  name: string
  age: number
  key: string
  rank?: string
}

const useContext = ({ key, age, name, rank = 'Sin rango' }: Hero) => {
  // const { age, key, name, rank } = hero

  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank: rank,
  }
}

const { rank, keyName, user: { name } } = useContext(person)
console.log({ rank, keyName, name })