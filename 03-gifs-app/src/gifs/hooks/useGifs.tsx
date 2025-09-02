import { useCallback, useRef, useState } from "react"

import type { Gif } from "../interfaces/gif.interface"
import { getGifsByQuery } from "../actions/get-gifs-by-query.action"

// const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([])
  const [gifs, setGifs] = useState<Gif[]>([])

  const gifsCache = useRef<Record<string, Gif[]>>({})

  const loadGifs = async (term: string) => {
    const cleanTerm = term.trim().toLowerCase()
    if (!cleanTerm) return []

    // si está en cache, se devuelve
    if (gifsCache.current[cleanTerm])
      return gifsCache.current[cleanTerm]

    // si no, se busca en la API y se guarda
    const gifs = await getGifsByQuery(cleanTerm)
    gifsCache.current[cleanTerm] = gifs

    return gifs
  }

  const handleTermClicked = useCallback(async (term: string) => {  
    const gifs = await loadGifs(term)
    setGifs(gifs)
  }, [])

  const handleSearch = async (query: string = '') => {
    const cleanQuery = query.trim().toLowerCase()
    if (!cleanQuery) return
    if (previousTerms.includes(cleanQuery)) return

    // insertar el nuevo query y limitarlo a 8 elementos
    setPreviousTerms([cleanQuery, ...previousTerms].slice(0, 8))

    const gifs = await loadGifs(cleanQuery)
    setGifs(gifs)
  }

  return {
    // Properties
    previousTerms,
    gifs,

    // Methods
    handleTermClicked,
    handleSearch,
  }
}