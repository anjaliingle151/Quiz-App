import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Question from '../component/Questionn';
import '../App.css';

const questions = [
  
    //Questions of the quiz
    
    {
      text: 'Who was the first Prime Minister of India?',
      options: [
        { text: ' Mahatma Gandhi', isCorrect: false },
        { text: 'Jawaharlal Nehru', isCorrect: true },
        { text: 'Sardar Vallabhbhai Patel', isCorrect: false },
        { text: 'Dr. B.R. Ambedkar', isCorrect: false }       //1
      ]
    },
    {
      text: 'Which Indian state is known as the "Land of Five Rivers"?',
      options: [
        { text: 'Rajasthan', isCorrect: false },
        { text: 'Gujarat', isCorrect: false },
        { text: 'Punjab', isCorrect: true },              //2
        { text: 'Kerala', isCorrect: false }
      ]
    },
    {
      text: 'Who is the first cricketer to score 100 international centuries?',
      options: [
        { text: 'Ricky Ponting', isCorrect: false },
        { text: 'M Brian Lara', isCorrect: false },
        { text: 'Sachin Tendulkar', isCorrect: true },
        { text: 'Virat Kohli', isCorrect: false }                                //3
      ]
    },
    {
      text: ' Which cricketer is known for hitting six sixes in an over in international cricket?',
      options: [
        { text: 'Chris Gayle', isCorrect: false },                         //4
        { text: 'Shahid Afridi', isCorrect: false },
        { text: 'Yuvraj Singh', isCorrect: true },
        { text: 'AB de Villiers', isCorrect: false }
      ]
    },
    {
      text: 'Which music composer duo is known as the "Brothers of Bollywood Music"?',
      options: [
        { text: 'Vishal-Shekhar', isCorrect: false },
        { text: 'Salim-Sulaiman', isCorrect: false },                          //5
        { text: ' Jatin-Lalit', isCorrect: true },
        { text: 'Shankar-Ehsaan-Loy', isCorrect: false }
      ]
    },
    {
      text: 'Which country won the UEFA European Championship in 2016?',
      options: [
        { text: ' France Lee', isCorrect: false },
        { text: 'Germany', isCorrect: false },
        { text: ' Portugal', isCorrect: true },
        { text: ' Spain', isCorrect: false }                               //6
      ]
    },
    {
      text: 'Which footballer holds the record for the most goals in a calendar year?',
      options: [
        { text: 'Cristiano Ronaldo', isCorrect: false },                                             //7
        { text: 'Lionel Messi', isCorrect: true },
        { text: 'Pelé', isCorrect: false },
        { text: 'Robert Lewandowski', isCorrect: false }
      ]
    },
    {
      text: 'Who was the first woman to win a Nobel Prize?',
      options: [
        { text: 'Marie Curie', isCorrect: true },
        { text: 'Florence Nightingale', isCorrect: false },                //8
        { text: 'Mother Teresa', isCorrect: false },
        { text: ' Rosalind Franklin', isCorrect: false }
      ]
    },
    {
      text: 'Who is known as the "Queen of Pop"?',
      options: [
        { text: 'Beyoncé', isCorrect: false },
        { text: 'Madonna', isCorrect: true },
        { text: 'Lady Gaga', isCorrect: false },                   //9
        { text: 'Rihanna', isCorrect: false }
      ]
    },
    {
      text: 'Who wrote the play "Hamlet"?',
      options: [
        { text: 'Charles Dickens', isCorrect: false },
        { text: 'Mark Twain', isCorrect: false },                                         //10
        { text: ' William Shakespeare', isCorrect: true },
        { text: 'George Bernard Shaw', isCorrect: false }
      ]
    },
    {
      text: 'Which movie features the famous line, "May the Force be with you"?',
      options: [
        { text: ' Star Trek', isCorrect: false },
        { text: 'The Matrix', isCorrect: false },                     //11
        { text: 'Star Wars', isCorrect: true },
        { text: ' The Lord of the Rings', isCorrect: false }
      ]
    },
   
  
];

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // Timer set to 60 seconds
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.userName || 'User'; // Receiving username

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsQuizFinished(true);
      navigate('/result', { state: { score, userName } });
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate, score, userName]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsQuizFinished(true);
      navigate('/result', { state: { score, userName } });
    }
  };

  return (
    <div>
      <div className="timer">Time Left: {timeLeft}s</div>
       {isQuizFinished ? (
        <div className="message">
          {timeLeft <= 0 ? 'Time is up!' : 'Quiz Finished!'}
        </div>
      ) :
       (
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default QuizPage;