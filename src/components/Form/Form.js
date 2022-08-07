import React, { useEffect } from 'react'

function Form({ firstName, lastName, handleChange }) {


  return (
    <form>
      <div>
        <label>First Name:</label>
        <input type={'text'} value={firstName} name="firstName" onChange={handleChange} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type={'text'} value={lastName} name="lastName" onChange={handleChange} />
      </div>
    </form>
  )
}

export default Form

