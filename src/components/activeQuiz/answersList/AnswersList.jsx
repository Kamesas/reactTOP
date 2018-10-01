import React from "react";
import classes from "./answersList.css";
import AnswerItem from "./answerItem/AnswerItem";

const AnswersList = props => {
  return (
    <ul className={classes.answerList}>
      {props.answers.map((answer, i) => (
        <AnswerItem
          key={i}
          answer={answer}
          onAnswerClick={props.onAnswerClick}
        />
      ))}
    </ul>
  );
};

export default AnswersList;
