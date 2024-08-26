import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, userName } = location.state || { score: 0, userName: 'User' };

  const retakeQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div>
      <h1>{userName}'s Score: {score}</h1>
      <button onClick={retakeQuiz}>Retake Quiz</button>
    </div>
  );
}

export default ResultPage;

