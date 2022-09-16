import React from "react";
import "./FinishedQuiz.css";

const FinishedQuiz = (props) => {
  return (
    <div className="FinishedQuiz">
      <ul>
        <li>
          <strong>1.</strong>&nbsp; How are you?
          <i className="fa fa-times error"></i>
        </li>
        <li>
          <strong>2.</strong>&nbsp; How are you?
          <i className="fa fa-check success"></i>
        </li>
      </ul>
      <p>4 out of 10</p>
      <div>
        <button>repeat</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
