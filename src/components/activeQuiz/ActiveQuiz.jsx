import React from "react";
import classes from "./activeQuize.css";

const ActiveQuiz = () => {
  return (
    <div className={classes.activeQuize}>
      <p className={classes.QuizWrapper}>
        <span>
          <strong>1. </strong>
          Как дела?
        </span>

        <small>4 из 12</small>
      </p>
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
      </ul>
    </div>
  );
};

export default ActiveQuiz;
