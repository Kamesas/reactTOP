import React from "react";
import classes from "./activeQuize.css";
import AnswersList from "./answersList/AnswersList";

const ActiveQuiz = props => {
  return (
    <div className={classes.activeQuize}>
      <p className={classes.QuizWrapper}>
        <span>
          <strong>1. </strong>
          Как дела?
        </span>

        <small>4 из 12</small>
      </p>

      <AnswersList answers={props.answers} />
    </div>
  );
};

export default ActiveQuiz;
