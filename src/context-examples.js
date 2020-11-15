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

// EXAMPLE THREE
const ExampleThreeContext = React.createContext({});

const Parent = ({ children }) => {
  const [clickedIndex, setClickedIndex] = React.useState(-1);
  const context = React.useMemo(
    () => ({
      clickedIndex,
      onClick: (val) => setClickedIndex(val),
    }),
    [clickedIndex]
  );

  return (
    <ExampleThreeContext.Provider value={context}>
      <div>{children}</div>
    </ExampleThreeContext.Provider>
  );
};

const Child = ({ children }) => {
  const { clickedIndex, onClick } = React.useContext(ExampleThreeContext);
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child))
      return React.cloneElement(child, {
        isClicked: index === clickedIndex,
        onClick: () => onClick(index),
      });
  });
  return <div>{childrenWithProps}</div>;
};

const Content = ({ onClick, value, isClicked }) => {
  const color = isClicked ? 'red' : 'black';
  return (
    <button style={{ color }} onClick={onClick}>
      {value}
    </button>
  );
};

const ContextComponentExampleThree = () => {
  return (
    <Parent>
      <Child>
        <Content value={'east'} />
        <Content value={'west'} />
      </Child>
    </Parent>
  );
};

export {
  ContextComponentExampleOne,
  ContextComponentExampleTwo,
  ContextComponentExampleThree,
};
