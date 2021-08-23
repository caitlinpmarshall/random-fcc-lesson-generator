import React, { Component } from "react";

//randomizer should take a random number, within the length of the data model array, and choose THAT as the index of what to display

class LessonLink extends Component {
  state = { value: 0 };
  getRandomNumber = () => Math.floor(Math.random() * this.props.max);
  handleClick = () => {
    this.setState({ value: this.getRandomNumber() });
  };
  render() {
    return (
      <>
        <div className="App">
          <h1>{this.state.value}</h1>
          <button onClick={this.handleClick}>Get Random Number</button>
        </div>
        <div className="link">
          <h3 className="title">
            Your randomly selected lesson of the day is:
          </h3>
          {/* <h2 className="name">{props.link}</h2> */}
          <button>This isn't clickable yet. Refresh.</button>
        </div>
      </>
    );
  }
}

export default LessonLink;
