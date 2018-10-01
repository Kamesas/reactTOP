import React from "react";
import classes from "./answerItem.css";

const AnswerItem = props => {
  return <li className={classes.answerItem}>{props.answer.text}</li>;
};

export default AnswerItem;
