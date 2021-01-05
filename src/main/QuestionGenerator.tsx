import React, { useState } from "react";

export default function QuestionGenerator({ arrayOfQuestions }) {
  const [isComplete, setisComplete] = useState(false);
  const [usedQuestions, setusedQuestions] = useState([] as any);
  const [currentQuestion, setcurrentQuestion] = useState(
    arrayOfQuestions[Math.floor(Math.random() * arrayOfQuestions.length)]
  );

  const generateRandom = (newUsedQuestions) => {
    let difference = arrayOfQuestions.filter(
      (x) => !newUsedQuestions.includes(x)
    );
    const newRandom = Math.floor(Math.random() * difference.length);
    return difference[newRandom];
  };

  const nextQuestion = () => {
    // set current question into used questions
    const newUsedQuestions = [...usedQuestions];
    newUsedQuestions.push(currentQuestion);
    setusedQuestions(newUsedQuestions);

    // randomly pick another question
    const newQuestion = generateRandom(newUsedQuestions);
    if (newQuestion) {
      setcurrentQuestion(newQuestion);
    }
    if (newUsedQuestions.length + 1 == arrayOfQuestions.length) {
      setisComplete(true);
    }
  };

  return (
    <div className="questionCard">
      {currentQuestion}
      <div>
        <button
          className="nextButton"
          disabled={isComplete}
          onClick={nextQuestion}
        >
          Next
        </button>
      </div>
      {isComplete && (
        <div style={{ marginTop: "10px" }}>
          You have reached the end of the questions
        </div>
      )}
    </div>
  );
}
