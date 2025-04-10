import React from 'react'

const PersonList = ({persons, handleDelete}) => {
  console.log('personslist', persons)
  return (
    <div>
      {persons.map((person, index) => (
        <div key={index}>
          <p>{person.name} {" "} {person.number}</p> <button onClick={() => handleDelete(person.id)}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default PersonList
