import * as React from "react";
import { useState } from "react";
// routing, etc.
import questions from "../constants/questions";
import QuestionGenerator from "./QuestionGenerator";

import "./App.scss";

export default function App() {
  //   console.log(questions.split("\n"));

  const [arrayOfQuestions, setarrayOfQuestions] = useState(
    questions.split("\n").slice(0, -1)
  );

  console.log(arrayOfQuestions);

  return (
    <div>
      <p>One person asks the following question...</p>
      <h1>Who's most likely to</h1>
      <QuestionGenerator arrayOfQuestions={arrayOfQuestions} />
      <p>They count down 3,2,1 then everyone points to someone in the room</p>
    </div>
  );
}
