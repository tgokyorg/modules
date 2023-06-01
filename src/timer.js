import React, { useRef } from 'react';


const MyComponent = () => {

 const timerRef = useRef(null);

 const startTimer = () => {
  timerRef.current = setInterval(() => {
    console.log('Time running');
  }, 1);
 };


 const stopTimer = () => {
  clearInterval(timerRef.current);
 };

 return (
  <div>
    <button onClick={startTimer}>Start</button>
    <button onClick={stopTimer}>Stop</button>
  </div>
 );


};


export default MyComponent;