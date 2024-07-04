import { useState } from 'react'
import { QuizData } from '../data/quizzdata'

export default function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const [showScore, setShowScore] = useState<boolean>(false)
  const handleAnswerOptionClick = (isCorrect:boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QuizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
    return (
      <div>
        <h3>Quiz App</h3>
      </div>
    )
  }