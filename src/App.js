import CompoundComponentExample from './compound-component-example';
import {
  RenderPropsExampleOne,
  RenderPropsExampleTwo,
  RenderPropsExampleThree,
} from './render-props-examples';
import {
  ContextComponentExampleOne,
  ContextComponentExampleTwo,
  ContextComponentExampleThree,
} from './context-examples';
import UncontrolledComponentExample from './uncontrolled-component-example';
import './App.css';

function App() {
  return (
    <>
      <CompoundComponentExample />
      <ContextComponentExampleOne />
      <ContextComponentExampleTwo />
      <ContextComponentExampleThree />
      <RenderPropsExampleOne />
      <RenderPropsExampleTwo />
      <RenderPropsExampleThree />
      <UncontrolledComponentExample />
    </>
  );
}

export default App;
