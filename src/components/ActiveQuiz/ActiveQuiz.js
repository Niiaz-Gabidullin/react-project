import React from "react";
import "./ActiveQuiz.css";
import AnswersList from "./AnswersList/AnswersList";

function ActiveQuiz(props) {
  return (
    <div className="ActiveQuiz">
      <p className="Question">
        <span>
          <strong>2.</strong>&nbsp; {props.question}
        </span>

        <small>4 out of 12</small>
      </p>
      <AnswersList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      ></AnswersList>
    </div>
  );
}

export default ActiveQuiz;
