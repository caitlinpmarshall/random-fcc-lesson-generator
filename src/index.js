import React from "react";
import ReactDOM from "react-dom";
import Confetti from "react-confetti";

import "./styles.css";

import LessonLink from "./LessonLink.js";
import RandomApp from "./RandomApp.js";

import { learnBasicJS } from "./data.js";

//tried putting filterId here, but understandably, it's asking, what props? How do I know to go look at RandomApp?
const filterId = (lesson) => (lesson.id = props.state.value);

const renderLessonLink = (lesson) => (
  <LessonLink link={lesson.link} key={lesson.id} />
);

const App = () => {
  const lessonLinkElement = learnBasicJS.map(renderLessonLink);
  const randomId = learnBasicJS.filter(filterId);

  return (
    <div className="App">
      <h1 className="header">FreeCodeCamp Randomizer</h1>
      <RandomApp max={learnBasicJS.length} />
      {lessonLinkElement}
      {randomId}
      {/*<Confetti />*/}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
