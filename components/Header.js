import React from 'react'

const Header = ({ user, signInWithGitHub, signInWithGoogle, signout }) => {
  return user ? (
    <div>
      <p>Email: {user.email}</p>
      <button onClick={(e) => signout()}>Sign Out</button>
    </div>
  ) : (
      <div>
        <button onClick={(e) => signInWithGitHub()}>Sign In with GitHub</button>
        <button onClick={(e) => signInWithGoogle()}>Sign In with Google</button>
      </div>
    )
}

export default Header