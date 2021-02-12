import '../styles/globals.css'
//import initAuth from '../firebase/initAuth'
import { AuthProvider } from '../lib/auth'

//initAuth()

//wrap the app in authprovider
function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default App
