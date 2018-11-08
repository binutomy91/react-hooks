import React from "react";
import ReactDOM from "react-dom";
import State from "./State";
// import Hook from "./Hook";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React sandbox</h1>
      <State />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//Hook is in alpha on React 16.7.0
