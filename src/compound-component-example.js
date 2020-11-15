import React from 'react';

const Parent = ({ children }) => {
  const [clickedIndex, setClickedIndex] = React.useState(-1);
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child))
      return React.cloneElement(child, {
        clickedIndex,
        onClick: (val) => setClickedIndex(val),
      });
  });
  return <div>{childrenWithProps}</div>;
};

const Child = ({ children, onClick, clickedIndex }) => {
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
  const color = isClicked ? 'blue' : 'black';
  return (
    <button style={{ color }} onClick={onClick}>
      {value}
    </button>
  );
};

const CompoundComponentExample = () => {
  return (
    <Parent>
      <Child>
        <Content value={'north'} />
        <Content value={'south'} />
      </Child>
    </Parent>
  );
};

export default CompoundComponentExample;
