import React, { useState, useLayoutEffect} from 'react';


const ResizeDetector = () => {


  const [ windowSize, setWindowSize ] = useState({ width: 0, height: 0});

   useLayoutEffect(() => {
     const handleResize = () => {
      setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
      });
     };


     // Attach an event listener
     window.addEventListener('resize', handleResize);

    // clean up the event listener

    return () => {
      window.removeEventListener('resize', handleResize);
    };

   }, []); // empty dependency array

   return (
    <div>
      <h1>Window Size:</h1>
      <p> Width: {windowSize.width}px</p>
      <p> Height: {windowSize.height}px</p>
    </div>
   );
 



};


export default ResizeDetector;