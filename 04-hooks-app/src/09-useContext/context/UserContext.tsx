import { createContext, useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data"

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated'

interface UserContextProps {
  // state
  authStatus: AuthStatus
  isAuthenticathed: boolean
  user: User | null

  // methods
  login: (userId: number) => boolean
  logout: () => void
}

export const UserContext = createContext({} as UserContextProps)

// HOC
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking')
  const [user, setUser] = useState<User | null>(null)

  const handleLogin = (userId: number) => {
    const user = users.find(user => user.id === userId)

    if (!user) {
      console.log(`User not found with id ${userId}`)
      
      setAuthStatus('not-authenticated')
      setUser(null)
      
      return false
    }

    setAuthStatus('authenticated')
    setUser(user)
    localStorage.setItem('userId', userId.toString())

    return true
  }

  const handleLogout = () => {
    setAuthStatus('not-authenticated')
    setUser(null)

    localStorage.removeItem('userId')
  }

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId')
    
    if (storedUserId) {
      handleLogin(+storedUserId)
      return 
    }

    handleLogout()
  }, [])

  return (
    <UserContext value={{
      authStatus: authStatus,
      isAuthenticathed: authStatus === 'authenticated',
      user: user,

      login: handleLogin,
      logout: handleLogout,
    }}>
      {children}
    </UserContext>
  )
}