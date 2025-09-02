import { useEffect, useState } from "react"

interface Pokemon {
  id: number
  name: string
  imageUrl: string
}

interface Props {
  id: number
}

export const usePokemon = ({ id }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const getPokemonById = async (id: number) => {
    setIsLoading(true)

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      if (!response.ok) throw new Error('No encontrado')

      const data = await response.json()
      setPokemon({
        id: id,
        name: data.name,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      })

    } catch (error) {
      console.log(error)
      setPokemon(null)

    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPokemonById(id)

  }, [id])

  return {
    // Properties
    isLoading,
    pokemon,

    formattedId: id.toString().padStart(3, '0')
  }
}