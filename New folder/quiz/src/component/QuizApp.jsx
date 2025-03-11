import React, { useState } from "react";
import "./QuizApp.css";

const quizData = [
  {
    question: "Which player has scored the most double centuries in ODI cricket?",
    options: ["MS Dhoni", "Rohit Sharma", "Virat Kohli", "Sachin Tendulkar"],
    answer: "Rohit Sharma",
  },
  {
    question: "Who was the captain of Mumbai Indians in IPL 2024?",
    options: ["Suryakumar Yadav", "Jasprit Bumrah", "Rohit Sharma", "Hardik Pandya"],
    answer: "Hardik Pandya",
  },
  {
    question: "Who holds the record for the fastest fifty in IPL history?",
    options: ["KL Rahul" , "Yashasvi Jaiswal" , "AB de Villiers" , "Chris Gayle"],
    answer: "Yashasvi Jaiswal",
  },
  {
    question: "Against which team did Rohit Sharma score the fastest T20I century?",
    options: ["New Zealand", "Sri Lanka", "Australia", "England"],
    answer: "Sri Lanka",
  },

  {
    question: "What is Rohit Sharma’s highest score in ODIs?",
    options: ["209", "219", "264", "275"],
    answer: "264",
  },
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="app-container">
      <div className="quiz-container">
        <div className="quiz-box">
          {showResult ? (
            <div className="result-section">
              <h2>Quiz Completed!</h2>
              <p>Your Score: {score} / {quizData.length}</p>
              <button className="restart-btn" onClick={restartQuiz}>Restart Quiz</button>
            </div>
          ) : (
            <div>
              <h2 className="question">{quizData[currentQuestion].question}</h2>
              <div className="options">
                {quizData[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="option-btn"
                    onClick={() => handleAnswerClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
