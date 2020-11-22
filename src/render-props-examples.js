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

export { RenderPropsExampleOne, RenderPropsExampleTwo };
