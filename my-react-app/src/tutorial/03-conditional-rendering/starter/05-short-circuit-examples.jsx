import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <>
    <h2>{text || 'default'}</h2> 
    {text && (
      <div>
      <h2>Whatever return</h2>
      <h2>{name}</h2>
      </div>
      )}

      {/* {!text && (
      <div>
      <h2>Whatever return</h2>
      <h2>{name}</h2>
      </div>
      )} */}
      {user && <SomeComponent name={user.name} />}

      <h2 style={{ margin: '1rem 0' }}> Ternary Operator</h2>
      <button className='btn'>{isEditing? 'edit': 'add'}</button>

      {name ? <h2>{name}</h2> : <h2>user not found</h2>}

    </>
  )

};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>whatever return</h2>
      <h2>{name}</h2>
    </div>
  )
};

export default ShortCircuitExamples;
