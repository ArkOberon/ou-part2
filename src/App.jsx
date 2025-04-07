import Course from "./components/Course"
import { course, courses } from './constant'

const App = () => {  
  return <Course course={course} courses={courses} />
}

export default App