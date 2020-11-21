import CompoundComponentExample from './compound-component-example';
import RenderExampleExampleOne from './render-props-example';
import {
  ContextComponentExampleOne,
  ContextComponentExampleTwo,
  ContextComponentExampleThree,
} from './context-examples';
import './App.css';

function App() {
  return (
    <>
      <CompoundComponentExample />
      <ContextComponentExampleOne />
      <ContextComponentExampleTwo />
      <ContextComponentExampleThree />
      <RenderExampleExampleOne />
    </>
  );
}

export default App;
