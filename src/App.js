import React, { useMemo } from 'react';

const ExpensiveComponent = () => {

// some expensive computation or heavy operation


const expensiveResult = useMemo(() => {
  // ... code for expensive computation

  let result = 0;
  // simulating an expensive computation
  for( let i = 0; i < 4090000000; i++) {
    result += i;
  }
  return result;//result of expensive computation
}, []); // array dependency


return (
  <div>
    <h1>Expensive Component</h1>
    <p> Result: {expensiveResult}</p>
  </div>
);



};

export default ExpensiveComponent;