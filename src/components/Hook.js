import React, { useState, useEffect } from 'react';

const Counter = ({ carName }) => {
  const [name, setName] = useState('kiran');

  useEffect(() => {

    setName('not Kiran')

    return () => { }
  }, [name])

  const handleCHange = (e) => {
    setName(e.target.value)
  }


  return (
    <div>
      <h2>Counter</h2>
      <div>
        <input type='text' value={name} onChange={handleCHange} />
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Counter;
