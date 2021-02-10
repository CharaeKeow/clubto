import React from 'react'
import Link from 'next/link'

const Header = ({ email, signOut }) => (
  <div>
    {email ? (
      <>
        <p>Signed in as {email}</p>
        <button
          type="button"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </>
    ) : (
        <>
          <p>You are not signed in.</p>
          <Link href="/auth">
            <a>
              <button type="button">
                Sign In
            </button>
            </a>
          </Link>
        </>
      )}
  </div>
)

export default Header