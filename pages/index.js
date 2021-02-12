import { useAuth } from '../lib/auth'
import Header from '../components/Header'

const App = () => {
  const auth = useAuth()
  return (
    <Header user={auth.user} signInWithGitHub={auth.signInWithGitHub} signInWithGoogle={auth.signInWithGoogle} signout={auth.signout} />
  )
}

export default (App)