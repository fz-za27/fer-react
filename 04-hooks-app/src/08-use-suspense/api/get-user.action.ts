export interface User {
  id: number,
  name: string,
  location: string,
  role: string
}

export const getUserAction = async(id:number): Promise<User> => {
  console.log('Funcion llamada')
  
  await new Promise(res => setTimeout(res, 2000))

  console.log('Funcion resolvio')

  return {
    id: id,
    name: 'Fabián Zambrano',
    location: 'Panamá, Panamá',
    role: 'Profesional de Software',
  }
}