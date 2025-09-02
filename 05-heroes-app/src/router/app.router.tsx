import { createBrowserRouter } from "react-router"
import { lazy } from "react"

import { HomePage } from '../heroes/pages/home/HomePage'
import { HeroPage } from "@/heroes/pages/hero/HeroPage"
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout"
import { AdminLayout } from "@/admin/layouts/AdminLayout"

// Carga peresoza en caso de que no se exporte el componente por defecto
// const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage').then(module => ({ default: module.SearchPage })))

// Este sería si se importa por defecto
const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'))
const AdminPage = lazy(() => import('@/admin/pages/AdminPage'))

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'heroes/1',
        element: <HeroPage />
      },
      {
        path: 'search',
        element: <SearchPage />
      },
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />
      },
    ]
  }
])