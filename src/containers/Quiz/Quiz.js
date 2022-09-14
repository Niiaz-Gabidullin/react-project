import React, { Component } from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    quiz: [
      {
        answers: [
          { text: "question 1" },
          { text: "question 2" },
          { text: "question 3" },
          { text: "question 4" },
        ],
      },
    ],
  };
  render() {
    return (
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Answer all questions</h1>
          <ActiveQuiz answers={this.state.quiz[0].answers}></ActiveQuiz>
        </div>
      </div>
    );
  }
}

export default Quiz;
