import React from "react";
import ReactDOM from "react-dom";
import Confetti from "react-confetti";

import "./styles.css";

//import the functional component that holds all the html-like details of how to render; i.e. this is the body of the callback function
import LessonLink from "./LessonLink.js";
import RandomApp from "./RandomApp.js";

//import the data model, i.e. the list of names you're going to feed to the callback function
import { learnBasicJS } from "./data.js";

//the callback function is where the functional component comes to life
//not sure of the PURPOSE of the initial argument is here, and why is it NOT namesForTags?
//ah, right, because we want it to be universal, able to accept any data model.  So we don't start talking about this specific namesForTags until we're down in the App and getting ready to latch on a .map
//time to test that with another data model, I think...

const renderLessonLink = (lesson) => (
  <LessonLink link={lesson.link} key={lesson.id} />
);

//and it's finally in this App function that we call for the new array, which is called nameTagElements
// ? is the new array often called blahBlahElements?
const App = () => {
  const lessonLinkElement = learnBasicJS.map(renderLessonLink);
  return (
    <div className="App">
      <h1 className="header">FreeCodeCamp Randomizer</h1>
      <RandomApp max={learnBasicJS.length} />
      {lessonLinkElement}
      {/*<Confetti />*/}
    </div>
  );
};
//ah ha! so here is the React magic! All I had to change, in order to generate a whole new set of name tags, was edit just that teeny bit of code on line 24, (and be sure to import that data model)

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
