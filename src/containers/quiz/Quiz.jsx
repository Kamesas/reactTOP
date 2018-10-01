import React, { Component } from "react";
import classes from "./quiz.css";
import ActiveQuiz from "../../components/activeQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "Какого цвета небо ?",
        rightAnswer: 2,
        id: 1,
        answers: [
          { text: "Зеленого", id: 1 },
          { text: "Синего", id: 2 },
          { text: "Красного", id: 3 },
          { text: "Черного", id: 4 }
        ]
      },
      {
        question: "Какого цвета земля ?",
        rightAnswer: 4,
        id: 2,
        answers: [
          { text: "Зеленого", id: 1 },
          { text: "Синего", id: 2 },
          { text: "Красного", id: 3 },
          { text: "Черного", id: 4 }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswer === answerId) {
      this.setState({ answerState: { [answerId]: "success" } });

      const timeout = window.setTimeout(() => {
        if (this.isQuizeFinished()) {
          console.log("The end");
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }
        window.clearInterval(timeout);
      }, 1000);
    } else {
      this.setState({ answerState: { [answerId]: "error" } });
    }
  };

  isQuizeFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
