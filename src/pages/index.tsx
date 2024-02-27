import { useSession, signIn, signOut } from "next-auth/react"
import Login from './../components/login-btn'

export default function Home() {
  
  return (
    <Login />
  )
}
