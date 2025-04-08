import React from 'react'
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
