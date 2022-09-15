import React, { Component } from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "what color is the sky?",
        rightAnswerId: 3,
        id: 1,
        answers: [
          { text: "red", id: 1 },
          { text: "yellow", id: 2 },
          { text: "blue", id: 3 },
          { text: "orange", id: 4 },
        ],
      },
      {
        question: "what color is the blood?",
        rightAnswerId: 1,
        id: 2,
        answers: [
          { text: "red", id: 1 },
          { text: "yellow", id: 2 },
          { text: "blue", id: 3 },
          { text: "orange", id: 4 },
        ],
      },
      {
        question: "what color is the sun?",
        rightAnswerId: 2,
        id: 3,
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
    const question = this.state.quiz[this.state.activeQuestion];
    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: { [answerId]: "succes" },
      });
      if (this.state.activeQuestion + 1 === this.state.quiz.length) {
        console.log("Finished");
      } else {
        this.setState({
          activeQuestion: this.state.activeQuestion + 1,
          answerState: null,
        });
      }
    } else {
      this.setState({
        answerState: { [answerId]: "error" },
      });
    }
  };
  //   isQuizFinishes() {
  //     return this.state.activeQuestion + 1 === this.state.quiz.length;
  //   }
  render() {
    return (
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Answer all questions</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          ></ActiveQuiz>
        </div>
      </div>
    );
  }
}

export default Quiz;
