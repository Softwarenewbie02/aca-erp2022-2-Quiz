import { QuizData as QuizData1 } from '../data/quizzdata';
import { quizData as QuizData2 } from '../data/Question 11-20';
import { Quizzes as QuizData3 } from '../data/Question21-30';
import { Quizlet as QuizData4 } from '../data/Question 31-40';
import { Quizztion as QuizData5 } from '../data/Question 41-50';
import { useState } from 'react';

// Combine all quiz data into one array
const combinedQuizData = [...QuizData1, ...QuizData2, ...QuizData3, ...QuizData4, ...QuizData5];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < combinedQuizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {showScore ? (
        <div className="text-center text-xl font-bold">
          You scored {score} out of {combinedQuizData.length}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-lg font-semibold">
            <span className="mr-2">Question {currentQuestion + 1}</span>/{combinedQuizData.length}
          </div>
          <div className="text-xl">{combinedQuizData[currentQuestion].Question}</div>
          <div className="space-y-2">
            {combinedQuizData[currentQuestion].Options.map((option: any, index: any) => (
              <button
                key={index}
                className="block w-full bg-gray-200 p-2 rounded hover:bg-gray-300"
                onClick={() => handleAnswerOptionClick(option === combinedQuizData[currentQuestion].Answer)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
