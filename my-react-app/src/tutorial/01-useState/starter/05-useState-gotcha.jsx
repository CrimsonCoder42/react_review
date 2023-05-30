import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleclick = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  }

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={handleclick}>click me</button>

    </>
  )
};

export default UseStateGotcha;
