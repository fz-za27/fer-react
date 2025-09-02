import { RouterProvider } from "react-router/dom"
import { router } from "./router/app.router"
import { UserContextProvider } from "./context/UserContext"

export const ProfesionalApp = () => {

  return (
    <UserContextProvider>
      <div className="bg-gradient">
        <RouterProvider router={router} />
      </div>
    </UserContextProvider>
  )
}