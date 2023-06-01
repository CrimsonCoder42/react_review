import React, { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setName('')
    //console.log(fakeId)
  }

  const removeItem = (id) => {
    let newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            value={name}
            id='name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>users</h2>
      {users.map((user) => {
        const { id, name } = user;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })
      }
    </div>
  );
};
export default UserChallenge;
