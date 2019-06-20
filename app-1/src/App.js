import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state= {
    }
    foods:['SpaggettiEis', 'KartoffelPuffer', 'KurryWurst', 'StinkerKase']
  }

  handleChange(value) {
    this.setState({message:value})
  }

  render() {
    let foodsToDisplay = this.state.foods.map((elemnt,index) => {
      return <h2>{index}>{element}</h2>
    })
    return (
      <div className="App">
        <div>{foodsToDisplay}</div>
      </div>
    );
  }
}

export default App;
