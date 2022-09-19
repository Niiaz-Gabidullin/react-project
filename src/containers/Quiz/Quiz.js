import React, { Component } from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/finishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
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
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }
    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;
    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }
      this.setState({
        answerState: { [answerId]: "success" },
        results,
      });
      const timeout = window.setTimeout(() => {
        if (this.state.activeQuestion + 1 === this.state.quiz.length) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = "error";
      this.setState({
        answerState: { [answerId]: "error" },
        results,
      });
    }
  };
  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    });
  };

  //   isQuizFinishes() {
  //     return this.state.activeQuestion + 1 === this.state.quiz.length;
  //   }
  render() {
    return (
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Answer all questions</h1>
          {this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
            ></FinishedQuiz>
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            ></ActiveQuiz>
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
