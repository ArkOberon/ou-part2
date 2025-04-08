import React from 'react'

const Filter = ({ nameList, handleChange }) => {
  return (
    <form>
      <div>
        filter shown with <input id="search" onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <h3>
          Results
        </h3>
        <div>
          {nameList.map((person, index) => (
            <div key={index}>
              <p>{person.name} {" "} {person.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </form>
  )
}

export default Filter
