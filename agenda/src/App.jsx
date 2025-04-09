import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [nameList, setNameList] = useState([])

  const initialPersons = async () => {
    if(persons.length > 0) {
      return
    }
    const initialValue =  await fetch('http://localhost:4000/persons')
    .then(response => response.json())
    .then(data => setPersons(data))
    .catch(error => console.error('Error fetching data:', error))
    return initialValue    
  }

  initialPersons()

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