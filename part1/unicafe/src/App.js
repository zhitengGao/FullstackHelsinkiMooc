import { useState } from 'react'

const DisplayGood = ({ goodCount }) => <div>{goodCount}</div>
const DisplayNeutral = ({ neutralCount }) => <div>{neutralCount}</div>
const DisplayBad = ({ badCount }) => <div>{badCount}</div>

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const increaseGoodByOne = () => {
    setGood(good + 1)
  }

  const increaseNeutralByOne = () => {
    setNeutral(neutral + 1)
  }

  const increaseBadByOne = () => {
    setBad(bad + 1)
  }

  const Statistics = () => {
    let count = good + neutral + bad
    let average = (good - bad) / count
    let positive = (good / count) * 100

    if (count == 0){
      return (
        <div>
          No data input
        </div>
      )
    } else {
      return (
        <div>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={count}/>
          <StatisticLine text="average" value={average}/>
          <StatisticLine text="positive" value={positive + "%"} />
        </div>
      )
    }
  }

  const StatisticLine = ({ text, value }) => {
    return (
      <div>
        <p>{text} {value}</p>
      </div>
    )
  }
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increaseGoodByOne} text='good' />
      <Button onClick={increaseNeutralByOne} text='neutral' />
      <Button onClick={increaseBadByOne} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App