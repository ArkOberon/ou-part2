import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phone: '040-123789' 
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleChange = (e) => {
    e.preventDefault()

    if(e.target.id === 'name') {
      setNewName(e.target.value)
    } else if(e.target.id === 'phone') {
      setNewPhone(e.target.value)
    }

    console.log(e.target.id)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newPerson = { 
      name: newName, 
      phone: newPhone
    }

    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(newPerson))

    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input id="name" onChange={(e) => handleChange(e)} />
        </div>
        <div>
          phone: <input id="phone" onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <button type="submit" onClick={(e) => handleSubmit(e)}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, index) => (
          <div key={index}>
            <p>{person.name} {" "} {person.phone}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App