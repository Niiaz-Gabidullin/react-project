import React from "react";
import "./ActiveQuiz.css";
import AnswersList from "./AnswersList/AnswersList";

function ActiveQuiz(props) {
  return (
    <div className="ActiveQuiz">
      <p className="Question">
        <span>
          <strong>2.</strong>&nbsp; How are you?
        </span>

        <small>4 out of 12</small>
      </p>
      <AnswersList answers={props.answers}></AnswersList>
    </div>
  );
}

export default ActiveQuiz;
