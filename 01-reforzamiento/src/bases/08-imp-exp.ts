// import { heroes as heroes2 } from "../data/heroes.data"
import { heroes, Owner, type Hero } from "../data/heroes.data"

const getHeroById = (id: number): Hero | undefined => {
  return heroes.find(hero => hero.id === id)

  // if (!hero) throw new Error(`Hero not found with id ${id}`)
}

export const getHeroesByOwner = (owner: Owner): Hero[] => {
  return heroes.filter(hero => hero.owner === owner)
}

// console.log( getHeroById(1) )
// console.log(getHeroesByOwner(Owner.DC))