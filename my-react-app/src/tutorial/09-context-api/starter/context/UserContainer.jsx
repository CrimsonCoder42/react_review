import React from 'react'

function UserContainer({ name, logout }) {

  return (
    <div className='user-container'>
      {name ? (<>
        <h3>{name?.name?.toUpperCase()}</h3>

        <button className="btn" onClick={logout}>Logout</button>
      </>
      ) : (
        <p>Please Login</p>
      )}

    </div>
  )
}

export default UserContainer