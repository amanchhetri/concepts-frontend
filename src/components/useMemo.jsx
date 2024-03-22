import React, { useMemo } from 'react';

function ExampleComponent({ a, b }) {
  const result = useMemo(() => {
    // Expensive computation
    return a + b;
  }, [a, b]); // Recalculate only if `a` or `b` changes

  return <div>Result: {result}</div>;
}
