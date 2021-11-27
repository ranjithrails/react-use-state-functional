import React, { useState } from "react";

/* Basic useState */
// const Bulb = () => {
//   const bulbState = useState(true);
//   console.log(bulbState);
//   return <div className={bulbState[0] ? "bulb-on" : "bulb-off"} />;
// };

/* array destructuring */
const Bulb = () => {
  const [bulbState, setBulBState] = useState(true);
  const onLight = () => {
    setBulBState(true);
  }
  const offLight = () => {
    setBulBState(false);
  }
  // const lightSwitch = () => {
  //   setBulBState(bulbState => !bulbState)
  // }

  const lightSwitch = () => {
    setBulBState(bulbState => {
      return !bulbState;
    })
  }

  return (
  <>
  {console.log("inside render")}
  <div className={bulbState ? "bulb-on" : "bulb-off"} />
  <button onClick={() => onLight()}>ON</button>
  <button onClick={() => offLight()}>OFF</button>
  <button onClick={lightSwitch}>Switch</button>
  </>
  );
};

export default Bulb;
