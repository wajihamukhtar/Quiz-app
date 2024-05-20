import React from 'react'

const Result = (props) => {
    const {text,CurrentIndex}=props
  return (
    <div {...props}>
      <h1 >{text}</h1>
      <p>{CurrentIndex} of 40</p>
      <button>Chack your Answer</button>
      <button >Try Again</button>
    </div>
  )
}

export default Result
