import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phone: '040-123789' 
    }
  ]) 

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [nameList, setNameList] = useState([])

  const handleChange = (e) => {
    e.preventDefault()

    if(e.target.id === 'name') {
      setNewName(e.target.value)
    } if(e.target.id === 'phone') {
      setNewPhone(e.target.value)
    }

    if(e.target.id === 'search') {
      const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setNameList(filteredPersons)
    }    
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
           
      <Filter 
        handleChange={handleChange} 
        nameList={nameList} 
      />

      <h2>Add a new</h2>
      
      <PersonForm 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}       
      />

      <h2>Numbers</h2>
      
      <PersonList 
        persons={persons}       
      />
    </div>
  )
}

export default App