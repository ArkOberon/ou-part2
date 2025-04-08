import React from 'react'

const PersonList = ({persons}) => {
  return (
    <div>
      {persons.map((person, index) => (
        <div key={index}>
          <p>{person.name} {" "} {person.phone}</p>
        </div>
      ))}
    </div>
  )
}

export default PersonList
