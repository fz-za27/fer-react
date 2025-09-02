
function greet(name: string): string {
  return 'Hola ' + name
}

const greet2 = (name: string): string => 'Hola ' + name

const message = greet('Bartolomeo')
const message2 = greet('Pablo')
// console.log({message, message2})



interface User {
  'uid': string,
  'username': string,
}

const getUser = (): User => ({
  'uid': 'ABC-123',
  'username': 'el_papi_0090',
})


const getUser2 = () => {
  return {
    'uid': 'ABC-456',
    'username': 'el_papi_1123'
  }
}

const user = getUser()
const user2 = getUser2()
// console.log({ user, user2 })



const myNumbers: number[] = [1,2,3,4,5]

myNumbers.forEach(e => console.log(e))