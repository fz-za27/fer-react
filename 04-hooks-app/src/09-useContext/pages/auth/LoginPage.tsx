import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router"

import { UserContext } from "@/09-useContext/context/UserContext"
import { toast } from "sonner"

export const LoginPage = () => {
  const { login } = useContext(UserContext)
  const [userId, setUserId] = useState('')

  const navigation = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const result = login(+userId)
    
    if (!result) {
      toast.error('Usuario no encontrado')
      return
    }

    navigation('/profile')
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Iniciar sesión</h1>
      <hr />

      <form
        className="flex flex-col gap-2 my-10"
        onSubmit={handleSubmit}
      >
        <Input
          type="number"
          placeholder="ID del usuario"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <Button
          type="submit"
          className="bg-blue-500 text-white"
        >
          Login
        </Button>

        <Link to='/'>
          <Button
            variant='ghost'
          >
            Volver a la página principal
          </Button>
        </Link>
      </form>
    </div>
  )
}