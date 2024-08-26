import React from 'react';

function Question({ question, onAnswer }) {
  return (
    <div>
      <h2>{question.text}</h2>
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(option.isCorrect)}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default Question;
