import React from 'react'

const PersonForm = ({ handleChange, handleSubmit }) => {
  return (
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
  )
}

export default PersonForm
