import React, { useState } from 'react';
import './App.css';
import ProductList from './components/Class';

function App() {

  const [count, setCount] = useState(1)
  const [value, setValue] = useState(1)

  const handleChange = (e) => {
    setCount(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setValue(count)
  }
  return (
    <>
      <form>
        <input type={'number'} value={count} onChange={handleChange} />
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
      <ProductList productId={value} />
    </>
  )
}
export default App;
