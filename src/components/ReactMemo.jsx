import React from 'react';

// Functional component
function MyComponent({ value }) {
  return <div>{value}</div>;
}

// Memoized version of MyComponent
const MemoizedComponent = React.memo(MyComponent);

// Usage of MemoizedComponent
function App() {
  const data = "Hello, world!";
  return <MemoizedComponent value={data} />;
}

export default App;
