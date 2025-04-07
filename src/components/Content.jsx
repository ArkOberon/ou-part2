import Header from "./Header"

const Content = ({ name, parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <Header name={name} />
      {
        parts.map((part) => (
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        ))
      }
      <p><b>TOTAL OF {totalExercises} EXCERCISES</b></p>
    </>
  )
}

export default Content
