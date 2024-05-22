import React, { useState } from 'react'
import Result from './Result';


const Quizsreen = () => {

  const [selectedOption, setSelectedOption] = useState([]);
  const [CurrentIndex, setCurrentIndex] = useState(0)
  const [marks, setMarks] = useState(0)
  const [des, setDes] = useState(false)

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
    {
      question: "Which CSS property controls the text size?",
      options: ["font-style", "text-size", "font-size", "text-style"],
      correctAnswer: "font-size"
    },
    {
      question: "What does CSS stand for?",
      options: ["Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "Inside which HTML element do we put the JavaScript?",
      options: ["<script>", "<js>", "<javascript>", "<code>"],
      correctAnswer: "<script>"
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
      correctAnswer: "alert('Hello World');"
    },
    {
      question: "How do you create a function in JavaScript?",
      options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "function => myFunction()"],
      correctAnswer: "function myFunction()"
    },
  ];

  const handleOptionClick = (option, correctAnsIndex) => {
    setDes(true)
    setSelectedOption([...selectedOption, option])
    const correctAns = quizData[correctAnsIndex]?.correctAnswer
    if (correctAns === option) {
      setMarks(marks + 1)
    }
    else {
      return null
    }
  };
  console.log(selectedOption)
  const handleNextClick = () => {
    setDes(false)
    setCurrentIndex(CurrentIndex + 1)
  };

  return (
    <div className='container-lg'>
      {CurrentIndex < quizData.length ? (
        <div className='row mx-auto w-96 pb-12 mt-24  border rounded'>
          <div className='col px-5'>
            <h1 className='text-center text-4xl pt-5 py-3'>QuizApp</h1>
            <p>Questions: {CurrentIndex + 1}/{quizData.length}</p>
            <h5 className='text-2xl py-3'>
              {quizData[CurrentIndex]?.question}
            </h5>
            <div class="">
              {quizData[CurrentIndex]?.options?.map((option, index) => (
                <div className=''>
                  <button
                    key={index}
                    disabled={des}
                    className={`border rounded  py-1 mt-5 text-xl w-full  ${selectedOption?.includes(option) ? 'bg-green-300' : des ? 'bg-slate-200 text-slate-500' : 'bg-blue-200'}`}
                    onClick={() => handleOptionClick(option, CurrentIndex)}
                  >
                    {option}
                  </button>
                </div>
              ))}
              <button
                disabled={!des}
                onClick={handleNextClick}
                className={`border rounded px-4 py-1 mt-5 text-xl ${des ? 'bg-blue-200' :'bg-slate-300 text-slate-500'}`}
              >
                {CurrentIndex === 7 ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Result text="Result" marks={marks} selectedOption={selectedOption} />
      )
      }
    </div >
  );
};

export default Quizsreen;
