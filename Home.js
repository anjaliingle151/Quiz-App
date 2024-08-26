import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const startQuiz = () => {
    console.log('Starting quiz with name:', name); // Debug log
    if (name.trim()) {
      navigate('/quiz', { state: { userName: name } });
    } else {
      alert('Please enter your name');
    }
  };

  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={startQuiz} >
        Start Quiz
      </button>
    </div>
  );
}

export default Home;
