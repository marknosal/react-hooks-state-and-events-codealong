import React, {useState} from "react";

function Toggle() {
  const [isOn, setToggle] = useState(false)
  const color = isOn ? 'red' : 'white'


  function buttonPress() {
    setToggle((isOn) => !isOn)
  }

  return <button style={{background: color}} onClick={buttonPress}>{isOn ? 'On' : 'OFF'}</button>;
}

export default Toggle;


