import React, { Component } from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: "what color is the sky?",
        rightAnswerId: 2,
        answers: [
          { text: "red", id: 1 },
          { text: "yellow", id: 2 },
          { text: "blue", id: 3 },
          { text: "orange", id: 4 },
        ],
      },
    ],
  };
  onAnswerClickHandler = (answerId) => {
    console.log(answerId);
  };
  render() {
    return (
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Answer all questions</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          ></ActiveQuiz>
        </div>
      </div>
    );
  }
}

export default Quiz;
