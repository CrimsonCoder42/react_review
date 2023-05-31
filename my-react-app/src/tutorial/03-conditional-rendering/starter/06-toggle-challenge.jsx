import { useState, useEffect } from 'react';

const ToggleChallenge = () => {
  const [condition, setCondition] = useState(true);

  const toggleCondition = () => {
    if (condition) {
      setCondition(false);
    } else {
      setCondition(true);
    }
  }

  return (
    <>
      {condition ? <h2>Off</h2> : <h2>On</h2>}

      <button className='btn' onClick={toggleCondition}>change</button>

    </>


  )
};

export default ToggleChallenge;
