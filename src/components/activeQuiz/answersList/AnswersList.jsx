import React from "react";
import classes from "./answersList.css";
import AnswerItem from "./answerItem/AnswerItem";

const AnswersLisr = props => {
  return (
    <ul className={classes.answerList}>
      {props.answers.map((answer, i) => (
        <AnswerItem key={i} answer={answer} />
      ))}
    </ul>
  );
};

export default AnswersLisr;
