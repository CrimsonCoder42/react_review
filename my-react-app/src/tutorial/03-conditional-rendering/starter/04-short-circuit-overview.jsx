import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsey
  const [text, setText] = useState('');
  // truthy
  const [text2, setText2] = useState('susan');


  return (
    <>
      <h4>Falsy OR : {text || 'hello world'}</h4>
      <h4>Falsy AND : {text && 'hello world'}</h4>
      <h4>Truthy OR : {text2 || 'hello world'}</h4>
      <h4>Truthy OR : {text2 && 'hello world'}</h4>
    </>
  )
};
export default ShortCircuitOverview;
