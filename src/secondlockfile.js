import React, { useReducer } from 'react';



const countReducer = (state, action) => {
  switch( action.type) {
    case 'increment':
      return { count : state.count + 1};
      case 'decrement':
        return { count: state.count - 1};
        default:
          return state;
  }
};

// component using useReducer

function Counter() {
  const [ state, dispatch ] = useReducer(countReducer, { count: 0});

  const handleIncrement = () => {
    dispatch({ type: 'increment'});
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement'});
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
    </div>
  );
}

export default Counter;