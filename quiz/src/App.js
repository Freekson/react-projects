import React from "react";
import "./index.scss";

const questions = [
  {
    title: "React is ... ?",
    variants: ["library", "framework", "application"],
    correct: 0,
  },
  {
    title: "A component is...",
    variants: [
      "application",
      "part of an application or page",
      "something I don't know what is",
    ],
    correct: 1,
  },
  {
    title: "What is JSX?",
    variants: [
      "This is plain HTML",
      "This is a function",
      "This is the same HTML, but with the ability to execute JS code",
    ],
    correct: 2,
  },
  {
    title: "What is useState?",
    variants: [
      "This is a function to store component data",
      "This is a global state",
      "This is when no one needs you",
    ],
    correct: 1,
  },
];

function Result({ correct, restart }) {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="congratulations"
      />
      <h2>
        You guessed {correct} answers out of {questions.length}
      </h2>
      <button onClick={restart}>Try again</button>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li key={text} onClick={() => onClickVariant(index)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [corret, setCorrect] = React.useState(0);

  const question = questions[step];

  function onClickVariant(index) {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(corret + 1);
    }
  }

  function restart() {
    setStep(0);
    setCorrect(0);
  }

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={corret} restart={restart} />
      )}
    </div>
  );
}

export default App;
