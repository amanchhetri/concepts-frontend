import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Define a callback function to increment count
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // No dependencies, so the callback is created only once

  return (
    <div>
      <ChildComponent onClick={increment} />
      <p>Count: {count}</p>
    </div>
  );
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Increment</button>;
}
