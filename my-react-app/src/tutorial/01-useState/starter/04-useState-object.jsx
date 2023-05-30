import { useState } from 'react';

const names =[
  { 
  name: 'Devin', 
  age: 39, 
  hobby: 'coding'
  },
  { 
  name: 'Jon', 
  age: 49, 
  hobby: 'business'
  } 
]

const UseStateObject = () => {
  const [person, setPerson] = useState(names[0]);
  console.log(person)
  return(
    <>
      <h2>useState object example</h2>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.hobby}</h2>

      <button className='btn' onClick={() => setPerson(names[1])}>Devin</button>
    </>
  )
};

export default UseStateObject;
