import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState
    <'all' | 'favorites' | 'heroes' | 'villains'>('all')
  
  const { data } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5 // 5 min
  })

  console.log({data})

  return (
    <>
        {/* Header */}
        <CustomJumbotron 
          title='Universo de SuperHéroes' 
          description='Descubre, explora y administra super héroes y villanos'
        />

        {/* breadcrumb */}
        <CustomBreadcrumb currentPage="Súper Héroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab('all')}>
              All Characters (16)
            </TabsTrigger>

            <TabsTrigger value="favorites" onClick={() => setActiveTab('favorites')}>
              Favorites (3)
            </TabsTrigger>

            <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>
              Heroes (12)
            </TabsTrigger>

            <TabsTrigger value="villains" onClick={() => setActiveTab('villains')}>
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* mostrar todos los personajes */}
            <HeroGrid />
          </TabsContent>
          
          <TabsContent value="favorites">
            {/* mostrar todos los personajes favoritos */}
            <HeroGrid />
          </TabsContent>
          
          <TabsContent value="heroes">
            {/* mostrar todos los heroes */}
            <HeroGrid />
          </TabsContent>
          
          <TabsContent value="villains">
            {/* mostrar todos los villanos */}
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={8} />
    </>
  )
}
