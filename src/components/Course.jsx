import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({course}) => {

  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <p><b>TOTAL OF {} EXCERCISES</b></p>
    </>
  )
}

export default Course
