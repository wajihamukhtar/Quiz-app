import React, { useState } from 'react'
import Result from './Result';


const Quizsreen = () => {
  const[CurrentIndex,setCurrentIndex]=useState(0)

  const quizData = [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "HyperText Markdown Language", "HyperLoop Machine Language", "HyperText Machine Language"],
      correctAnswer: "HyperText Markup Language"
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<br>", "<lb>", "<break>", "<newline>"],
      correctAnswer: "<br>"
    },
    {
      question: "Which property is used to change the background color in CSS?",
      options: ["color", "background-color", "bgcolor", "bg-color"],
      correctAnswer: "background-color"
    },
    // {
    //   question: "Which CSS property controls the text size?",
    //   options: ["font-style", "text-size", "font-size", "text-style"],
    //   correctAnswer: "font-size"
    // },
    // {
    //   question: "What does CSS stand for?",
    //   options: ["Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
    //   correctAnswer: "Cascading Style Sheets"
    // },
    // {
    //   question: "Inside which HTML element do we put the JavaScript?",
    //   options: ["<script>", "<js>", "<javascript>", "<code>"],
    //   correctAnswer: "<script>"
    // },
    // {
    //   question: "How do you write 'Hello World' in an alert box?",
    //   options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
    //   correctAnswer: "alert('Hello World');"
    // },
    // {
    //   question: "How do you create a function in JavaScript?",
    //   options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "function => myFunction()"],
    //   correctAnswer: "function myFunction()"
    // },
    // {
    //   question: "How do you call a function named 'myFunction'?",
    //   options: ["call myFunction()", "call function myFunction()", "myFunction()", "run myFunction()"],
    //   correctAnswer: "myFunction()"
    // }
  ];
  return (
    <div className='container-lg '>
      {CurrentIndex < 3 ?(

      <div className='row m-auto pb-12 mt-20 w-9/12 border rounded'>
        <div className='col pl-5'>
        <h1 className='text-center text-4xl pt-5 py-3'>QuizApp</h1>
        <p>Question {CurrentIndex}/{quizData.length}</p>
        <h5 className='text-2xl py-3'>
        {quizData[CurrentIndex].question}
        </h5>
      <div className='col w-2/3'>
      {quizData[CurrentIndex].options.map((option,i)=>(
     <button className='border rounded w-72 py-1 mx-1 mt-5 text-xl bg-blue-300'
     onClick={()=>{
      if ( quizData[CurrentIndex].correctAnswer=== option) {
        setCurrentIndex(CurrentIndex+1)
      }
      else if (quizData[CurrentIndex].correctAnswer!== option){
       setCurrentIndex()
      }
     }}
     >
      {option}
     </button>
      ))}
      </div>
      </div>
    </div>
      ):( <Result text="Result" CurrentIndex={CurrentIndex}/>)
    }
  </div>
  )
}

export default Quizsreen
