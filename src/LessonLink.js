import React from "react";

//randomizer should take a random number, within the length of the data model array, and choose THAT as the index of what to display

const LessonLink = (props) => (
  <div className="">
    <h3 className="title">Your randomly selected lesson of the day is:</h3>
    <h2 className="name">{props.link}</h2>
    <button>
      This isn't clickable yet. Refresh the page to generate new challenge.
    </button>
  </div>
);

export default LessonLink;
