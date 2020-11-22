import React from 'react';

// Deeper the example ==> Deeper the complexity

// EXAMPLE ONE
const Toggle = ({ render }) => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div>
      {render({
        greeting: 'Hello World!',
        on: isActive,
        toggle: () => setIsActive(!isActive),
      })}
    </div>
  );
};

const RenderPropsExampleOne = () => {
  return (
    <>
      <Toggle
        render={({ greeting, on, toggle }) => (
          <div>
            {on && <h1>{greeting}</h1>}
            <button onClick={toggle}>Show / hide</button>
          </div>
        )}
      />
    </>
  );
};

// EXAMPLE TWO
const ToggleExampleTwo = ({ children }) => {
  const [isActive, setIsActive] = React.useState(false);
  return children({
    greeting: 'Hello World!',
    on: isActive,
    toggle: () => setIsActive(!isActive),
  });
};

const RenderPropsExampleTwo = () => {
  return (
    <>
      <ToggleExampleTwo>
        {({ greeting, on, toggle }) => (
          <div>
            {on && <h1>{greeting}</h1>}
            <button onClick={toggle}>Show / hide</button>
          </div>
        )}
      </ToggleExampleTwo>
    </>
  );
};

//EXAMPLE THREE
const Parent = ({ children }) => {
  const [clickedIndex, setClickedIndex] = React.useState(-1);
  return (
    <>
      {children({
        clickedIndex,
        onClick: setClickedIndex,
      })}
    </>
  );
};

const Child = ({ children }) => {
  return <>{children}</>;
};

const Content = ({ value, isClicked, onClick }) => {
  const color = isClicked ? 'green' : 'black';
  return (
    <button style={{ color }} onClick={onClick}>
      {value}
    </button>
  );
};

const RenderPropsExampleThree = () => {
  return (
    <Parent>
      {({ clickedIndex, onClick }) => (
        <Child>
          <Content
            isClicked={clickedIndex === 0}
            value={'three'}
            onClick={() => onClick(0)}
          />
          <Content
            isClicked={clickedIndex === 1}
            value={'four'}
            onClick={() => onClick(1)}
          />
        </Child>
      )}
    </Parent>
  );
};

export {
  RenderPropsExampleOne,
  RenderPropsExampleTwo,
  RenderPropsExampleThree,
};
