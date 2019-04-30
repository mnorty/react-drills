import React, { Component } from "react";
import "./App.css";
import Image from "./Components/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://bloximages.chicago2.vip.townnews.com/tribdem.com/content/tncms/assets/v3/editorial/1/01/101f424c-3c58-11e8-8976-cb75c12a6196/5acc08aab1bdf.image.jpg?resize=1200%2C1070"} />
      </div>
    );
  }
}

export default App;