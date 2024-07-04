import { QuizData } from '../data/quizzdata'
import { quizData } from '../data/Question 11-20'
import { Quizzes } from '../data/Question21-30'
import { Quizlet } from '../data/Question 31-40'
import { Quizztion } from '../data/Question 41-50'
import { useState } from 'react'

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
 
