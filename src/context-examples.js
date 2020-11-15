import React from 'react';

// Deeper the example ==> Deeper the complexity

// EXAMPLE ONE
const ExampleOneContext = React.createContext('default');

const ExampleOneParent = () => {
  return (
    <div>
      <ExampleOneChild />
    </div>
  );
};

const ExampleOneChild = () => {
  return (
    <ExampleOneContext.Consumer>
      {(value) => <h1>{value}</h1>}
    </ExampleOneContext.Consumer>
  );
};

const ContextComponentExampleOne = () => {
  return (
    <ExampleOneContext.Provider value="HelloWorld!">
      <ExampleOneParent />
    </ExampleOneContext.Provider>
  );
};

// EXAMPLE TWO
const ExampleTwoContext = React.createContext('default');

const ExampleTwoParent = () => {
  return (
    <div>
      <ExampleTwoChild />
    </div>
  );
};

const ExampleTwoChild = () => {
  const value = React.useContext(ExampleTwoContext);
  return <h1>{value}</h1>;
};

const ContextComponentExampleTwo = () => {
  return (
    <ExampleTwoContext.Provider value="HelloWorld-2!">
      <ExampleTwoParent />
    </ExampleTwoContext.Provider>
  );
};

export { ContextComponentExampleOne, ContextComponentExampleTwo };
