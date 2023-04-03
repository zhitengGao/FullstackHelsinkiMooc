import React from 'react' 
 
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const Header = (props) => {
    console.log(props)
    return (
      <div>
      <p>Name of the course :{props.course}</p>
    </div>
    )
  }
  const Content = (props) => {
    return [
      <div>
      <p>{props.content[0]} have {course.parts[0].exercises} exercises. {props.content[1]} have {course.parts[1].exercises} exercises. {props.content[2]} have {course.parts[2].exercises} exercises.
      </p>
      </div>
    ]
  }
  const Total = (props) => {
    return (
      <div>
        <p>Total number of exercises: {props.total}</p>
      </div>
    )
  }
return (
  <div>
    <Header course={course.name} />
    <Content content = {[course.parts[0].name, course.parts[1].name, course.parts[2].name]} />
    <Total total = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
  </div>
  )
}

export default App