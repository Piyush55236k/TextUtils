import React, { useState } from 'react';

function CapsuleToggle() {
  const [isOn, setIsOn] = useState(false);

  const capsuleStyle = {
    width: 64,
    height: 32,
    borderRadius: 32,
    backgroundColor: isOn ? '#0d6efd' : '#6c757d',  // Blue when ON, gray when OFF
    cursor: 'pointer',
    position: 'relative',
    transition: 'background-color 0.3s ease',
  };

  const circleStyle = {
    width: 28,
    height: 28,
    borderRadius: '50%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 2,
    left: isOn ? 34 : 2,  // Moves circle left or right
    transition: 'left 0.3s ease',
  };

  function handleClick() {
    setIsOn(!isOn);

    if(isOn){
      
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
    else{
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }
  }

  return (
    <div style={capsuleStyle} onClick={handleClick}>
      <div style={circleStyle}></div>
    </div>
  );
}

export default CapsuleToggle;
