import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({courses}) => {  
  return (
    <>      
      {
        courses.map(course => {
          return (
            <div key={course.id}>
              <Content name={course.name} parts={course.parts} />
            </div>
          )
        })
      }      
      
    </>
  )
}

export default Course
