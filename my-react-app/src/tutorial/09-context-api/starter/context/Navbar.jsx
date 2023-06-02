import React, { useState } from 'react'

import NavLinks from './NavLinks'
import UserContainer from './UserContainer'

function Navbar() {
  const [name, setName] = useState({ name: 'Devin' });

  const logout = () => {
    setName(null);
  }

  return (
    <>
      <div className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks name={name} logout={logout} />
      </div>
    </>

  )
}

export default Navbar