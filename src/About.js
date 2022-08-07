import React, { useEffect, useState } from 'react'
import Form from './components/Form/Form'

function About() {

  const [fName, setFirstName] = useState('');
  const [lName, setLastName] = useState('');

  const handleOnChange = (e) => {
    if (e.target.name == 'firstName') {
      setFirstName(e.target.value)
    }

    if (e.target.name == 'lastName') {
      setLastName(e.target.value)
    }
  }

  return (
    <div>
      <Form firstName={fName} lastName={lName} handleChange={handleOnChange} />
    </div>
  )
}

export default About