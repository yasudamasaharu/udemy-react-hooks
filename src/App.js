import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)  

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)
  const reset = () => setCount(previousCount = 0)
 
  return (
    <>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <br/>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
      <br/>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
