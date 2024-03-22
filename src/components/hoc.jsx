import React from 'react';

// Higher-Order Component
function withLogger(WrappedComponent) {
  return function WithLogger(props) {
    console.log('Logging props:', props);
    return <WrappedComponent {...props} />;
  };
}

// Usage
function MyComponent(props) {
  return <div>{props.message}</div>;
}

const EnhancedComponent = withLogger(MyComponent);

// Render EnhancedComponent
