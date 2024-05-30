import { Redirect, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated, signUp } = useAuth()
  return (
    <>
      <Metadata title="Home" description="Home page" />
      {isAuthenticated ? (
        <Redirect to={routes.dashboard()} />
      ) : (
        <button onClick={() => signUp()}>Sign Up</button>
      )}
    </>
  )
}

export default HomePage
