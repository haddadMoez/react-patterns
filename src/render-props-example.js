import React from 'react';

const Toggle = (props) => {
  const { render } = props;
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

const RenderExampleExampleOne = () => {
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

export default RenderExampleExampleOne;
