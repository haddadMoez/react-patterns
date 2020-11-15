import CompoundComponentExample from './compound-component-example';
import {
  ContextComponentExampleOne,
  ContextComponentExampleTwo,
} from './context-examples';
import './App.css';

function App() {
  return (
    <>
      <CompoundComponentExample />
      <ContextComponentExampleOne />
      <ContextComponentExampleTwo />
    </>
  );
}

export default App;
