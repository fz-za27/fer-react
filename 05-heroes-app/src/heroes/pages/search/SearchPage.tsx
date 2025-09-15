import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"

export const SearchPage = () => {

  return (
    <>
      <CustomJumbotron
        title='Búsqueda de SuperHéroes'
        description='Descubre, explora y administra super héroes y villanos'
      />

      <CustomBreadcrumb 
        currentPage="Buscador de héroes"
        breadcrumbs={[
          { label: 'home1', to: '/' },
          { label: 'home2', to: '/' },
          { label: 'home3', to: '/' },
        ]}  
      />

      <HeroStats />

      <SearchControls />
    </>
  )
}

export default SearchPage