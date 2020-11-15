import CompoundComponentExample from './compound-component-example';
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
    </>
  );
}

export default App;
