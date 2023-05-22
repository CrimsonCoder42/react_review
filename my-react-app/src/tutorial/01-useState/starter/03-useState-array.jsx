import React from 'react';
import { data } from '../../../data';
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    
  };

  return (
<>
<div>
{people.map((person) => { 
  const {id, name } = person;
  return (
    <div key={id} className='item'>
      <h4>{name}</h4>
      <button onClick={ () => removeItem(id) }>clear items</button>
    </div>
  );
})}
<button onClick={() => setPeople([])}>clear all items</button>
</div>
</>

  );
};

export default UseStateArray;
