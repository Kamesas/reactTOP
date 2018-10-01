import React from "react";
import classes from "./activeQuize.css";
import AnswersList from "./answersList/AnswersList";

const ActiveQuiz = props => {
  return (
    <div className={classes.activeQuize}>
      <p className={classes.QuizWrapper}>
        <span>
          <strong>{props.answerNumber}. </strong>
          {props.question}
        </span>

        <small>
          {props.answerNumber} из {props.quizLength}
        </small>
      </p>

      <AnswersList
        state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  );
};

export default ActiveQuiz;
