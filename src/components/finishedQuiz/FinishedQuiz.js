import React from "react";
import "./FinishedQuiz.css";

const FinishedQuiz = (props) => {
  const style = { width: "100px", cursor: "pointer" };
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }
    return total;
  }, 0);
  return (
    <div className="FinishedQuiz">
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            "fa",
            props.results[quizItem.id] === "error" ? "fa-times" : "fa-check",
            props.results[quizItem.id],
          ];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(" ")}></i>
            </li>
          );
        })}
        {/* <li>
          <strong>1.</strong>&nbsp; How are you?
          <i className="fa fa-times error"></i>
        </li>
        <li>
          <strong>2.</strong>&nbsp; How old are you?
          <i className="fa fa-check success"></i>
        </li> */}
      </ul>
      <p>
        {successCount} out of {props.quiz.length}
      </p>
      <div>
        <button onClick={props.onRetry} style={style}>
          Repeat
        </button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
