import React, { Component } from "react";

class Easy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  Counter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  Minuser = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <button className="plusButton" onClick={this.Counter}>
          Counter
        </button>
        <button className="minusButton" onClick={this.Minuser}>
          Minuser
        </button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default Easy;
