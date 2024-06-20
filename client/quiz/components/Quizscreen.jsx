

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Quizscreen = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/quiz");
        setQuestions(res.data.questions);
        console.log(res.data.questions)
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    fetchQuestions();
  }, []);

  //console.log(questions[2][0]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption('');
    } else {
      setShowScore(true);
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div>
          <div className="question-section">
            <h2>{questions[currentQuestion].text}</h2>
          </div>
          <div className="options-section">
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="quiz-option"
                  id={`option-${index}`}
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                <label className="form-check-label" htmlFor={`option-${index}`}>
                  {option}
                </label>
              </div>
            ))}
          </div>
          <button className="btn btn-primary mt-3" onClick={handleNextQuestion}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};



