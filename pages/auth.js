import React from 'react'
import { withAuthUser, AuthAction } from 'next-firebase-auth'
import FirebaseAuth from '../components/FirebaseAuth'

const Auth = () => (
  < div >
    <h3>Sign In</h3>
    <FirebaseAuth />
  </div >
)

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthenticatedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthenticatedAfterInit: AuthAction.RENDER,
})(Auth) //higher-order function