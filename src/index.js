import React from "react";
import ReactDOM from "react-dom";
import Bulb from "./Bulb";
import Things from "./Things";
import LoginForm from "./Loginform";
import "./styles.css";

// function Bulbs() {
//   const stateArray = useState(true);
//   return <div className={stateArray[0] ? "bulb-on" : "bulb-off"} />;
// }

function App() {
  return (
    <div className="App">
      <Bulb />
      <Things />
      <LoginForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
