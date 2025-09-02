import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { GifList } from "./gifs/components/GifList"

import { SearchBar } from "./shared/components/SearchBar"
import { CustomHeader } from "./shared/components/CustomHeader"
import { useGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {
  const { gifs, previousTerms, handleTermClicked, handleSearch } = useGifs()

  return (
    <>
      {/* Header */}
      <CustomHeader 
        title="Buscador de Gifs" 
        description="Descubre y comparte el gif perfecto"
      />
      
      {/* Search */}
      <SearchBar 
        placeholder="Busca lo que quieras"
        onQuery={handleSearch}
      />

      {/* Búsquedas previas */}
      <PreviousSearches 
        searches={previousTerms} 
        onLabelClicked={handleTermClicked} 
      />

      {/* Gifs */}
      <GifList 
        gifs={gifs}
      />
    </>
  )
}