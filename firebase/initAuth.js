//initializing the next-auth-firebase, as per the official docs https://github.com/gladly-team/next-firebase-auth
import { init } from 'next-firebase-auth'

const initAuth = () => {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login',
    logoutAPIEndpoint: '/api/logout',
    firebaseAdminInitConfig: {
      credential: {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY
          ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY) : undefined
        //privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
      }
    },
    firebaseClientInitConfig: {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    },
    cookies: {
      name: 'Club.to',
      //key are required unles `signed` is changed to `false`, normally in HTTPS environment
      //as currently I'm running this on local host, so set this to `true`
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 24 * 60 * 60 * 1000, //12 days. must be set in milliseconds
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: false, //false in non-HTTPS development
      signed: true,
    }
  })
}

export default initAuth