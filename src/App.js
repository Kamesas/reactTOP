import React, { Component, Fragment } from "react";
import Car from "./components/car/Car";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="car">
          <Car carName="Ford" />
        </div>
      </Fragment>
    );
  }
}

export default App;
