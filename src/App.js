import CompoundComponentExample from './compound-component-example';
import {
  RenderPropsExampleOne,
  RenderPropsExampleTwo,
} from './render-props-examples';
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
      <RenderPropsExampleOne />
      <RenderPropsExampleTwo />
    </>
  );
}

export default App;
