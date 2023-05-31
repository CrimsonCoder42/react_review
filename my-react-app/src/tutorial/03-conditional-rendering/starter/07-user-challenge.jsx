import { useState } from 'react';

const UserChallenge = () => {
  const [user, userLog] = useState(null);

  const login = () => {

    userLog({ name: 'vegan food truck' });
  }

  const logout = () => {
    userLog(null);
  }

  return (
    <>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button className='btn' onClick={logout}>
            Logout
          </button>
        </div>

      ) : (
        <div>
          <h4>Please login</h4>
          <button className='btn' onClick={login}>
            Login
          </button>
        </div>

      )}
    </>

  )
};

export default UserChallenge;
