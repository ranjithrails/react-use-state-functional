import React from "react";
import ReactDOM from "react-dom";
import Bulb from "./Bulb";

import "./styles.css";

// function Bulbs() {
//   const stateArray = useState(true);
//   return <div className={stateArray[0] ? "bulb-on" : "bulb-off"} />;
// }

function App() {
  return (
    <div className="App">
      <Bulb />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
