import React, { useState } from 'react';

// Error boundary component
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  // Error boundary function
  const handleOnError = (error, info) => {
    console.error('Error:', error);
    console.error('Error Info:', info);
    setHasError(true);
  };

  // Render fallback UI if an error occurs
  if (hasError) {
    return <div>Something went wrong!</div>;
  }

  // Render children if no error occurs
  return children;
};

// Example component that may throw an error
const ComponentThatMightThrowError = () => {
  // Simulating an error
  throw new Error('Error occurred!');
  
  return <div>This component may throw an error.</div>;
};

// App component
const App = () => {
  return (
    <ErrorBoundary>
      <ComponentThatMightThrowError />
    </ErrorBoundary>
  );
};

export default App;
