import React from 'react'

const Header = ({ user, signInWithGitHub, signout }) => {
  return user ? (
    <div>
      <p>Email: {user.email}</p>
      <button onClick={(e) => signout()}>Sign Out</button>
    </div>
  ) : (
      <button onClick={(e) => signInWithGitHub()}>Sign In</button>
    )
}

export default Header