import React, { useState } from 'react'

const Result = (props) => {
  const { text, marks, selectedOption } = props
  const [showAns, setShowAns] = useState(false)

  return (
    <div className='bg-blue-200 mx-auto w-96 pb-12 mt-24 text-center px-8  border rounded' {...props}>
      <h1 className='text-5xl py-3'>{text}</h1>
      <p className='text-2xl'>{marks} / 8</p>
      <button className='border rounded  py-1 mt-5 text-lg w-52 bg-black text-blue-200' onClick={() => setShowAns(true)} >Chack your Answer</button>
      <br />
      <button className='border rounded  py-1 mt-5 text-lg w-52  bg-black text-blue-200' onClick={() => window.location.href = '/'}>Try Again</button>
      <ul>
      {showAns && selectedOption?.map((ans, index) => (
       <li  className='list-decimal mt-2 pl-1 text-left'>
        <p key={index}>{ans}</p>
       </li>))}
       </ul>
    </div>
  )
}

export default Result
